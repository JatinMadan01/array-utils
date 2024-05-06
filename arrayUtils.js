const arrayUtils = {
    sum: function(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },
    
    average: function(arr) {
      if (arr.length === 0) return NaN;
      return arrayUtils.sum(arr) / arr.length;
    },
  
    unique: function(arr) {
      const uniqueArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
          uniqueArr.push(arr[i]);
        }
      }
      return uniqueArr;
    },
  
    shuffle: function(arr) {
      const shuffled = [...arr];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },
  
    flatten: function(arr) {
      const flattened = [];
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flattened.push(...arrayUtils.flatten(arr[i]));
        } else {
          flattened.push(arr[i]);
        }
      }
      return flattened;
    },
  
    compact: function(arr) {
      const compacted = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          compacted.push(arr[i]);
        }
      }
      return compacted;
    },
  
    sortBy: function(arr, key) {
      return arr.slice().sort((a, b) => {
        if (typeof key === 'function') {
          return key(a) - key(b);
        }
        return a[key] - b[key];
      });
    },
  
    groupBy: function(arr, key) {
      const grouped = {};
      for (let i = 0; i < arr.length; i++) {
        const keyValue = (typeof key === 'function') ? key(arr[i]) : arr[i][key];
        if (!grouped[keyValue]) {
          grouped[keyValue] = [];
        }
        grouped[keyValue].push(arr[i]);
      }
      return grouped;
    },
  
    chunk: function(arr, size) {
      const chunkedArr = [];
      for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
      }
      return chunkedArr;
    },
  
    zip: function(...arrays) {
      const maxLength = Math.max(...arrays.map(arr => arr.length));
      const zipped = [];
      for (let i = 0; i < maxLength; i++) {
        zipped.push(arrays.map(arr => arr[i]));
      }
      return zipped;
    }
  };
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  console.log(arrayUtils.sum(numbers)); // Output: 15
  console.log(arrayUtils.average(numbers)); // Output: 3
  console.log(arrayUtils.unique([1, 2, 2, 3, 3, 3])); // Output: [1, 2, 3]
  console.log(arrayUtils.shuffle(numbers)); // Output: [3, 4, 5, 1, 2]
  console.log(arrayUtils.flatten([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
  console.log(arrayUtils.compact([0, 1, false, 2, '', 3])); // Output: [1, 2, 3]
  console.log(arrayUtils.sortBy([{ name: 'John', age: 20 }, { name: 'Jane', age: 30 }], 'age')); // Sorted by age
  console.log(arrayUtils.groupBy([{ name: 'John', age: 20 }, { name: 'Jane', age: 30 }, { name: 'Doe', age: 20 }], 'age')); // Grouped by age
  console.log(arrayUtils.chunk([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]
  console.log(arrayUtils.zip([1, 2, 3], ['a', 'b', 'c'])); // Output: [[1, 'a'], [2, 'b'], [3, 'c']]
  