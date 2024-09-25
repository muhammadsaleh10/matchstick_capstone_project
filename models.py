from db import get_db

def create_tables():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            gender VARCHAR(10),
            dob DATE,
            height VARCHAR(10),
            workplace VARCHAR(100),
            jobTitle VARCHAR(100),
            school VARCHAR(100),
            educationLevel VARCHAR(100),
            nationality VARCHAR(100),
            location VARCHAR(100),
            religion VARCHAR(100),
            caste VARCHAR(100),
            maritalStatus VARCHAR(100),
            languages VARCHAR(100)
        )
    ''')
    db.commit()
    cursor.close()