from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from src.helpers import user_helper
from src.schemas import user_schema
from src.settings import get_db

router = APIRouter()

@router.post("/user", status_code=status.HTTP_201_CREATED,response_model=user_schema.User)
def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    db_user = user_helper.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    return user_helper.create_user(db=db, user=user)

@router.get("/user", response_model=list[user_schema.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)) -> dict:
    users = user_helper.get_users(db, skip=skip, limit=limit)
    return users

@router.get("/user/{id}", response_model=user_schema.User)
async def read_user(id: int, db: Session = Depends(get_db)) -> dict:
    db_user = user_helper.get_user(db, id=id)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return db_user
