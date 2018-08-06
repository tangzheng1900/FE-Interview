/**
 * @Name: sort.js
 * @Author: zhengzheng.tang
 * @Update: 25/06/2018
 * @Desc: JavaScript十大经典算法
 */

// 冒泡排序
function bubbleSort(a){
    let temp;
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length - 1 - i; j++){
            if(a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a
}

console.log(bubbleSort([3,2,1,5,8,4,7]));


var detail = [
    {
        "id": "1a582c0b3a000000",
        "name": "上海兰庭国际",
        "status": "2",
        "alarm_num": "0",
        "discharge_eba": "92.0"
    },
    {
        "id": "1bbbad1540800000",
        "name": "宝锦国际大厦",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "149.9"
    },
    {
        "id": "1b4a400394806000",
        "name": "棕榈广场2号配电室A",
        "status": "0",
        "alarm_num": "2",
        "discharge_eba": "147.7"
    },
    {
        "id": "1bcac33a9b800000",
        "name": "双子楼2号A",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "124.4"
    },
    {
        "id": "1b644fa442806000",
        "name": "绿地科创大厦",
        "status": "0",
        "alarm_num": "1",
        "discharge_eba": "121.6"
    },
    {
        "id": "1b61a7dd31802000",
        "name": "棕榈广场2号配电室B",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "120.1"
    },
    {
        "id": "1bdf33ee5b800000",
        "name": "松高科二期6号站",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "102.1"
    },
    {
        "id": "1b61ae1183806000",
        "name": "棕榈广场4号配电室B",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "100.8"
    },
    {
        "id": "1be45f8590002000",
        "name": "浦南财富广场",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "100.7"
    },
    {
        "id": "1bcaebf27e002000",
        "name": "双子楼1号A",
        "status": "0",
        "alarm_num": "1",
        "discharge_eba": "100.6"
    },
    {
        "id": "1be5074199002000",
        "name": "深圳天健创智中心",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "100.2"
    },
    {
        "id": "1b61afe2e6004000",
        "name": "棕榈广场4号配电室A",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "100.1"
    },
    {
        "id": "1bb6a47f5d800000",
        "name": "绿地和创大厦",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "100.0"
    },
    {
        "id": "1bcae2bd96004000",
        "name": "双子楼2号B",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "98.4"
    },
    {
        "id": "1bcaecdcc4002000",
        "name": "双子楼1号B",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "98.0"
    },
    {
        "id": "1bdf43db51806000",
        "name": "松高科二期3号站",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": "91.7"
    },
    {
        "id": "1bacb0e7c0804000",
        "name": "华鑫中心1号",
        "status": "0",
        "alarm_num": "6",
        "discharge_eba": "73.6"
    },
    {
        "id": "1baca8b7fc800000",
        "name": "华鑫中心2号",
        "status": "0",
        "alarm_num": "6",
        "discharge_eba": "67.1"
    },
    {
        "id": "1b143985b0002000",
        "name": "腾飞大厦",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": ""
    },
    {
        "id": "1be2a636e6006000",
        "name": "金桥碧云钻石苑服务公寓",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": ""
    },
    {
        "id": "1bef70a794806000",
        "name": "广州太阳广场",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": ""
    },
    {
        "id": "1c3037a4f7806000",
        "name": "祥奉综合市场1号配电间",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": ""
    },
    {
        "id": "1c303b796e002000",
        "name": "祥奉综合市场2号配电间",
        "status": "0",
        "alarm_num": "0",
        "discharge_eba": ""
    }
];

detail.sort((a, b) => {
    return (isNaN(parseFloat(a.discharge_eba) ? -100 : parseFloat(a.discharge_eba))) -
        (isNaN(parseFloat(b.discharge_eba) ? -100 : parseFloat(b.discharge_eba))) ||
        a.status - b.status || a.alarm_num - b.alarm_num;

});
// console.log(detail);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var index = [0, 0];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                index[0] = i;
                index[1] = j;
                return index;
            }
        }

    }
    return index;
};

console.log('Algorithm-->',twoSum([2,7,11,15],9));

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; //如果数组只有一个数，就直接返回；
    }

    var num = Math.floor(arr.length / 2);//找到中间数的索引值，如果是浮点数，则向下取整

    var numValue = arr.splice(num, 1);//找到中间数的值
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < numValue) {
            left.push(arr[i]);//基准点的左边的数传到左边数组
        }
        else {
            right.push(arr[i]);//基准点的右边的数传到右边数组
        }
        console.log(arr, left, right);
    }

    return quickSort(left).concat([numValue], quickSort(right));//递归不断重复比较
}

console.log('quickSort--->',quickSort([32, 45, 37, 16, 2, 87, 97, 100, 9]));//弹出“2,16,32,37,45,87”