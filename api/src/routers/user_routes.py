from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from src.helpers import user_crud
from src.models import UserModel
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

@router.post("/users", 
    status_code=status.HTTP_201_CREATED,
    response_model=user_schema.User

)
def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    db_user = user_crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user_crud.create_user(db=db, user=user)


@router.get("/users")
async def users() -> dict:
    return {"status": "API users"}


@router.get("/users/{id}")
async def users(user_id: int, name:str = None) -> dict:
    return {"status": "API users"}
