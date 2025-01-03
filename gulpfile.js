const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Путь к CSS файлам
const paths = {
    styles: {
        src: [
            'css/style.css',                // Путь к style.css
            'css/variables.css',            // Путь к variables.css
            'css/_blocks/*.css'             // Путь к вашим блокам CSS
        ],
        dest: 'dist/css/'                 // Куда сохранить итоговый файл
    }
};

// Задача для обработки стилей
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init()) // Инициализация сопоставления
        .pipe(concat('style.css')) // Объединение в style.css
        .pipe(cssnano()) // Минификация
        .pipe(sourcemaps.write('.')) // Запись карт исходников
        .pipe(gulp.dest(paths.styles.dest)); // Сохранение в указанную директорию
}

// Задача по умолчанию
gulp.task('default', styles);