import './Event'
import './EventType'

window.Time = 0;
window.UpdateGap = 1000/60;

export default class GameEngine {
  constructor() {
    this.bindLoop = this.loop.bind(this);
    setInterval(
      this.loop.bind(this),
      UpdateGap
    )
  }

  update()
  {
    let e = {};
    e.type = window.UpdateET;
    Event.fire(e);
  }

  loop() {
    this.update();

    Time = Time + UpdateGap;
  }
}



// import be from './Behaviour.js'
// new be();

// var i = 0;
// function temp() {
//   i = i + 1;
//   console.log(i)
// }

// import timer from './Timer.js'
// var t = new timer(temp, 500, 10);
// t.Start()

// var t2 = new timer(temp, 100, 10);
// t2.Start()