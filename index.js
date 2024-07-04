function filtrarPares(nums){
    var pares = []
    for(var i = 0; i < nums.length; i++){
        if (nums[i] % 2 == 0){
            pares.push(nums[i])
        }
    }
    return(
        console.log(pares)
    )
}

filtrarPares([1,2,3,4,5,6,7,8, 21])