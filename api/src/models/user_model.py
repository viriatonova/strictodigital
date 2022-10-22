from sqlalchemy import Boolean, Column, DateTime, Integer, String
from sqlalchemy.sql import func
from src.settings import BASE


class User(BASE):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=True)
    username = Column(String(100), nullable=False, unique=True)
    email = Column(String(320), unique=True)
    password = Column(String(255))
    is_admin = Column(Boolean, default=False)
    is_active = Column(Boolean, default=False)

