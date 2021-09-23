class Carousel {
  constructor(opt) {
    let { imgList } = opt;
    for (let s in opt) {
      this[s] = opt[s];
    }
    this.x = 0; //
    this.startX = 0;
    enableGesture(imgList);
    this.isMove = false;
    imgList.addEventListener("panstart", (e) => {
      this.panstart(e);
    });
    imgList.addEventListener("pan", (e) => {
      this.panstart(e);
    });
  }
  panstart(e) {
    this.startX = e.clientX - e.startX;
    this.disY = e.clientY - e.startY;
    if(Math.abs(disX)>Math.abs(disY)){
        this.isMove = true;
    }else{
        this.isMove = false;
    }
    this.startX = this.x
  }
  pan(e){
      let disX = e.clientX - e.startX;
      this.x = this.startX + disX;
      this.setTransfrom()
  }
  setTransfrom(){
      this.imgList.style.transform = `translate3d(${this.x}px,0,0)`;
  }
}
