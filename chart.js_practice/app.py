from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html', __type__ = 'radar', __label_array__ = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], __label__ = 'nice',__data_array__ = [3,17,2,9,12,5])

if __name__ == '__main__':
    app.debug = True
    app.run()
