import { Answers } from 'inquirer';
import Generator, { Question, Questions } from 'yeoman-generator';

import { CHOICES } from './generator-choices';
import { NEW_PACKAGE_GENERATOR, NEW_PACKAGE_TEMPLATE_PROPS } from './new-package-generator/new-package.config';
import { GeneratorModule } from './generator.types';

/**
 * @description Yeoman Generator
 * @see http://yeoman.io/authoring/
 * @see Promping documentation: https://github.com/SBoudrias/Inquirer.js
 */
export default class extends Generator {
  questions: Questions;
  answers: Answers;
  generators: ReadonlyArray<GeneratorModule<any>>;
  generatorsMap: { [key in CHOICES]: GeneratorModule<any> };
  /**
   * The available priorities are (in running order):
   *
   * - initializing - Your initialization methods (checking current project state, getting configs, etc)
   * - prompting - Where you prompt users for options (where you’d call this.prompt())
   * - configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
   * - default - If the method name doesn’t match a priority, it will be pushed to this group.
   * - writing - Where you write the generator specific files (routes, controllers, etc)
   * - conflicts - Where conflicts are handled (used internally)
   * - install - Where installations are run (npm, bower)
   * - end - Called last, cleanup, say good bye, etc
   */
  constructor(args: any, opts: any) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    this.questions = [];
    this.answers = [];
    this.generators = [NEW_PACKAGE_GENERATOR];
    this.generatorsMap = { [CHOICES.NEW_PACKAGE]: NEW_PACKAGE_GENERATOR };
  }

  prompting() {
    const prompts: ReadonlyArray<Question> = [
      {
        type: 'list',
        name: 'template',
        message: 'What do you want to generate?',
        choices: this.generators.map(generator => generator.name),
        default: CHOICES.NEW_PACKAGE
      }
    ];

    return this.prompt(prompts as Questions).then(answers => {
      this.answers = answers;
    });
  }

  promptingNewPackage() {
    if (this.answers.template === CHOICES.NEW_PACKAGE) {
      return this.prompt(this.generatorsMap[CHOICES.NEW_PACKAGE].questions).then(answers => {
        this.answers = { ...this.answers, ...answers };
      });
    }
  }

  writingNewPackage() {
    if (this.answers.template === CHOICES.NEW_PACKAGE) {
      this.generatorsMap[CHOICES.NEW_PACKAGE].templates.forEach(template => {
        template.render({
          ...template,
          context: {
            [NEW_PACKAGE_TEMPLATE_PROPS.SCOPE]: this.answers[NEW_PACKAGE_TEMPLATE_PROPS.SCOPE],
            [NEW_PACKAGE_TEMPLATE_PROPS.NAME]: this.answers[NEW_PACKAGE_TEMPLATE_PROPS.NAME],
            [NEW_PACKAGE_TEMPLATE_PROPS.DESCRIPTION]: this.answers[NEW_PACKAGE_TEMPLATE_PROPS.DESCRIPTION]
          },
          generator: this,
          copyTpl: this.fs.copyTpl
        });
      });
    }
  }

  end() {
    this.spawnCommand('npm', ['run', 'generator']);
  }

  _appendChangelog() {}
}
