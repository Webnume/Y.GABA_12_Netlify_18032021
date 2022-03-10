import React, { useState, useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  Surface,
  Symbols,
} from "recharts";
import { getBarCharData } from "../services/dataManager";

/**
 * Component that use Recharts API to display graphics
 * from user activity data
 */
const BarChartActivity = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getBarCharData().then((response) => {
      setPost(response);
    });
  }, []);
  if (!post) return "Désolé il y'a une erreur";

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "0.5rem",
            textAlign: "center",
          }}
        >
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{` ${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  const data = post.sessions;
  const XAxisTickFormatter = (tick) => {
    const date = tick++;
    return date + 1;
  };

  const renderLegend = () => {
    return (
      <div className="customized-legend">
        <div className="legend">
          <h3 style={{ position: "absolute", left: "2rem" }}>
            Activité quotidienne
          </h3>
          <div className="legend-right">
            <Surface width={10} height={10}>
              <Symbols cx={5} cy={5} type="circle" size={50} />
            </Surface>
            <span
              style={{
                marginLeft: "1rem",
                color: "#74798C",
                marginRight: "40px",
              }}
            >
              Poids (kg)
            </span>
            <Surface width={10} height={10}>
              <Symbols cx={5} cy={5} type="circle" fill="red" size={50} />
            </Surface>
            <span style={{ marginLeft: "1rem", color: "#74798C" }}>
              Calories brûlées (kCal)
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="barChartActivity">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="barChartActivity"
      >
        <BarChart data={data} margin={{ top: 40, right: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis tickLine={false} tickFormatter={XAxisTickFormatter} />
          <YAxis orientation="right" axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ top: "0px" }} content={renderLegend} />
          <Bar
            dataKey="kilogram"
            barSize={10}
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            barSize={10}
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default BarChartActivity;
