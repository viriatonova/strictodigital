import os

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Load env file
load_dotenv()

# API Authentication
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


# Enviroment Variable
DEBUG = os.getenv("DEBUG")
RELOAD = os.getenv("RELOAD")
API_PORT = int(os.getenv("API_PORT"))
API_HOST = os.getenv("API_HOST")
DB = {
    'SERVER': os.getenv('DB_SERVER'),
    'DATABASE' : os.getenv('DB_DATABASE'),
    'USER' : os.getenv('DB_USER'),
    'PASSWORD' : os.getenv('DB_PASSWORD'),
    'HOST' : os.getenv('DB_HOST')
}

# Database connectino
DATABASE_URL = f"{DB.get('SERVER')}://{DB.get('USER')}:{DB.get('PASSWORD')}@{DB.get('HOST')}/{DB.get('DATABASE')}"

ENGINE = create_engine(DATABASE_URL)

SESSION_LOCAL = sessionmaker(autocommit=False, autoflush=False, bind=ENGINE)

BASE = declarative_base()

# Dependency
def get_db():
    db = SESSION_LOCAL()
    try:
        yield db
    finally:
        db.close()

