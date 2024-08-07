import postcssImport from 'postcss-import';
import cssnano from 'cssnano';
import 'postcss-preset-env';

const config = (ctx) => ({
    plugins: {
        'postcss-import': postcssImport,
        'postcss-preset-env': {
            stage: 0,
            features: {
                'nesting-rules': true
            }
        }, 
        ...(ctx.env === 'production' ? { 'cssnano': cssnano } : {})
    }
});

export default config;