'''
Model:

SELECT iso, id_0, id_1, id_2, name_0, name_1, name_2, sum(alerts) 
FROM forma 
WHERE iso = 'IDN' AND id_2 = 5 AND date >= '2006-01-01' AND date <= '2006-12-31'
GROUP BY iso, id_0, id_1, id_2, name_0, name_1, name_2
'''

# bad assumptions:

# there'll be dates
# there'll be an end date
# start and end will be sequential
# there'll be anything but level 0



# sample
url = "/forma/alerts/count/IDN/all/5?range=2006-01-01,2006-12-31"

params = {"table":"forma",
          "iso":"IDN",
          "levels":{1:"all", 2:5},
          "dates":{"start":"2006-01-01", 
                   "end":"2006-12-31"}}

url1 = "/forma/alerts/count/IDN/5/5?range=2006-01-01,2006-12-31"

params1 = {"table":"forma",
          "iso":"IDN",
          "levels":{1:5, 2:5},
          "dates":{"start":"2006-01-01", 
                   "end":"2006-12-31"}}

