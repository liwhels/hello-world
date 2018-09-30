class numberStack {
    constructor() {    //构造方法
        this.stack = [] 
    }
    push(num) {     //定义类的方法
        if (typeof num != "number") return false;
        this.stack.push(num);
    }
    pop(num) {          //定义类的方法
        if (this.stack.length > 0) {
            let last = this.stack.pop()

            return last;
        } else {
            return false;
        }
    }
}
var A = new numberStack();
var B = new numberStack();
A.stack = [1, 2, 3, 4, 5, 6];
B.stack = []

function stackInOut(n) {
    let i = n,
        m = A.stack.length;
    for (let j = 1; j <= m; j++) {
        let ele = A.pop()
        if (ele == i) {
            console.log(ele);
            break;
        } else {
            B.push(ele);
        }
    }
    while (B.stack.length) {
        let ele = B.pop();
        A.push(ele);
    }
}

stackInOut(3);
console.log(A.stack);
