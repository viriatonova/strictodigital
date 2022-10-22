from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session
from src.authentication import hash_provider, token_provider
from src.models import user_model
from src.schemas import user_schema
from src.settings import ALGORITHM, SECRET_KEY, get_db

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def create_user(user: user_schema.UserCreate, db: Session):
    user.password = hash_provider.create_hash(user.password)
    # user.full_name = create_fullname(user.first_name, user.last_name)
    db_user = user_model.User(
        username = user.username,
        first_name = user.first_name,
        last_name = user.last_name,
        email = user.email,
        password = user.password,
        is_admin = user.is_admin
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user



def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(user_model.User).offset(skip).limit(limit).all()


def get_user(db: Session, username: str):
    return db.query(user_model.User).filter(user_model.User.username == username).first()


def get_user_by_email(db: Session, email: str):
    return db.query(user_model.User).filter(user_model.User.email == email).first()


def create_fullname(first_name: str, last_name: str ) -> str:
    return f"{first_name} {last_name}"


async def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = token_provider.TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(current_user: user_schema.User = Depends(get_current_user)):
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


def authenticate_user(db: Session, username: str, password: str):
    user = get_user(db, username)
    if not user:
        return False
    if not hash_provider.verify_password(password, user.password):
        return False
    return user
