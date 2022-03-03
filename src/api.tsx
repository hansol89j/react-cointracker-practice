const BASE_URL = `https://api.coinpaprika.com/v1/coins`;

export async function fetchCoins(){
  return await( await fetch(`${BASE_URL}`)).json();
}