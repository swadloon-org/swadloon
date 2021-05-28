import loadable from '@loadable/component';
import { ICON } from '@newrade/core-design-system';
import { Icon, IconProvider, ICON_FAMILY, useTreatTheme } from '@newrade/core-react-ui';
import { iconsMapping } from '@newrade/core-react-ui/src/icons/icons-mapping';
import React from 'react';

type Props = {};

export const Icons: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  const octiconsImport = (iconName: ICON) => {
    const iconImportName = iconsMapping[ICON_FAMILY.OCTICONS][iconName];
    return loadable<any>(() => import(`@react-icons/all-files/go/${iconImportName}`), {
      resolveComponent: (components: any) => (iconImportName ? components[iconImportName] : null),
    });
  };

  const ionicons5Import = (iconName: ICON) => {
    const iconImportName = iconsMapping[ICON_FAMILY.IONICONS][iconName];
    return loadable<any>(() => import(`@react-icons/all-files/io5/${iconImportName}`), {
      resolveComponent: (components: any) => (iconImportName ? components[iconImportName] : null),
    });
  };

  const IconIo = ionicons5Import(ICON.ARROW_RIGHT);
  const IconGo = octiconsImport(ICON.ARROW_RIGHT);

  return (
    <>
      <IconProvider
        iconStyle={{ color: 'red', className: 'global-class-name' }}
        importFunction={octiconsImport}
      >
        <Icon name={ICON.ARROW_RIGHT} />
      </IconProvider>

      <IconProvider
        iconStyle={{ color: 'blue', className: 'global-class-name' }}
        importFunction={ionicons5Import}
      >
        <Icon name={ICON.ARROW_RIGHT} />
      </IconProvider>
    </>
  );
};
