import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div``;

const Header = styled.div``;

const CoinsList = styled.ul``;
const Coin = styled.li`  
  color: ${props => props.theme.textColor};
  padding: 20px;
  border: 1px solid ${props => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: block;
  }
  &:hover {
    color: ${props => props.theme.accentColor};
    font-weight: bold;
    border-bottom: 5px solid ${props => props.theme.accentColor};
  }
`;
const Title = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 50px;
`;
//coin top3 api 호출
const coins = [
  {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "is_new": false,
    "is_active": true,
    "type": "coin"
  },
  {
    "id": "eth-ethereum",
    "name": "Ethereum",
    "symbol": "ETH",
    "rank": 2,
    "is_new": false,
    "is_active": true,
    "type": "coin"
  },
  {
    "id": "bnb-binance-coin",
    "name": "Binance Coin",
    "symbol": "BNB",
    "rank": 3,
    "is_new": false,
    "is_active": true,
    "type": "coin"
  },
]

function Coins(){
  return(
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`./coin/${coin.id}`}>
              {coin.name}
            </Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}

export default Coins;