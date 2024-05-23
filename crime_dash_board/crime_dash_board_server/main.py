import uvicorn
from fastapi import FastAPI

# 컨르롤 라우터 선언
from branch_crime_app import branch_crime_router

app = FastAPI()
app.include_router(branch_crime_router.router)


@app.get('/')
def home():
    return {'app' : 'main'}

if __name__ == "__main__":
    uvicorn.run("main:app", host='0.0.0.0', port=8892, reload=True)


