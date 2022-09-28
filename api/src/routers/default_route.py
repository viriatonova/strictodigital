from api.src.routers import singup_route, user_route
from fastapi import APIRouter

router = APIRouter(
    prefix="/api/v1",
    tags=["api/v1"],
    responses={404: {"description": "Not found"}},
)

router.include_router(user_route)
router.include_router(singup_route)


@router.get("/")
async def healthchecker() -> dict:
    return {"status": "API runnig"}
