import bridge from "@vkontakte/vk-bridge";
import {stores} from "../contexts/index";
import {APP_ID, USER_ID} from "./constants";

// получение токена пользователя
export function getUserToken(scope: any) {
  return bridge
    .send("VKWebAppGetAuthToken", {
      app_id: APP_ID,
      scope: scope.join(),
    })
    .then((res) => {
      stores.UserStore.setUserToken(res.access_token);
    })
    .catch((err) => {});
}

// разрешение на отправку сообщений от имени группы
export function subscribeMessageFromGroup(groupIDsubscription: number) {
  bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: groupIDsubscription,
    })
    .then((res) => {})
    .catch((err) => {});
}

// подписка на группу
export function addGroup(groupId: number) {
  bridge
    .send("VKWebAppJoinGroup", {group_id: groupId})
    .then(({result}) => {})
    .catch((err) => {});
}

// добавление сервиса в сообщество
export function AddToCommunity() {
  bridge
    .send("VKWebAppAddToCommunity", {})
    .then((res) => {})
    .catch((err) => {});
}

// открытие др приложение
export function goToApp(appID: number, location: string) {
  // location (string) Хеш, строка после # в URL вида vk.com/app123456#.
  bridge.send("VKWebAppOpenApp", {app_id: appID, location});
}

// вызов метода vk api
// groups.get
export async function getApiMethod(token: string, method: string) {
  return bridge
    .send("VKWebAppCallAPIMethod", {
      method: method,
      params: {
        user_id: USER_ID,
        v: "5.131",
        access_token: token,
        // filter: "admin", // является ли данный пользователь админом
        extended: 1,
      },
    })
    .then((res) => {
      // stores.UserStore.setUserGroups(res.response.items);
    })
    .catch((err) => {});
}
