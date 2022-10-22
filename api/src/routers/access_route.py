from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from src.authentication import token_provider
from src.helpers import user_helper
from src.schemas import user_schema
from src.settings import ACCESS_TOKEN_EXPIRE_MINUTES, get_db

router = APIRouter()

@router.post("/singup", status_code=status.HTTP_201_CREATED, response_model=user_schema.User)
def singup(user: user_schema.UserCreate,  db: Session = Depends(get_db)):
    db_user = user_helper.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    user_helper.create_user(db=db, user=user)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content={"message": "user created"})

@router.post("/singin", response_model=token_provider.Token)
async def login_for_access_token(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = user_helper.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = token_provider.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
