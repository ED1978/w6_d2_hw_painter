const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');


describe('Decorator', function(){

  let decorator;
  let paint_can1;
  let paint_can2;
  let paint_can3;
  let paint_can4;
  let paint_can5;
  let paint_can6;
  let room1;
  let room2;

  beforeEach(function(){
    decorator = new Decorator();
    paint_can1 = new PaintCan(20);
    paint_can2 = new PaintCan(20);
    paint_can3 = new PaintCan(20);
    paint_can4 = new PaintCan(20);
    paint_can5 = new PaintCan(20);
    paint_can6 = new PaintCan(20);
    room1 = new Room(100);
    room2 = new Room(150);
  });

  it('should start with an empty paint stock', function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a can of paint to stock', function(){
    decorator.addPaint(paint_can1);
    const actual = decorator.stock;
    assert.deepStrictEqual(actual,[paint_can1])
  });

  it('should be able to calculate the total litres in stock', function(){
    decorator.addPaint(paint_can1);
    decorator.addPaint(paint_can2);
    decorator.addPaint(paint_can3);
    decorator.addPaint(paint_can4);
    decorator.addPaint(paint_can5);
    decorator.addPaint(paint_can6);
    const actual = decorator.totalPaintVolume()
    assert.strictEqual(actual, 120);
  });

  it('should be able to calculate if it has enough paint to paint a room', function(){
    decorator.addPaint(paint_can1);
    decorator.addPaint(paint_can2);
    decorator.addPaint(paint_can3);
    decorator.addPaint(paint_can4);
    decorator.addPaint(paint_can5);
    decorator.addPaint(paint_can6);
    const actual = decorator.enoughPaint(room2);
    assert.strictEqual(actual, false);
  });

  xit('should be able to paint a room if there is enough stock', function(){

  });

});
