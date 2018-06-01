export default class Vector2{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
  }

  add(v){
    return new Vector2(this.x+v.x, this.y+v.y);
  }
  minis(v){
    return new Vector2(this.x-v.x, this.y-v.y);
  }

  dot(v){
    return this.x*v.x + this.y*v.y;
  }

  SqrMagnitude(){
    return this.x*this.x + this.y*this.y;
  }
  
}