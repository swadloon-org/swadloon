import _ from 'case';
import path from 'path';

import { CHOICES } from '../generator-choices';
import { GeneratorModule } from '../generator.types';

/**
 * @description Names of the props that are passed to the templates
 */
export enum NEW_PACKAGE_TEMPLATE_PROPS {
  SCOPE = 'scope',
  NAME = 'name',
  DESCRIPTION = 'description'
}
type TemplateProps = { [key in NEW_PACKAGE_TEMPLATE_PROPS]: any };

/**
 * @description Type of the props that are passed to the templates
 */
export class NewPackageTemplateContext implements TemplateProps {
  [NEW_PACKAGE_TEMPLATE_PROPS.SCOPE]: string;
  [NEW_PACKAGE_TEMPLATE_PROPS.NAME]: string;
  [NEW_PACKAGE_TEMPLATE_PROPS.DESCRIPTION]: string;
}

/**
 * @description Props default values
 */
export const NEW_PACKAGE_DEFAULT_CONTEXT_PROPS: TemplateProps = {
  [NEW_PACKAGE_TEMPLATE_PROPS.SCOPE]: 'newrade',
  [NEW_PACKAGE_TEMPLATE_PROPS.NAME]: 'my-package',
  [NEW_PACKAGE_TEMPLATE_PROPS.DESCRIPTION]: 'My app'
};

export const NEW_PACKAGE_TEMPLATES_DIR = path.resolve(__dirname);

export const NEW_PACKAGE_GENERATOR: GeneratorModule<NewPackageTemplateContext> = {
  name: CHOICES.NEW_PACKAGE,
  questions: [
    {
      type: 'input',
      name: NEW_PACKAGE_TEMPLATE_PROPS.SCOPE,
      message: `Scope of organization? (e.g. '${NEW_PACKAGE_DEFAULT_CONTEXT_PROPS[NEW_PACKAGE_TEMPLATE_PROPS.SCOPE]}')`,
      default: NEW_PACKAGE_DEFAULT_CONTEXT_PROPS[NEW_PACKAGE_TEMPLATE_PROPS.SCOPE]
    },
    {
      type: 'input',
      name: NEW_PACKAGE_TEMPLATE_PROPS.NAME,
      message: `What is your package name? (e.g. '${
        NEW_PACKAGE_DEFAULT_CONTEXT_PROPS[NEW_PACKAGE_TEMPLATE_PROPS.NAME]
      }')`,
      default: NEW_PACKAGE_DEFAULT_CONTEXT_PROPS[NEW_PACKAGE_TEMPLATE_PROPS.NAME]
    },
    {
      type: 'input',
      name: NEW_PACKAGE_TEMPLATE_PROPS.DESCRIPTION,
      message: `What is your package description? (e.g. '${
        NEW_PACKAGE_DEFAULT_CONTEXT_PROPS[NEW_PACKAGE_TEMPLATE_PROPS.DESCRIPTION]
      }')`,
      default: NEW_PACKAGE_TEMPLATE_PROPS.DESCRIPTION
    }
  ],
  templates: [
    {
      templateName: 'new-package.template.ejs',
      templatesDir: 'new-package-generator',
      ouputFilename: 'package',
      outputFileExtension: 'json',
      render: props => {
        const pathToTemplateDir = path.join(__dirname, '..', '..', '..', 'src', props.templatesDir, props.templateName);
        const from = props.generator.templatePath(pathToTemplateDir);
        const kebabName = _.kebab(props.context[NEW_PACKAGE_TEMPLATE_PROPS.NAME]);
        const filename = `${props.ouputFilename}.${props.outputFileExtension}`;
        const destinationPath = path.join(__dirname, '..', '..', '..', '..', kebabName, filename);
        const to = props.generator.destinationPath(destinationPath);
        props.generator.fs.copyTpl(from, to, props.context);
      }
    },
    {
      templateName: 'new-package-index.template.ejs',
      templatesDir: 'new-package-generator',
      ouputFilename: 'index',
      outputFileExtension: 'ts',
      render: props => {
        const pathToTemplateDir = path.join(__dirname, '..', '..', '..', 'src', props.templatesDir, props.templateName);
        const from = props.generator.templatePath(pathToTemplateDir);
        const kebabName = _.kebab(props.context[NEW_PACKAGE_TEMPLATE_PROPS.NAME]);
        const filename = `${props.ouputFilename}.${props.outputFileExtension}`;
        const destinationPath = path.join(__dirname, '..', '..', '..', '..', kebabName, 'src', filename);
        const to = props.generator.destinationPath(destinationPath);
        props.generator.fs.copyTpl(from, to, props.context);
      }
    }
  ]
};
