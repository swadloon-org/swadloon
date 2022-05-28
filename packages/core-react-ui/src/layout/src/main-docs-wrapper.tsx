import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './main-docs-wrapper.css';

type Props = PrimitiveProps & {};

/**
 * High level layout component to create a wrapper for the `<main/> content
 * Should be used as close as possible to the `<body/>` element
 *
 * This docs variant allows for sticky element since there are no overflow applied
 */
export const MainDocsWrapper: React.FC<Props> = ({ id, style, className, as, ...props }) => {
  const type = as ? as : 'div';
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  return React.createElement(type, commonProps);
};
