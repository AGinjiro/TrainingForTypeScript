//アロー関数
export const logMessage = (message: string): void => {
  console.log('Function basic sample 1:', message);
};

//名前付き関数
export function logMessage2(message: string): void {
  console.log('Function basic sample 2:', message);
}

//関数式
export const logMessage3 = function (message: string) {
  console.log('Function basic sample 3:', message);
};

//呼び出しシグネチャ(省略記法)
type LogMessage = (message: string) => void;
export const LogMessage6: LogMessage = (message) => {
  console.log('Function basic Sample 6:', message);
};
