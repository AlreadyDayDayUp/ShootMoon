
var slots = []

function Update(){

  for (var i = 0; i < slots.length;i++)
  {
    var item = slots[i];

    if (item.nextTime <= Time)
    {
      if (item.loop < 1)
      {
        Remove(item)
        i = i - 1;
      }
      else
      {
        item.nextTime = item.nextTime + item.gap;

        item.loop = item.loop - 1;

        item.func();
      }
    }
  }
}

function Add(s){
  slots.push(s);
}

function Remove(s){
  for (var i = 0, len = slots.length; i < len; i++) {
    if (slots[i] == s) {
      break;
    }
  }
  slots.splice(i, 1)
}

Event.add(UpdateET, Update);

class Slot{
  constructor(func, gap, loop)
  {
    this.func = func;
    this.gap = gap;
    this.loop = loop;
    this.nextTime = 0;
  }

  Init()
  {
    this.nextTime = Time + this.gap
    this.loop = this.loop - 1
  }

}

export default class Timer{
  constructor(func, gap, loop)
  {
    this.slot = new Slot(func, gap, loop)
  }

  Start()
  {
    this.slot.Init()
    Add(this.slot);
  }

  Stop()
  {
    Remove(this.slot)
  }
}