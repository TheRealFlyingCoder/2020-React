import fs from 'fs';
import path from 'path';

import routeTemplate from './Templates/routeTemplate';
import styleTemplate from './Templates/styleTemplate';
import indexTemplate from './Templates/indexTemplate';

export default (name: string, startPath: string): void => {
    const routePath = path.join(startPath, `${name}.tsx`);
    const indexPath = path.join(startPath, `index.tsx`);
    const stylePath = path.join(startPath, `${name}.styles.ts`);

    fs.mkdirSync(startPath);

    fs.writeFileSync(routePath, routeTemplate(name), 'utf8');
    fs.writeFileSync(indexPath, indexTemplate(name), 'utf8');
    fs.writeFileSync(stylePath, styleTemplate, 'utf8');
}