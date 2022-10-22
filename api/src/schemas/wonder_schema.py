from pydantic import BaseModel


class WonderBase(BaseModel):
    name: str
    description: str
    dificult: str

class WonderCreate(WonderBase):
    pass

class Wonder(WonderBase):
    id: int

    class Config():
        orm_mode = True
        arbitrary_types_allowed = True
