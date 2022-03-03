import { useParams, useLocation} from "react-router";
import {  Route } from "react-router-dom";
import { useState } from "react";
import { fetchCoinInfo, fetchCoins, fetchCoinTickers } from "../api";
import { useQuery } from "react-query";
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 200px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #9d27d3f9;
  font-size: 50px;
`;

const Loader = styled.div`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #59767e6d;
  padding: 10px 20px;
  border-radius: 10px; 
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0;
`;

interface CoinInfo{
  id : string;
  name : string;
  symbol : string;
  rank : number;
  is_new : boolean;
  is_active : boolean;
  type : string;
  contract : string;
  platform : string;
  description : string;
  message : string;
  open_source : boolean;
  started_at : string;
  development_status : string;
  hardware_wallet : boolean;
  proof_type : string;
  org_structure : string;
  hash_algorithm : string;
  first_data_at : string;
  last_data_at : string;
}

interface PriceData{
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  //quotes: object;
  quotes : {
    USD: {
      ath_date: string
      ath_price: number
      market_cap: number
      market_cap_change_24h: number
      percent_change_1h: number
      percent_change_1y: number
      percent_change_6h: number
      percent_change_7d: number
      percent_change_12h: number
      percent_change_15m: number
      percent_change_24h: number
      percent_change_30d: number
      percent_change_30m: number
      percent_from_price_ath: number
      price: number
      volume_24h: number
      volume_24h_change_24h: number
    }    
  }
}

interface RouteState{
  state: {
    name: string;
  };
}

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const {isLoading: infoLoading, data: infoData} = useQuery<CoinInfo>(["info", coinId], () => fetchCoinInfo(coinId));
  const {isLoading: tickersLoading, data: tickerData} = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId));
  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Header>
        <Title>{state.name}</Title>
      </Header>
      {loading ? <Loader>loading...</Loader> : null}
      <>
        <Overview>
          <OverviewItem>
            <span>Rank: </span>
            <span>{infoData?.rank}</span>            
          </OverviewItem>
          <OverviewItem>
            <span>Symbol: </span>
            <span>{infoData?.symbol}</span>            
          </OverviewItem>
          <OverviewItem>
            <span>price: </span>
            <span></span>            
          </OverviewItem>
        </Overview>
        <Description>
          {infoData?.description}
        </Description>
        <Overview>
          <OverviewItem>
            <span>Total Supply: </span>
            <span>{tickerData?.total_supply}</span>            
          </OverviewItem>
          <OverviewItem>
            <span>Max Supply: </span>
            <span>{tickerData?.max_supply}</span>            
          </OverviewItem>
        </Overview>
      </>
    </Container>    
  );
}

export default Coin; 