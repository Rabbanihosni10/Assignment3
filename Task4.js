function bonusScore(scores) {
    if(typeof scores=== "object" && scores.length>0){
        let ct=0;
        for(let i of scores){
            if (typeof i!== "number"){
                return "Invalid";
            }
            else{
                ct+=i;
                ct+=10;
            }
        }
        return ct;
    }
    else{
        return "Invalid";
    }
}


console.log(bonusScore([80,65,90,75]));
console.log(bonusScore([100]));
console.log(bonusScore([0,10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80,"90",70]));
