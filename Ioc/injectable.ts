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