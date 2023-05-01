import React from "react";
import { Card } from "react-bootstrap";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", uv: 80 },
  { name: "Page B", uv: 20 },
  { name: "Page C", uv: 200 },
  { name: "Page D", uv: 30 },
  { name: "Page E", uv: 100 },
  { name: "Page E", uv: 0 },
];

const TinyLineChartCard = () => {
  return (
    <Card className="border-0">
      <Card.Body>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#1A5016" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default TinyLineChartCard;
