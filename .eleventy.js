const htmlmin = require('html-minifier');

const now = String(Date.now());

module.exports = function (eleventyConfig) {

    // Setup files
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addWatchTarget('./_tmp/style.css');
    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

    // This adds a variable that can be used in the template. In this case, we use build time to identify the current version of the site
    eleventyConfig.addShortcode('version', function () {
        return now;
    });

    // If being deployed (build rather than start), minify everything
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (process.env.ELEVENTY_PRODUCTION &&
            outputPath &&
            outputPath.endsWith('.html')
        ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }
        return content;
    });

    // Tell Eleventy to pass things through Alpine
    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/alpine.js': './js/alpine.js'
    });
    // Could supabase be used the same way alpine is here?
};