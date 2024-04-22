import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Input, Spin } from 'antd';
import { useGetCryptosQuery } from '../services/CryptoAPI';

const Cryptocurriencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  if (cryptos && cryptos.data) {
    return
  }

  useEffect(() => {
    const filteredData = cryptoList && cryptoList.data.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)
  }, [cryptoList, searchTerm])

  if (isFetching) {
    return <div className="spin-loader">
    <Spin tip="Loading..." size="large"></Spin>
    </div>
  }

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos && (
          cryptos.map((currency, index) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}.${currency.name}`}
                  extra={<img src={currency.iconUrl} alt="coin-img" className="crypto-image" />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))
        )
        }
      </Row>
    </>
  )
}

export default Cryptocurriencies