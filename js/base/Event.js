//基础事件类

export default class Event{
  constructor()
  {
    this.handlers = {};
  }

  add(t, h)
  {
    if (typeof(this.handlers[t]) == "undefined")
    {
      this.handlers[t] = [];
    }

    this.handlers[t].push(h);
  }

  fire(event)
  {
    if (typeof (this.handlers[event.type]) == "undefined") {
      return;
    }

    if (this.handlers[event.type] instanceof Array)
    {
      var handlers = this.handlers[event.type];

      for(var i = 0, len = handlers.length;i<len;i++)
      {
        handlers[i](event);
      }
    }
  }

  remove(t, h)
  {
    if (typeof (this.handlers[event.type]) == "undefined") {
      return;
    }

    if(this.handlers[t] instanceof Array)
    {
      var handlers = this.handlers[t];
      for(var i =0, len=handlers.length; i<len;i++)
      {
        if (handlers[i] == h)
        {
          break;
        }
      }
      handlers.splice(i, 1)
    }
  }
}

window.Event = new Event();
