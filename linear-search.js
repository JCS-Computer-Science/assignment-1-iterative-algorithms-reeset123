function linearSearch(array, searchTerm) 


{
    for (let a = 0; a < array.length; a++) {
        if (array[a] === searchTerm) {
            return a;
        }
    }
    return null;
}

module.exports = linearSearch;

