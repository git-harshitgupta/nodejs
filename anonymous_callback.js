var add =function(a,b){    //this function working as a anonymous function
    return a+b;
}

console.log(add(10,20));


function complexExp(add){
    console.log(add(2,5))

}

complexExp(function(a,b){
    return a+b;
})