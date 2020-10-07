'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod) if (k !== 'default' && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.onClientEntry = void 0;
exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    Promise.resolve().then(() => __importStar(require(`intersection-observer`)));
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0c2J5LWJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXRzYnktYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWEsUUFBQSxhQUFhLEdBQUcsR0FBRyxFQUFFO0lBQ2hDLHlFQUF5RTtJQUN6RSxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsSUFBSSxNQUFNLENBQUMsRUFBRTtRQUN2QyxrREFBTyx1QkFBdUIsSUFBRTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7S0FDdEQ7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgb25DbGllbnRFbnRyeSA9ICgpID0+IHtcbiAgLy8gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcG9seWZpbGwgZm9yIGdhdHNieS1iYWNrZ3JvdW5kLWltYWdlIChTYWZhcmksIElFKVxuICBpZiAoIShgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykpIHtcbiAgICBpbXBvcnQoYGludGVyc2VjdGlvbi1vYnNlcnZlcmApO1xuICAgIGNvbnNvbGUubG9nKGAjIEludGVyc2VjdGlvbk9ic2VydmVyIGlzIHBvbHlmaWxsZWQhYCk7XG4gIH1cbn07XG4iXX0=
