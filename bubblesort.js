function bubbleSort(arr){
    var isRun=false;
    for (var i=0; i<arr.length; i++){
        //for each element, compare to next element 
        if (arr[i]>arr[i+1]){
            //if 1st is > second, switch
            var temp=arr[i];
            arr[i] = arr[i+1];
            arr[i+1]=temp;
            isRun=true;
        }
    }
    
    if(isRun){
        //if a switch is made, run bubbleSort again
        bubbleSort(arr)
    }
    //if no switches have been made in the last pass, return arr
    
    return arr
}

