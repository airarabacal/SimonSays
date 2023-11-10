class AnrBox {
    constructor(bx, by, boxSize, color) {
        this.bx = bx;
        this.by = by;
        this.boxSize = boxSize;
        this.color = color;
        this.overBox = false;
    }

    render(mouseX, mouseY) {
        push();

        if (this.checkWithinBox(mouseX, mouseY)) {
            //this.overBox = true;
            fill(255, 255, 255);
        } else {
            //stroke(156, 39, 176);
            fill(this.color);
            //this.overBox = false;
        }

        rect(this.bx, this.by, this.boxSize, this.boxSize);
        pop();
    }

    checkWithinBox(mouseX, mouseY) {
        return mouseX > this.bx &&
            mouseX < this.bx + this.boxSize &&
            mouseY > this.by &&
            mouseY < this.by + this.boxSize;

    }
}   