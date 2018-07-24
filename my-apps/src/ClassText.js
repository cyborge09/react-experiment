import React, { Component } from 'react';
import './CLassText.css';



const list = require('./data.json');
console.log(list);
const Person = ({ gender, name, company }) => <tr className="tr"><td className="td">{name}</td><td className="td">{gender}</td><td className="td">{company}</td></tr>

class ClassText extends Component {
    constructor() {
        super();
        this.state = {
            keyword: "",
            pageword: list.length,
            currentpagelimit: list,
            pageflag: true,
            page: Array.from(new Array(Math.ceil(list.length)), (val, index) => index + 1),
            pageindex: 1,
            pageindexflag: false
        }

        this.currentPage = this.currentPage.bind(this);
        this.filter = this.filter.bind(this);
        this.pageWrap = this.pageWrap.bind(this);
    }


    currentPage(pageno) {

        if (this.state.pageflag) {
            if (!pageno || pageno < 1) {
                pageno = list.length;
            }
            var currentlimit = [];

            for (var i = 0; i < pageno; i++) {
                currentlimit.push(list[i]);
            }
            console.log("aaa", currentlimit)
            let updatedList = Array.from(new Array(Math.ceil(list.length / currentlimit.length)), (val, index) => index + 1);

            this.setState({ currentpagelimit: currentlimit, pageflag: false, page: updatedList });
        }

    }





    filter(jsondata) {
        return (jsondata.name.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
            jsondata.gender.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
            jsondata.company.toLowerCase().includes(this.state.keyword.toLowerCase())
        );

    }

    pageWrap() {
        if (this.state.pageindexflag) {
            var pageno = parseInt(this.state.pageword, 10);
            var pageindex = parseInt(this.state.pageindex, 10);
            var pageafterpagination = [];
            var temparray = [];
            temparray = list.slice((pageindex - 1) * pageno, pageindex * pageno);
            pageafterpagination.push(...temparray);
            this.setState({ currentpagelimit: pageafterpagination, pageindexflag: false });
        }


    }

    render() {

        return (

            <div>
                SEARCH: <input onChange={(e) => this.setState({ keyword: e.target.value })} />
                Per Page: <input type="number" onChange={
                    (e) => {
                        this.setState({ pageword: e.target.value, pageflag: true })
                    }
                } />
                {this.currentPage(this.state.pageword)}
                {this.pageWrap()}
                <table id="mytable">
                    <thead>
                        <tr>
                            <th className="th">NAME</th>
                            <th className="th">GENDER</th>
                            <th className="th">COMPANY</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            this.state.currentpagelimit
                                .filter(jsondata => this.filter(jsondata))
                                .map((person, index) => <Person key={index}  {...person} />)
                        }

                    </tbody>
                </table>
                {this.pageIndices}
                Page: {this.state.page
                    .map((page) => <button key={page} id={page} onClick={() => this.setState({ pageindex: page, pageindexflag: true })}>{page}</button>)
                }
            </div>
        );
    }
}

export default ClassText;