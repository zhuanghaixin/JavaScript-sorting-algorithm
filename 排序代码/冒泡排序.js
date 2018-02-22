var a=[3,2,4,5,1];

function bubbleSort(array) {
  var index=1;
  while (index < a.length){
    var i=0;
    while(i<=a.length-1-index){
      if(a[i]>a[i+1]){
        t = a[i];
        a[i]=a[i+1];
        a[i+1]=t;

      }
      i++;
    }
    index++
  }
  return array;
}

console.log(bubbleSort(a));


