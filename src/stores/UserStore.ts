import {observable, action, makeObservable} from "mobx";
import {RecentsType, UserInfoType} from "../types/user";

export class UserStore {
  loading = false;
  token = "";
  timer = "";
  hasTries = 0;
  recents: RecentsType[] = [];
  refersCount = 0;

  setUserInfo = (data: UserInfoType) => {
    this.hasTries = data.has_tries;
    this.timer = data.timer;
    this.recents = data.recents;
    this.refersCount = data.refers_count;
  };

  setUserToken = (token: string) => {
    this.token = token;
  };

  resetStore = () => {
    this.loading = false;
    this.timer = "";
  };

  constructor() {
    makeObservable(this, {
      loading: observable,
      token: observable,
      hasTries: observable,
      recents: observable,
      resetStore: action,
      setUserInfo: action,
      setUserToken: action,
    });
  }
}
