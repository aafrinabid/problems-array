const findTheSeconlargest=(arr)=>{
    let max=0
    let sum=0
     for(let i=0;i<arr.length;i++){
         if(arr[i]>arr[i+1]){
             console.log(arr.length,i)
             const mainSum=arr[i]+arr[i+1]
             max=arr[i]
             arr[i+1]=arr[i]
             if(mainSum>sum){
                 sum=mainSum
             }
         }

         if(arr[i]<arr[i+1]){
             max=arr[i+1]
             const mainSum=arr[i+1]+arr[i]
             if(mainSum>sum){
sum=mainSum
             }
        
         }
     
     }
    return sum-max
}

const arr=[14,8,2,11,15,12,3]

findTheSeconlargest(arr)