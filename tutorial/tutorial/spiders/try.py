import scrapy
from ..items import TutorialItem
# xyz=[]
# ur='https://in.linkedin.com/jobs/search?keywords=&location=India&locationId=&geoId=102713980&sortBy=R&f_TPR=&f_JT=I&f_E=1%2C2&position=1&pageNum='
# counter=0
# for counter in range(0,10):
#     url=ur+str(counter)
#     counter=counter+1
#     xyz.append(url)


class tryer(scrapy.Spider):

    name = 'quoutes'
    # start_urls=xyz
    start_urls = ['https://in.linkedin.com/jobs/search?keywords=&location=India&locationId=&geoId=102713980&sortBy=R&f_TPR=&f_JT=I&f_E=1%2C2&position=1&pageNum=0']

    def parse(self, response):
        items = TutorialItem()
        # job_title = response.css("span.screen-reader-text::text")[0].extract()
        # job_title = job_title.replace('\n', '')
        # job_title = job_title.strip()
        lists = response.css("ul.jobs-search__results-list li").extract()
        for i in lists:
            #Gives the link for the connecting page
            hyperlink=response.css("a.base-card__full-link").xpath("@href").extract()
            # print(hyperlink[0])
            #Extracts the job title
            job_title = response.css("span.screen-reader-text::text")[0].extract()
            job_title = job_title.replace('\n', '')
            job_title = job_title.strip()
            items['job_title']=job_title
            items['hyperlink']=hyperlink[0]
            yield items



    

       



