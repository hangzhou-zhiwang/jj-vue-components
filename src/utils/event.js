class domEvent {
    constructor() { }
    addListener(elem, type, handle) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handle, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, function () {
                handle.call(elem);
            })
        } else {
            elem['on' + type] = handle;
        }
    }
    removeEvent(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {//detachEvent是ie的事件监听
            element.detachEvent('on' + type, handler)
        } else {
            element['on' + type] = null;
        }
    }
    stopEvent(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancleBubble = true;//true就表示阻止事件冒泡
        }
    }
}
export default new domEvent()