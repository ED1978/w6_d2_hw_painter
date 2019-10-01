const assert = require('assert');
const Decorator = require('../decorator.js');


describe('Decorator', function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator()
  });

  it('should start with an empty paint stock', function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [])
  });

  xit('should be able to add a can of paint to stock', function(){

  });

  xit('should be able to calculate the total litres in stock', function(){

  });

  xit('should be able to calculate if it has enough paint to paint a room', function(){

  });

  xit('should be able to paint a room if there is enough stock', function(){

  });

});
