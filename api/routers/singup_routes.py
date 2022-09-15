from authentication import hash_provider
from fastapi import APIRouter, status
from models.user import User

router = APIRouter(
    prefix="/api/v1",
    tags=["api/v1"],
    responses={404: {"description": "Not found"}},
)

@router.post("/singup",
    status_code=status.HTTP_201_CREATED,
    response_model=User
)
def singup(user, session):
    user.password = hash_provider.create_hash(user.password)
    return user
