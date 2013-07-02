var processArrayAsync = function (items, processFunction) {
    var index = -1;
    if (!(items instanceof Array) || !(processFunction instanceof Function)) {
        throw "Pass the right arguments!";
    }
    
    (function next () {
        if (++index < items.length) {
            processFunction.apply(null, [ items[index], next ]);
        }
    })();
}

var a = [1, 2, 3, 4, 5, 6];

processArrayAsync(a, function(item, next) {
    console.log("Item " + item + " done");
    setTimeout(function() {
        next();
    }, 1000);
});
