class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    // this is an undirected graph

    addVertex(vertex){
    // write a method which accepts a name of a vertex
    // it should add a key to the adjacency list with the name of the vertex 
    // and set its value to be an empty array
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2){
        // drawing connections between two vertices
        // accepts two vertices
        // find in the adjacencyList the key of the two vertices
        // push the key of the vertices to the array
        // don't worry about handling errors/invalid vertices 
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2){
        // accepts two vertices
        // reassign the key of v1 to be an array that no longer contains v2 and vice versa
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }

    removeVertex(vertex){
        // accepts a vertex
        // should loop as long as there an any other vertices in the adjacencyList for that vertex
        // inside loop call removeEdge 
        while (this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    
    depthFirstRecursive(start){
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList
        // preserve the value/scope of `this` to use in helper function below

        (function dfs(vertex){
            if (!vertex) return null
            // if vertex is empty return (base case)
            visited[vertex] = true
            // mark vertex as visited
            // visited is a boolean value in key value pair
            result.push(vertex)
            // add vertex to results list
            adjacencyList[vertex].forEach (neighbor => {
                // for each neighbor in vertex's neighbors
                if (!visited[neighbor]){
                    return dfs(neighbor)
                // if neighbor is not visited, recursively call dfs on neighbor
                }
            })

        })(start)

        return result
    }

    depthFirstIterative(start){
        const result = []
        const visited = {}
        const stack = [start]
        // let s be a stack with start included 
        let currentVertex
        // stores what we are popping off

        visited[start] = true
        while (stack.length){
            // while there is something in the stack
            currentVertex = stack.pop()
            result.push(currentVertex)
            // add currentVertex to the result array
            this.adjacencyList[currentVertex].forEach(neighbor => {
                // find the neighbors of the currentVertex
                if(!visited[neighbor]){
                    // if vertex hasn't been visited
                    visited[neighbor] = true
                    // mark it as visited
                    stack.push(neighbor)
                    // push all neighbors to stack
                }
            })
        }
        return result
        // this will be in a different order than our recursive function due to pop
    }

    breadthFirst(start){
        // will be using a queue instead of a stack
            // so will be using push and shift
            // FIFO
        // accepts a starting vertex
        // create a queue and place the starting vertex in it
        const queue = [start]
        // create an array to store the result
        const result = []
        // create an object to store nodes visited
        const visited = {}
        let currentVertex
        // mark the starting vertex as visited
        visited[start] = true
        // loop as long as there is anything in the queue
        while (queue.length){
            currentVertex = queue.shift()
            // remove the first vertex from the queue and push it to visited
            // if it is not inside visited, mark it as visited and enqueue that vertex
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }

}