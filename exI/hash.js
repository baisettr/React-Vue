
class HashTable {

    constructor(size = 42) {
        this.buckets = new Array(size)
        this.size = size
    }


    hash(key) {
        return key.toString().length % this.size;
    }


    set(key, value) {

        let index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        this.buckets[index].push([key, value])

        return index

    }

    get(key) {

        let index = this.hash(key);

        if (!this.buckets[index]) return null

        for (let bucket of this.buckets[index]) {
            // key
            if (bucket[0] === key) {
                //value
                return bucket[1]
            }
        }


    }

}

let bind = function (func, context) {
    let previousArgs = [].slice.call(arguments, 2);
    return function () {
        let currentArgs = [].slice.call(arguments);
        let combinedArgs = [].concat(previousArgs, currentArgs);
        return func.apply(context, combinedArgs);
    }
};
Function.prototype.bind = function (context) {
    // method is attached to the prototype, so just refer to it as this.
    let func = this;
    let previousArgs = [].slice.call(arguments, 1);

    return function () {
        let currentArgs = [].slice.call(arguments);
        let combinedArgs = [].concat(previousArgs, currentArgs);
        return func.apply(context, combinedArgs);
    };
};
