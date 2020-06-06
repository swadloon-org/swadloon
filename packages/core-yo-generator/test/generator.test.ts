import 'mocha';
import _ from 'case';
import rimraf from 'rimraf';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import { NEW_PACKAGE_TEMPLATE_PROPS } from '../src/new-package-generator/new-package.config';
import { CHOICES } from '../src/generator-choices';

describe('The new-package-generator', () => {
  const testPackageScope = '@test-scope';
  const testPackageName = 'my-test-package';
  const testDescription = 'description test';
  const testPathPackage = path.join(__dirname, '..', '..', '..', `${testPackageName}`);

  it(`should generate a package.json file under the packages dir`, () => {
    return helpers
      .run(path.join(__dirname, '..', 'src'))
      .withPrompts({ template: CHOICES.NEW_PACKAGE })
      .withPrompts({ [NEW_PACKAGE_TEMPLATE_PROPS.SCOPE]: testPackageScope })
      .withPrompts({ [NEW_PACKAGE_TEMPLATE_PROPS.NAME]: testPackageName })
      .withPrompts({ [NEW_PACKAGE_TEMPLATE_PROPS.DESCRIPTION]: testDescription })
      .then(function() {
        assert.file([path.join(testPathPackage, `/package.json`)]);
      });
  });

  afterEach(() => {
    rimraf.sync(testPathPackage);
  });
});
