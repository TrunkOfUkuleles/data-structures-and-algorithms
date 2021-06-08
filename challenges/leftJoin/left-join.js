


function leftJoin (map1, map2) {
    let result = []
    
    for (let i in map1){
        result = [...result, [i, map1[i], map2[i]||null]]
    }

    return result

}


let left = {fond: "enamored",
            wrath: "anger", 
            diligent: "employed",
            outfit: "garb", 
            guide: "user"}

let right = {fond: "averse",
            wrath: "delight", 
            diligent: "idle",
            outfit: "follow", 
            guide: "jam"}

            console.log(leftJoin(left, right))