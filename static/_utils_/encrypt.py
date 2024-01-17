
import time
import random
import hashlib
import hmac

# 对用户数据加密

async def md5(string):
    # 创建md5对象
    md5 = hashlib.md5()
    
    # 更新要加密的字符串
    md5.update(string.encode('utf-8'))
    
    # 返回加密后的结果
    return md5.hexdigest()
