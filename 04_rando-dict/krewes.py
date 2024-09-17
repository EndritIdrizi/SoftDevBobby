"""
Endrit Idrizi
JED
SoftDev
K04 -- Python dictionaries and random selection/Python/To access a random value in a dictionary one must be able to acess a random key and
random values within any lists that may lie inside that key
2024-09-13
time spent: <elapsed time in hours, rounded to nearest tenth>
"""

import random

krewes = {
           4: [ 
        'DUA','TAWAB','EVA','JACK','VICTOR','EVAN','JASON','COLYI','IVAN','TANZEEM',
        'TAHMIM','STANLEY','LEON','NAOMI','NIA','ANASTASIA','JADY','BRIAN','JACOB',
        'ALEX','CHONGTIAN','DANNY','MARCO','ABIDUR','ANKITA','ANDY','ETHAN','AMANDA',
        'AIDAN','LINDA','QIANJUN','JIAYING','KISHI'
        ],
           5: [ 
                'ADITYA','MARGIE','RACHEL','ALEXANDER','ZIYAD','DANNY','ENDRIT','CADEN',
                'VEDANT','SUHANA','KYLE','KEVIN','RAYMOND','CHRISTOPHER','JONATHAN','SASHA',
                'NAFIYU','TIM','WILL','DANIEL','BENJAMIN','CLAIRE','CHLOE','STELLA','TRACY',
                'JESSICA','JACKIE','WEN YUAN','YINWEI','TIFFANY','JAYDEN DANIEL','PRINCEDEN' 
              ]
         }
x = krewes.get(int(random.randint(4,5))) # selecting a random key

randomName = x[random.randint(0,len(x)-1)] # selecting a random value from the selected array and printing it

print("The random name selected is...")
print(randomName)