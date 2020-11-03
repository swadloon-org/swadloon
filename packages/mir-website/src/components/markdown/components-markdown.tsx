import React from 'react';
import { Heading } from '../ui/heading';
import { Link, ButtonLink, MarkdownLink } from '../ui/link';
import { Paragraph } from '../ui/paragraph';

export const markdownComponents = {
  h1: (props) => <Heading variant="h2" {...props}></Heading>,
  h2: (props) => <Heading variant="h3" {...props}></Heading>,
  h3: (props) => <Heading variant="h4" {...props}></Heading>,
  p: (props) => <Paragraph variant="medium" {...props}></Paragraph>,
  a: Link,
};
