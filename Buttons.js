import React from "react";
import "./Buttons.css";

/* n9dru nder chhal ma bghena nd boutons unb9aw nkhdmuhum mn hna  */

const PrimaryButton = (props) => {
  return (
    <div className="button primary-btn ">
      <a href="#"> {props.children}</a>
    </div>
  );
};
const SecondaryButton = (props) => {
  return (
    <div className="button secondary-btn">
      <a href="#"> {props.children}</a>
    </div>
  );
};

export default PrimaryButton;
export { SecondaryButton };
