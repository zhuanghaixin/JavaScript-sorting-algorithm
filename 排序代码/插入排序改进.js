var a = [8,6,2,3,1,5,7,4];



function insertionSort(array) {
  var len = array.length;    // 数组的长度
  var temp;                      // 当前我们要考察元素的值
  var i=1;                          // 还未排序部分的当前位置
  var j;                      //j保存元素temp应该插入的位置

  while(i< array.length){
    j=i;
    temp=array[i];  //寻找array[i]合适的插入位置


    //看已排序位置的值(即j前面一个元素位置的值array[j-1])是否比temp还要大
    // 如果比temp大，说明当前找到的j还不是temp最终的位置，循环继续
    // j>0 是因为比较最后两个元素，j所在位置为1，如果...则交换，否则直接插入， 所以不用j>=0
    while(j>0&&array[j-1]>temp){
      array[j]=array[j-1]; //将前一个元素向后挪动
      j--;
    }
    array[j]=temp;
    i++;
  }
  return array;
}

console.log(insertionSort(a));