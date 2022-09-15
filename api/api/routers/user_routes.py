from fastapi import APIRouter

router = APIRouter(
    prefix="/api/v1",
    tags=["api/v1"],
    responses={404: {"description": "Not found"}},
)

@router.get("/")
async def healthchecker() -> dict:
    return {"status": "API runnig"}


@router.get("/users")
async def users() -> dict:
    return {"status": "API users"}


@router.get("/users/{user_id}")
async def users(user_id: int, name:str = None) -> dict:
    return {"status": "API users"}
