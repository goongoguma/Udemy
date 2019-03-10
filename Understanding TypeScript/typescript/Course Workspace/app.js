var myName = "max";
var myAge = 27;
// myName = 30;
// Even if myName is wrong type, when you execute tsc on command, TS compiler nontheless compiles the code.
// Because maybe there is something that TS is not able to know about
// This is not bad behavior but you can force it in tsconfig.json file
var anything;
anything = 12;
function controlMe(isTrue) {
    var result;
    if (isTrue) {
        result = 12;
    }
    return result;
}
//# sourceMappingURL=app.js.map