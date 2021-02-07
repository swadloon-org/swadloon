import { HEADING, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import {
  CommonComponentProps,
  Heading,
  Hr,
  Paragraph,
  Stack,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';

type Props = CommonComponentProps & {
  title: string;
};

export const PageHeader: React.FC<Props> = ({ title, ...props }) => {
  const { cssTheme } = useTreatTheme();
  const commonProps = useCommonProps(props);

  return (
    <Stack {...commonProps} gap={[`calc(2 * ${cssTheme.sizing.var.x3})`]}>
      <Heading variant={HEADING.h1}>{title}</Heading>

      <Paragraph variant={PARAGRAPH_SIZE.large}>{commonProps.children}</Paragraph>

      <Hr></Hr>
    </Stack>
  );
};
