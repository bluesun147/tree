// const Branch = require('./branch');
import {Branch} from './branch.js';

export class Tree {
    constructor(ctx, postX, postY) {
        this.ctx = ctx;
        this.postX = postX;
        this.postY = postY;
        this.branches = []; // 가지 배열 
        this.depth = 10; // 늘어날수록 몸통 굵어짐? 왜

        this.init();
    }

    init() {
        // 시작 각도는 -90도를 주어 아래에서 위로 기중 자라도록
        this.createBranch(this.postX, this.postY, -90, 0);
        this.draw(this.ctx);
    }

    createBranch(startX, startY, angle, depth) {

        if (depth === this.depth) return;

        // random 함수 만들어 가지들 길이 랜덤으로.
        // depth가 0(나무 기둥) 일땐 최소, 최대 길이 다르게 (더 두껍게)
        const len = depth === 0 ? this.random(10, 13) : this.random(0, 11);

        // 현재 depth의 역 곱해줘서 depth 늘어날수록 길이 가늘게
        const endX = startX + this.cos(angle) * len * (this.depth - depth);
        const endY = startY + this.sin(angle) * len * (this.depth - depth);

        this.branches.push(new Branch(startX, startY, endX, endY, this.depth - depth));

        // this.createBranch(endX, endY, angle - 30, depth + 1);
        // this.createBranch(endX, endY, angle + 30, depth + 1); // 양쪽으로 가지 2개

        // 각도도 랜덤
        this.createBranch(endX, endY, angle - this.random(15, 23), depth + 1);
        this.createBranch(endX, endY, angle + this.random(15, 23), depth + 1); // 양쪽으로 가지 2개

    }

    draw(ctx) {
        for (let i=0; i<this.branches.length; i++) {
            this.branches[i].draw(ctx);
        }
    }

    cos(angle) {
        return Math.cos(this.degToRoad(angle));
    }
    sin(angle) {
        return Math.sin(this.degToRoad(angle));
    }
    degToRoad(angle) {
        return (angle / 180.0) * Math.PI;
    }

    random(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
}