import { ExtractOptions } from '../compile.js';
import { ColorTokens } from '../models/figma-colors.model.js';

export type ColorsExporter = (colorTokens: ColorTokens, options: ExtractOptions) => string;
