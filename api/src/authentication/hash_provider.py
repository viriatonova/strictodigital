from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'])

def verify_hash(input_text: str, text_hashed: str) -> bool:
    return pwd_context.verify(input_text, text_hashed)

def create_hash(input_text: str) -> str:
    return pwd_context.hash(input_text)
