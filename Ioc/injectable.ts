import { Type } from './type';
import 'reflect-metadata';

const INJECTABLE_METADATA_KEY = Symbol('INJECTABLE_METADATA_KEY');

/**
 * TODO 类装饰器
 * - https://www.tslang.cn/docs/handbook/decorators.html
 */ 
export function Injectable() {
  return function(target: any) {
    Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target);
    return target;
  }
}

export function isInjectable<T>(target: Type<T>) {
  return Reflect.getMetadata(INJECTABLE_METADATA_KEY, target) === true;
}