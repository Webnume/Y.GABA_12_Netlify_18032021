import React from "react";
import menuIcon1 from "../asset/images/menu_Icon1.svg";
import menuIcon2 from "../asset/images/menu_Icon2.svg";
import menuIcon3 from "../asset/images/menu_Icon3.svg";
import menuIcon4 from "../asset/images/menu_Icon4.svg";

/**side menu on left */
const SideMenu = () => {
  return (
    <div className="sideMenu">
      <img src={menuIcon1} alt="" />
      <img src={menuIcon2} alt="" />
      <img src={menuIcon3} alt="" />
      <img src={menuIcon4} alt="" />
      <span className="copyright">Copyright, SportSee 2020</span>
    </div>
  );
};

export default SideMenu;
