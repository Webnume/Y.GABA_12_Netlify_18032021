import React, { useState, useEffect } from "react";
import { getWelcomeTitleData } from "../services/dataManager";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * Component that use Recharts API to display graphics
 * from user main data
 */
const RadialBarChartScore = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getWelcomeTitleData().then((response) => {
      setPost(response);
      setIsLoading(false);
    });
  }, []);
  // if (!post) return  "Désolé il y'a une erreur";

  const data = [];
  data.push(post);

  const renderLegend = () => {
    return (
      <div className="customized-legend">
        <div className="legend">
          <h4
            style={{
              position: "absolute",
              top: "-10%",
              left: "30%",
              color: "#20253A",
            }}
          >
            Score
          </h4>
          <div
            style={{
              backgroundColor: "white",
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              position: "absolute",
              top: "28%",
              left: "57%",
            }}
          >
            <span
              style={{
                position: "absolute",
                fontSize: "26px",
                fontWeight: "700",
                top: "25%",
                left: "37%",
                color: "#20253A",
              }}
            >
              {data[0].score * 100}%
            </span>
            <p
              style={{
                position: "absolute",
                fontSize: "16px",
                fontWeight: "500",
                width: "100px",
                top: "39%",
                left: "32%",
                color: "#74798C",
              }}
            >
              de votre objectif
            </p>
          </div>
        </div>
      </div>
    );
  };

  /**
   * Convert percentage to angle. (100% = 360deg)
   * @param {number} pourcentage
   * @returns number
   */
  const pourcentageToDegree = (pourcentage) => {
    return (pourcentage * 360) / 100;
  };

  return (
    <section className="radialBarChartScore">
    
    {isLoading ? (
        <p>Loading ...</p>
      ) : (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="120%"
          outerRadius="140%"
          data={data}
          startAngle={180}
          endAngle={180 - pourcentageToDegree(data[0]?.score * 100)}
        >
          <RadialBar
            minAngle={15}
            // label={{ fill: "#282D30", position: "center", fontSize: "26px" }}
            background
            clockWise={true}
            dataKey="score"
            fill="red"
            cornerRadius={10}
            legendType="square"
          />
          <Legend
            iconSize={10}
            iconType="circle"
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ top: 20, left: -10 }}
            content={renderLegend}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      )}
    </section>
  );
};

export default RadialBarChartScore;
