import React, { useState, useEffect } from "react";
import { getWelcomeTitleData } from "../services/dataManager";
import CardKeyInfo from "./CardKeyInfo";
import CaloriesIcon from "../asset/images/calories-icon.svg";
import ProteinesIcon from "../asset/images/protein-icon.svg";
import GlucidesIcon from "../asset/images/carbs-icon.svg";
import LipidesIcon from "../asset/images/fat-icon.svg";

/**
 * Component that use Recharts API to display graphics 
 * from user main data
 */
const CardKeysInfos = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getWelcomeTitleData().then((response) => {
      setPost(response);
    });
  }, []);
  if (!post) return  "Désolé il y'a une erreur";
  const data = post.data;

  return (
    <section className="cardsKeysInfos">
      <CardKeyInfo
        img={CaloriesIcon}
        count={data.keyData.calorieCount}
        unit="kCal"
        name="Calories"
      />
      <CardKeyInfo
        img={ProteinesIcon}
        count={data.keyData.proteinCount}
        unit="g"
        name="Proteines"
      />
      <CardKeyInfo
        img={GlucidesIcon}
        count={data.keyData.carbohydrateCount}
        unit="g"
        name="Glucides"
      />
      <CardKeyInfo
        img={LipidesIcon}
        count={data.keyData.lipidCount}
        unit="g"
        name="Lipides"
      />
    </section>
  );
};

export default CardKeysInfos;
