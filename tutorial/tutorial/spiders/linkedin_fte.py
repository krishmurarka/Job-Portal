import scrapy
from ..items import TutorialItem


class linkedin_fte(scrapy.Spider):

    name = 'linkedin_fte'
    start_urls = ["https://in.linkedin.com/jobs/search?keywords=&location=India&locationId=&geoId=102713980&sortBy=R&f_TPR=&f_JT=F&f_E=2%2C3%2C4&position=1&pageNum=0"]

    def parse(self, response):
        items = TutorialItem()

        hyperlinks = response.css(
            "a.base-card__full-link").xpath("@href").extract()
        job_titles = response.css(
            "span.screen-reader-text::text").extract()

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
            # jobCategory
            # jobImage
            jobImage = "https://static-exp1.licdn.com/sc/h/9a9u41thxt325ucfh5z8ga4m8"
            jobCategory = 2
            # streamId
            streamId = 'S'
            items['job_title'] = job_title
            items['hyperlink'] = hyperlink
            items['companyName'] = companyName
            items['jobLocation'] = jobLocation
            items['jobCategory'] = jobCategory
            items['jobImage'] = jobImage
            items['streamId'] = streamId
            yield items
        for i in range(0,len(hyperlinks)):
            
            # print(hyperlinks[i])
            yield response.follow(hyperlinks[i],callback = self.parse_hyperlink)
            
    def parse_hyperlink(self,response):
        items = TutorialItem()

        description = response.css("div.show-more-less-html__markup::text").extract()
        for i in range(len(description)):
            desc = description[i]
            desc = desc.replace('\n', '')
            desc = desc.strip()
            # items['desc'] = desc
            print(desc)    
