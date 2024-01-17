import os

from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from starlette.responses import FileResponse

app = FastAPI(
    title="Miourasaki's Public API",
    description="For all that is in the stardust",
    version="ArtLibrary",
    openapi_url='/openapi.json',
    redoc_url="/redoc",
    docs_url="/swagger",
)


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

from urls import router

app.include_router(router, prefix="")


@app.get('/favicon.ico', include_in_schema=False)
async def read_asset():
    file_path = f"lin-openapi-doc/dist/favicon.ico"

    if os.path.isfile(file_path):
        return FileResponse(file_path)


@app.get('/static/{path:path}', include_in_schema=False)
async def read_static(path: str = None):
    file_path = f"lin-openapi-doc/dist/static/{path}"

    if os.path.isfile(file_path):

        return FileResponse(file_path)
    else:
        content = ("""
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <!-- saved from url=(0034)https://api.miourasaki.net/ -->
    <html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">body { font-family:Arial; margin-left:40px; }img  { border:0 none; }#content { margin-left: auto; margin-right: auto }#message h2 { font-size: 20px; font-weight: normal; color: red; margin: 34px 0px 0px 0px }#message div { font-size: 15px; font-weight: normal; color: #000000; margin: 10px 0 0 2px; }#message p  { font-size: 13px; color: #000000; margin: 7px 0px 0px 0px }#errorref { font-size: 11px; color: #737373; margin-top: 41px }</style><title>Miourasaki's StaticAPI</title></head><body><div id="content"><div id="message"><h2>The request is blocked.</h2><div>啥都木有o(TヘTo).</div></div><div id="errorref"><span>""" +
                   "str(request.state.RequestUUID)" + """</span></div></div></body></html>
    """)
        return HTMLResponse(content, status_code=404)


@app.get('/assets/{path:path}', include_in_schema=False)
@app.get('/assets', include_in_schema=False)
@app.get('/about', include_in_schema=False)
@app.get('/support', include_in_schema=False)
@app.get('/', include_in_schema=False)
async def root():
    html_file = open("lin-openapi-doc/dist/index.html", 'r').read()
    return HTMLResponse(content=html_file)


if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app,
                host="0.0.0.0",
                port=9000)
