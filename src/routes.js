const { addNewBookHandler, getAllBookHandler, getBookByIdHandler, updateBookByIdHandler, deleteBookByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNewBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandlerr,
  },
];

module.exports = routes;