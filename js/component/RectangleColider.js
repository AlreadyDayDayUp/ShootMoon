
function pow(v) {
  return Math.pow(v, 2)
}

export default class RectangleColider{
  constructor(x, y, w, h) {
    this.t = 2;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  CheckRectangel(c)
  {
    let x1 = this.x-this.w/2, x2 = c.x-c.w/2, y1 = this.y-this.h/2, y2 = c.y-c.h/2, 
    w1 = this.w, w2 = c.w, h1 = this.h, h2 = c.h;

    if (x1 > x2 && x1 > x2 + w2) {
      return false;
    } else if (x1 < x2 && x1 + w1 < x2) {
      return false;
    } else if (y1 > y2 && y1 > y2 + h2) {
      return false;
    } else if (y1 < y2 && y1 + h1 < y2) {
      return false;
    }
    return true;  
  }

  CheckColide(c) {
    if (c.t == 1) {
      c.CheckColide(this)
    }
    if (c.t == 2) {
      if(this.CheckRectangel(c)){
        this.OnEnter();
      }
    }
  }

  OnEnter() {
    console.log("Rectangel colider entered")
   }
  OnColiding() { }
  OnExit() { }
}