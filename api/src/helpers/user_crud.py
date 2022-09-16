from authentication import hash_provider
from models import UserModel
from schemas import user_schema
from sqlalchemy.orm import Session


def create_user(user: user_schema.UserCreate, db: Session):
    user.password = hash_provider.create_hash(user.password)
    db_user = UserModel.User(
        first_name = user.first_name,
        last_name = user.last_name,
        password = user.password,
        email = user.email,
        # permission = "default"
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(UserModel.User).filter(UserModel.User.email == email).first()
