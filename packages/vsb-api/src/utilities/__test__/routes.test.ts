import { pathToRegexp } from 'path-to-regexp';

describe(`route matching with 'path-to-regexp' as used by vercel`, () => {
  describe(`${pathToRegexp.name}`, () => {
    it('should not error while parsing vercel rewrites rules', () => {
      const regExp = /((?:pr|dev|master|-|\d)+)(?!-api)\.vasectomie-pierre-boucher\.ca\/api\/(.*)/gi;
      const pathRegexp = pathToRegexp('(pr-\\d+|dev|master)((?!-api)).vasectomie-pierre-boucher.ca/api/(.*)');

      // don't match routes that should not be rewritten
      expect(pathRegexp.test('dev.vasectomie-pierre-boucher.ca/')).toBe(false);
      expect(pathRegexp.test('dev-api.vasectomie-pierre-boucher.ca/api/status')).toBe(false);
      expect(pathRegexp.test('pr-222-api.vasectomie-pierre-boucher.ca/api/status')).toBe(false);

      // match routes that should be rewritten
      expect(pathRegexp.test('pr-222.vasectomie-pierre-boucher.ca/api/status')).toBe(true);
      expect(pathRegexp.exec('pr-222.vasectomie-pierre-boucher.ca/api/status')?.[1]).toBe('pr-222');
      expect(pathRegexp.test('dev.vasectomie-pierre-boucher.ca/api/status')).toBe(true);
      expect(pathRegexp.test('pr-442.vasectomie-pierre-boucher.ca/api/cliniko/status')).toBe(true);
    });
  });
});
