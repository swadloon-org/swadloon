import Generator, { MemFsEditor, Question } from 'yeoman-generator';
import { CHOICES } from './generator-choices';

export type YeomanProps = {
  /** Instance of the yeoman generator. */
  generator: Generator;
  /** Copy template method which is used to render the templates. */
  copyTpl: MemFsEditor['copyTpl'];
};

export type GeneratorTemplate<TemplateProps extends object> = {
  /** Name of the template (must match the filename e.g. for _my-template.ejs_, use 'my-template'). */
  templateName: string;
  /** Name of the directory in `/src` containing the template. */
  templatesDir: string;
  /** Name of the outputted file. */
  ouputFilename: string;
  /** Extension of the outputted file (e.g. "json" will be appended to the output filename, <filename>.json). */
  outputFileExtension: string;
  /** Control how files are ouputted, receives props from the generator during the "writing" sequence. */
  render: (props: { context: TemplateProps } & YeomanProps & Omit<GeneratorTemplate<TemplateProps>, 'render'>) => void;
};

export type GeneratorModule<TemplateContext extends object> = {
  /** Name of the generator (e.g. React Component, TS Library) */
  name: CHOICES.NEW_PACKAGE;
  /** List of questions to ask for that generator. */
  questions: ReadonlyArray<Question>;
  /** Templates to render after the questions are asked. */
  templates: ReadonlyArray<GeneratorTemplate<TemplateContext>>;
};
