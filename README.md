-----

### `Яндекс.Практикум`
**Курс "Веб-разработчик".** Дипломный проект `Часть 2`

-----

# "Movies-explorer" frontend
[**movies-explorer-frontend**](https://shev.movies.students.nomoredomains.icu) (открыть проект в браузере)

## Описание проекта
данный проект представляет собой интерактивную страницу. Это сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

## Основной функционал
* авторизация и регистрация пользователя,
* отображение текущих данных пользователя в форме редактирования данных,
* возможность редактирования данных профиля,
* добавление фильма в избранное и его удаление от туда, в т.ч. через постановку/снятие лайка,
* возможность поиска фильмов, по ключевым словам,
* возможность фильтрации данных поиска по длительности фильма,
* отображение найденных карточек фильмов и избранных на соответствующих страницах,
* при закрытии страницы и повторном открытии, данные поиска сохраняются,
* количество отображаемых карточек находится в зависимости от ширины экрана пользовательского устройства.

## Инструменты и технологии
* HTML5,
* CCS3,
* JavaScript (ES6),
* React (Create React App, разметка JSX, функциональные компоненты и хуки),
* создан контекст текущего пользователя,
* создан контекст текущего пользователя,
* выполнено поднятие стейта, где это необходимо,
* использован React Router,
* использован объект history,
* используется HOC-компонент ProtectedRoute для защиты маршрутов,
* данные поиска сохраняются в LocalStorage,
* при работе с формами используются управляемые компоненты,
* все формы валидируются на строне клиента при помощи кастомного хука,
* сайт адаптирован под разные расширения экранов,
* реализовано бургер-меню для малых расширений,
* используется прелоадер при ожидании ответов с сервера,
* flexbox,
* grid,
* БЭМ (наименование классов),
* Webpack,
* шрифты сглажены,
* изображения оптимизированы.

## Планы по доработке
- [ ] реализовать информирование пользователя об ожидании ответа с сервера изменением содержания кнопок.

### Установка и запуск
`npm i` - установка зависимостей  
`npm run start` - запуск проекта  
`npm run build` - запуск сборки проекта  

------------
* Ссылка на домен: https://shev.movies.students.nomoredomains.icu,
* [Ссылка на макет в Figma](https://www.figma.com/file/b5srVSd4MKPPjhAIuV0AXT/Diploma-Copy?node-id=891%3A3857)
