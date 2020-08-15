class WindowConsole {

    constructor() {
        this.actLog = window.console.log;
    }

    overrideConsole(onLog) {
        window.console.log = (...args) => {
            this.actLog(...args);
            onLog(...args);
        };
    }
    
    reset() {
        window.console.log = this.actLog;
    }
}

window.controls = (function () {
    const windowObj = new WindowConsole();

    return {
        evalCode: function (btn, target) {
            var codeBlock = btn.previousElementSibling.firstElementChild;
            windowObj.overrideConsole((...args) => {
                const targetElement = document.querySelector(`#${target}`);
                targetElement.innerText = JSON.stringify(args);
            });
            eval(`(function () {${codeBlock.innerText};})();`);
            setTimeout(() => {
                windowObj.reset();
            }, 500);
        }
    }
})();