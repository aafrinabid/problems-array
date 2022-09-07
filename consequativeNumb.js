function conseqLetters(str){
    const arr=str.split('')
    const newArr=[]
    let count=1
    for (let index = 0; index < arr.length; index++) {
      if(arr[index]===arr[index+1]){
          count++
      }else{
          newArr.push(arr[index]+count)
          count=1
      }
    }
    return newArr
}

const string='aaabeeeaad'

conseqLetters(string)