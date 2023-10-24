function insertionSort(array) {
   
		const n = array.length;
		for (let k = 1; k < n; k++) {
		const key = array[k];
		let j = k - 1;
		while (j >= 0 && array[j] > key) {
		array[j + 1] = array[j];
		j--;
	
	
				}
				array[j + 1] = key;
			}
		return array;
	}
	
	
	module.exports = insertionSort;
	
