![alt text](image.png)
    Proof by Induction
    We will use mathematical induction on the number of nodes 
    𝑛
    n in the tree.

    Base Case ( 
    𝑛
    =
    2
    n=2 )
    A tree with 2 nodes consists of a single edge connecting the two nodes. Since a leaf is defined as a node with degree 1 (having only one edge), both nodes in this tree are leaves. Thus, the tree has exactly 2 leaves, satisfying the statement.

    Inductive Hypothesis
    Assume that for any tree with 
    𝑛
    ≥
    2
    n≥2 nodes, the tree has at least two leaves.

    Inductive Step
    We must show that if the statement holds for a tree with 
    𝑛
    n nodes, then it also holds for a tree with 
    𝑛
    +
    1
    n+1 nodes.

    Take a tree with 
    𝑛
    n nodes, which by the inductive hypothesis has at least two leaves.
    Add a new node to the tree by connecting it to an existing node (this is how trees grow while maintaining connectivity and acyclicity).
    If we add this new node to an existing leaf, the original leaf becomes an internal node, but the new node itself becomes a leaf.
    If we add this new node to a non-leaf node, it simply increases the number of leaves.
    In either case, the total number of leaves does not decrease and remains at least two.

