function bubbleSort(array) {
    const a= array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < a- 1; i++) {
            if (array[i] > array[i + 1]) {
        
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}
module.exports = bubbleSort;

