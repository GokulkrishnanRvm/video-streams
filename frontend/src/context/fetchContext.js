import React, { useState, useContext, useRef, useEffect } from 'react'
import axios from 'axios'



const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [loading, setIsLoading] = useState(false);
  const [video, setVideo] = useState([]);
  const [query, setQuery] = useState('people');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [news, setNews] = useState(false);
  const mounted = useRef(false)

  const fetchData = async () => {
    if (query) {
      setIsLoading(true);
      axios.get(`https://api.pexels.com/videos/search?query=${query}&${page}`, {
        headers: {
          Authorization: process.env.REACT_APP_MOVIE_API_KEY
        }
      })

        .then((response) => {
          const value = response.data.videos;
          //  console.log(value);
          if (value) {
            const newVideos = value.map((item) => {
              const {
                video_files,
                //  video_pictures,
                //  url
              } = item;
              return {
                urls: video_files.pop().link,

              }
            })
            setVideo((old) => {
              if (query && page === 1) {
                return newVideos
              }
              else {
                return [...old, ...newVideos]
              }
            });
          }
          else {
            setVideo([])
          }
          setNews(false);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setNews(false);
          setIsLoading(true);
          setError(true);
        })
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [query, page])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return
    }
    if (!news) return
    if (loading) return
    setPage((oldPage) => oldPage + 1)
    // eslint-disable-next-line
  }, [news])

  const event = () => {
    if (window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 2) {
      setNews(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider value={{ setQuery, query, page, setPage, video, setIsLoading, loading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
