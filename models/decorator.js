const Decorator = function(){
  this.stock = [];
}

Decorator.prototype.addPaint = function (paint_can){
  this.stock.push(paint_can);
};

Decorator.prototype.totalPaintVolume = function(){
  let totalPaintVolume = 0;
  for (const paint_can of this.stock) {
    totalPaintVolume += paint_can.paintVolume;
  }
  return totalPaintVolume;
};

module.exports = Decorator
