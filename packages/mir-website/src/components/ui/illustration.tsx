import React, { SVGAttributes, useEffect, useRef, useState } from 'react';

type OwnProps = {
  name: string;
  width?: number | string;
  height?: number | string;
};

export const Illustration: React.FC<OwnProps & SVGAttributes<any>> = ({ name, height, width, ...props }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`../../${name}.svg`);
        ImportedIconRef.current = namedImport;
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef as any;
    return <ImportedIcon {...props} width={width} height={height} />;
  }

  return null;
};
