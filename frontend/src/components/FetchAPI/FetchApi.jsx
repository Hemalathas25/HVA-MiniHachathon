import SearchBox from './components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const News = () => {
    const dispatch = useDispatch()
    const { news, loading, error } = useSelector(state => state.news)
    useEffect(() => {
        dispatch(fetchData())
    },[])

    const data = news.articles 

    const [searchQuery, setSearchQuery] = useState('')
    const searchNews = (query) => {
        setSearchQuery(query)
    }

    let fileredData = data
    if (searchQuery){
        fileredData = data.filer(articles => articles.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error.message}</h1>
    if (!data) return <h1>No data found.</h1>

    return (
        <>
        <SearchBox searchNews={searchNews} />
        <h1 className='red'>Latest News</h1>
        <div className='main'>
            {filteredData.map((data,index) => (
               <div key={index} className='news'> 
               <img src={data.urlToImage} alt={data.title}/>
               <h3 className='news-title'>{data.title}</h3>
               <h4 className='des'>{data.description}</h4>
               <h5>Read full article <a href={data.url} target='_blank'>➞</a></h5>
               </div>
            ))}
        </div>
        </>
    )
}

export default News;