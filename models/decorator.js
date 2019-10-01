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
    this.usePaint(room)
    this.removeEmptyCans()
  }
}

Decorator.prototype.usePaint = function(room){
  let unPaintedArea = room.area;
  for (const paint_can of this.stock){
    if (unPaintedArea > 0){
      unPaintedArea -= paint_can.paintVolume;
      paint_can.empty();
    }
  }
}

Decorator.prototype.removeEmptyCans = function(){
  let fullCans = []
  for (const paint_can of this.stock){
    if (paint_can.paintVolume > 0){
      fullCans.push(paint_can);
    }
  }
  this.stock = fullCans;
}

module.exports = Decorator
