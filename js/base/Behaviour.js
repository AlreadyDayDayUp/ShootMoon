///游戏对象基础类

export default class Behaviour{
  constructor(){
    this.OnStart();

    this.updateBind = this.OnUpdate.bind(this);
    Event.add(UpdateET, this.updateBind);

  }
  OnStart(){}

  OnUpdate(){
    //console.log("up")

  }

  OnDestroy(){
    Event.remove(UpdateET, this.updateBind);
  }
}