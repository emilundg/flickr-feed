module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt
            .file
            .readJSON("package.json"),

        cssmin: {
            css: {
                src: 'src/resources/css/main.css',
                dest: 'dist/css/main.min.css'
            }
        },

        eslint: {
            options: {
                configFile: './.eslintrc.json'
            },
            target: ['./src/resources/scripts/*.js']
        }
    });
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['cssmin', 'eslint']);
};