<h1 align="center">Тестовое задание на позицию "React-разработчик" в компанию Antipoff Group</h1>

<div align="center">
  <a href="">
    <img width="575" alt="Главная страница приложения" src="https://github.com/elrouss/antipoff-group-test-assignment/assets/108838349/b27951d0-87d5-4c09-ab62-9b1ebb8167c8">
  </a>
</div>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории</a></li>
      <li><a href="#establishing">Процесс создания</a></li>
      <li><a href="#functionality">Функционал</a></li>
      <li><a href="#enhancement">Что можно улучшить</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Тестовое задание, представляющее собой четырехстраничное отзывчиво-адаптивное приложение с динамическим роутингом. На выполнение была выделена 1 неделя - по факту проект реализован за 2 дня.

<b>Ссылки на проект:</b>
<br>
Деплой: <i>Ссылка появится позже</i>
<br>
Задание и макет: https://docs.google.com/document/d/1Zv2tPpmfqaDfx9-E2Z3M8CVuAaWajOkEPQ_o2oz4ATQ/edit
<br>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка 'React'">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка React Router">
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Иконка 'Redux'">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка 'JavaScript'">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Иконка 'Sass (SCSS)'">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка 'HTML5'">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории</h2></a>
1. `git clone https://github.com/elrouss/antipoff-group-test-assignment.git` - клонировать репозиторий на свое устройство (HTTPS)
2. `npm i` - установить зависимости
3. `npm run start` - запустить приложение

<b>NB!</b> При тестировании приложения в удаленном репозитории (см. ссылку на деплой выше)  <b>не рекомендуется</b> обновление страниц, имеющих добавочные эндпоинты к корневому урлу. Данное поведение объясняется <a href="https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing">особенностями совместимости</a> Github Pages с модулем маршрутизации (React Router DOM)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="establishing"><h2>4. Процесс создания</h2></a>
Работа выполнена в <b>1 этап</b>:
<br>
1. Отзывчиво-адаптивная верстка четырех страниц и написание логики

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>5. Функционал</h2></a>
- Регистрация и авторизация пользователей с выходом из личного кабинета (использован тестовый api https://reqres.in/, поэтому по факту можно отправлять любые данные, которые прошли кастомную валидацию на клиенте)
- Переход на страницу с информацией о пользователе по клику на карточку (динамический роутинг)
- Отображение дополнительных карточек по клику на кнопку в случае большого массива данных (можно протестировать на разрешении, равным 767px и меньше)
- Добавление/удаление лайков с сохранением состояния после перезагрузки страницы

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="enhancement"><h2>6. Что можно улучшить</h2></a>
- Оптимизация лишних ререндеров
- Добавить пагинацию
- Добавить обновление аватаров пользователей

<div align="right">(<a href="#summary">к оглавлению</a>)</div>
