class Vector {
  constructor(item, width, height) {
    this.item = item;
    this.width = width;
    this.height = height;
    this.posX = 0;
    this.posY = 0;
    this.directionX = null;
    this.directionY = null;
  }

  move() {
    this.item.style.top = `${this.moveY()}px`;
    this.item.style.left = `${this.moveX()}px`;
  }

  moveX() {
    if (this.directionX) {
      this.posX += 0.5;
      if (this.posX >= this.width) {
        this.directionX = false;
      }
    } else {
      this.posX -= 0.5;
      if (this.posX <= 0) {
        this.directionX = true;
      }
    }

    return this.posX;
  }

  moveY() {
    if (this.directionY) {
      this.posY += 0.5;
      if (this.posY >= this.height) {
        this.directionY = false;
      }
    } else {
      this.posY -= 0.5
      if (this.posY <= 0) {
        this.directionY = true;
      }
    }

    return this.posY;
  }

  initialPos() {
    let posX = Math.floor(Math.random() * this.width),
       posY = Math.floor(Math.random() * this.height);
    
    this.posX = posX;
    this.posY = posY;
  }

  changeDirection() {
    let dx = Math.floor(Math.random() * 2);
    let dy = Math.floor(Math.random() * 2);

    this.directionX = dx === 1;
    this.directionY = dy === 1;
  }
}

export default Vector