import gulp from 'gulp'
import fs from 'fs'
import gulpSass from 'gulp-sass'
import nodeSass from 'sass'
import pug from 'gulp-pug'
import webpack from 'webpack-stream'
import browsersync from 'browser-sync'

const sass = gulpSass(nodeSass)
browsersync.create()

const browserSync = () => {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
    // host: "127.0.0.1",
    // online: true,
    // port: 8080,
    notify: false,
    // ui: false
  })
}

const html = () => {
  const courses = JSON.parse(
    fs.readFileSync('./src/content/courses.json', { encoding: 'utf8' })
  )
  const team = JSON.parse(
    fs.readFileSync('./src/content/team.json', { encoding: 'utf8' })
  )
  const blog = JSON.parse(
    fs.readFileSync('./src/content/blog.json', { encoding: 'utf8' })
  )
  const events = JSON.parse(
    fs.readFileSync('./src/content/events.json', { encoding: 'utf8' })
  )

  return gulp
    .src('./src/pug/page/*.pug')
    .pipe(
      pug({
        pretty: true,
        data: {
          courses,
          team,
          blog,
          events,
        },
      })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream())
}

const style = () => {
  return gulp
    .src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream())
}

const script = () => {
  return gulp
    .src('./src/js/main.js')
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'main.min.js',
        },
      })
    )
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream())
}

const image = () => {
  return gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img'))
}

const font = () => {
  return gulp.src('./src/fonts/**/*').pipe(gulp.dest('./dist/fonts/'))
}

export { html, style, script, image, font, browserSync }

export default () => {
  html()
  style()
  script()
  image()
  font()
  browserSync()
  gulp.watch('./src/pug/**/*.pug', html)
  gulp.watch('./src/scss/**/*.scss', style)
  gulp.watch('./src/js/**/*.js', script)
  gulp.watch('./src/img/**/*', image)
  gulp.watch('./src/fonts/**/*', font)
}
