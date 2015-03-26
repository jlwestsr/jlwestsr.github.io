module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-concurrent')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-shell')

  grunt.initConfig
    shell:
      jekyllBuild:
        command: 'jekyll build'
      jekyllServer:
        command: 'jekyll serve'