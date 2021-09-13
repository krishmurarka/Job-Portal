import scrapy
from ..items import TutorialItem
# xyz=[]
# ur='https://in.linkedin.com/jobs/search?keywords=&location=India&locationId=&geoId=102713980&sortBy=R&f_TPR=&f_JT=I&f_E=1%2C2&position=1&pageNum='
# counter=0
# for counter in range(0,10):
#     url=ur+str(counter)
#     counter=counter+1
#     xyz.append(url)
#  ghost - url (default image file) -> https://static-exp1.licdn.com/sc/h/9a9u41thxt325ucfh5z8ga4m8


class tryer(scrapy.Spider):

    name = 'quoutes'
    # start_urls=xyz
    start_urls = ['https://in.linkedin.com/jobs/search?keywords=&location=India&locationId=&geoId=102713980&sortBy=R&f_TPR=&f_JT=I&f_E=1%2C2&position=1&pageNum=0']

    def parse(self, response):
        items = TutorialItem()

        hyperlinks = response.css(
            "a.base-card__full-link").xpath("@href").extract()
        job_titles = response.css("span.screen-reader-text::text").extract()

        company_name = response.css(
            "h4.base-search-card__subtitle a::text").extract()
        job_location = response.css(
            "div.base-search-card__metadata span.job-search-card__location::text ").extract()
        for i in range(0, len(hyperlinks)):
            # hyperlink
            hyperlink = hyperlinks[i]
            # job-title
            job_title = job_titles[i]
            job_title = job_title.replace('\n', '')
            job_title = job_title.strip()
            # companyName
            companyName = company_name[i]
            companyName = companyName.replace('\n', '')
            companyName = companyName.strip()
            # jobLocation
            jobLocation = job_location[i]
            jobLocation = jobLocation.replace('\n', '')
            jobLocation = jobLocation.strip()
            items['job_title'] = job_title
            items['hyperlink'] = hyperlink
            items['companyName'] = companyName
            items['jobLocation'] = jobLocation
            yield items
