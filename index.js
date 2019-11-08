// Your code here
sourceArray = [1,2,3]

mapToNegativize(sourceArray)

function mapToNegativize(sourceArray){
    let newArr = sourceArray.map(element => element * -1)
    console.log(newArr)
    return newArr
}

function mapToNoChange(sourceArray){
    let newArr = sourceArray.map(element => element)
    console.log(newArr)
    return newArr
}

function mapToDouble(sourceArray){
    let newArr = sourceArray.map(element => element * 2)
    console.log(newArr)
    return newArr
}

function mapToSquare(sourceArray){
    let newArr = sourceArray.map(element => element * element)
    console.log(newArr)
    return newArr
}

function reduceToTotal(sourceArray, startingPoint = 0){

    let total = sourceArray.reduce(function(sum, element){return element + sum},startingPoint);
    console.log(total)
    return total;
}


function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  

function reduceToAllTrue(sourceArray){
    let value = []
    let total = sourceArray.reduce(function(sum, element){
        if(element){
            sum = true
            console.log(element)
        }
        else{
            sum = false
            value.push(sum)
            console.log(element)
            
            return sum
        }
        return sum
    });
    
    if (value.length == 0){
        console.log(total);
        return total;
        
    }
    else{
        console.log(value[0]);
        return value[0]
    }

}

function reduceToAnyTrue(src){
    for (let i = 0; i < src.length; i++ ) {
        if (src[i]) return true
      }
      return false
    }
