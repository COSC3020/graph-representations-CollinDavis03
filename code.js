function convertToAdjList(adjMatrix) {
    //Initialize an empty adjacent list
    var adjacentList = []   
    //Iterate each row of the adjacent matrix 
    for (r = 0; r < adjMatrix.length; r++) {
        //make a list to hold the neighbors
        var inner = [] 
        //iterate over the columns of the current row
        for (c = 0; c < adjMatrix[r].length; c++) {
            if (adjMatrix[r][c] == 1) 
                inner.push(c)
        }
        //add list of the neighbors to the inner
        adjacentList.push(inner) 
    }
    return adjacentList;
}
