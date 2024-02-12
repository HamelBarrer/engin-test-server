# Engin test

This is the proposal for the Engin test solution, using technologies:

- Node
- Express
- TypeScript

### Project configuration

The packages are required to be installed:

```sh
npm i  # npm
```

```sh
pnpm i  # pnpm
```

With the packages installed, all that remains is to run the project:

```sh
npm run dev  # npm
```

```sh
pnpm dev  # pnpm
```

### Organization

The project has three modules which are: BookCatalog, BookStore and Event, each one represents a solution to each of the three problems, where there is a functional connection between the BookCatalog module and BookStore.

### Routes

The BookStore module has the following routes:

```sh
GET http://localhost:3000/api/v1/bookstore/:bookId
GET http://localhost:3000/api/v1/bookstore
POST http://localhost:3000/api/v1/bookstore
PUT http://localhost:3000/api/v1/bookstore/:bookId
```

The BookCatalog module has the following routes:

```sh
GET http://localhost:3000/api/v1/books/:bookId
GET http://localhost:3000/api/v1/books
POST http://localhost:3000/api/v1/books
PUT http://localhost:3000/api/v1/books/:bookId
```

The Event module has the following routes:

```sh
GET http://localhost:3000/api/v1/event-logs/spots
GET http://localhost:3000/api/v1/event-logs/:eventLogId
GET http://localhost:3000/api/v1/event-logs
POST http://localhost:3000/api/v1/event-logs
PUT http://localhost:3000/api/v1/event-logs/:eventLogId
```
