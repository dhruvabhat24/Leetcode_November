/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, S, T) {
    if (S === T) return 0
    let visited = new Set();
    visited.add(S)
    let added = true
    let count = 0
    
    while(added){
        added = false // breaks loop when no new stops are added
        count++
        let temp = []
        for (let i=0; i<routes.length; i++){
            for (let j=0; j<routes[i].length; j++){
                if (visited.has(routes[i][j])){
                    temp.push(...routes[i]) // to be added to set after all elements in array checked
                    j = routes[i].length
                    added = true
                    routes[i] = [] // means we no longer iterate over it
                } 
            }
        }
        temp.forEach(item => visited.add(item)) // updates set
        if (visited.has(T)) return count
    }    
    
    return -1;
};
