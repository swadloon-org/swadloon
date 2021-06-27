// import { fold } from 'fp-ts/Either';
// import { pipe } from 'fp-ts/function';
// import * as t from 'io-ts';

// // failure handler
// const onLeft = (errors: t.Errors): string => `${errors.length} error(s) found`

// // success handler
// const onRight = (s: string) => `No errors: ${s}`

// pipe(t.string.decode('a string'), fold(onLeft, onRight))
// // => "No errors: a string"

// pipe(t.string.decode(null), fold(onLeft, onRight))
// // => "1 error(s) found"

// // my brain hurts

// type ExtractRouteParams<T extends string> =
//   string extends T
//   ? Record<string, string>
//   : T extends `${infer Start}:${infer Param}/${infer Rest}`
//   ? {[k in Param | keyof ExtractRouteParams<Rest>]: string}
//   : T extends `${infer Start}:${infer Param}`
//   ? {[k in Param]: string}
//   : {};

// type P = ExtractRouteParams<'/posts/:postId'>;

// type C = ExtractRouteParams<'/posts/:postId/:commentId'>;

// const path: C = {
//   postId: '12312',
//   commentId: '223'
// };
