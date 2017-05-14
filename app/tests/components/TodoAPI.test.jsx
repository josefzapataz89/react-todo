var expect = require('expect');

var $ = require('jquery');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach( () => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

});
