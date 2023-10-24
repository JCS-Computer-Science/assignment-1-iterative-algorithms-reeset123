function selectionSort(array) {

   
        const m = array.length;
        for (let i = 0; i < m - 1; i++) {
            let minIndex = i;
            for (let a = i + 1; a < m; a++) {
                if (array[a] < array[minIndex]) {
                    minIndex = a;
                }
            }
            if (minIndex !== i) {
                const temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
        }
    return array;
}
module.exports = selectionSort;
