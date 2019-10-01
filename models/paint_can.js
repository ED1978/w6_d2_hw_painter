const PaintCan = function(paintVolume){
  this.paintVolume = paintVolume;
}

PaintCan.prototype.isEmpty = function(){
  if(this.paintVolume == 0){
    return true;
  } else {
    return false;
  }
};

PaintCan.prototype.empty = function(){
  this.paintVolume = 0;
};

module.exports = PaintCan;
