import Sprite from './sprite'
import Timer from '/js/base/Timer.js'
/**
 * 简易的帧动画类实现
 */
export default class Animation extends Sprite {
  constructor(imgSrc, width, height) {
    super(imgSrc, width, height)

    // 当前动画是否播放中
    this.isPlaying = false

    // 动画是否需要循环播放
    this.loop = false

    // 每一帧的时间间隔
    this.interval = 1000 / 60

    // 当前播放的帧
    this.index = -1

    // 总帧数
    this.count = 0

    // 帧图片集合
    this.imgList = []
  }

  /**
   * 初始化帧动画的所有帧
   * 为了简单，只支持一个帧动画
   */
  initFrames(imgList) {
    imgList.forEach((imgSrc) => {
      let img = new Image()
      img.src = imgSrc

      this.imgList.push(img)
    })

    this.count = imgList.length
  }

  // 将播放中的帧绘制到canvas上
  aniRender(ctx) {
    ctx.drawImage(
      this.imgList[this.index],
      this.x,
      this.y,
      this.width,
      this.height
    )
  }

  // 播放预定的帧动画
  playAnimation(index = 0, loop = false) {
    // 动画播放的时候精灵图不再展示，播放帧动画的具体帧
    this.visible = false

    this.isPlaying = true
    this.loop = loop

    this.index = index

    if (this.interval > 0 && this.count) {
      this.isPlaying = true
      this.loopBinder = this.frameLoop.bind(this);
      this.timer = new Timer(this.loopBinder, this.interval, this.count);
      this.timer.Start();
    }
  }

  // 停止帧动画播放
  stop() {
    this.isPlaying = false;
    if(this.timer){
      this.timer.Stop();
    }
  }

  // 帧遍历
  frameLoop() {
    this.index++

    if (this.index > this.count - 1) {
      if (this.loop) {
        this.index = 0
      }

      else {
        this.index--
        this.stop()
      }
    }
  }
}
