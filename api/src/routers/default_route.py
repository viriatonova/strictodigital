from fastapi import APIRouter
from src.routers import singup_route, user_route

router = APIRouter(
    prefix="/api/v1",
    tags=["api/v1"],
    responses={404: {"description": "Not found"}},
)

router.include_router(user_route.router)
router.include_router(singup_route.router)


@router.get("/")
async def healthchecker() -> dict:
    return {"status": "API runnig"}
