import React from "react";
import {
  UserStore,
  ModalStore,
  SnackbarStore,
  PanelStore,
  WsStore,
} from "../stores";

export const stores = {
  UserStore: new UserStore(),
  ModalStore: new ModalStore(),
  SnackbarStore: new SnackbarStore(),
  PanelStore: new PanelStore(),
  WsStore: new WsStore(),
};

export const storesContext = React.createContext(stores);
