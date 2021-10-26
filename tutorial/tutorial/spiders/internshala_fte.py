import scrapy
from ..items import TutorialItem


class internshala_fte(scrapy.Spider):

    name = 'internshala_fte'

    start_urls = ["https://internshala.com/fresher-jobs"]

    def parse(self, response):

        items = TutorialItem()

        # internshala
        # redirect - link for internshala jobs
        hyperlinks = response.css(
            "div.company div.profile a").xpath("@href").extract()
        job_titles = response.css(
            "div.company div.profile a::text").extract()
        company_name = response.css(
            "div.company div.company_name a::text").extract()
        job_location = response.css(
            "div.individual_internship_details span a::text").extract()
        imaging= response.css("div.individual_internship_header")
        # companyName.replace('\n', ' ').strip()
        for i in range(0, len(company_name)):
            job_title = job_titles[i]
            companyName = company_name[i]
            companyName = companyName.replace('\n', '')
            companyName = companyName.strip()
            jobLocation = job_location[i]
            jobLocation = jobLocation.replace('\n', '')
            jobLocation = jobLocation.strip()
            hyperlink = "http://internshala.com"+hyperlinks[i]
            # jobImage

            job_image = imaging[i].css("div.internship_logo img").xpath("@src").extract()
            job_image=' '.join([str(elem) for elem in job_image])
            if(len(job_image)==0):
                jobImage = "https://static-exp1.licdn.com/sc/h/9a9u41thxt325ucfh5z8ga4m8"
               
            else:
                jobImage = "http://internshala.com"+job_image
                jobImage = jobImage.replace('\n', '')
                jobImage = jobImage.strip()

            jobCategory = 2
            streamId = 'S'
            # jobLocation = 'x'
            items['job_title'] = job_title
            items['hyperlink'] = hyperlink
            items['companyName'] = companyName
            items['jobLocation'] = jobLocation
            items['jobCategory'] = jobCategory
            items['jobImage'] = jobImage
            items['streamId'] = streamId

            yield items
