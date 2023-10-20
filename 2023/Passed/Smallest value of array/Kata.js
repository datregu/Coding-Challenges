function min(arr, toReturn) {
        let smallest = Math.min(...arr);
        return toReturn ===  'index' ?  arr.indexOf(smallest) :  smallest;
        }