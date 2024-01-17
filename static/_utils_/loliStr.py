import io
import os, random
import base64
import re

import PIL.Image
from PIL import Image ,ImageDraw, ImageFont


outsideTop = """
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="%s" height="100" version="1.1">
    <title>loliStr | &#x767D;&#x6FAA;</title>
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

def is_chinese(char):
    if '\u4e00' <= char <= '\u9fff':
        return True
    else:
        return False

def parse_string(string, theme="rule34"):
    result = []
    # pattern = r'=(\w+),(\d+),([^\+]+)\+|=(\d+),([^\+]+)\+|([^()\n]+)'
    pattern = r'\((\w+),(\d+),([^\)]+)\)|\((\d+),([^\)]+)\)|([^()\n]+)'
    matches = re.findall(pattern, string)

    for match in matches:
        if match[0] != '':
            theme = match[0]
            index = int(match[1])
            for value in match[2]:
                result.append({"theme": theme, "index": index, "value": value})
        elif match[3] != '':
            index = int(match[3])
            for value in match[4]:
                result.append({"theme": theme, "index": index, "value": value})
        else:
            index = 0
            for value in match[5]:
                result.append({"theme": theme, "index": index, "value": value})

    return result

indexTest = 0

def GetBase64(theme: str, string: str, index:int = 0) -> str:
    """
    根据数字获取相应主题的图片的 base64 编码，并转换成可以在浏览器读取的格式
    :param theme: str 主题
    :param string: str 字符串
    :return: str 相应图片的 base64 编码
    """
    themeList = GetFolderNames('static/loliStr/')
    if theme in themeList:
        theme = theme
    elif theme == 'random':
        theme = random.choice(themeList)
    else: theme = "rule34"

    if index == 10:
        global indexTest

        index = indexTest
        if indexTest >= 9: indexTest = 0
        else: indexTest += 1
    elif index == 11:
        if string.isdigit():
            index = int(string)
        else: index = 0
    elif index == 12:
        index = random.randint(0, 9)
    elif 0 <= index <= 9:
        index = index
    else: index = 0


    # 获取文件后缀名
    suffix = ''
    with os.scandir(f'static/loliStr/{theme}/') as it:
        for entry in it:
            if entry.is_file() and entry.name.startswith(f'0.'):
                suffix = os.path.splitext(entry.name)[1]
                break


    if suffix:
        # 读取图片文件并返回 base64 编码

        def PrintText(path:str,string:str):
            im = Image.open(path)
            frames = []
            for i in range(im.n_frames):
                im.seek(i)
                frames.append(im.copy())

            ImgData = {}
            ImgData["0"] = [30, 28]
            ImgData["1"] = [35, 32]
            ImgData["2"] = [22, 33]
            ImgData["3"] = [28, 38]
            ImgData["4"] = [35, 32]
            ImgData["5"] = [23, 51]
            ImgData["6"] = [42, 58]
            ImgData["7"] = [30, 73]
            ImgData["8"] = [24, 74]
            ImgData["9"] = [32, 73]

            if theme == "gelbooru" or theme == "gelbooru-h":
                ImgData["0"] = [28, 27]
                ImgData["1"] = [37, 34]
                ImgData["2"] = [24, 33]
                ImgData["3"] = [32, 32]
                ImgData["4"] = [27, 42]
                ImgData["5"] = [24, 55]
                ImgData["6"] = [42, 58]
                ImgData["7"] = [30, 73]
                ImgData["8"] = [24, 74]
                ImgData["9"] = [32, 73]

            for im in frames:
                w, h = im.size

                draw = ImageDraw.Draw(im)

                xy = ImgData[path.split("/")[-1][:-4]]
                if is_chinese(string): x = (xy[0])
                else: x = xy[0] + 13
                x1, y1 = w * x / 100, h * (xy[1]) / 100

                if string:
                    fontSize = 29
                    if im.size == (45, 100):
                        fontSize = 19

                    if (is_chinese(string)) == False: fontSize += 2

                    font = ImageFont.truetype('static/loliStr/zpix.ttf', fontSize)  # 字体和字号

                    draw.text((x1, y1), string, font=font, fill=(1,1,1))


            if len(frames) > 1:
                frames[0].save(image_data, format=suffix[1:], save_all=True, append_images=frames[1:],
                               duration=im.info['duration'], loop=0, optimize=False, disposal=2)
            else:
                frames[0].save(image_data, format=suffix[1:])


        image_data = io.BytesIO()

        PrintText(f"static/loliStr/{theme}/{index}{suffix}",string)

        image_data_bytes = image_data.getvalue()
        base64_str = base64.b64encode(image_data_bytes).decode('utf-8')

        return f'data:image/{suffix[1:]};base64,{base64_str}'

        # with open(f'static/loliStr/{theme}/0{suffix}', 'rb') as f:
        #     base64_str = base64.b64encode(f.read()).decode('utf-8')
        #     return f'data:image/{suffix[1:]};base64,{base64_str}'
    else:
        return ''


class loliStr:
    def __init__(self, string:str="白澪", length=7, theme='rule34', msg=None):
        self.string = string
        if len(str(string)) > length:
            self.length = len(str(string))
        else:
            self.length = length
        self.msg = msg

        themeList = GetFolderNames('static/loliStr/')
        self.theme = 'rule34'
        if theme in themeList:
            self.theme = theme
        elif theme == 'random':
            self.theme = random.choice(themeList)

        self.str_list = parse_string(fr"{string}",theme=self.theme)

    def __repr__(self):
        return f"loliInt({self.string}, {self.length}, '{self.theme}')"

    def __str__(self):
        return f"loliInt object with {self.length} integers, all set to {self.string}. Theme: {self.theme}."

    def ChangeString(self, new_string):
        self.string = new_string
        if len(str(self.string)) > self.length:
            self.length = len(str(self.string))
        else:
            self.length = self.length
        self.str_list = parse_string(fr"{new_string}",theme=self.theme)

    def ChangeLength(self, new_length):
        self.length = new_length
        self.str_list = [str(x) for x in str(self.string)]
        if len(self.str_list) < self.length:
            self.str_list = [0] * (self.length - len(self.str_list)) + self.str_list

    def ChangeTheme(self, new_theme):
        themeList = GetFolderNames('static/loliStr/')
        self.theme = 'rule34'
        if new_theme in themeList:
            self.theme = new_theme
        elif new_theme == 'random':
            self.theme = random.choice(themeList)

    def base64(self):
        lst = []

        index = 0


        for item in self.str_list:
            if item["index"] != 10:
                index = item["index"]

            base = GetBase64(item["theme"], item["value"], index)
            if index < 9: index += 1
            else: index = 0
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
        print(result)
        if self.msg:
            return f"<!-- {self.msg} -->" + f"<!-- loliStr object with {self.length} integers, all set to \"{self.string}\". Theme: {self.theme}. -->" + result + "<!-- Powered By 白澪~ & maintainer of this website 白澪~ -->" + "<!-- theme by rule34.xxx「白澪感到不可意思，这是个成人网站」 -->" + "<!-- Submit your work to the mio@chyan.moe -->"
        else:
            return f"<!-- loliStr object with {self.length} integers, all set to \"{self.string}\". Theme: {self.theme}. -->" + result + "<!-- Powered By 白澪~ & maintainer of this website 白澪~ -->" + "<!-- theme by rule34.xxx「白澪感到不可意思，这是个成人网站」 -->" + "<!-- Submit your work to the mio@chyan.moe -->"
