'''
Endrit Idrizi
JED
SoftDev
K05 -- <Title/Topic/Summary... (Aim for concision, brevity, CLARITY. Write to your future self...)>
2024-09-17
time spent: <elapsed time in hours, rounded to nearest tenth>

'''
file = open('krewes.txt', 'r')
readString = file.readline()

dictionary = {4:{}, 5: {}}

nameList = readString.split('@@@')
for item in nameList:
    PDD = item.split('$$$')
    if PDD[0]