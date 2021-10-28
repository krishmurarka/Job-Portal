
import React, { Component } from 'react'
import Card from "./Card.js";
import axios from 'axios';

let status;
// const myCard = (data) => {
//     console.log("mycard", data)
//     let myArray = []
//     // for (let i = 0; i < 16; i++) {
//     data.forEach(e => {
//         (<Card company_name={e.company_Name} url={e.url} job_location={e.job_Location} job_title={e.job_Title} company_logo={e.company_Logo} stream_id={e.stream_id} category_id={e.company_id} />)
//     })
//     //     // if (data[i]) {
//     //     // console.log('if')
//     //     // }
//     // }
//     // return myArray
// }
require('dotenv').config()

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiresponse: []
            // company_name: [],
            // url: [],
            // job_location: [],
            // job_title: [],
            // company_logo: [],
            // stream_id: [],
            // category_id: []
        }
        this.myCard = this.myCard.bind(this);
    }

    componentDidMount() {
        let responser
        axios.get(`http://localhost:8081/findAllCategories/2`)
            .then(response => {

                // console.log("response",response.data)
                responser = response.data
                this.setState({
                    apiresponse: responser
                    // company_name: response_company_name,
                    // url: response_url,
                    // job_location: response_job_location,
                    // job_title: response_job_title,
                    // company_logo: response_company_logo,
                    // stream_id: response_stream_id,
                    // category_id: response_category_id
                })
                // status = this.myCard(responser);

            }).catch(error => { console.log(error); })

    }
    // search() {

    // }
    myCard = (data) => {
        console.log("mycard", data)
        console.log("mycard-state", this.state);
        let myArray = []
        for (let i = 1; i < 23; i++) {
            if (data[i])
                myArray.push(<Card company_name={data[i].company_Name} url={data[i].url} job_location={data[i].job_Location} job_title={data[i].job_Title} company_logo={data[i].company_Logo} stream_id={data[i].stream_id} category_id={data[i].category_id} />)
        }
        return myArray;
    }
    render() {

        return (
            <>
                {this.myCard(this.state.apiresponse)}
            </>

        )
    }
}
export default Api;
