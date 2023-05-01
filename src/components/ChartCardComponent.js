import React from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const ChartCardComponent = ({ title, data }) => {
   
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Line data={data} options={options} />
      </Card.Body>
    </Card>
  );
};

export default ChartCardComponent;
