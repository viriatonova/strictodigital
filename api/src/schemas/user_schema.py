from pydantic import BaseModel


class UserBase(BaseModel):
    first_name: str
    last_name: str = None
    full_name: str = None
    email: str

    @property
    def create_fullname(self):
        self.fullname = f'{self.first_name} {self.last_name}'
        return self.full_name

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    permission: str
    
    class Config():
        orm_mode = True
