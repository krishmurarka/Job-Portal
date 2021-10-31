
import React, { Component } from 'react'
import Card from "./Card.js";
import axios from 'axios';

let status;

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
        axios.get(`http://localhost:8081/${this.props.type}/${this.props.count}`)
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
        for (let i = 1; i <data.length; i++) {
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
