 var A = [2, 8, 7, 1, 3, 5, 6, 4];

 function kuaiPai(start, end) {
     var p = start,
         q = end;
     var key = A[q],
         i = p - 1,
         change;
     for (var j = p; j < q; j++) {
         if (A[j] <= key) {
             i++;
             change = A[i];
             A[i] = A[j];
             A[j] = change;
         }
     }
     change = A[i + 1];
     A[i + 1] = A[q];
     A[q] = change;
     return i + 1;
 }

 function quickSort(start, end) {
     var p = start,
         q = end;
     if (p < q) {
         var m = kuaiPai(p, q);
         quickSort(p, m - 1);
         quickSort(m + 1, q);
     }
 }
 quickSort(0, 7);
 console.log(A);
