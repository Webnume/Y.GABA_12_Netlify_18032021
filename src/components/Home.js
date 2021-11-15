import React from "react";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";

/** home where you have to choose one of the users to click on */
const Home = () => {
  return (
    <main>
      <SideMenu />
      <div style={{ display: "flex", flexDirection: "column",    alignItems: "center", justifyContent: "center", width:"700px", height:"800px" }}>
        Cliquez sur l'id d'un utilisateur pour voir ses statistiques :
        <Link to="/user/12">User 1</Link>
        <Link to="/user/18">User 2</Link>
      </div>
    </main>
  );
};

export default Home;
