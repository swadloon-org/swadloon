// import { unstable_createResource, createResource as cSource } from 'react-cache';

// type Resource<I, V> = {
//   read: (input?: I) => V;
//   preload: (input?: I) => void;
// };
// function unstable_createResource<I, K extends string | number, V>(
//   fetch: (input: I) => Promise<V>,
//   maybeHashInput?: (input: I) => K
// ): Resource<I, V>;
// const createResource: typeof unstable_createResource;

// let createResource: typeof cSource;

// if (unstable_createResource) {
//   createResource = unstable_createResource;
// }

// export { createResource };

export {};
