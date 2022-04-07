// @ts-check
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import webpack from 'webpack';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  /** @param {import('webpack').Configuration} config */
  webpack(config) {
    // ...
    return config;
  },
};

export default withVanillaExtract(nextConfig);
