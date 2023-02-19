function getWords(text){
    let x = text.replace(/[^A-Za-z0-9]+/g, " ");
    let newArr = x.trim().split(" ");
    return newArr;
}
function countChars(arr){
    var Counter=0;
    for(var i=0; i<arr.length ; i++){
        Counter=Counter+arr[i].length;
    }
    
    return Counter;
}

let text = "The milkman brought donuts, cheese (along with milk), and a bottle of whiskey to 10 houses.";
let newArray=getWords(text);
///new array resulted of splitting
console.log(newArray);

/// number of words or length of the array
let numofWords=newArray.length;
console.log(numofWords);

///number of characters given in a sentence
let counterofCharacters=countChars(newArray);
console.log(counterofCharacters);


