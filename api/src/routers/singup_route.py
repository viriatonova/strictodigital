from fastapi import APIRouter, status
from src.authentication import hash_provider
from src.schemas import user_schema

router = APIRouter()

@router.post("/singup", status_code=status.HTTP_201_CREATED, response_model=user_schema.User)
def singup(user: user_schema.User, session):
    user.password = hash_provider.create_hash(user.password)
    return user
