"""
The below code will remove the invalid dates from the songData.json file and new contents will be written in songData_valid.json.
"""

import json

f = open("songData.json")
json_file = f.read()
song_list = json.loads(json_file)

valid_index = []

# The valid_index list will store all the valid indices, and only those would be considered for display.
for i in range(len(song_list)):
    if int(song_list[i]['songReleaseDate'][6:]) > 1980:
        valid_index.append(i)

final_json_list = []
for i in valid_index:
    final_json_list.append(song_list[i])

# Everytime this program is run, the file songData_valid will be overwritten, so in case of updates in the original json file, this would help.
with open("songData_valid.json" , "w") as json_file:
    json.dump(final_json_list,json_file)