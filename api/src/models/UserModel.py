from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from ..settings import BASE_DB


class User(BASE_DB):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    full_name = Column(String(100), nullable=False, unique=True)
    email = Column(String(320), unique=True, index=True)
    password = Column(String(255))
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime)

    # permission = relationship("Permission", back_populates="user_name")


# class Permission(BASE_DB):
#     __tablename__ = "permissions"

#     user_n = relationship("User", back_populates="permission")
