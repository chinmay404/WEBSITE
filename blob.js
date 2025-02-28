function initBlob() {
    const canvas = document.createElement("canvas")
    canvas.setAttribute("touch-action", "none")
    canvas.style.position = "absolute"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.zIndex = "0"
  
    document.getElementById("blob-animation").appendChild(canvas)
  
    const blob = new BlobAnimation(canvas)
    blob.init()
    blob.render()
  }
  
  class BlobAnimation {
    constructor(canvas) {
      this.canvas = canvas
      this.ctx = canvas.getContext("2d")
      this.points = []
      this.numPoints = 32
      this.radius = 150
      this.position = { x: 0.5, y: 0.5 }
    }
  
    init() {
      for (let i = 0; i < this.numPoints; i++) {
        const point = new BlobPoint(((Math.PI * 2) / this.numPoints) * (i + 1), this)
        this.points.push(point)
      }
      window.addEventListener("resize", () => this.resize())
      this.resize()
    }
  
    resize() {
      this.canvas.width = this.canvas.offsetWidth
      this.canvas.height = this.canvas.offsetHeight
    }
  
    render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.points[0].solveWith(this.points[this.numPoints - 1], this.points[1])
  
      const p0 = this.points[this.numPoints - 1].position
      let p1 = this.points[0].position
      const _p2 = p1
  
      this.ctx.beginPath()
      this.ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2)
  
      for (let i = 1; i < this.numPoints; i++) {
        this.points[i].solveWith(this.points[i - 1], this.points[i + 1] || this.points[0])
        const p2 = this.points[i].position
        const xc = (p1.x + p2.x) / 2
        const yc = (p1.y + p2.y) / 2
        this.ctx.quadraticCurveTo(p1.x, p1.y, xc, yc)
        p1 = p2
      }
  
      const xc = (p1.x + _p2.x) / 2
      const yc = (p1.y + _p2.y) / 2
      this.ctx.quadraticCurveTo(p1.x, p1.y, xc, yc)
      this.ctx.fillStyle = "#3a86ff"
      this.ctx.fill()
  
      requestAnimationFrame(() => this.render())
    }
  }
  
  class BlobPoint {
    constructor(azimuth, parent) {
      this.parent = parent
      this.azimuth = Math.PI - azimuth
      this.components = { x: Math.cos(this.azimuth), y: Math.sin(this.azimuth) }
      this.radialEffect = 0
      this.acceleration = Math.random() * 0.6 - 0.3
      this.speed = 0
      this.friction = 0.02
      this.elasticity = 0.001
    }
  
    solveWith(leftPoint, rightPoint) {
      this.acceleration =
        (-0.3 * this.radialEffect +
          (leftPoint.radialEffect - this.radialEffect) +
          (rightPoint.radialEffect - this.radialEffect)) *
          this.elasticity -
        this.speed * this.friction
      this.speed += this.acceleration
      this.radialEffect += this.speed
    }
  
    get position() {
      return {
        x:
          this.parent.canvas.width * this.parent.position.x +
          this.components.x * (this.parent.radius + this.radialEffect),
        y:
          this.parent.canvas.height * this.parent.position.y +
          this.components.y * (this.parent.radius + this.radialEffect),
      }
    }
  }
  
  // Initialize the blob animation on page load
  document.addEventListener("DOMContentLoaded", initBlob)
  
  