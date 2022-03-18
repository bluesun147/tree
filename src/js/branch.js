export class Branch {
    constructor(startX, startY, endX, endY, lineWidth) {
        this.startX = startX;
        this. startY = startY;
        this. endX = endX;
        this. endY = endY;
        this.color = '#000000';
        this.lineWidth = lineWidth; // 가지 굵기

        this.frame = 10; // 가지를 100등분으로 나누기 위한 변수 frame
        // 100개의 구간으로 나눠 branch가 계속 그려짐
        this.cntFrame = 0; // 현재 frame

        // 가지 길이를 frame으로 나눠 구간별 길이를 구함
        this.gapX = (this.endX - this.startX) / this.frame;
        this.gapY = (this.endY - this.startY) / this.frame;

        // 구간별 가지가 그려질 때 끝 좌표
        this.currentX = this.startX;
        this.currentY = this.startY;
    }

    draw(ctx) {

        // 현재 프레임의 cntFrame이 설정한 frame과 같다면 draw 하지 않음
        // 가지 다 그리면 true 리턴
        if (this.cntFrame === this.frame) return true;

        ctx.beginPath();

        this.currentX += this.gapX;
        this.currentY += this.gapY;

        ctx.moveTo(this.startX, this.startY); // 선 시작 위치
        ctx.lineTo(this.currentX, this.currentY); // 선 끝 위치

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

        this.cntFrame++;

        // 다 안그렸으면 false 리턴
        return false;
    }
}