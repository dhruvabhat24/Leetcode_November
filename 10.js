var restoreArray = function(adjacentPairs) {
    const graph =new Map();
    for (const [u,v] of adjacentPairs){
        if (!graph.has(u)) {
            graph.set(u,[]);
        }
        if (!graph.has(v)) {
            graph.set(v,[]);
        }
        graph.get(u).push(v);
        graph.get(v).push(u);

    }
    let cur=null;
    for (const u of graph.keys()){
        if (graph.get(u).length===1){
            cur=u;
            break;
        }
    }
    const ans=[];
    const seen= new Set();
    while (cur !== null){
        ans.push(cur);
        seen.add(cur);
        const neis=graph.get(cur);
        cur=null;

        for (let nei of neis){
            if (!seen.has(nei)){
                cur=nei;
            }
        }
    }
    return ans
};
