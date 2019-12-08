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
            target: ['./src/resources/api/*.js', './src/resources/scripts/*.js']
        },

        uglify: {
            options: {
                compress: true
            },
            target: {
                files: {
                    'dist/all.min.js': ['./src/resources/api/*.js', 'src/resources/scripts/*.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('js-clean', 'eslint');
    grunt.registerTask('default', ['cssmin', 'uglify']);
};