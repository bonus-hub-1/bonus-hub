import {observable, action, makeObservable} from "mobx";

export class UserStore {
  loading = false;
  userInfo = null;
  groups = [];
  token = "";

  setUserInfo = (data: any) => {
    this.userInfo = data;
  };

  setUserGroups = (data: any) => {
    this.groups = data;
  };

  setUserToken = (token: string) => {
    this.token = token;
  };

  resetStore = () => {
    this.loading = false;
    this.userInfo = null;
  };

  constructor() {
    makeObservable(this, {
      loading: observable,
      userInfo: observable,
      groups: observable,
      token: observable,
      resetStore: action,
      setUserInfo: action,
      setUserGroups: action,
      setUserToken: action,
    });
  }
}
