# golf-pool-bot

## Description
This app will scrape the leaderboard of the current golf tournament, merge them with the each person's selections, and write the pick'em leaderboard to GroupMe.

## Getting player selections
Currently, getting the person's selections is manual. The names need to match the official names from the pga tour. 
For local development, the names need to stored in a .csv file named `<TournamentName>Picks.csv` (e.g., `TheMasters.csv`)
In production, this file needs to be loaded to s3 (bucket = `golf-bot-leaderboard`, key = `<TournamentName>`)


## Getting the leaderboard

#### Setting up dev environment to scrape the leaderboard
1. Clone down repo
2. `cd` into `selenium-dev`
3. run `nerdctl build -t golf-pool-bot:0.0.1 .`
4. run `nerdctl run -p 8888:8888 -v $PWD:/app -it --rm golf-pool-bot:0.0.1`
5. navigate to `localhost:8888`
6. copy the token from your terminal and paste it in your browser 


#### Running web scraper app locally
1. Clone down repo
2. `cd` into `selenium-dev`
3. run `nerdctl build -t golf-pool-bot:0.0.1 .`
4. run `nerdctl run -p 8888:8888 -v $PWD:/app -it --rm golf-pool-bot:0.0.1`
5. in another terminal window run `nerdctl exec -it <container id> bash`
6. run `python app.py`


#### Deploying to AWS as lambda container image
1. Clone down repo
2. `cd` into `get-leaderboard-lambda`
3. build image: `nerdctl build -t golf-pool-bot:lambda-base-0.0.1 .`
4. log into aws: `aws --profile golf-bot-gm ecr get-login-password --region us-east-1 | nerdctl login --username AWS --password-stdin 010215014453.dkr.ecr.us-east-1.amazonaws.com`
5. tag image: `nerdctl tag golf-pool-bot:lambda-base-0.0.1 010215014453.dkr.ecr.us-east-1.amazonaws.com/python-selenium:get-leaderboard`
6. push image: `nerdctl push 010215014453.dkr.ecr.us-east-1.amazonaws.com/python-selenium:get-leaderboard`


Notes: 
- The lambda is scheduled with a Cloud Watch Event set to run every hour when active
- The lambda rights a .csv file to s3. This triggers the send pick`em leaderboard lambda


## Sending the pick`em leaderboard

#### Setting up the dev environment 
not done

#### Deploying to AWS as lambda container image
1. Clone down repo
2. `cd` into `get-leaderboard-lambda`
3. build image: `nerdctl build -t golf-pool-bot:lambda-base-0.0.1 .`
4. log into aws: `aws --profile golf-bot-gm ecr get-login-password --region us-east-1 | nerdctl login --username AWS --password-stdin 010215014453.dkr.ecr.us-east-1.amazonaws.com`
5. tag image: `nerdctl tag golf-pool-bot:lambda-base-0.0.1 010215014453.dkr.ecr.us-east-1.amazonaws.com/python-selenium:get-leaderboard`
6. push image: `nerdctl push 010215014453.dkr.ecr.us-east-1.amazonaws.com/python-selenium:get-leaderboard`


Notes: 
- This lambda is triggered when a file is written to the s3 bucket. This needs to be fixed a bit
- want to create a "trigger" folder and write a .done file to trigger the lambda
- or use sns/sqs. I'm not as familiar with using these though