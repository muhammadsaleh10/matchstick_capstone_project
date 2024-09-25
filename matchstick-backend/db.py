from flask_mysqldb import MySQL

mysql = MySQL()

def init_db(app):
    app.config['MYSQL_DATABASE_USER'] = 'root'
    app.config['MYSQL_DATABASE_PASSWORD'] = 'Matrimoney1@'  # Replace with your MySQL root password
    app.config['MYSQL_DATABASE_DB'] = 'matchstickDB'
    app.config['MYSQL_DATABASE_HOST'] = 'localhost'
    mysql.init_app(app)

def get_db():
    return mysql.connect()