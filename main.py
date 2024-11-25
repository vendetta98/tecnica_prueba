from fastapi import FastAPI

app = FastAPI(title="prueba tecnica")

@app.get("/")
async def root():
    return {"message": "funcionando!!!"}