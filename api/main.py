import uvicorn
from fastapi import FastAPI

from src.models import ServiceModel, UserModel, WonderModel
# from api.openapi import configs
from src.routers import user_routes
from src.settings import DEBUG, ENGINE, RELOAD

UserModel.BASE.metadata.create_all(bind=ENGINE)
ServiceModel.BASE.metadata.create_all(bind=ENGINE)
WonderModel.BASE.metadata.create_all(bind=ENGINE)

app = FastAPI(debug=DEBUG)

app.include_router(user_routes.router)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=9000, reload=RELOAD)
