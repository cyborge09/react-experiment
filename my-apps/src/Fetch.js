import React, { Component } from 'react';
import "./styles.css";
// import withLoader from "./withLoader";
import withFetchingData from "./withFetchingData";
import withMakeTable from "./withMakeTable";


const url = "http://localhost:8848/api/";
var query = "";
var mainUrl = "";

const List = ({ lists }) => {

    return (lists.map((lists, i) =>
        <tr key={i} className='id'>
            <td className='td'>{lists.id}</td>
            <td className='td'>{lists.name}</td>
        </tr>));
}



const ListWithFetchingData = withFetchingData((withMakeTable(List)));

class Fetch extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            path: "to_dos?",
            query: "",
            mainUrlflag: true,
            authorization: "",
            perpage : 1,
            page:[],
            totaldata:0,
            currentPage:1

        }

    }

    setTempurlValue = (e) => {

       
        query = "name=" + e.target.value+"&";
        
    }

    setPerpageData = async (e) => {
       
       await this.setState({
            perpage:e.target.value
        });

        this.createPages();
    }

    setQueryValue = (e) => {
        this.setState({ query: query })
    }

    setMainUrl = () => {
        // if (this.state.mainUrlflag) {
            mainUrl = url + this.state.path ;
            if(this.state.query !== "") mainUrl += this.state.query;
            mainUrl += "&page="+this.state.currentPage;
            mainUrl += "&perpage="+this.state.perpage;
            return mainUrl;
       
    }

    getPages = async ( pages ) => {

       await  this.setState({
            totaldata:pages
        });
       
       this.createPages();
    }

    createPages = () => {

        let perpage= this.state.perpage;
        let totaldata = this.state.totaldata;

        let pages = Array.from(new Array(Math.ceil(totaldata /perpage)), (val, index) => index + 1);

        this.setState({
            page: pages
        })
    }

    updatePage = (page) => {
       
        this.setState({
            currentPage:page
        })
    }

    render() {

        return (
            <div className="App">
                <select name="perpage" onChange={(e) => { this.setPerpageData(e)}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <input name="name" onChange={(e) => { this.setTempurlValue(e) }}></input>
                <button onClick={() => { this.setQueryValue() }}>SEARCH</button>
                {this.state.page
                    .map((page) => <button onClick = { () => this.updatePage(page) } key={page} id={page}>{page}</button>)
                }
                <ListWithFetchingData url={this.setMainUrl()} pages={this.getPages }/>

                
            </div>
        );
    }
}

export default Fetch;