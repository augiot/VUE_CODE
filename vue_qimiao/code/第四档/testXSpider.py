# coding=utf-8
import requests
from lxml import etree
import copy

# //div[@class="td-lm-list"]//a/@href  每一页中href
# //div[@class="td-lm-list"]//a/text()  每一页的title

class XSpider:
    def __init__(self):
        # self.start_url = "http://www.51garlic.com/jg/list-65.html"
        self.start_url = "http://www.51garlic.com/jg/list-65-2.html"
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"}
        pass

    def parse_url(self, url):  # 发送请求，获取响应
        # response = requests.get(url, headers=self.headers)
        response = requests.get(url)
        return response.content.decode()

    def get_content_list(self, html_str):  # 提取数据
        html = etree.HTML(html_str)
        # div_list = html.xpath("//body/div/div[contains(@class,'i')]")  # 根据div分组
        a_list = html.xpath("//div[@class='td-lm-list']//a")  # 根据a标签分组

        content_list = []
        for a in a_list:
            item = {}
            item["href"] = a.xpath("./@href")[0]
            item["title"] = a.xpath("./@title")[0]
            item["img_list"] = self.get_detail_list(item["href"], item, content_list)
        print(content_list)
        print("\n")

        # 提取下一页的url地址
        # next_url = html.xpath("//a[text()='下一页']/@href")
        next_url = html.xpath("// a[contains(text(), '下一页')] / @ href")
        # next_url = self.part_url + next_url[0] if len(next_url) > 0 else None
        next_url = next_url[0] if len(next_url) > 0 else None
        return content_list, next_url

        # item["title"] = a.xpath("./a/text()")[0]
        # item["img_list"] = self.get_img_list(item["href"], [])
        # content_list.append(item)

    def get_detail_list(self, detail_url, item, content_list):
        detail_html_str = self.parse_url(detail_url)
        html = etree.HTML(detail_html_str)
        # content = html.xpath("//div[@id='article']//div//text()")  # 根据div标签分组
        c_list = html.xpath("// *[ @ id = 'article'] // div[contains(text(), '：')] // text()")  # 根据content分组
        for c in c_list:
            # print(c)
            item_2 = copy.deepcopy(item)
            t = c.split("：")  # [品类:价格]
            # print(len(tempList))

            if len(t) == 2:
                # print(t[0])
                # print(t[1])
                item_2["kind"] = t[0]
                item_2["price"] = t[1]
                # print(c.split("：")[0])
                # print(len(item_2["price"]))
                if len(item_2["price"]) != 0:
                    content_list.append(item_2)

    def run(self):  # 实现主要逻辑

        next_url = self.start_url

        while next_url is not None:
            print("++++",next_url)
            # 1.start_url
            # 2.发送请求，获取响应
            html_str = self.parse_url(next_url)
            # 3.提取数据，提取下一页url地址
            content_list, next_url = self.get_content_list(html_str)
            # 4.保存数据 
            # 5.请求下一页的url地址，进行2-5循环
            pass

        # 单独测试详情页
        # detail_url="http://www.51garlic.com/jg/show-htm-itemid-90076.html"
        # detail_url="http://www.51garlic.com/jg/show-htm-itemid-90075.html"
        # item={}
        # content_list=[]
        # self.get_detail_list(detail_url,item,content_list)


if __name__ == '__main__':
    s = XSpider()
    s.run()
