import fs from 'fs';
import path from 'path';

import componentTemplate from './Templates/componentTemplate';
import styleTemplate from './Templates/styleTemplate';
import testTemplate from './Templates/testTemplate';
import storyTemplate from './Templates/storyTemplate';
import indexTemplate from './Templates/indexTemplate';

export default (name: string, startPath: string): void => {
    const componentPath = path.join(startPath, `${name}.tsx`);
    const indexPath = path.join(startPath, `index.tsx`);
    const stylePath = path.join(startPath, `${name}.styles.ts`);
    const testFolder = path.join(startPath, '__test__');
    const testPath = path.join(testFolder, `${name}.test.tsx`);
    const storyPath = path.join(testFolder, `${name}.stories.tsx`);

    fs.mkdirSync(startPath);
    fs.mkdirSync(testFolder);

    fs.writeFileSync(componentPath, componentTemplate(name), 'utf8');
    fs.writeFileSync(indexPath, indexTemplate(name), 'utf8');
    fs.writeFileSync(stylePath, styleTemplate, 'utf8');
    fs.writeFileSync(storyPath, storyTemplate(name), 'utf8');
    fs.writeFileSync(testPath, testTemplate(name), 'utf8');
}