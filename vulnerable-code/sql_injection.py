# Exemplo vulnerável de SQL Injection
import sqlite3
from flask import request, Flask

app = Flask(__name__)

@app.route('/login')
def login():
    username = request.args.get('username')
    password = request.args.get('password')
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    # Use parâmetros para evitar SQL Injection
    query = "SELECT * FROM users WHERE username = ? AND password = ?"
    cursor.execute(query, (username, password))
    result = cursor.fetchall()
    return str(result)
