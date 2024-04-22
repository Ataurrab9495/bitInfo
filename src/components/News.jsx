import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card, Spin } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/CryptoNewsAPI'
import { useGetCryptosQuery } from '../services/CryptoAPI'


const demoImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JSMx9BgPFcQvaEdsVLA5j8W8vVo9gXEctA&usqp=CAU';

const { Title, Text } = Typography;
const { Option } = Select;

// its data is not coming because the api is not working
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const count = simplified ? 8 : 15;
  /* const { data: cryptoNews, isFetching, isError } = useGetCryptoNewsQuery({ newsCategory, count }) */    /*fetching the news data */
  const { data } = useGetCryptosQuery(100);              /* fetching the coins data for select and search */

  console.log(data)

  /* if (isError) console.log(isError.message)  */          /* for getting an error */

  /* if (isFetching) {
    return <div className="spin-loader">
      <Spin tip="Loading..." size="large"></Spin>
    </div>
  } */

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data && data.coins.map((coin, idx) => (
              <Option value={coin.name} key={idx}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}

      {/* {
        cryptoNews.value && cryptoNews.value.map((news, index) =>
        (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={5}>{news.name}</Title>
                  <img src={demoImage} alt="news" className="img" />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description
                  }
                </p>
                <div className="provider-container">
                  <Avatar src={demoImage} alt="avtr" />
                  <Text className="provider-name">{news.provider[0].name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </a>
            </Card>
          </Col>
        ))} */}
    </Row>
  )
}

export default News