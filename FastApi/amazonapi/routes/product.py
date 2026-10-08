from fastapi import APIRouter,status,Request,HTTPException
from pydantic import BaseModel,EmailStr
from typing import Optional


router=APIRouter()

from app import prisma


class ProductSchema(BaseModel):
    name:str
    description:Optional[str]=None
    selling_price:float=0.0
    buying_price:float=0.0
    qty:int=1


@router.post("/",status_code=status.HTTP_201_CREATED)
async def sign_up(payload:ProductSchema):

    
    