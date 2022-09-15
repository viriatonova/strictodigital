from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from ..settings import BASE_DB


class User(BASE_DB):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=True)
    sobrenome = Column(String(50), nullable=True)
    email = Column(String(320), unique=True, index=True)
    hashed_password = Column(String(255))
    is_active = Column(Boolean, default=True)

    group = relationship("Groups", back_populates="user_name")


class Groups(BASE_DB):
    __tablename__ = "groups"

    user_n= relationship("User", back_populates="group")
