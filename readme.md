# Тестовое задание для СВЦ ПОЛИС812 на позицию Тестировщик

## Общие данные

Тестовое задание:
1. Вам необходимо проверить лендинг-страницу на ошибки https://polis812.github.io/vacuu/
2. Сформируйте чек-лист для тестирования этой страницы и на основе найденных ошибок подготовьте автоматизированный тест, чтобы при исправлении ошибок вам не пришлось повторно вручную проверять их.
3. Автоматизированный тест напишите с использованием Playwright JavaScript.

Ожидаемый результат:
1. Напишите количество ошибок.
2. Подготовьте отчет с найденными ошибками.
3. Создайте GitHub репозиторий с Actions, в котором будет запускаться ваш Playwright тест и сохранять результаты в артефакты. Отчет можно прикрепить в Github репозиторий.


## Работа
### Анализ лендинга на ошибки


1) Blog в навбаре:
    Блок в навбаре является "div", а не "a". Из-за чего ссылка не работает
2) Car insurance Calculate the price:
    Ссылка на не ту страничку. Стоит "/home", а должно быть "/car"
3) Reviews:
    Не работает навигация. Кнопка вправо активная, но по клику не меняются отзывы. В коде вижу что больше отзывов нет. Нужно либо сделать кнопку не активной, либо добавить отзывы.
4) Terms в подвале:
    Ссылка не на ту страничку. Стоит "#", а должно быть "/terms".
5) Соц сети в подвале:
    Ссылки пустые. Нужно заполнить на правильные ссылки.
6) Travel insurance в подвале: 
    Ссылка не на ту страницу. Стоит "/home", а должно быть "/travel".
7) Иконка Vakuu в навбаре: 
    Ссылка не на ту страницу. Стоит "/home", а должно быть "/travel".
8) Иконка Vakuu в подвале: 
    Ссылка не на ту страницу. Стоит "https://sravni.ru/", а должно быть "/vacuu".
9) Номер телефона в шапке: 
    Ссылка не на ту страницу. Стоит "/home", а должно быть "/travel".
10) Смена языка:
    Не работает. Выбор языков без иконок флагов, но место под них выделено.
11) Форма подписки:
    В форме можно отправить пустое поле. Нужно добавить проверку на пустое поле.

В мобильной версии: 

12) Не работает кнопка открытия меню
13) Сбит css у "Choose insurances with":
    Можно исправить если убрать стиль width: 10%; на div.insurance
14) Не работает навигация у отзывов

Общие проблемы:

15) Ошибка в url. Сайт о компании "Vakuu", но в пути прописано "vacuu"


## Вывод

В ходе работы было надено 15 ошибок. 9 ошибок были покрыты автотестами. В ходе работы так же были выявлены места где именно находится ошибка и варианты исправлений. 