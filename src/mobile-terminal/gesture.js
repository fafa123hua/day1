// - start、move、end
// - pressstart、pressend
// - tap
// - panstart、pan、panend

function enableGesture(ele){
    if("ontouchstart" in  document ){
        ele.addEventListener("mousedown", (event) => {
            let move = (event) => {
                const stop = ()=>{
                    enent.preventDefault();
                }
                onMove(event, contexts[mouse_type]);
            };
            let end = (event) => {
                onEnd(event, contexts[mouse_type]);
                document.removeEventListener("mousemove", move);
            }
            document.addEventListener("mousemove", move);
            contexts[mouse_type] = {};
            onStart(event, contexts[mouse_type]);
            document.addEventListener("mouseup", end, { once: true });
        });
    }
    ele.addEventListener("touchstart", (event) => {
        for (let touch of event.changedTouches) {
            contexts[touch.identifier] = {};
            onStart(touch, contexts[touch.identifier]);
        }
    });
    ele.addEventListener("touchmove", (event) => {
        const stop = ()=>{
            event.preventDefault();
        }
        for (let touch of event.changedTouches) {
            touch.stop = stop;
            onMove(touch, contexts[touch.identifier]);
        }
    });
    ele.addEventListener("touchend", (event) => {
        for (let touch of event.changedTouches) {
            onEnd(touch, contexts[touch.identifier]);
            delete contexts[touch.identifier];
        }
    });
    let onStart = (point, context) => {
        element.dispatchEvent(Object.assign(new CustomEvent('start'), {
            startX: point.clientX,
            startY: point.clientY,
            clientX: point.clientX,
            ClientY: point.clientY
        }));
        context.startX = point.clientX;
        context.startY = point.clientY;
        context.isTap = true; // 点击
        context.isPan = false; // 滑屏
        context.isPress = false; // 长按
        context.timoutHandler = setTimeout(() => {
            if (context.isPan) return;
            context.isTap = false;
            context.isPress = true;
            element.dispatchEvent(Object.assign(new CustomEvent('pressstart'), {
                clientX: point.clientX,
                ClientY: point.clientY
            }))
        }, 300);
    };
    let onMove = (point, context) => {
        let dx = point.clientX - context.startX;
        let dy = point.clientY - context.startY;
        if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
            clearTimeout(context.timoutHandler);
            context.isTap = false;
            context.isPan = true;
            context.isPress = false;
            ele.dispatchEvent(Object.assign(new CustomEvent("panstart"), {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY,
                stop: point.stop
            }));
            if(context.isPress){
                ele.dispatchEvent(new CustomEvent('presscancel'))
            }
            return ;
        }
        if (context.isPan) {
            ele.dispatchEvent(Object.assign(new CustomEvent("pan"), {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY,
                stop: point.stop
            }));
        }
        ele.dispatchEvent(Object.assign(new CustomEvent("move"), {
            clientX: point.clientX,
            clientY: point.clientY
        }))
    };
    let onEnd = (point, context) => {
        clearTimeout(context.timoutHandler);
        if (context.isPan) {
            ele.dispatchEvent(Object.assign(new CustomEvent('panend'), {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY
            }))
        }
        if (context.isTap) {
            ele.dispatchEvent(Object.assign(new CustomEvent("tap"), {
                clientX: point.clientX,
                clientY: point.clientY
            }));
        }
        if (context.isPress) {
            ele.dispatchEvent(Object.assign(new CustomEvent("pressend"), {
                clientX: point.clientX,
                clientY: point.clientY
            }));
        }
        ele.dispatchEvent(Object.assign(new CustomEvent("end"), {
            clientX: point.clientX,
            clientY: point.clientY
        }))
    }
}