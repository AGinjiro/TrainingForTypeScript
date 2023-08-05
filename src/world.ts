export default class World {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  public sayHello(elem): void {
    if (elem) {
      elem.innerText = this.message;
    }
  }
}
