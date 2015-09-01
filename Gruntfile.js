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
      libs: {
        options: {
          destPrefix: 'src/js/libs'
        },
        files: {
          'modernizr.js': 'modernizr/modernizr.js',
          'detectizr.js': 'detectizr/dist/detectizr.js'
        },
      },
      css: {
        options: {
          destPrefix: "src/scss/inc"
        },
        files: {
          "normalize.scss": "normalize.css/normalize.css"
        }
      }
    },
    concat: {
      basic_and_extras: {
        files: {
          'dist/assets/js/libs/modernizr-detectizr.js': ['dist/assets/js/libs/modernizr.js','dist/assets/js/libs/detectizr.js']
        },
      },
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
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: "src/images/",
            src: ["*.{png,jpg,gif,svg}"],
            dest: "dist/assets/images/"
        }]
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
    autoprefixer: {
      options: {
        browsers: ["last 2 versions", "ie 8", "ie 9"],
        cascade: false,
        map: true
      },
      target: {
        src: "dist/assets/css/*.css"
      },
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
        tasks: ["newer:sass","newer:autoprefixer"],
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
      another: {
        files: ['src/images/*.*'],
        tasks: ['newer:imagemin'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-autoprefixer');


  grunt.registerTask("init", ["bowercopy","concat"]);
  grunt.registerTask('default', ['newer:uglify','sprite',"newer:imagemin","newer:sass"]);
  grunt.registerTask("testjs", ["jshint"]);
};