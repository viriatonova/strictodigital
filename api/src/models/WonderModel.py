from sqlalchemy import (Boolean, Column, DateTime, ForeignKey, Integer, String,
                        Text)
from sqlalchemy.orm import relationship

from ..settings import BASE


class Wonder(BASE):
    __tablename__ = "worderss"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    description = Column(Text(), nullable=False)
    dificult = Column(String(50), nullable=False)
    data = Column(String(500), nullable=False)



class Trekking(BASE):
    __tablename__ = "trekkings"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    road_map = Column(String(500), nullable=False)
    dificult = Column(String(50), nullable=False)
    data = Column(String(500), nullable=False)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
