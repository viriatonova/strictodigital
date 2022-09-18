from sqlalchemy.orm import Session
from src.authentication import hash_provider
from src.models import UserModel
from src.schemas import user_schema


def create_user(user: user_schema.UserCreate, db: Session):
    user.password = hash_provider.create_hash(user.password)
    # user.full_name = create_fullname(user.first_name, user.last_name)
    db_user = UserModel.User(
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

def get_user_by_email(db: Session, email: str):
    return db.query(UserModel.User).filter(UserModel.User.email == email).first()

def create_fullname(first_name: str, last_name: str ) -> str:
    return f"{first_name} {last_name}"
