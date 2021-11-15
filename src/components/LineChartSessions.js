import React, { useState, useEffect, PureComponent } from "react";
import { getLineCharData } from "../services/dataManager";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

/**
 * Component that use Recharts API to display graphics
 * from user average sessions data
 */
const LineChartSessions = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getLineCharData().then((response) => {
      setPost(response);
    });
  }, []);
  if (!post) return  "Désolé il y'a une erreur";

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul style={{ listStyle: "none", color: "white" }}>
        {payload.map((index) => (
          <li key={`item-${index}`}>Durée moyenne des sessions</li>
        ))}
      </ul>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "white",
            padding: "0.1rem 0.5rem",
            textAlign: "center",
            color: "black",
          }}
        >
          <p className="label">{`${payload[0].value}min`}</p>
        </div>
      );
    }

    return null;
  };

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;

      switch (payload.value) {
        case 1:
          payload.value = "L";
          break;
        case 2:
          payload.value = "M";
          break;
        case 3:
          payload.value = "M";
          break;
        case 4:
          payload.value = "J";
          break;
        case 5:
          payload.value = "V";
          break;
        case 6:
          payload.value = "S";
          break;
        case 7:
          payload.value = "D";
          break;
        default:
      }

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#fff"
            fontSize="12px"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  const data = post.data.sessions;
  return (
    <section className="lineChartSession">
      <ResponsiveContainer>
        <LineChart
          width={258}
          height={263}
          data={data}
          margin={{ top: 100, right: 10, left: 10, bottom: -50 }}
        >
          <CartesianGrid horizontal={false} vertical={false} fill="#ff0000" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={<CustomizedAxisTick />}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ top: 20, left: -10 }}
            content={renderLegend}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#fff"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default LineChartSessions;
