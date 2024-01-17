from fastapi import APIRouter
from view import loliInt

router = APIRouter()

# linAccount路由配置
router.include_router(loliInt.app, prefix='', tags=["loliInt API"])