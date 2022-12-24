import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { News, Cryptocurencies } from "../component";
import Loader from "./Loader";

const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalstats = data?.data?.stats;
  if (isFetching) return <Loader />;
  return (
    <div>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total cryptocurrencies" value={globalstats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalstats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalstats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalstats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalstats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/crytocurrencies">show more</Link>
        </Title>
      </div>
      <Cryptocurencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Lastest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">show more</Link>
        </Title>
      </div>
      <News simplified />
    </div>
  );
};

export default HomePage;
