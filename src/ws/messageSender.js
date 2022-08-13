// import { stores } from "../contexts";

export const wsGetUser = () => {
  global.wsSend("get-user");
};
