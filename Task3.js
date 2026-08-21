function countHashtags(caption){
    if(typeof caption=== 'number' || typeof caption==='object'){
        return "Invalid";
    }
    const cd=caption.split(" ");
    let cy=0;
    let hash="";
    let hash2="";
    let l=[];
    for(let i of cd){
        if(i.startsWith("#")){
            cy++;
            l.push(i);
        }
    }
    if (cy === 0) {
        return { hashtagCount: 0, longestTag: "" };
    }

    let longestHash = l[0];
    for(let i = 1; i < l.length; i++){
        if(l[i].length > longestHash.length){
            longestHash = l[i]; 
        }
    }
    
    let hashWithoutSymbol = longestHash.slice(1); 

    return { hashtagCount: cy, longestTag:  hashWithoutSymbol}

}


console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"))
console.log(countHashtags("No hashtags here"))
console.log(countHashtags("#ai #ml data science"))
console.log(countHashtags(123))
console.log(countHashtags(["#fun"]))