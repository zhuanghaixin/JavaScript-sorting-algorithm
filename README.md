# JavaScript实现排序算法
>排序有内部排序和外部排序，内部排序是数据记录在内存中进行排序，而外部排序是因排序的数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存。
![](http://p4895bd7a.bkt.clouddn.com//18-2-19/77962909.jpg)
## 1.冒泡排序(体育委员两两摸头法)
### 概述:
> 1.依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
<br>2.再对最后一位以外的数组，重复前面的过程，直至全部排序完成。
### 示意图:
![冒泡排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/46522698.jpg)
### 程序流程图:
![冒泡排序](http://p4895bd7a.bkt.clouddn.com//18-2-23/39531417.jpg)
### 伪代码:[冒泡排序](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BC%AA%E4%BB%A3%E7%A0%81/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F)
### 代码:[冒泡排序](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BB%A3%E7%A0%81/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.js)
## 2.选择排序(体育老师一指禅法)
### 概述:
>选择排序（Selection Sort）与冒泡排序类似，也是依次对相邻的数进行两两比较。
不同之处在于，它不是每比较一次就调换位置，而是一轮比较完毕，找到最大值（或最小值）之后，将其放在正确的位置，其他数的位置不变。
### 示意图:
![选择排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/40140677.jpg)
### 程序流程图:
![选择排序](http://p4895bd7a.bkt.clouddn.com//18-2-23/66800355.jpg)
### 伪代码:[选择排序](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BC%AA%E4%BB%A3%E7%A0%81/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F)
### 代码:[选择排序](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BB%A3%E7%A0%81/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.js)
## 3.1直接插入排序
### 概述:
> <br>1.从第一个元素开始，该元素可以认为已经被排序
  <br>2.取出下一个元素，在已经排序的元素序列中从后向前扫描
  <br>3.如果该元素（已排序）大于新元素，将两元素调换位置
  <br>4.重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置
  <br>5.将新元素插入到该位置后
  <br>6.重复步骤 2~5
### 示意图:
### 程序流程图:
![直接插入排序](http://on-img.com/chart_image/5a901ea8e4b064e9ddc98816.png)
### 伪代码:[插入排序](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BC%AA%E4%BB%A3%E7%A0%81/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F)
### 代码:[插入排序](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BB%A3%E7%A0%81/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.js)
## 3.2插入排序(起扑克牌法)
### 概述:
>它将数组分成“已排序”和“未排序”两部分，一开始的时候，“已排序”的部分只有一个元素，然后将它后面一个元素从“未排序”部分插入“已排序”部分，从而“已排序”部分增加一个元素，“未排序”部分减少一个元素。以此类推，完成全部排序。
 <br>1.从第一个元素开始，该元素可以认为已经被排序
 <br>2.取出下一个元素，在已经排序的元素序列中从后向前扫描
 <br>3.如果该元素（已排序）大于新元素，将该元素移到下一位置
 <br>4.重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置
 <br>5.将新元素插入到该位置后
 <br>6.重复步骤 2~5
### 示意图:
![插入排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/64902033.jpg)
### 程序流程图:
![](http://p4895bd7a.bkt.clouddn.com//18-3-4/65749444.jpg)
### 伪代码:[插入排序改进](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BC%AA%E4%BB%A3%E7%A0%81/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F%E6%94%B9%E8%BF%9B)
### 代码:[插入排序改进](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BB%A3%E7%A0%81/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F%E6%94%B9%E8%BF%9B.js)
## 4.计数排序(强迫症收扑克牌法)
### 概述:
>
### 示意图:
![计数排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/52051500.jpg)
### 程序流程图:
![计数排序](http://p4895bd7a.bkt.clouddn.com//18-3-6/48807017.jpg)
### 伪代码:[计数排序](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BC%AA%E4%BB%A3%E7%A0%81/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F)
### 代码:[计数排序](https://github.com/zhuanghaixin/JavaScript-sorting-algorithm/blob/master/%E6%8E%92%E5%BA%8F%E4%BB%A3%E7%A0%81/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F.js)
## 5.1快速排序
### 概述:
>
### 示意图:
![快速排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/96906175.jpg)
### 程序流程图:
### 伪代码:
### 代码:
## 5.2随机快速排序
### 概述:
>
### 示意图:
![随机快速排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/53648091.jpg)
### 程序流程图:
### 伪代码:
### 代码:
## 6.归并排序
### 概述:
>
### 示意图:
![归并排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/83691946.jpg)
### 程序流程图:
### 伪代码:
### 代码:
## 7.堆排序
### 概述:
>
### 示意图:
### 程序流程图:
### 伪代码:
### 代码:
## 8.桶排序(强迫症收扑克牌法)
### 概述:
>
### 示意图:
[桶排序](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html)
### 程序流程图:
### 伪代码:
### 代码:
## 9.基数排序
### 概述:
>
### 示意图:
![基数排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/97133068.jpg)
### 程序流程图:
### 伪代码:
### 代码:
## 10希尔排序
### 概述:
>
### 示意图:
![希尔排序](http://p4895bd7a.bkt.clouddn.com//18-3-4/28464308.jpg)
### 程序流程图:
### 伪代码:
### 代码:
