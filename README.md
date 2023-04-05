# graphs
Code along with Colt Steele's JS Algorithms and Data Structures Masterclass. 

Graphs:
- a data structure that consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph 
- a collection of nodes and connections between those nodes 
- a tree is a type of graph
- no starting point or parent node
- models relationships
- uses
	- great for map/location data
	- user data
	- recommendation on social media
	- routing 
	- visual hierarchy
	- file system optimizations 
- Parts
	- vertex - a node
	- edge - connection between nodes
- types
	- directed graph
		- the edge has polarity or direction
		- directions assigned to distance between vertices
	- undirected graph
		- no direction between the edges
		- can traverse in any direction
	- weighted graph
		- values assigned to distances between vertices
		- the edge has a value
	- unweighted graph
		- no value to each edge
	- can be any combination of these
- Implementations
	- adjacency matrix
		- has vertices and edges 
		- 2D structure usually implemented with nested arrays with rows and columns 
		- takes up more space
		- slower to iterate over all edges
		- faster to lookup specific edge
		- for lots of data
		- Big O
			- add vertex O(v^2)
			- add edge O(1)
			- remove vertex O(v^2
			- remove edge O(1)
			- query O(1) 
			- storage O(v^2)
	- adjacency list
		- use an array or list to store the edges 
		- or can store as hash table/object
		- can take up less space
		- faster to iterate over all edges
		- can be slower to lookup specific edge
		- most real world data tends to lend itself to adjacency lists as the data is sparse
		- Big O
			- add vertex O(1)
			- add edge O(1)
			- remove vertex O(|v| + |e|)
			- remove edge O(|e|)
			- query O(|v| + |e|) 
			- storage O(|v| + |e|)
- Traversal
	- visiting, updating, checking each and every vertex in a graph
	- remember there is no root like in a tree
	- depth first search
		- explore as far as possible down one branch before backtracking
		- you pick a neighbor and then go to the neighbor of that vertex 
			- so in the picture below we would start at 0 go to 1 and then 2 and then 3
	- breadth first search
		- you go to the immediate neighbors of one vertex
			- so in the below picture you would start at 0 and go to 1 and 4 before going to any other vertex 
			- traversal via height or how many jumps away from the root