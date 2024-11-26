from fastapi import FastAPI
from controllers.productsController import prod
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="prueba tecnica")
app.include_router(prod)
origins = [
    "http://localhost",
    "http://localhost:5174",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "funcionando!!!"}