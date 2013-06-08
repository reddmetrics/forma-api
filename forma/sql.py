import datetime

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


SQL_TEMPLATE = 'SELECT %s FROM %s WHERE %s GROUP BY %s ORDER BY %s'

def parse_levels(levels_dict):
    levels = levels_dict.keys()
    levels.sort()
    return [i for i in levels]

def id_strs(levels):
    """Given a list of levels, return list of id strings a la ["id_0"].

       >>> id_strs([1,2])
       ['id_1', 'id_2']"""
    return ["id_%i" % n for n in levels]

def name_strs(levels):
    """Given a list of levels, return list of name strings a la ["name_0"].

       >>> name_strs([1,2])
       ['name_1', 'name_2']"""
    return ["name_%i" % n for n in levels]

def date_filter(dates_dict):
    """Given a dates dictionary, return a date filter clause. Returns empty string
       dates_dict is None.

       >>> date_filter({"start":"2006-01-01", "end":"2006-12-31"})
       'date >= 2006-01-01 AND date <= 2006-12-31'"""
    if not dates_dict:
        return ""
    else:
        start, end = dates_dict["start"], dates_dict["end"]
        if not end:
            end = datetime.date.today().strftime("%Y-%m-%d")
        if start <= end:
            return "date >= %s AND date <= %s" % (start, end)
        else:
            raise ValueError("Start must be before end")

def groupby_str(levels):
    """Given list of levels, returns string of id and name fields
       for use with GROUP BY.

       >>> groupby_str([1,2,3])
       'iso, id_1, id_2, id_3, name_1, name_2, name_3'"""
    ids = id_strs(levels)
    names = name_strs(levels)
    return "iso, %s, %s" % (", ".join(ids), ", ".join (names))
