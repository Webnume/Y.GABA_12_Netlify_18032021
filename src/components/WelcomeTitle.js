import React, { useState, useEffect } from "react";
import { getWelcomeTitleData } from "../services/dataManager";

/**
 * Component that display name & the congratulations message 
 * from user main data
 */
const WelcomeTitle = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getWelcomeTitleData().then((response) => {
      setPost(response);
    });
  }, []);
  if (!post) return null;

  return (
    <section className="mainTop">
      <h1>
        Bonjour{" "}
        <span style={{ color: "#ff0000" }}>
          {post.data.userInfos.firstName}
        </span>{" "}
      </h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
    </section>
  );
};

export default WelcomeTitle;
