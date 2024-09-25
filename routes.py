from flask import Blueprint, request, jsonify
from db import get_db

user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    db = get_db()
    cursor = db.cursor()

    try:
        query = '''
            INSERT INTO users (name, gender, dob, height, workplace, jobTitle, school, educationLevel, nationality, location, religion, caste, maritalStatus, languages)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        '''
        values = (
            data['name'], data['gender'], data['dob'], data['height'], data['workplace'],
            data['jobTitle'], data['school'], data['educationLevel'], data['nationality'],
            data['location'], data['religion'], data['caste'], data['maritalStatus'], data['languages']
        )
        cursor.execute(query, values)
        db.commit()
        return jsonify({'message': 'User registered successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    finally:
        cursor.close()