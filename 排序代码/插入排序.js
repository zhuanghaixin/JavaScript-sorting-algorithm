var a = [5, 6, 3, 7, 2, 8, 3, 1, 2];

function swap(array, p1, p2){
  var temp = array[p1];
  array[p1] = array[p2];
  array[p2] = temp;
}

function insertionSort(array) {
  var len = array.length;    // 数组的长度
  // var temp;                      // 当前我们要考察元素的值
  var i=1;                          // 还未排序部分的当前位置
  var j;                      // 当前我们要考察的元素位置

  while(i< array.length){
    j=i;
    // temp=array[j];
    //寻找array[i]合适的插入位置
    //当前我们要考察元素位置的值如果比已排序位置的值小，则交换位置，
    //如果考察元素位置的值如果比已排序位置的值大，则j就是我们要插入的位置
    // j>0 是因为比较最后两个元素，j所在位置为1，如果...则交换，否则直接插入， 所以不用j>=0
    while(j>0&&array[j]<array[j-1]){
      swap(array,j,j-1);
      j--;
    }
    i++;
  }
  return array;
}

console.log(insertionSort(a));