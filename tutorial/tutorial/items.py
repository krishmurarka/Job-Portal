# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class TutorialItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    job_title = scrapy.Field()
    hyperlink = scrapy.Field()
    jobImage = scrapy.Field()
    companyName = scrapy.Field()
    jobLocation = scrapy.Field()
    jobCategory = scrapy.Field()
    streamId = scrapy.Field()
    desc = scrapy.Field()
    pass
