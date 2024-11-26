from models.products import Product
from schema.productsSchema import *
from config.databse import conex
from bson import ObjectId
from fastapi import HTTPException, status

async def get_products():
    return products_entity(conex.local.products.find())

async def get_product(id: str):
    prod = await search_product("_id", ObjectId(id))
    if not prod:
         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="producto no encontrado")
    else: 
         return product_entity(prod)

async def create_product(product: Product):
     new_product = dict(product)
     del new_product["id"]
     id = conex.local.products.insert_one(new_product).inserted_id
     obtenido = conex.local.products.find_one({"_id": id})
     return product_entity(obtenido)

#metodo para buscar
async def search_product(field: str, key):
       product = conex.local.products.find_one({field: key})
       if not product:
           return None
       else:
            return Product(**product_entity(product))
    
