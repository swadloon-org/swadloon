export type VercelHeaderValue = {
  key: string;
  value: string;
};

export type VercelHeader = {
  source: string;
  headers: VercelHeaderValue[];
};

export type VercelRewrites = {
  source: string;
  destination: string;
};

export type VercelRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

/**
 * Configuration for Vercel projects and Vercel CLI.
 *
 * @see https://vercel.com/docs/configuration
 */
export type VercelConfig = {
  github?: {
    enabled: boolean;
  };
  headers?: VercelHeader[];
  rewrites?: VercelRewrites[];
  redirects?: VercelRedirect[];
};
