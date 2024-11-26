from models.products import Product
from service.productsService import *
from fastapi import FastAPI, APIRouter

app = FastAPI()
prod = APIRouter(prefix="/api/products")

@prod.get("/")
async def obtener_registros():
    return await get_products()

@prod.get("/{id}")
async def obtener_registro(id: str):
    return await get_product(id)

@prod.post("/")
async def crear_registro(product: Product):
    return await create_product(product)

app.include_router(prod)