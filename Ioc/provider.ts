import { Type } from './type';

export class InjectionToken {
  constructor( public injectionIdentifier: string ) {}
}

export type Token<T> = Type<T> | InjectionToken;

export type Factory<T> = () => T;

export interface BaseProvider<T> {
  provide: Token<T>;
}

// 提供一个类，用于创建依赖对象
export interface ClassProvider<T> extends BaseProvider<T> {
  provide: Token<T>;
  useClass: Type<T>;
}

// 提供一个已存在的值，作为依赖对象
export interface ValueProvider<T> extends BaseProvider<T> {
  provide: Token<T>;
  useValue: T;
}

// 提供一个工厂方法，用于创建依赖对象
export interface FactoryProvider<T> extends BaseProvider<T> {
  provide: Token<T>;
  useFactory: Factory<T>;
}

export type Provider<T> = ClassProvider<T> | ValueProvider<T> | FactoryProvider<T>;

export function isClassProvider<T>(provider: BaseProvider<T>): provider is ClassProvider<T> {
  return (provider as any).useClass !== undefined;
}

export function isValueProvider<T>(provider: BaseProvider<T>): provider is ValueProvider<T> {
  return (provider as any).useVlaue !== undefined;
}

export function isFactoryProvider<T>(provider: BaseProvider<T>): provider is FactoryProvider<T> {
  return (provider as any).useFactory !== undefined;
}