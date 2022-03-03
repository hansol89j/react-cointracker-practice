import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useQuery } from "react-query";
import { fetchCoins } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 25px;
  float: left;
  margin-right: 15px;
  position: relative;
  top: -0.5vh;
`;

const CoinsList = styled.ul``;
const Coin = styled.li`  
  color: ${props => props.theme.textColor};
  padding: 20px;
  border: 1px solid ${props => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
  a {
    display: block;
    margin-left: 15px;
    //text-align:center;
    color:black;
  }
  &:hover {
    font-size: 15px;
    font-weight: bold;
    border-bottom: 5px solid #ffffff;
  }
`;
const Title = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 50px;
`;

interface Icoins{
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new:boolean,
  is_active: boolean,
  type: string
}

function Coins(){
  const { isLoading, data } = useQuery<Icoins[]>("allCoins", fetchCoins);

  return(
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? "Loading..." : (
        <CoinsList>
          {data?.slice(0,50).map(coin =>
            <Coin key={coin.id}>
              <Link to={`/coin/${coin.id}`} state={{name: coin.name}}>
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                {coin.name}
              </Link>
            </Coin> 
          )}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;