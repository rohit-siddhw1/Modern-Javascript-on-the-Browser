const onButtonPress = () => {
    window.obj = {"a": 1};
    var wm = new WeakMap();
    wm.set(window.obj, 4);
    console.log("Started a 10 sec timer");
    console.log("delete window.obj to force gc on window.obj");
    setTimeout(() => {
        console.log("Check", wm);
    }, 10000);
};

const btn = document.querySelector("#checkWeakMaps");
btn.addEventListener('click', onButtonPress);