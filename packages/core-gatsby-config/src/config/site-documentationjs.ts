import { Maybe, Mdx, Scalars } from './site-graphql-types.js';

export type DocumentationJs = Node & {
  readonly name: Maybe<Scalars['String']>;
  readonly kind: Maybe<Scalars['String']>;
  readonly memberof: Maybe<Scalars['String']>;
  readonly scope: Maybe<Scalars['String']>;
  readonly access: Maybe<Scalars['String']>;
  readonly optional: Maybe<Scalars['Boolean']>;
  readonly readonly: Maybe<Scalars['Boolean']>;
  readonly abstract: Maybe<Scalars['Boolean']>;
  readonly generator: Maybe<Scalars['Boolean']>;
  readonly async: Maybe<Scalars['Boolean']>;
  readonly override: Maybe<Scalars['Boolean']>;
  readonly hideconstructor: Maybe<Scalars['Boolean']>;
  readonly alias: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly since: Maybe<Scalars['String']>;
  readonly lends: Maybe<Scalars['String']>;
  readonly type: Maybe<DoctrineType>;
  readonly default: Maybe<Scalars['JSON']>;
  readonly description: Maybe<DocumentationJSComponentDescription>;
  readonly deprecated: Maybe<DocumentationJSComponentDescription>;
  readonly augments: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  readonly examples: Maybe<ReadonlyArray<Maybe<DocumentationJsExample>>>;
  readonly implements: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  readonly params: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  readonly properties: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  readonly returns: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  readonly throws: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  readonly todos: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  readonly yields: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  readonly members: any;
  readonly codeLocation: any;
  readonly docsLocation: any;
  readonly commentNumber: Maybe<Scalars['Int']>;
  readonly level: Maybe<Scalars['Int']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<DocumentationJsTags>>>;
  /** Returns all children nodes filtered by type DocumentationJs */
  readonly childrenDocumentationJs: Maybe<ReadonlyArray<Maybe<DocumentationJs>>>;
  /** Returns the first child node of type DocumentationJs or null if there are no children of given type on this node */
  readonly childDocumentationJs: Maybe<DocumentationJs>;
  /** Returns all children nodes filtered by type DocumentationJSComponentDescription */
  readonly childrenDocumentationJsComponentDescription: Maybe<
    ReadonlyArray<Maybe<DocumentationJSComponentDescription>>
  >;
  /** Returns the first child node of type DocumentationJSComponentDescription or null if there are no children of given type on this node */
  readonly childDocumentationJsComponentDescription: Maybe<DocumentationJSComponentDescription>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: any;
};

export type DoctrineType = {
  readonly type: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly elements: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly expression: Maybe<Scalars['JSON']>;
  readonly applications: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly params: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly fields: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly result: Maybe<Scalars['JSON']>;
  readonly typeDef: Maybe<DocumentationJs>;
};

export type DocumentationJSComponentDescription = Node & {
  readonly id: Scalars['ID'];
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: any;
};

export type DocumentationJsExample = {
  readonly caption: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly highlighted: Maybe<Scalars['String']>;
  readonly raw: Maybe<Scalars['String']>;
};

export type DocumentationJsTags = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly lineNumber: Maybe<Scalars['Int']>;
  readonly type: Maybe<DocumentationJsTagsType>;
  readonly name: Maybe<Scalars['String']>;
};

export type DocumentationJsTagsType = {
  readonly type: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
};

export type DocumentationJsFragmentFragment = Pick<
  DocumentationJs,
  'name' | 'level' | 'memberof' | 'kind' | 'optional' | 'default'
> & {
  readonly description: Maybe<
    DocumentationJSComponentDescriptionFragmentFragment &
      DocumentationJSComponentDescriptionFragmentFragment
  >;
  readonly type: Maybe<DoctrineTypeFragmentFragment & DoctrineTypeFragmentFragment>;
};

export type DocumentationJSComponentDescriptionFragmentFragment = {
  readonly childMdx: Maybe<Pick<Mdx, 'body'>>;
};

export type DoctrineTypeFragmentFragment = Pick<
  DoctrineType,
  'name' | 'type' | 'result' | 'params' | 'fields' | 'expression' | 'elements'
>;
