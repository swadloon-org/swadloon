import React from 'react';

import { CodeMarkupType } from '@newrade/core-design-system';
import { Paragraph, Stack } from '@newrade/core-react-ui';
import { Code } from '@newrade/core-react-ui/code';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {};

export const CodeCode: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x4]}>
      <Paragraph>
        Normal text followed by a <Code kind={CodeMarkupType.Function}>function()</Code> and another
        piece of code <Code kind={CodeMarkupType.Tag}>filename.json</Code>
      </Paragraph>

      <Paragraph>
        The available code kinds are:{' '}
        {keys(CodeMarkupType).map((type) => {
          return (
            <span key={type}>
              <Code kind={CodeMarkupType[type]}>{type}</Code>,{' '}
            </span>
          );
        })}
      </Paragraph>
    </Stack>
  );
};
