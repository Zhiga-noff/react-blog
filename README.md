Области хранения данных:

- база данных на json-server
- BFF
- redux store

Сущности приложения:

- Пользователь: БД (список пользователей), BFF (сессия текущего пользователя), store (отображение в браузере)
- Роль пользователя: БД (список ролей), BFF (ссесия пользователя с роью), store (использование на клиенте)
- Статья: БД (список статей), store (оборжаение в бразуере)
- Комментарий: БД (список комментариев), store (отображение в браузере)

Таблицы БД:

- Пользователи - users: id / login / password / registered_at / role_id
- Роли - roles: id / name
- Статьи - posts: id / title / image_url / content / published_at
- Коммантарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

- Сессия текущего пользователя: login / password / role

Схема для redux store (на клиенте):

- user: id / login / roleId
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
-
