# CubeMaster — магазин кубиков Рубика

## Описание

Учебный проект по дисциплине «Фронтенд и бэкенд разработка».
Тема контрольной работы №2: «CSS-фреймворки: разработка интерфейса на Bootstrap».
Интернет-магазин кубиков Рубика и аксессуаров для спидкубинга, выполненный с использованием CSS-фреймворка Bootstrap 5.

## Структура проекта

- `index.html` — главная страница (геро-блок, преимущества, популярные товары, подвал);
- `catalog.html` — каталог товаров с карточками, бейджами и кнопками заказа;
- `product.html` — карточка товара с характеристиками, таблицей и блоком FAQ (accordion);
- `order.html` — страница оформления заявки с формой заказа;
- `css/custom.css` — кастомные стили (подключаются после Bootstrap);
- `images/` — изображения товаров (внешние ссылки, как в КР №1);
- `README.md` — описание проекта.

## Используемый фреймворк

- **Bootstrap 5.3.2** (подключение через CDN)
- Bootstrap CSS: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">`
- Bootstrap JS Bundle: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>`
- Кастомные стили: `css/custom.css` (подключаются после Bootstrap)

## Реализованные Bootstrap-компоненты

- `container`, `row`, `col-*` — адаптивная сетка на всех страницах;
- `navbar` — навигация с выделением текущей страницы (`active`);
- `card`, `card-img-top`, `card-body`, `card-title`, `card-text` — карточки товаров;
- `btn btn-primary`, `btn btn-outline-primary`, `btn btn-light` — кнопки;
- `badge` — бейджи (Новинка, Хит, Скидка);
- `alert alert-info`, `alert alert-warning` — информационные и предупреждающие алерты;
- `modal fade` — модальное окно быстрого заказа (`#orderModal`);
- `form-control`, `form-check`, `input-group`, `form-select` — элементы форм;
- `breadcrumb` — хлебные крошки;
- `table table-striped table-bordered` — таблица характеристик;
- `table-responsive` — адаптивная обёртка таблицы;
- `accordion` — блок часто задаваемых вопросов (FAQ).

## Форма и модальное окно

- Модальное окно `#orderModal` с полями `form-control`, чекбоксом `form-check`, `input-group` (телефон с префиксом +7), `data-bs-toggle="modal"` / `data-bs-target="#orderModal"`.
- Форма заказа на `order.html` внутри `card`, с `required` на обязательных полях и валидацией Bootstrap.

## Требования к README

| Пункт | Статус |
|-------|--------|
| Название проекта | CubeMaster — магазин кубиков Рубика |
| Тема КР №2 | CSS-фреймворки: Bootstrap |
| Краткое описание | Интернет-магазин кубиков Рубика на Bootstrap |
| Используемый фреймворк | Bootstrap 5.3.2 |
| Способ подключения | CDN |
| Структура проекта | Описана выше |
| Список компонентов | Описан выше |
| Ссылка на GitHub Pages | — |
| ФИО и группа | Ерицян Жора Овикович, ЭФБО-03-25 |
| Самостоятельные доработки | Accordion (FAQ), валидация формы, кастомные стили в custom.css |

## Автор

ФИО: Ерицян Жора Овикович
Группа: ЭФБО-03-25