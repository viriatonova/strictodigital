from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from src.helpers import user_helper
from src.schemas import user_schema
from src.settings import get_db

router = APIRouter()

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
