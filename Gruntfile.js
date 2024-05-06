/**
**
** Basic Grunt workflow for small front-end projects
** repo: https://github.com/juanbrujo/simple-grunt-workflow
** article: http://www.csslab.cl/2014/04/07/automatizacion-de-tareas-para-proyectos-en-front-end/
** @csslab / ©2014
**
**/
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowercopy: {
      css: {
        options: {
          destPrefix: "src/scss/inc"
        },
        files: {
          "normalize.scss": "normalize.css/normalize.css"
        }
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      libs: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.js',
          dest: 'dist/assets/js'
        }]
      }
    },
    jshint: {
      files: ["src/js/indianpaleale.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },
    sprite:{
      all: {
        src: "src/images/sprites/*.png",
        dest: "src/images/sprites.png",
        destCss: "src/scss/inc/sprites.scss",
        algorithm: "binary-tree",
        padding: 2
      }
    },
    sass: {
      build: {
        options: {
          style: "compressed"
        },
        files: [{
          expand: true,
          cwd: "src/scss",
          src: [ "*.scss" ],
          dest: "dist/assets/css",
          ext: ".css"
        }]
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['newer:uglify'],
        options: {
            spawn: false
        }
      },
      css: {
        files: ["src/scss/*.scss"],
        options: {
          spawn: false
        }
      },
      html: {
        files: ['dist/*.html'],
        options: {
            livereload: true
        }
      },
      sprites: {
        files: ['src/images/sprites/*.*'],
        tasks: ['sprite']
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-autoprefixer');


  grunt.registerTask("init", ["bowercopy","concat"]);
  grunt.registerTask('default', ["newer:uglify","sprite","newer:sass"]);
  grunt.registerTask("testjs", ["jshint"]);
};