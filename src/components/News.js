/*import React, { useEffect,useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  articles= [
    {
      "source": { "id": null, "name": "The New Yorker" },
      "author": "Simon Webster",
      "title": "Understanding the Laws of Cricket",
      "description": "My hope is that these brief and straightforward instructions will bring legions of new fans into the British Empire—I mean, global cricket family.",
      "url": "https://www.newyorker.com/humor/daily-shouts/understanding-the-laws-of-cricket",
      "urlToImage": "https://media.newyorker.com/photos/6579d39668872af306a7c711/16:9/w_1280,c_limit/Webster-Shouts-Cricket.jpg",
      "publishedAt": "2023-12-14T11:00:00Z",
      "content": "Cricket is the second most popular sport in the world, with some two and a half billion fans globally, including several Americans. And theres always room for more, which is why Ive prepared this sho… [+4172 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Usman Khawaja: Cricket Australia warns batter against making Gaza message",
      "description": "The Australian batter had planned to wear shoes bearing the words \"all lives are equal\" during a Test.",
      "url": "https://www.bbc.co.uk/news/world-australia-67700408",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DE29/production/_132037865_gettyimages-1846372164.jpg",
      "publishedAt": "2023-12-13T05:12:15Z",
      "content": "Australian cricketer Usman Khawaja has been warned against showing an on-field message in support of Palestinians at a Test match against Pakistan.\r\nThe batter had planned to wear shoes bearing the w… [+1424 chars]"
    },
    {
      "source": { "id": null, "name": "XDA Developers" },
      "author": "Christopher Burke",
      "title": "How to download Cricket 07 in Windows 11",
      "description": "Although Cricket games are no longer made by EA, you can still play the classic Cricket 07 on Windows 11",
      "url": "https://www.xda-developers.com/how-download-cricket-07-windows/",
      "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/12/77.png",
      "publishedAt": "2023-12-23T12:00:25Z",
      "content": "EA was the king of sports games in the early 2000s, covering nearly every major sport. Cricket was one of the recurring titles in the EA Sports franchise. But, by the end of the decade, EA stopped pr… [+4660 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Blackpool Tower fire: Five other times people were fooled by false alarms",
      "description": "After orange netting was mistaken for flames, we revisit five other big public \"whoops\" moments.",
      "url": "https://www.bbc.co.uk/news/uk-67802959",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/84C2/production/_132168933_01hjrkww9b6na25se5xhhmv2ev.jpg",
      "publishedAt": "2023-12-29T14:15:20Z",
      "content": "Things are not always what they seem. And there is no better example of that old adage than Blackpool Tower and the fire that never was.\r\nOn Thursday, six fire engines, a drone team and a rope-rescue… [+3911 chars]"
    }
  ]


        const capitalizefirstletter = (string)=>{
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const updateNews = async()=>{
          props.setProgress(10);
          let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
          setLoading(true);
      let data=await fetch(url);
      props.setProgress(30);
      let parsedData= await data.json()
      this.props.setProgress(30);
      console.log(parsedData);
      this.setState({articles:parsedData.articles,totalResults: parsedData.totalResults,
        loading:false
      });
      props.setProgress(100);
      }
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
    useEffect(()=>{
      document.title = `NewsMonkey - ${capitalizefirstletter(props.category)}`;
      updateNews();
    },[])
      fetchMoreData = async() => {
        this.setState({page: this.state.page + 1});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
         // const handleNextClick = async()=>{
  //   setPage(page+1);
  //   updateNews();
  // }

  // const handlePreviousClick = async()=>{
  //   setPage(page-1);
  //   updateNews();
  // }

  const fetchMoreData = async() => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        // setLoading(false);
      };
    

     
   return (
        <>
              <h1 className="text-center" style={{margin: '35px 0px',marginTop: '80px'}} >NewsMonkey - Top {capitalizefirstletter(props.category)} Headlines </h1>
        {loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row">
            {articles.map((element,index)=>{
              return <div className="col-md-4" key={index}>
                        <Newsitem title={element.title?(element.title.length>=45?element.title.slice(0, 45):element.title):""} 
                        description={element.description?(element.description.length>=60?element.description.slice(0, 60):element.description):""} 
                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
            })}
          </div>

          </div>
        </InfiniteScroll>

      </>

    )
  }


  News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  
  
  export default <News></News>*/
  import React,{useEffect,useState} from 'react';
import NewsItem from './Newsitem.js';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);

  const capitalizefirstletter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `NewsMonkey - ${capitalizefirstletter(props.category)}`;
    updateNews();
  },[])

  // const handleNextClick = async()=>{
  //   setPage(page+1);
  //   updateNews();
  // }
  
  // const handlePreviousClick = async()=>{
  //   setPage(page-1);
  //   updateNews();
  // }

  const fetchMoreData = async() => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // setLoading(false);
  };

    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px',marginTop: '80px'}} >NewsMonkey - Top {capitalizefirstletter(props.category)} Headlines </h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row">
            {articles.map((element,index)=>{
              return <div className="col-md-4" key={index}>
                        <NewsItem title={element.title?(element.title.length>=45?element.title.slice(0, 45):element.title):""} 
                        description={element.description?(element.description.length>=60?element.description.slice(0, 60):element.description):""} 
                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
            })}
          </div>

          </div>
        </InfiniteScroll>

      </>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News

