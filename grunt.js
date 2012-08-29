/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      minified: {
        src: ['src/javascripts/Backbone.validateAll.js'],
        dest: 'src/javascripts/Backbone.validateAll.min.js'
      }
    },

    min: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/javascripts/Backbone.validateAll.js>'],
        dest: 'src/javascripts/Backbone.validateAll.min.js'
      }
    },

    jasmine: {
      all: {
        src:['test/SpecRunner.html'],
        timeout: 150000 //in milliseconds
      }
    },
    lint: {
      files: ['grunt.js','src/javascripts/Backbone.validateAll.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint jasmine'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        jquery: true
      },
      globals: {
        jQuery: true,
        _: true
      }
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-jasmine-task');
  
  // Default task.
  grunt.registerTask('default', 'lint jasmine min');

};
