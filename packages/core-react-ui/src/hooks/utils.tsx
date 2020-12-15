/**
 * Need to update the current version of typescript to have the correct type declaration for
 * @setTimeout
 * @clearTimeout
 */

declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function clearTimeout(handle?: number): void;

export function throttle<T extends (...args: any[]) => void>(func: T, threshold: number = 250, scope?: any): T {
  let last: number, deferTimer: any;
  return function (this: any) {
    let context = scope || this;

    let now = Date.now(),
      args = arguments;
    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        func.apply(context, args as any);
      }, threshold);
    } else {
      last = now;
      func.apply(context, args as any);
    }
  } as T;
} // @ts-ignore
