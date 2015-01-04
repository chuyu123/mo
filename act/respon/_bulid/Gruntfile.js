module.exports = function(grunt) {

    
    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../assets local/sass/',
            deployPath: '../assets/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        sass: {
            dist: {
                files: {
                    '<%= meta.deployPath %>css.css': '<%= meta.srcPath %>main.scss'
                },
                options: {
                    sourcemap: 'true',
                    style: 'compact'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    '<%= meta.srcPath %>/**/*.scss'
                ],
                tasks: ['sass']
            }
        },
        uglify: {
            release: {//任务四：合并压缩a.js和b.js
                files: {
                    '../assets/js/index.min.js': ['../assets/js/a.js', '../assets/js/b.js']
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('default', ['uglify:release']);
};