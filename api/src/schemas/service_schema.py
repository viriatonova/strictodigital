from pydantic import BaseModel


class ServiceBase(BaseModel):
    name: str

class ServiceCreate(ServiceBase):
    pass

class Service(ServiceBase):
    id: int

    class Config():
        orm_mode = True
        arbitrary_types_allowed = True
