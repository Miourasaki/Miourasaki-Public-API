from fastapi import APIRouter, Response
from starlette.requests import Request
from datetime import datetime, timedelta
import requests

from static._utils_.loliInt import loliInt

app = APIRouter()


# from _database_.mongodb import mongo


@app.get('/loliInt:{int}')
async def loliMub(request: Request, theme: str = 'rule34', len: int = 7, int: int = None):
    api = loliInt(int, len, theme)

    return Response(content=api.Img(), media_type='image/svg+xml')


@app.get('/loliInt@McJavaServer:{address}')
async def loliMub_MC(request: Request, theme: str = 'rule34', len: int = 7, address: str = 'realm.lolis.fyi'):
    # 服务器地址和端口
    host, port_str = address, ""
    if ":" in address:
        host, port_str = address.split(":")
    if port_str.isdigit():
        port = int(port_str)
    else:
        port = 25565

    try:
        msg = "使用查询API —— mcstatus.io, Socket查询开发中"
        players = requests.get(f'https://api.mcstatus.io/v2/status/java/{host}:{port}').json()['players']['online']
    except:
        try:
            msg = "使用查询API —— 雫 API, Socket查询开发中"
            players = requests.get(f'https://api.imlazy.ink/mcapi?type=json&host={host}&port={port}').json()[
                'players_online']
        except:
            players = 0

    api = loliInt(number=players, theme=theme, length=len, msg=msg)

    return Response(content=api.Img(), media_type='image/svg+xml')


#
# async def getData(path: str = None, regular: bool = True):
#     today = datetime.now().date()
#     start_time = int(datetime.combine(today, datetime.min.time()).timestamp())
#     end_time = int(datetime.now().timestamp())
#
#     api = {}
#
#     if path:
#         if regular:
#             find_data = {"host": "api.chyan.moe",
#                          "data.server.uri.path": {"$regex": path}}
#         else:
#             find_data = {"host": "api.chyan.moe", "data.server.uri.path": path}
#
#         api["total"] = mongo["_mio_"]["ApiData_linAPI_Request"].count_documents(
#             find_data)
#         find_data_time = find_data
#         find_data_time["time"] = {
#             "$gte": start_time,
#             "$lte": end_time
#         }
#         api["total_today"] = mongo["_mio_"]["ApiData_linAPI_Request"].count_documents(
#             find_data_time)
#
#         return api
#
#
# @app.get('/loliInt@Count:{id}')
# async def loliMub_Count(request: Request, theme: str = 'rule34', len: int = 7, id: str = "main"):
#     try:
#         data = await getData(f"/loliInt@Count:{id}", False)
#     except:
#         counts = 0
#     else:
#         counts = data["total"]
#
#     api = loliInt(number=counts, theme=theme, length=len)
#
#     return Response(content=api.Img(), media_type='image/svg+xml')
#
#
# @app.get('/loliInt@TodayCount:{id}')
# async def loliMub_TodayCount(request: Request, theme: str = 'rule34', len: int = 7, id: str = "main"):
#     try:
#         data = await getData(f"/loliInt@Count:{id}", False)
#     except:
#         counts = 0
#     else:
#         counts = data["total_today"]
#
#     api = loliInt(number=counts, theme=theme, length=len)
#
#     return Response(content=api.Img(), media_type='image/svg+xml')
#

from static._utils_.loliStr import loliStr


@app.get('/loliStr:{string}')
async def loliValue(request: Request, theme: str = 'rule34', len: int = 7, string: str = None):
    api = loliStr(string, len, theme)
    return Response(content=api.Img(), media_type='image/svg+xml')
