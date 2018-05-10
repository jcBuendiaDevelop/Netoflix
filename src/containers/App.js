import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css"

import LogoSvg from "../components/webComponent-header.js";
import Navar from "../components/webComponent-navar";
import Search from "../components/webComponent-search";
import Coverage from "../components/webComponent-coverage";
import List from "../components/WebComponentCategory";
import Login from "../components/WebComponent-Login";

export default class App extends Component {

    state = {
        searchTerm: "",
        searchUrl:  ""
    }


    handleKeyUp = ({key}) => {
        if(key === 'Enter' && this.state.searchTerm !== ""){
            let  searchUrl =  `search/multi?query=${this.state.searchTerm}&api_key=166624c030b91c943c397020f20525b4`;
            this.setState({
                searchUrl
            })
        }
    }

    handleChange = (event) => {
        const searchTerm = event.target.value
        this.setState({
            searchTerm
        })
    }
    constructor (props){
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={this.Home} />
                </div>
            </Router>
        );
    }

     Home = (props) => {
        return(
            <div>
                <header className="Header">
                    <LogoSvg />
                    <Navar/>
                    <div id="search" className="Search">
                        <Search
                            onChange={this.handleChange}
                            onKeyUp={this.handleKeyUp}
                            value={this.state.searchTerm}
                        />
                    </div>
                </header>
                <Coverage />
                <List searchUrl={this.state.searchUrl}/>

            </div>
        )
    }
}


