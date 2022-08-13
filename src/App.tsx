import React, {useState, useEffect} from "react";

import "antd/dist/antd.css";
import "./index.scss";

import {RootModal} from "./components/Modals/RootModal";
import {Router, Redirect} from "@reach/router";
import {routeUrl} from "./utils/constants";
import {Dashboard} from "./pages/Dashboard";
import {observer} from "mobx-react-lite";
import {useStores} from "./hooks/useStores";
import {useGetUserInfo} from "./utils/hooks";

const App: React.FC = observer(() => {
  // Стейт запуска
  // const isDesktop = window.innerWidth >= 1000;
  const {UserStore, SnackbarStore, ModalStore, PanelStore} = useStores();

  // const [popout, setPopout] = useState(null);
  // const [wsConnecting, setWsConnecting] = useState(false);

  const userInfo = useGetUserInfo();

  const [userToken, setUserToken] = useState<string>("");

  // useEffect(() => {
  //   if (userInfo) {
  //     const loginUser = async () => {
  //       const token = await API.user.loginUser(userInfo);

  //       UserStore.setUserToken("dsfsd");
  //     };
  //     loginUser();
  //   }
  // }, [userInfo]);

  useEffect(() => {
    console.log("UserStore", UserStore.token);
  }, [UserStore.token]);

  return (
    <>
      <Router basepath={routeUrl === "" ? "/" : routeUrl}>
        <Dashboard path="dashboard" />
        <Redirect from="/" to={`${routeUrl}/dashboard`} noThrow />
      </Router>
      {/* <Footer /> */}
      <RootModal />
    </>
  );
});

export default App;
