import React from 'react';
 import "../App.css"
const News = ({news:{articles}}) => {
 
 
  return (
  <>
        {
            articles?.map((news) => {
              return (
                 <div className="news-card">  
                   <img src={news.urlToImage} alt=" loading.." height={200} width={250}/>
                   <p className='text'>
                   { news.title}
                  </p>
                  <a rel="noreferrer" href={news.url} target="_blank">
                 <button>
                  read more
                 </button>
                 </a>
                </div>
             ) })
        }
        </>
  )
}

export default News