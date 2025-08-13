import { writeFileSync } from 'fs';
import path from 'path';

import colors from './colors.js';

const theme = {
    name: 'cataldi',
    colors
};


writeFileSync(
    path.resolve(import.meta.dirname, '..', 'themes', 'cataldi-color-theme.json'),
    JSON.stringify(theme, null, 4)
);