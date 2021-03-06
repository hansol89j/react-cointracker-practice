import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Chart from './routes/Chart';
import Price from './routes/Price';


function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/:coinId/price" element={<Price/>} />
        <Route path="/:coinId/chart" element={<Chart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;