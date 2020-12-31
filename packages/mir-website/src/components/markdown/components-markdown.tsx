import React from 'react';
import { Heading } from '../ui/heading';
import { Link } from '../ui/link';
import { Paragraph } from '../ui/paragraph';

export const mdxComponents = {
  h1: (props: any) => <Heading variant="h2" {...props}></Heading>,
  h2: (props: any) => <Heading variant="h3" {...props}></Heading>,
  h3: (props: any) => <Heading variant="h4" {...props}></Heading>,
  p: (props: any) => <Paragraph variant="medium" {...props}></Paragraph>,
  a: Link,
};
