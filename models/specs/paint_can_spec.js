const assert = require('assert');
const PaintCan = require('../paint_can.js');


describe('PaintCan', function(){

  let paint_can;

  beforeEach(function(){
    paint_can = new PaintCan(100)
  })

  it('should hold a number of litres of paint', function(){
    const actual = paint_can.paintVolume;
    assert.strictEqual(actual, 100);
  });

  it('should be able to check that it is empty', function(){
    const actual = paint_can.isEmpty();
    assert.strictEqual(actual, false);
  });

  it('should be able to empty itself', function(){
    paint_can.empty();
    const actual = paint_can.paintVolume;
    assert.strictEqual(actual, 0);
  });

})
