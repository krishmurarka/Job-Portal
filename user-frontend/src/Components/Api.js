import React, { Component } from 'react'
import Card from "./Card.js";
import axios from 'axios';
const myCard = () => {
    let myArray = []
    for(let i = 0; i<16;i++) {
        myArray.push(<Card/>)
    }
    return myArray
}
require('dotenv').config()

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company_name: [],
            url:[],
            job_location:[],
            job_title:[],
            company_logo:[],
            stream_id:[],
            category_id:[]
        }
    }
    componentDidMount() {
        this.search()
    }
    search(){
        axios.get(`http://localhost:8081/findAllCategories/1`)
        .then(response => {
            console.log(response.data)
            let reponser=response.data
            let response_url=[]
            let response_company_name=[]
            let response_job_location=[]
            let response_job_title=[]
            let response_company_logo=[]
            let response_stream_id=[]
            let response_category_id=[]

            reponser.forEach(element => {
                response_url.push(element.url)
                response_company_name.push(element.company_Name)
                response_job_location.push(element.job_Location)
                response_job_title.push(element.job_Title)
                response_company_logo.push(element.company_Logo)
                response_stream_id.push(element.stream_id)
                response_category_id.push(element.category_id)

            });

            
            this.setState({
                company_name: response_company_name,
                url: response_url,
                job_location: response_job_location,
                job_title: response_job_title,
                company_logo: response_company_logo,
                stream_id: response_stream_id,
                category_id: response_category_id
            })
            {console.log(this.state)}
        }).catch(error => {console.log(error);})
    }
    render() {
        return (
                <>
                    {myCard()}
                </>

            
        )
    }
}
export default Api;
