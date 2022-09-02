declare global {
  function wsSend(action: string, payload: any): boolean;
  var age: any;
  // var wsSend: any;
}

export {};

// export declare global {
//   interface Window {
//     // add you custom properties and methods
//     wsSend: (payload: any) => void;
//   }
// }
