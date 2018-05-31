/**
 * 游戏基础的精灵类
 */
export default class Sprite {
  constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
    this.img = new Image()
    this.img.src = imgSrc

    this.width = width
    this.height = height

    this.xScale = 1;
    this.yScale = 1;

    this.x = x
    this.y = y

    this.visible = true
  }

  SetPosition(x, y){
    this.x = x;
    this.y = y;
  }

  SetScale(x, y){
    this.xScale = x;
    this.yScale = y;
  }

  /**
   * 将精灵图绘制在canvas上
   */
  OnPaint(ctx) {
    if (!this.visible)
      return

    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width * this.xScale,
      this.height * this.yScale
    )
  }

}
