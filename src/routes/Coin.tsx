import styled from 'styled-components';
import {useParams} from 'react-router'; 

interface RouteParams {
  coinId: string,
}

function Coin(){
  const {coinId} = useParams<RouteParams>();

  return(
    <h1>Coin: {coinId}</h1>
  );
}

export default Coin;