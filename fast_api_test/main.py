from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

import func_test

app = FastAPI()

class Item(BaseModel):
    name:str
    price:float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    print(func_test.get_full_name("건휘", "김"))
    print(func_test.get_name_with_age(name="뿡뿡이", age=1))
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id:int, q:Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put('/items/{item_id}')
def update_item(item_id:int, item:Item):
    return {"item_id": item_id, "item_name": item.name, "item_price": item.price}