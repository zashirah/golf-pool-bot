const csv = require("csv-parser");
const fs = require("fs");

function Scores({ scores }) {
  const tableHeaders = Object.keys(scores[0]); //pull table header names from first result keys
  return (
    <main>
      <h1>Raw Scores</h1>
      <table>
        <tr>
          {tableHeaders.map((header) => {
            return <th>{header}</th>;
          })}
        </tr>
        {scores.map((score, i) => {
          return (
            <tr>
              {tableHeaders.map((header) => {
                return <td>{score[header]}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </main>
  );
}

export async function getServerSideProps(context) {
  const scores = [];
  const stream = fs.createReadStream("Valspar_Championship.csv");

  await new Promise((resolve, reject) => {
    stream
      .pipe(csv())
      .on("data", (data) => scores.push(data))
      .on("end", () => {
        resolve();
      });
  });

  return {
    props: { scores }, // will be passed to the page component as props
  };
}

export default Scores;
