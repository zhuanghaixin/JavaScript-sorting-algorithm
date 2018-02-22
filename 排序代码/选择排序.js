var a=[5,6,3,7,2,8,3,1,2];

function selectionSort(array) {
  var index=0;
  while (index < a.length-1){
    var minIndex=index;
    var i=index;
    while(i<a.length){
      if(a[i]<a[minIndex]){
        minIndex=i;
      }
      i++
    }
    if(index!==minIndex){
      t=a[index];
      a[index]=a[minIndex];
      a[minIndex]=t;
    }
    index++;
  }
  return array;
}

console.log(selectionSort(a));