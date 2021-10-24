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
        job_image = response.css(
            "div.individual_internship_header div.internship_logo img").xpath("@src").extract()
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
            jobImage = "http://internshala.com"+job_image[i]
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
