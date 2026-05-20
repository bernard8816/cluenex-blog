const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {

  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/CNAME');

  // Watch CSS
  eleventyConfig.addWatchTarget('src/assets/css/');

  // Markdown configuration
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
    .use(markdownItAttrs)
    .use(markdownItAnchor, {
      level: 2,
      permalink: false
    });

  eleventyConfig.setLibrary('md', md);

  // Filter: Format date
  eleventyConfig.addFilter('dateFilter', (dateObj) => {
    const date = new Date(dateObj);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  });

  // Filter: ISO date for schema.org
  eleventyConfig.addFilter('isoDate', (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Filter: Generate slug
  eleventyConfig.addFilter('slug', (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  });

  // Filter: Extract headings for TOC
  eleventyConfig.addFilter('extractHeadings', (content) => {
    const headingRegex = /<h2[^>]*?id="([^"]*)"[^>]*?>([^<]+)<\/h2>/g;
    const headings = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        id: match[1],
        text: match[2].replace(/<[^>]*>/g, '')
      });
    }
    return headings;
  });

  // Collection: All posts
  eleventyConfig.addCollection('posts', (collection) => {
    return collection
      .getFilteredByGlob('src/content/**/*.md')
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Collection: Posts by category
  eleventyConfig.addCollection('postsByCategory', (collection) => {
    const posts = collection.getFilteredByGlob('src/content/**/*.md');
    const categories = {};

    posts.forEach(post => {
      const cat = post.data.category || 'general';
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(post);
    });

    return categories;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts'
    },
    pathPrefix: '/',
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
