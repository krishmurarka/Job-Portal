# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html

import mysql.connector
# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class TutorialPipeline(object):
    def __init__(self):
        self.create_connection()
        self.create_table()
        # self.process_item()
        # self.store_db()
    def create_connection(self):
        self.conn = mysql.connector.connect(
            host='localhost',
            user='root',
            passwd='1234',
            database='jobs'
        )
        self.curr = self.conn.cursor()

    def create_table(self):
        self.curr.execute("""DROP TABLE IF EXISTS quotes_tb """)
        self.curr.execute("""CREATE TABLE quotes_tb(
            job_title text)""")

    def process_item(self, item, spider):
        self.store_db(item)
        return item

    def store_db(self, item):
        print("Taran kya kaam kiye ho ??????")
        self.curr.execute("""INSERT INTO quotes_tb VALUES(%s)""", (
            item['job_title'],
        ))
        self.conn.commit()
