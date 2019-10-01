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

Decorator.prototype.enoughPaint = function(room){
  if (this.totalPaintVolume() >= room.area){
    return true;
  } else {
    return false;
  }
}

Decorator.prototype.paintRoom = function(room){
  if (this.enoughPaint(room) == true){
    room.bePainted();
  }
}

module.exports = Decorator
