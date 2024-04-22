import React from "react";
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Exchange, News, CryptoDetails, Cryptocurrencies } from "./components"

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />                {/* here coinId is dynamic */}
              {/* <Route path="/news" element={<News />} /> */}
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Crypto App <br />
            All Rights are Reserved.
          </Typography.Title>
          <Space>                   {/* Space we use in Ant Design to declare a div */}
            <Link to="/">Home</Link>
            {/* <Link to="/news">News</Link> */}
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
