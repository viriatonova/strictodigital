from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from ..settings import BASE_DB


class Service(BASE_DB):
    __tablename__ = "servics"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
