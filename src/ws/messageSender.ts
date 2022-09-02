// import { stores } from "../contexts";

export const wsButtonPress = () => {
  console.log("wsButtonPress");

  global.wsSend("", "button_press");
};
