import React from 'react'
import { Line } from "react-chartjs-2"
import { Col, Row, Typography } from 'antd'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    if (coinHistory && coinHistory.data) {
        var LineChartDetails = coinHistory.data;
    }

    const coinPrice = [];
    const coinTimestamp = [];
    const length = LineChartDetails && LineChartDetails.history.length;

     for(let i=0;i<length;i += 1){
        coinPrice.push(LineChartDetails.history[i].price)
        coinTimestamp.push(new Date(LineChartDetails.history[i].timestamp).toLocaleDateString())
        console.log(coinTimestamp)
    } 


    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines:{
                        color:'white'
                    }
                }
            ]
        }
    }
    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart</Title>
                <Col className="price-conatainer">
                    <Title level={5} className="price-change">Change: {coinHistory && coinHistory.data.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price:${currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart