var arr = [1,2,3,4,5,6];
arr.map((item,index) => {

    arr.splice(index,1);
    console.log(index)
    console.log(arr)
})