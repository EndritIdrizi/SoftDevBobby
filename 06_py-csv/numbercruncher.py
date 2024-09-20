'''
Endrit Idrizi, Jayden Zhang
JED
SoftDev
K06 -- Divine your destiny/ Reading CSV and weighted distribution/ using open to read a csv file, turning it into a dictionary, and then using a random number generator to get a specific spot
2024-9-19
time spent: 1 hour
'''
import csv
import random
with open('occupations.csv', newline='') as csvfile:
    occupations = csv.reader(csvfile)
    dict = {}
    for row in occupations:
        #print(row)
        if (row[0] != 'Job Class') and (row[0] != 'Total'):
            dict.update({row[0]:float(row[1])})
    #print(dict);
    
def randomSelection():
    x = random.uniform(0.0,99.8)
    print(x)
    for key,value in dict.items():
        x = x - value;
        if x <= 0:
            print(key)
            break
    
randomSelection()
    