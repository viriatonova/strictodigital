from datetime import datetime

from pydantic import BaseModel


class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    
class UserCreate(UserBase):
    password: str
    is_admin: bool = False
    is_active: bool | None = None

class User(UserBase):
    id: int
    created_at: datetime
    class Config():
        orm_mode = True
        arbitrary_types_allowed = True
