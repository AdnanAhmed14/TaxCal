const tailwaindcss = require('tailwindcss');

module.exports = {
    plugins: [tailwaindcss('./tailwind.config.js'), require('autoprefixer')],
};