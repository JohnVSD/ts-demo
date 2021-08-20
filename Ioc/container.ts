import { Provider, Token } from "./provider";

export class Container {
  private provider = new Map<Token<any>, Provider<any>>();

  addProvider<T>(provider: Provider<T>) {

  } // TODO
  inject<T>(type: Token<T>): T {
    return null
  } // TODO
}