import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'


const home = () => {
  return (
    <>
      <Main/>
      <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming}/>
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID='4' title='Horror' fetchURL={requests.requestHorror}/>
      <Row rowID='5' title='TopRated' fetchURL={requests.requestTopRated}/>
    </>
  )
}

export default home
