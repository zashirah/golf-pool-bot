from doctest import script_from_examples
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def set_chrome_options() -> None:
    """Sets chrome options for Selenium.
    Chrome options for headless browser is enabled.
    """
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_prefs = {}
    chrome_options.experimental_options["prefs"] = chrome_prefs
    chrome_prefs["profile.default_content_settings"] = {"images": 2}
    return chrome_options

chrome_options = set_chrome_options()
driver = webdriver.Chrome(options=chrome_options)

def connect_to_url(url):
    return driver.get(url)


def get_scoreboard_table():
    return driver.find_elements(By.TAG_NAME, "table")[1]
    

def get_table_rows(table):
    return table.find_elements(By.TAG_NAME, 'tr')


def get_scoreboard_dict(trs):
  scoreboard = []

  for tr in trs:
      if tr.get_attribute('class') not in ['shsTableTtlRow', 'shsTableSubttlRow', 'shsColTtlRow']:
          player_score = {}
          tds = tr.find_elements(By.TAG_NAME, 'td')
          
          player_score['name'] = tds[1].text
          player_score['round1'] = tds[2].text
          player_score['round2'] = tds[3].text
          player_score['round3'] = tds[4].text
          player_score['round4'] = tds[5].text
          player_score['make_cut'] = tds[6].text not in ['MC', 'WD']
      
          scoreboard.append(player_score)
          
  return scoreboard


def convert_scoreboard_to_df(scoreboard):
  df = pd.DataFrame(scoreboard)
  df.set_index('name', inplace=True)

  return df


def convert_to_plus_minus(score: str, par: int):
    return int(score) - par


def convert_even():
    return 0


def clean_up_distributor(score, par):
    if isinstance(score, int):
      return score
    elif score == 'E':
      return convert_even()
    elif score == '-':
      return 0
    elif '+' in score or '-' in score:
      return int(score)
    elif score == ' ':
      return 0
    elif isinstance(score, str):
      return convert_to_plus_minus(score, par)
    else:
      print('method not implemented')


def update_columns(df, par):
    for col in df.columns:
        df[col] = df[col].apply(lambda x: clean_up_distributor(x, par))
    return df
        

def create_total_col(df):
    df['total'] = df['round1']+df['round2']+df['round3']+df['round4']
    
    return df


def clean_df(df, par):
  df = update_columns(df, par)
  df = create_total_col(df)

  return df


def main():
  par = 72

  url = 'https://scores.nbcsports.com/golf/final.asp?tour=PGA'
  connect_to_url(url)
  print('connecting to url')

  table = get_scoreboard_table()
  print('get table data')

  trs = get_table_rows(table)
  print('get table rows')

  scoreboard = get_scoreboard_dict(trs)
  print('get scoreboard')

  df = convert_scoreboard_to_df(scoreboard)
  print(df)

  df = clean_df(df, par)
  print(f'cleaned {df}')

  df.to_csv('TheMasters.csv')
  print('written to csv')

if __name__ == '__main__':
  main()





