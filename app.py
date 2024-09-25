from flask import Flask
from flask_cors import CORS
from db import init_db
from routes import user_routes

app = Flask(__name__)
CORS(app)

# Database Initialization
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Matrimoney1@'  # Replace with your MySQL root password
app.config['MYSQL_DATABASE_DB'] = 'matchstickDB'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
init_db(app)

# Register blueprints
app.register_blueprint(user_routes, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)