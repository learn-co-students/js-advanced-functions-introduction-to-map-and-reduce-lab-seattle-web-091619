function mapToNegativize(sourceArray){
    let array = []
    sourceArray.forEach(element => {
        
        array.push(element * -1)
    });
    return array
}

function mapToNoChange(sourceArray){

    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element)
    })
    return newArray
}
function mapToDouble(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element*2)
    });

    return newArray
}
function mapToSquare(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push((element*element))
    });
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let num = startingPoint
    sourceArray.forEach(element => {
        num += element 
    })
    return num 
}

function reduceToAllTrue(sourceArray){
    let thing = false
    sourceArray.forEach(element => {
        if(element){
            thing = true
        }
        else{
            thing = false
        }
    })
    return thing
}

function reduceToAnyTrue(sourceArray){
    let thing = false
    sourceArray.forEach(element => {
        if(element){
            thing = true
        }
        
    })
    return thing

}