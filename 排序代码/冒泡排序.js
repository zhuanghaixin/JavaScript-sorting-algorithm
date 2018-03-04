var a=[3,2,4,5,1];
function swap(array, p1, p2){
  var temp = array[p1];
  array[p1] = array[p2];
  array[p2] = temp;
}
function bubbleSort(array) {
  var index=1;
  while (index < array.length){
    var i=0;
    while(i<=array.length-1-index){
      if(array[i]>array[i+1]){
        // t = array[i];
        // array[i]=array[i+1];
        // array[i+1]=t;
           swap(array,i,i+1);
      }
      i++;
    }
    index++
  }
  return array;
}

console.log(bubbleSort(a));


