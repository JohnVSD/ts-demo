import { Token } from './provider';
import 'reflect-metadata';

const INJECT_METADATA_KEY = Symbol('INJECT_KEY');

/**
 * TODO 参数装饰器 
 * - https://www.tslang.cn/docs/handbook/decorators.html
 */ 
export function Inject(token: Token<any>) {
  return function(target: any, _: string | symbol, index: number) {
    Reflect.defineMetadata(INJECT_METADATA_KEY, token, target, `index-${index}`);
    return target;
  }
}