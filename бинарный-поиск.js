var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var find = 8;

function func(arr, find) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var midElem = Math.floor((low + high) / 2);
        var mid = arr[midElem];
        if (mid < find) {
            low = mid + 1;
        } else if (mid > find) {
            high = mid - 1;
        } else if (mid == find) {
            return midElem;
        } else {
            return None;
        }
    }
}
func(arr, find);