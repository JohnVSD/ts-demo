import { isInjectable } from "./injectable";
import { InjectionToken, isClassProvider, Provider, Token } from "./provider";

export class Container {
  private providers = new Map<Token<any>, Provider<any>>();

  addProvider<T>(provider: Provider<T>) {
    this.assertInjectableIfClassProvider(provider);
    this.providers.set(provider.provide, provider);
  }

  inject<T>(type: Token<T>): T {
    return null
  }

  private assertInjectableIfClassProvider<T>(provider: Provider<T>) {
    if (isClassProvider(provider) && !isInjectable(provider.useClass)) {
      throw new Error(
        `Cannot provide ${
          this.getTokenName(provider.provide)
        } using class ${
          this.getTokenName(provider.useClass)
        }, ${
          this.getTokenName(provider.useClass)
        } isn't injectable`
      )
    }
  }

  private getTokenName<T>(token: Token<T>) {
    return token instanceof InjectionToken ? token.injectionIdentifier : token.name;
  }
}