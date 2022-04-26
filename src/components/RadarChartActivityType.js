import React, { useState, useEffect } from "react";
import { getRadarCharData } from "../services/dataManager";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

/**
 * Component that use Recharts API to display graphics
 * from user performance data
 */
const RadarChartActivityType = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRadarCharData().then((response) => {
      setPost(response);
      setIsLoading(false);
    });
  }, []);
  // if (!post) return "Désolé il y'a une erreur";
  // const data = post;

  /**
   * Reverse the input array
   * @param {array} input
   * @returns {array}
   */
  function reverseArr(input) {
    var ret = [];
    for (var i = input?.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }

  for (let i = 0; i < post?.data.length; i++) {
    const element = post.data[i];
    switch (element.kind) {
      case 1:
        element.kind = "Cardio";
        break;
      case 2:
        element.kind = "Energie";
        break;
      case 3:
        element.kind = "Endurance";
        break;
      case 4:
        element.kind = "Force";
        break;
      case 5:
        element.kind = "Vitesse";
        break;
      case 6:
        element.kind = "Intensité";
        break;
      default:
        break;
    }
  }

  return (
    <section className="radarChartActivityType">
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ResponsiveContainer>
          <RadarChart
            outerRadius={70}
            data={reverseArr(post?.data)}
            fill="white"
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis style={{ fontSize: "12px" }} dataKey="kind" />
            <Radar
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </section>
  );
};

export default RadarChartActivityType;
