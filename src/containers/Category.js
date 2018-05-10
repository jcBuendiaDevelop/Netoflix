import React, { Component } from 'react'

import Item from "../components/WebComponentsItem"

import "./App.css"

export default class Category extends Component {
	state = {
    data: [],
    mounted: false
	}

	loadContent = () => {
    const requestUrl =`https://api.themoviedb.org/3/${this.props.url}&api_key=166624c030b91c943c397020f20525b4`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => this.setState({data}))
      .catch(err => console.log("There has been error"))
  }

  componentWillReceiveProps({url}) {
    if(url !== this.props.url && url !== ''){
      this.setState({
        url,
        mounted: true
      }, this.loadContent)   
    }
  }

  componentDidMount(){
    if(this.props.url !== '') {
      this.loadContent()
      this.setState({
        mounted: true
      })
    }
  }

	render() {
	    let titleList = ''
        const results = this.state.data.results

        if(results){

	        titleList = results.map((title, i) => {

                let component = <div key={title.id}></div>

                if(i < 10){

                  let name = (!title.name) ? title.original_title : title.name;

                  const backDrop = `http://image.tmdb.org/t/p/original${title.backdrop_path}`;

                  component = (

                    <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop}/>
                  )
                }
                return component
              })
        }

		return(
			<div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titleList}
          </div>
        </div>
      </div>
		)
	}
}