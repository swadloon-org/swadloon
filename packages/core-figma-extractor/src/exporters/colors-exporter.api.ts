import { ExtractOptions } from '../extract.js';
import { ColorTokens } from '../models/figma-colors.model.js';

export type ColorsExporter = (colorTokens: ColorTokens, options: ExtractOptions) => string;
