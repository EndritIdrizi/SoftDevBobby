import csv
import random
with open('occupations.csv', newline='') as csvfile:
    occupations = csv.reader(csvfile)
    dict = {}
    for row in occupations:
        #print(row)
        if (row[0] != 'Job Class') and (row[0] != 'Total'):
            dict.update({row[0]:float(row[1])})
    print(dict);
    
def randomSelection():
    
    