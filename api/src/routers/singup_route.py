from authentication import hash_provider
from fastapi import APIRouter, status
from src.models.UserModel import User

router = APIRouter()

@router.post("/singup",
    status_code=status.HTTP_201_CREATED,
    response_model=User
)
def singup(user: User, session):
    user.password = hash_provider.create_hash(user.password)
    return user
