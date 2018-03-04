var a=[5,6,3,7,2,8,3,1,2];
function swap(array, p1, p2){
  var temp = array[p1];
  array[p1] = array[p2];
  array[p2] = temp;
}

function selectionSort(array) {
  var index=0;
  while (index < array.length-1){
    var minIndex=index;
    var i=index;
    while(i<array.length){
      if(array[i]<array[minIndex]){
        minIndex=i;
      }
      i++
    }
    if(index!==minIndex){
      // t=array[index];
      // array[index]=array[minIndex];
      // array[minIndex]=t;
      swap(array,index,minIndex);
    }
    index++;
  }
  return array;
}

console.log(selectionSort(a));