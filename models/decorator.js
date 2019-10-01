const Decorator = function(){
  this.stock = [];
}

Decorator.prototype.addPaint = function (paint_can){
  this.stock.push(paint_can);
};

module.exports = Decorator
