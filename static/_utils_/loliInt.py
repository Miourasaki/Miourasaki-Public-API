import os,random
import base64

outsideTop = """
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="%s" height="100" version="1.1">
    <title>loliInt | &#x767D;&#x6FAA;</title>
    <g>
    """
outsideBottom = """
    </g>
</svg>
"""

def GetFolderNames(path):
    folder_list = []
    for folder in os.listdir(path):
        folder_path = os.path.join(path, folder)
        if os.path.isdir(folder_path):
            folder_list.append(folder)
            folder_list += GetFolderNames(folder_path)
    return folder_list

def GetBase64(theme: str, num: int) -> str:
    """
    根据数字获取相应主题的图片的 base64 编码，并转换成可以在浏览器读取的格式
    :param theme: str 主题
    :param num: int 数字
    :return: str 相应图片的 base64 编码
    """
    # 获取文件后缀名
    suffix = ''
    with os.scandir(f'static/loliInt/{theme}/') as it:
        for entry in it:
            if entry.is_file() and entry.name.startswith(f'{num}.'):
                suffix = os.path.splitext(entry.name)[1]
                break
    
    if suffix:
        # 读取图片文件并返回 base64 编码
        with open(f'static/loliInt/{theme}/{num}{suffix}', 'rb') as f:
            base64_str = base64.b64encode(f.read()).decode('utf-8')
            return f'data:image/{suffix[1:]};base64,{base64_str}'
    else:
        return ''



class loliInt:
    def __init__(self, number=0, length=7, theme='rule34',msg=None):
        self.number = number        
        if len(str(number)) > length:
            self.length = len(str(number))
        else:
            self.length = length
        self.msg = msg
        
        themeList = GetFolderNames('static/loliInt/')
        self.theme = 'rule34'
        if theme in themeList:
            self.theme = theme
        elif theme == 'random':
            self.theme = random.choice(themeList)

        self.int_list = [int(x) for x in str(self.number)]
        if len(self.int_list) < self.length:
            self.int_list = [0] * (self.length - len(self.int_list)) + self.int_list
    def __repr__(self):
        return f"loliInt({self.number}, {self.length}, '{self.theme}')"
    def __str__(self):
        return f"loliInt object with {self.length} integers, all set to {self.number}. Theme: {self.theme}."

    def ChangeNumber(self, new_number):
        self.number = new_number
        if len(str(self.number)) > self.length:
            self.length = len(str(self.number))
        else:
            self.length = self.length
        self.int_list = [int(x) for x in str(new_number)]
        if len(self.int_list) < self.length:
            self.int_list = [0] * (self.length - len(self.int_list)) + self.int_list
    def ChangeLength(self, new_length):
        self.length = new_length
        self.int_list = [int(x) for x in str(self.number)]
        if len(self.int_list) < self.length:
            self.int_list = [0] * (self.length - len(self.int_list)) + self.int_list
    def ChangeTheme(self, new_theme):
        self.theme = new_theme

    def base64(self):
        lst = []

        for item in self.int_list:
            base = GetBase64(self.theme,item)
            lst.append(base)

        return lst
    def Img(self):
        main = ''
        x = 0
        Base64List = self.base64()
        for item in Base64List:
            main += f'<image x="{x}" y="0" width="45" height="100" xlink:href="{item}" />'
            x += 45
        result = outsideTop % (x) + main + outsideBottom
        if self.msg:
            return f"<!-- {self.msg} -->" + f"<!-- loliInt object with {self.length} integers, all set to {self.number}. Theme: {self.theme}. -->" + result + "<!-- Powered By 白澪~ & maintainer of this website 白澪~ -->" + "<!-- theme by rule34.xxx「白澪感到不可意思，这是个成人网站」 -->" + "<!-- Submit your work to the mio@chyan.moe -->"
        else:
            return f"<!-- loliInt object with {self.length} integers, all set to {self.number}. Theme: {self.theme}. -->" + result + "<!-- Powered By 白澪~ & maintainer of this website 白澪~ -->" + "<!-- theme by rule34.xxx「白澪感到不可意思，这是个成人网站」 -->" + "<!-- Submit your work to the mio@chyan.moe -->"
        