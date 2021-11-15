import React from "react";
import SideMenu from "./SideMenu";
import WelcomeTitle from "./WelcomeTitle";
import BarChartActivity from "./BarChartActivity";
import LineChartSessions from "./LineChartSessions";
import RadarChartActivityType from "./RadarChartActivityType";
import RadialBarChartScore from "./RadialBarChartScore";
import CardsKeysInfos from "./CardsKeysInfos";
import { useParams } from "react-router";
import { setCurrentUser } from "../services/dataManager";

/** main container & setting of current user id  */
const Main = () => {
  let params = useParams();
  setCurrentUser(params.id);
  return (
    <main>
      <SideMenu />
      <div className="mainContent">
        <WelcomeTitle />
        <div className="mainContainer">
          <div className="left">
            <BarChartActivity />
            <LineChartSessions />
            <RadarChartActivityType />
            <RadialBarChartScore />
          </div>
          <div className="right">
            <CardsKeysInfos />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
