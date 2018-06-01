
function pow(v){
  return Math.pow(v, 2)
}

export default class CircleColider{
  constructor(x,y,r){
    this.t = 1;
    this.x = x;
    this.y = y;
    this.r = r;
  }

  BoxCircleColide()
  {
    let v = Math.abs(p-c);
    let u = Math.max(v-h,0);
    return dot(u,u)<=r*r;
  }

  CheckColide(c) {
    if(c.t == 1){
      let dx = this.x-c.x;
      let dy = this.y- c.y;

      if(pow(dx) + pow(dy) <= pow(this.r + c.r))
      {
        this.OnEnter();
      }
    }
    if(c.t == 2){
      let vx = Math.abs(c.x - this.x) 
      let vy = Math.abs(c.y - this.y)

      let hx = c.w/2;
      let hy = c.h/2;

      let ux = Math.max(vx - hx, 0);
      let uy = Math.max(vy-hy, 0);

      if(ux*ux+uy*uy <= this.r*this.r)
      {
        this.OnEnter(c);
      }
    }
  }

  OnEnter(c) {
    console.log("colider entered")
  }
  OnColiding() { }
  OnExit() { }
}