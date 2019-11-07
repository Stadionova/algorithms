// Сортировка пузырьком

var m = [10, 6, 3, 4, 1, 2, 7, 8, 9, 5];

function func(m) {
    for (var i = 0; i < m.length; i++) { // пробегаюсь перебором по массиву
        for (var j = 0; j < m.length; j++) { // второй цикл перебирает все числа один раз
            if (m[j] > m[j + 1]) {
                [m[j], m[j + 1]] = [m[j + 1], m[j]]; // [a, b] = [1, 2]
            }
        }
    }
    return m;
}
func(m);

// СОРТИРОВКА ВЫБОРОМ

var time = performance.now();

var arr = [10, 6, 3, 4, 1, 2, 7, 8, 9, 5];

function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        let indexMin = i; // ячейка с индексом 0 минимальная
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexMin] > arr[j]) { // arr[indexMin] == 10 // arr[j] == 6
                indexMin = j; // теперь ячейка с индексом 1 минимальная и т.д. она будет увеличиваться +1 с каждой итерацией
            }
        }
        if (indexMin !== i) { // если индекс цифры 10 != индексу минимального значения, значит меняем местами
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};
selectionSort(arr);

time = performance.now() - time;
console.log('Время выполнения = ', time);

// СОРТИРОВКА ВЫБОРОМ через Math.min

var time = performance.now();
var arr = [10, 6, 3, 4, 1, 2, 7, 8, 9, 5];
var copyArr = arr.slice();
var arrNew = [];
function func(arr) {
    for (var i = 0; i < arr.length; i++) {
        // var copy = copyArr.slice(i);
        var min = Math.min(...copyArr);
        var index = copyArr.indexOf(min);
        copyArr.splice(index, 1);
        arrNew.push(min);
    }
    return arrNew;
}
func(arr);
time = performance.now() - time;
console.log('Время выполнения = ', time);

// СОРТИРОВКА ВСТАВКАМИ

var arr = [6, 3, 10, 4, 1, 2, 7, 8, 9, 5];

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) { // Выполняется для каждого элемента массива
        var current = arr[i]; // Определяется значение текущего элемента = индекс 1 (значение 6)
        var previous = i - 1; // Определяется индекс предыдущего элемента = индекс 0 (значение 10)
        while (previous >= 0 && arr[previous] > current) { // Пока индекс предыдущего элемента >= 0 и его знач больше знач текущ элемента
            // 0 == 0, 10 > 6 (true)
            arr[previous + 1] = arr[previous]; // Значением следующего за текущим элемента массива становится значение предыдущего элемента
            // вместо 6 пишу 10 [10, 10, 3, 4, 1, 2, 7, 8, 9, 5]
            previous--;
            // индес уменьшаю на 1 = -1
        }
        // вместо 10 пишу 6 [6, 10, 3, 4, 1, 2, 7, 8, 9, 5]
        arr[previous + 1] = current;
        // если изначально зашла в while - то значением следующего за текущим элемента массива становится значение текущего элемента
        // а если не зашла в while, потому что previous и так меньше current, значит менять местами не надо, поэтому текущ знач ост на месте
    }
    return arr;
};
insertionSort(arr);

// задача на палиндром

// первый алгоритм менее эффективный:

var word = 'som';
function func(word) {
    var arr = word.split('');
    var reversed = arr.reverse();
    var str = reversed.join('');
    if (word === str) {
        return true;
    } else {
        return false;
    }
}
func(word);

// второй алгоритм более эффективный:
// для символов выделяется 2 байта (1 ячейка==2 байта)
// для символов (чисел) выдел 8 байтов (4 ячейки)

var word = 'soghjs';
function func(word) {
    for (var i = 0; i < word.length; i++) {
        var j = 1;
        var begin = word[i]; // o
        var end = word[word.length - j]; // j
        if (begin != end) {
            return false;
        } else {
            i++;
            j++;
        }
    }
    return true;
}
func(word);

// затраты: 1 итерация для строки и 2 числа

// бинарный поиск неправильно, потому что через indexOf:

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var find = 1;

