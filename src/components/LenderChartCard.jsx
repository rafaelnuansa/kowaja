import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", uv: 80 },
  { name: "Page B", uv: 20 },
  { name: "Page C", uv: 200 },
  { name: "Page D", uv: 30 },
  { name: "Page E", uv: 100 },
  { name: "Page E", uv: 0 },
];



const LenderChartCard = () => {
  return (
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#F3C522" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
  );
};

export default LenderChartCard;
