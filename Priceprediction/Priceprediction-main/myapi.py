from fastapi import FastAPI
import util
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
    )
]


app = FastAPI(middleware=middleware)


@app.get("/home/{predictString}")
def home(predictString:str):
    lis = predictString.split('-')
    res = util.find_price(int(lis[0]), int(lis[1]), lis[2], int(lis[3]))
    res = jsonable_encoder(res)
    return JSONResponse(content={'Price':res,
                                 'Location':lis[2],
                                 'BHK':lis[0],
                                 'Square feet':lis[1],
                                 'bathrooms':lis[3],
                                 })

@app.get("/get/getlocation")
def homelocs():
    locs = util.get_location_names()
    locs = jsonable_encoder(locs)
    return JSONResponse(content={'loc':locs})