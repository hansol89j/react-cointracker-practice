import {fetchCoinHistory} from '../api';
import {useQuery} from 'react-query';
import ApexChart from 'react-apexcharts';
import {useParams} from 'react-router';

interface IHistorical{
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart(){
  const {coinId} = useParams();
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId),{
    refetchInterval: 10000,
  });

  return (
    <div>    
    { isLoading ? "Loading chart..." : (
      < ApexChart 
      type = "line"
      series = {[
        {
          name: "Price",
          data: data?.map(price => price.close),
        },          
      ]}
      options = {{
        theme: {
          mode: "dark",
        },         
        chart: {
          height: 300,
          width: 300,
          toolbar: {
            show: false,
          },
          background: "transparant"
        },
        stroke: {
          curve: "smooth",
          width: 5,
        },
        grid: {
          show: false,
        },
        xaxis: {
          axisBorder: {show: true},
          axisTicks: {show: true},
          labels: {show: true},
          type: "datetime",
          categories: data?.map(price => price.time_close)
        },
        yaxis: {
          show: false,
        },
        fill: { 
          type: "gradient", 
          gradient: {
            type: "horizontal",
            gradientToColors: ["#0be881"],
            stops: [0, 100],              
          },
        },
        colors: ["#0fbcf9"],
        tooltip: {
          y: {
            formatter: (value) => `$ ${value.toFixed(2)}`,
          },
        }
      }}
      />
      )}
  </div>
  );
}

export default Chart;