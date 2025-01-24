const {
  addNoteHandler,
  getAllNotesHanlder,
  detailNotesHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handles');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHanlder,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: detailNotesHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
