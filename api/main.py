import uvicorn
from fastapi import FastAPI

# from api.openapi import configs
from api.api.routers import user_routes
from api.settings import DEBUG, RELOAD

app = FastAPI(debug=DEBUG)

app.include_router(user_routes.router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=9000, reload=RELOAD)