function func(arr, find) {
    var copyArr = arr.slice('');
    for (var i = 0; i < arr.length; i++) {
        var middleElemIndex = copyArr.length / 2; // 4
        var roundIndex = Math.floor(middleElemIndex);
        if (copyArr[roundIndex] == find) {
            return arr.indexOf(copyArr[roundIndex]);
        } else if (copyArr[roundIndex] < find) {
            copyArr.splice(0, roundIndex);
        } else {
            copyArr.splice(roundIndex, copyArr.length);
        }
    }
    return 'not found';
}
func(arr, find);

// бинарный поиск правильно, потому что через применение алгоритма:

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var find = 8;

function func(arr, find) {
    var copyArr = arr.slice('');
    var middleElemIndex = copyArr.length / 2; // 4
    for (var i = 0; i < arr.length; i++) {
        if (copyArr[middleElemIndex] == find) {
            return middleElemIndex;
        } else if (copyArr[middleElemIndex] < find) {
            middleElemIndex = middleElemIndex + 1;
        } else {
            middleElemIndex = 0;
        }
    }
    return 'not found';
}
func(arr, find);

// структура данных "односвязный список", нужно по нему пробежаться, достать все значения и определить сложность алгоритма:
// сложность O(N) - линейная, никакие новые переменные не создаются, цикл пробегается по списку один раз

// решение через цикл:

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
}

function func(list) {
    var elem = list;
    while (elem) {
        console.log(elem.value);
        elem = elem.next;
    }
}
func(list);

// решение через рекурсию:

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
}

function func(list) {
    var elem = list;
    if (elem.next == null) {
        console.log(elem.value);
        return;
    }

    console.log(elem.value);
    elem = func(elem.next);
}
func(list);

// нужно отсортировать массив чисел от меньшего к большему с помощью пузырькового алгоритма (сравниваю между собой два элемента)
// сложность O(N2) - квадратичная, никакие новые переменные не создаются, 2 цикла (O от N в квадрате)

var arr = [78, 5, 4, 0, 3, 6, 7, 11, 159, 18];

function func(arr) {
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
}
func(arr);

// нужно отсортиров массив чисел от меньш к больш с помощью сортировки выбором (выбир самое маленьк число и переставл его в начало массива)
// сложность O(N2) - квадратичная, никакие новые переменные не создаются, 2 цикла (O от N в квадрате)
// поняла, как это работает:
// + определяю, что минимальным индексом будет первая ячейка в массиве, какое бы число в ней не находилось
// + беру первый элемент = 78 
// + беру второй элемент = 5
// + сравниваю их, если 78 > 5 значит, что теперь минимальной ячейкой становится ячейка, в которой находится цифра 5 
// + далее сравниваю значение из минимальной ячейки со следующим, 5 > 4 да, теперь минимальной становится ячейка с цифрой 4
// + далее 4 > 0 да, теперь минимальной ячейкой становится ячейка с цифрой 0
// + далее 0 > 3 нет, значит самая минимальная ячейка на данный момент с цифрой ноль, значит минимальную ячейку не меняю
// + сравниваю дальше, 0 > 6 нет, минимальная ячейка остаётся и так до конца
// + после первой итерации первого цикла спрашиваю:
// + первое значение в изначально минимальной ячейке = 78 равно ли значению в текущей минимал ячейке = 0
// + нет, не равно, значит минимал знач теперь явл ячейка с цифрой 0
// + если же ответ - равно, знач текущ знач явл минимал и остаётся на месте

var arr = [78, 5, 4, 0, 3, 6, 7, 11, 159, 18];

function func(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var minElem = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[minElem] > arr[j]) {
                minElem = j;
            }
        }
        if (minElem != i) {
            [arr[i], arr[minElem]] = [arr[minElem], arr[i]];
        }
    }
    return arr;
}
func(arr);

// нужно отсортиров массив чисел от меньш к больш с помощью сортировки вставкой (каждое последующ число сравниваю только с предыдущими)
// сложность O(N2) - квадратичная, никакие новые переменные не создаются, 2 цикла (O от N в квадрате)

var arr = [5, 4, 0, 78, 3, 6, 7, 11, 159, 18];

function func(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentNum = arr[i];
        var previousIndex = i - 1;
        while (previousIndex >= 0 && arr[previousIndex] > currentNum) {
            arr[previousIndex + 1] = arr[previousIndex];
            previousIndex--;
        }
        arr[previousIndex + 1] = currentNum;
    }
    return arr;
}
func(arr);













