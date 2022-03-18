export class Branch {
    constructor(startX, startY, endX, endY, lineWidth) {
        this.startX = startX;
        this. startY = startY;
        this. endX = endX;
        this. endY = endY;
        this.color = '#000000';
        this.lineWidth = lineWidth;
    }

    draw(ctx) {
        ctx.beginPath();

        ctx.moveTo(this.startX, this.startY); // 선 시작 위치
        ctx.lineTo(this.endX, this.endY); // 선 끝 위치

        // if (this.lineWidth < 3) {
        //     ctx.lineWidth = 0.5;
        // } else if (this.lineWidth < 7) {
        //     ctx.lineWidth = this.color.lineWidth + 0.7;
        // } else if (this.lineWidth < 10) {
        //     ctx.lineWidth = this.color.lineWidth + 0.9;
        // } else {
        //     ctx.lineWidth = this.color.lineWidth;
        // }

        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        ctx.stroke();
        ctx.closePath();
    }
}