# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer 

We will use _V_ as the vertices in this code. In this code, there is two loops on dealing with the rows in the matrix and the other dealing with the columns in the matrix too. With those loops, it would be _V_ x _V_. This would come out to be $V^2$ and the runtime analysis should be $\Theta(|V|^2)$.

## Sources 

The comments in my code are from me looking at Caden's repo and writing down the important things I need in my code. For instance, the comment about iterating each row of the matrix was a comment saying I need a loop that will iterate over the rows in the matrix/list. I had those comments down following the outline of his code, but I wrote the actual program myself. I did not copy any of his code at all; I just followed the outline of his code with comments on the important things needed for the assignment. I wrote everything myself. 

## Plagarism Statement

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
