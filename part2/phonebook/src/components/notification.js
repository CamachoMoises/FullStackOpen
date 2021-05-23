import React from "react";

const Notification = ({ message, type }) => {
  if (message === "") return null;
  let color;
  if (type === "successful") {
    color = "green";
  } else {
    color = "red";
  }
  const notificationStyle = {
    color: color,
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
