var a=[0,2,1,56,4,67,3];

//找最大值
function findMax(array) {

  var max=array[0];
  var index=1;
  while (index<array.length){
    if(a[index]>max){
      max=a[index];
    }
    index++;
  }
  return max;
}

function countSort(array) {
  var hash=[];
  var index=0;
  var number;
  //入桶
  while (index<array.length){
    number=a[index];
    if(hash[number]==undefined){
      hash[number]=1;
    }
    else{
      hash[number]=hash[number]+1;
    }
    index++;
  }
  //出桶
  var index2=0;
  //找最大值
  var max=findMax(array);// 67
  var newArr=[];
  while (index2<max+1){
    var count=hash[index2]; //得到hash下标的个数
    if(count!=undefined){
      var countIndex=0;
      while (countIndex<count){
        newArr.push(index2);
        countIndex++;
      }
    }
    index2++;
  }
  return newArr;
}
console.log(countSort(a));

// index2 <- 0
// max <- findMax(a) // 最大值67
// newArr <- {}
// while index2 < max + 1
//   count <- hash[index2]
// if count != undefined // count 存在
//   countIndex <- 0
// while countIndex < count
//   newArr.push(index2)
// countIndex <- countIndex + 1
// end
// end
// index2 <- index2 + 1
// end
// print newArr