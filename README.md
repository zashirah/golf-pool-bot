# golf-pool-bot

## Description



## Setting up dev environment to scrape the leaderboard
1. Clone down repo
2. `cd` into src
3. run `nerdctl build -t golf-pool-bot:0.0.1 .`
4. run `nerdctl run -p 8888:8888 -v $PWD:/app -it --rm golf-pool-bot:0.0.1`
5. navigate to localhost:8888
6. copy the token from your terminal and paste it in your browser 
