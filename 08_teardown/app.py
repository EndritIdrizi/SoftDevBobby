'''Endrit Idrizi
JED
SoftDev
K08 -- Teardown/Printing to HTML/ Using flask to print to html 
2024-09-23
time spent: 0.5 hours'''

'''
DISCO:
Printing to HTML renders the page as HTML, allows for the addition of tags

QCC:
0. Why "Don't speak cheese"? What does this mean?
1. 
2. 
3. 
4. 
5. 
 ...

INVESTIGATIVE APPROACH:
< I learned that you can use flask to make an HTML webpage from python>
'''


from flask import Flask

app = Flask(__name__)                    # Q0: Where have you seen similar syntax in other langs?
                                         #Java, also other languages, this is usually the simplest way for variable assignment

@app.route("/")                          # Q1: What points of reference do you have for meaning of '/'?  File system
def hello_world():
    print(__name__)                      # Q2: Where will this print to? Q3: What will it print? TO the console of the site, prints the name of the app
    return "No hablo queso!"             # Q4: Will this appear anywhere? How u know? It appears as HTML. I can see it on the site. 

app.run()                                # Q5: Where have you seen similar constructs in other languages? Java



