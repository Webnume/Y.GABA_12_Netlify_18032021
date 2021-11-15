import React from "react";

const CardKeyInfo =  (props) => {
    return (
      <section className="cardKeyInfo">
        <img src={props.img} alt="" />
        <div className="imgSide">
          <h2>{props.count / 1000}{props.unit}</h2>
          <h3>{props.name}</h3>
        </div>
      </section>
    );    
}

export default CardKeyInfo;