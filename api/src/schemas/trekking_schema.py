from datetime import datetime

from pydantic import BaseModel


class WonderBase(BaseModel):
    name: str
    road_map: str
    global_dificult: str

class WonderCreate(WonderBase):
    pass

class Wonder(WonderBase):
    id: int
    creater_at: datetime
    updated_at: datetime

    class Config():
        orm_mode = True
        arbitrary_types_allowed = True
