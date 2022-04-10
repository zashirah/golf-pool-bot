from awswrangler import s3 as wrs3
# import boto3
# import dataframe_image74 as dfi
import json
import os
import pandas as pd
import requests


bot_id = os.environ['bot_id'] # 'a4eb7d9d3e39f026937dd7c6ff'
access_token = os.environ['access_token'] # 'h1XFskAcjttvlAv3TMcLrF6BkdKtRyES5vGbFMR2'
# image_url = os.environ['image_url'] # 'https://image.groupme.com/pictures'
# image_name = 's3://golf-bot-leaderboard/TheMasters/leaderboard-out.jpeg'


def import_leaderboard():
  # session = boto3.session.Session()
  leaderboard_file = sorted(
    wrs3
    .list_objects(
      's3://golf-bot-leaderboard/TheMasters/leaderboard',
      # boto3_session=session
    ),
    reverse=True
  )[0]

  leaderboard = wrs3.read_csv(leaderboard_file)

  return leaderboard


def import_picks():
  path = 's3://golf-bot-leaderboard/TheMasters/TheMastersPicks.csv'

  picks = wrs3.read_csv(path)

  return picks
  


def import_tables():
  leaderboard = import_leaderboard()

  picks = import_picks()

  return leaderboard, picks


def merge_tables(leaderboard, picks):
  for col in ['tier1', 'tier2', 'tier3', 'tier4']:
    print(col)
    picks = pd.merge(
      right=leaderboard[['name', 'total', 'make_cut']], 
      left=picks, 
      how='left',
      right_on='name',
      left_on=col,
    )
    print(picks.columns)

    picks.rename(
      columns= {
        'total':f'{col}_total', 
        'make_cut': f'{col}_make_cut'
      }, 
      inplace=True
    )

    picks.drop(columns='name', inplace=True)

    print(picks.columns)

  print(picks)

  return picks


def create_output_table(picks):
  picks_totals = []
  for row in range(len(picks)):
    min_scores = [float('inf'), float('inf')]
    for col in ['tier1', 'tier2', 'tier3', 'tier4']:
      if picks[f'{col}_make_cut'][row]:
        print(f"make cut with score of {picks[f'{col}_total'][row]}")
        if picks[f'{col}_total'][row] < min_scores[0]:
          min_scores[0] = picks[f'{col}_total'][row]
        
        min_scores = sorted(min_scores, reverse=True)

    picks_total = sum(min_scores)

    picks_totals.append(picks_total)

  picks['picks_total'] = picks_totals
  # picks.to_csv('picks.csv')

  df = picks[['selection_id', 'picks_total']]
  df.sort_values(by='picks_total', inplace=True)
  df.set_index('selection_id',inplace=True)
    
  print(df)

  return df


# def create_image(df):
#   dfi.export(df, image_name)


# def create_image_resource():
#   data = open(image_name, 'rb').read()
#   headers = {
#     'X-Access-Token': access_token,
#     'Content-Type': 'image/jpeg'
#   }
#   response = requests.post(
#     url=image_url,
#     data=data, 
#     headers=headers
#   )

#   response = response.content.decode('utf8')

#   response = json.loads(response)

#   return response


def send_leaderboard_to_groupme(string_df):
  body = {  
    'text': string_df,
    'bot_id': bot_id,
    # 'attachments': [
    #   {
    #     'type': 'image',
    #     'url': response['payload']['url']
    #   }
    # ]
  }

  body = json.dumps(body)

  response = requests.post(data=body, url='https://api.groupme.com/v3/bots/post')

  print(response.status_code)


def lambda_handler(event, context):
  leaderboard, picks = import_tables()
  picks = merge_tables(leaderboard, picks)
  df = create_output_table(picks)
  # create_image(df)
  # response = create_image_resource()
  # send_leaderboard_to_groupme(response)
  send_leaderboard_to_groupme(df.to_string())


