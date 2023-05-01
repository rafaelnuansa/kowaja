import React from "react";
import { Card } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page 1", uv: 900, pv: 2400, amt: 2400 },
  { name: "Page 2", uv: 1500, pv: 1398, amt: 2210 },
  { name: "Page 3", uv: 4500, pv: 9800, amt: 2290 },
  { name: "Page 4", uv: 1500, pv: 3908, amt: 2000 },
  { name: "Page 5", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page 6", uv: 2390, pv: 3800, amt: 2500 },
];

const TinyBarChartCard = () => {
  return (
    <Card className="card-kowaja-users-dashboard">
      <Card.Body>
        <h6 className="font-1 fw-600 card-title">Users</h6>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data}>
            <Bar dataKey="uv" fill="#34A12C" barSize={45} radius={[0, 0, 0, 0]} />
            <XAxis dataKey="name" hide={true} />
            <YAxis hide={true} />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default TinyBarChartCard;
