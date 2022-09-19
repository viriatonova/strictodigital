from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from src.helpers import user_crud
from src.schemas import user_schema
from src.settings import get_db

router = APIRouter(
    prefix="/api/v1",
    tags=["api/v1"],
    responses={404: {"description": "Not found"}},
)

@router.get("/")
async def healthchecker() -> dict:
    return {"status": "API runnig"}

@router.post("/users", status_code=status.HTTP_201_CREATED,response_model=user_schema.User)
def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    db_user = user_crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    return user_crud.create_user(db=db, user=user)

@router.get("/users", response_model=list[user_schema.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)) -> dict:
    users = user_crud.get_users(db, skip=skip, limit=limit)
    return users

@router.get("/users/{id}", response_model=user_schema.User)
async def read_user(id: int, db: Session = Depends(get_db)) -> dict:
    db_user = user_crud.get_user(db, id=id)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return db_user
