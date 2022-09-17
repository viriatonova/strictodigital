from pydantic import BaseModel


class UserBase(BaseModel):
    first_name: str
    last_name: str = None
    email: str
    # permission: str
    # is_active: bool

    # @property
    # def create_fullname(self):
    #     self.full_name = f'{self.first_name} {self.last_name}'
    #     return self.full_name

class UserCreate(UserBase):
    password: str
    # full_name: str = None

class User(UserBase):
    id: int
    
    class Config():
        orm_mode = True
