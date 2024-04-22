import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/CryptoAPI'
import { Cryptocurrencies, News } from '../components'

const { Title } = Typography;             /* destructured the Typography.Title because we are using this many times here and to reduce the complexity. */


const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);


  if (data && data.data) {
    console.log(true);
  }

  if (isFetching) {

    return <div className="spin-loader">
    <Spin tip="Loading..." size="large"></Spin>
    </div>
  }

  return (
    <>
      <Title level={2} className="heading">Global Crypto Statistics</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(data.data.stats.total)} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(data.data.stats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(data.data.stats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(data.data.stats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(data.data.stats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurriencies in the world</Title>
        <Title level={5} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={5} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage