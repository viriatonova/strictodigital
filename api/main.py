import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.models import service_model, user_model, wonder_model
from src.routers import default_route
from src.settings import API_HOST, API_PORT, DEBUG, ENGINE, RELOAD

user_model.BASE.metadata.create_all(bind=ENGINE)
service_model.BASE.metadata.create_all(bind=ENGINE)
wonder_model.BASE.metadata.create_all(bind=ENGINE)

app = FastAPI(debug=DEBUG)

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(default_route.router)


if __name__ == "__main__":
    uvicorn.run("main:app", host=API_HOST, port=API_PORT, reload=RELOAD)
