 var arr = new Array(1, 5, 8, 3, 6, 9, 4, 3);

 function mergeSort(arr) {
     var len = arr.length;
     if (len < 2) { return arr; }
     var middle = Math.floor(len / 2),
         left = arr.slice(0, middle),
         right = arr.slice(middle);
     return merge(mergeSort(left), mergeSort(right));
 }

 function merge(left, right) {
     var result = [];
     let i = 0;
     let j = 0; // 循环比较 
     while (i < left.length && j < right.length) {
         if (left[i] <= right[j]) { result.push(left[i++]); } else { result.push(right[j++]); }
     }
     while (i < left.length) result.push(left[i++]);
     while (j < right.length) result.push(right[j++]);
     return result;
 }
 arr = mergeSort(arr);
 console.log(arr);
