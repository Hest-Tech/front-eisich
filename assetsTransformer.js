import * as path from 'path';

export default {
    process(src, filename, config, options) {
        return 'export default ' + JSON.stringify(path.basename(filename)) + ';';
    },
};