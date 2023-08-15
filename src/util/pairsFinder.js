
const calculatePairs = (numbersChain, givenValue)=>{
    // get the array of numbers
    const numbersChainArray = numbersChain.split(',');
    // we initialize the object that we will use to save the pairs
    const pairsArray = {};
    // numbers chain array iteration O(n)
    numbersChainArray.forEach(numberItem => {
        // We calculate the missin value to be equal to the given value
        const missingValue = givenValue - numberItem;
        // we will create an index for our pair
        const missingIndex = missingValue.toString();
        // We validate if there is no record created for our missing value
        if (pairsArray[missingIndex] === undefined && pairsArray[numberItem.toString()] === undefined ){
            // we add our new pair with the first value as the iterated item  and the second value as the 
            // missing value, isPaired flag indicates that we have not found the missing value to be marked as true
            pairsArray[missingIndex] = {
                firstValue: numberItem,
                secondValue: missingValue.toString(),
                isPaired: false
            }
        // if some of both values is not undefined it means that we have already found a match for that index
        }else if (pairsArray[missingIndex] !== undefined){
            // This prevent issues when we have repeated values
            if(pairsArray[missingIndex].firstValue !== numberItem) {
                // turn on the flag that indicates that this is a pair
                pairsArray[missingIndex] = {...pairsArray[missingIndex], isPaired: true};
            }
        }else if(pairsArray[numberItem.toString()] !== undefined ){
            // turn on the flag that indicates that this is a pair
            pairsArray[numberItem.toString()] = {...pairsArray[numberItem.toString()], isPaired: true};    
        }
    });
    let resultMessage = '';
    // we give the format [x,y][x,y][x,y] to the result
    Object.values(pairsArray).filter((pair)=>pair.isPaired)
          .forEach((pair)=> resultMessage=`${resultMessage} [${pair.firstValue},${pair.secondValue}]`)
    return resultMessage;
}

export default calculatePairs;