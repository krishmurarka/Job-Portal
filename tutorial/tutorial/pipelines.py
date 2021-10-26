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

    def create_connection(self):
        self.conn = mysql.connector.connect(
            host='localhost',
            user='root',
            passwd='1234',
            database='jobs'
        )
        self.curr = self.conn.cursor()

    def create_table(self):
        print('a')
        self.curr.execute("""DROP TABLE IF EXISTS quotes_tb """)
        self.curr.execute("""CREATE TABLE quotes_tb(
               id int, category_id int,company_logo text, company_name text, job_location text, job_title text, stream_id text, url VARCHAR(255), UNIQUE (url))""")

    def process_item(self, item, spider):
        self.store_db(item)
        return item

    def store_db(self, item):
        # self.curr.execute("""INSERT INTO quotes_tb (job_title,url,company_name,job_location,category_id) VALUES(%s,%s,%s,%s,%d)""", (
        #     item['job_title'], item['hyperlink'], item['companyName'], item['jobLocation'],item['jobCategory']

        self.curr.execute("""INSERT IGNORE INTO quotes_tb (job_title,url,company_logo,company_name,job_location,category_id,stream_id)VALUES(%s,%s,%s,%s,%s,%s,%s)""", (
            item['job_title'], item['hyperlink'], item['jobImage'], item['companyName'], item['jobLocation'], item['jobCategory'], item['streamId']))

        self.conn.commit()
