const module1 = {
	init() {console.log("Init from Module 1");},
    getState() {return true;}
};

const module2 = {
	init() {console.log("Init from Module 2");},
};

const moduleMap = {"m1": module1, "m2": module2};

const NoModuleHandler = {
	get: (target, key) => {
        if (key in target) {
            return target[key];
        }
        if (key === "init") {
            return () => {console.log("Init");};
        }
        return () => {console.log("Not a function");return false;};
    },
    apply: (target, thisArg, argList) => {
        //start
        Reflect.apply(target, thisArg, argList);
        //end
    }
};

const ModuleFactory = {
    getModule: (name) => {
        return new Proxy(moduleArray[name] || {}, NoModuleHandler);
    }
};


const myMod = ModuleFactory.getModule("m8");
console.log(myMod.init());
console.log(myMod.getState());