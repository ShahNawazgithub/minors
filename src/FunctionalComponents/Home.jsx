import React, {useState,useEffect} from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home (props) {
  
  var [articles,setarticles]= useState([])
  var [totalResults,settotalResults]=useState(0)
  var [page,setpage]= useState(1)
  let getAPIData = async () => {
    var response = ""
    // alert(this.props.search)
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=1&pageSize=23&language=${this.props.language}&apiKey=0cd0338dda7a4ddba3a389f673bf44f8`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=1&pageSize=23&language=${this.props.language}&apiKey=0cd0338dda7a4ddba3a389f673bf44f8`)
    // console.log(response);
    var result = await response.json()
    console.log(result);
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
      page:1
    })
  }
  let fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    var response = ""
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&pageSize=23&language=${this.props.language}&apiKey=0cd0338dda7a4ddba3a389f673bf44f8`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=23&language=${this.props.language}&apiKey=0cd0338dda7a4ddba3a389f673bf44f8`)

    var result = await response.json()
    console.log(result);
    this.setState({
      articles: this.state.articles.concat(result.articles) })
  }
  componentDidMount() {
    this.getAPIData()
  }

  componentDidUpdate(oldProps) {
    if (this.props !== oldProps) {
      this.getAPIData()
    }
  }
  render() {
    return (
      <>
        <div className="container-fluid my-2 ">
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length < this.state.totalResults}
              loader={<h4>Loading...</h4>}
            >
          <div className="row">
              <h5 className='background text-light text-center p-2 '>{this.props.q}</h5>
              {
                this.state.articles.map((item, index) => {
                  return <NewsItems
                    key={index}
                    pic={item.urlToImage}
                    date={item.publishedAt}
                    source={item.source.name}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                  />
                })
              }
          </div>
            </InfiniteScroll>
        </div>



      </>
    )
  }
}
