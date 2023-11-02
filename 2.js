var averageOfSubtree = function(root) {
    let sum = 0
    let count = 0
    let matchingCount = 0
    const getSumAndCount = (node) =>{
        if(node === null) return

        sum += node.val
        count ++

        getSumAndCount(node.left)
        getSumAndCount(node.right)
    }


    const getMatchingNodeCount = (node, target) =>{
        if(node === null) return
        if(node.val === target) matchingCount ++

        getMatchingNodeCount(node.left)
        getMatchingNodeCount(node.right)
    }

    const traverse = (node) =>{
        if(!node) return
        sum = 0
        count = 0

        getSumAndCount(node)

        getMatchingNodeCount(node, Math.floor(sum/count))

        traverse(node.left)
        traverse(node.right)
    }


    traverse(root)

    return matchingCount
};
