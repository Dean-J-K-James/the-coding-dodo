---
title: Depth First Search Maze
category: Algorithms
tags: DFS Maze
---

Use a randomised variation of the depth first search algorithm to generate a fully connected maze.

## Introduction to Depth First Search

Depth first search (DFS) is an algorithm most commonly used to traverse a graph, exploring the full length of each branch, one at a time, until a goal is found. By randomising the algorithm, and removing the termination condition, it can be used to generate a maze in a 2D grid.

![Example Maze Generated Using a Randomised Depth First Search](/assets/images{{ page.url}}/figure1.png)
> **Figure 1** - Example Maze Generated Using a Randomised Depth First Search

A maze generated using DFS will be fully connected, and look similar to *Figure 1*.

## Algorithm

Typically, there are two versions of a DFS. One uses recursion, and the other uses a stack. We will be using a stack for ours.

    Set all cells to a wall
    Push centre cell onto a stack, S
    While S is not empty:
        Pop cell, C from S
        If C is not a path:
            Set C to a path
            Push each neighbour of C onto S in a random order

The key difference with our DFS algorithm when compared to a standard DFS, is the order nodes (cells) are added to the stack. Usually, new nodes will be added based on travel cost, but here, they are added in a completely random order.

## Implementation

<div class="tip">All code shown in this tutorial is pseudo code, however, it should be relatively easy to translate into another language. Click the link under the interactive demo to see a JavaScript implementation of the code.</div>

The starting function in our implementation is the `dfs_maze` function.

    function dfs_maze() {
        initialise();
        while (stack.length > 0) {
            evaluate_cell();
        }
    }

First, everything is setup in the `initialise` function, whichs sets up the stack and creates the initial path. Then, we repeatedly call `evaluate_cell` until the stack is empty, creating a new path for as long as there is room in the grid.

### Initialise

The first task is to pick a starting cell, which will be the cell from which the maze is created. We use `x` and `y` to represent the starting cell's position, which will be the centre of the grid.

    initialise() {
        x = floor(sizex / 2);
        y = floor(sizey / 2);

        set_all_cells("wall");

        stack = [];
        stack.push({ last_x: x, last_y: y, next_x: x, next_y: y });
    }

The variables, `sizex` and `sizey` represent the width and height of our grid in cells, and are not initialised in this tutorial.

The next task is to initialise all cells in our grid to a wall. The function `set_all_cells` sets all cells in the grid to the cell type that is passed, in this case, `"wall"` is passed. This function uses two for-loops to iterate each cell, setting them to a wall.

We then need to add the first cell to the stack. The first cell to be added to the stack is the starting cell we just chose. Each cell we add to the stack has to consist of four values.

* `last_x` refers to the x coordinate of the cell this path originates from.
* `last_y` refers to the y coordinate of the cell this path originates from.
* `next_x` refers to the x coordinate of the cell this path is moving to.
* `next_y` refers to the y coordinate of the cell this path is moving to.

<div class="tip">It may seem confusing at first why each element added to the stack has four values. This will be explained later in the article. The starting cell doesn't have an original position, so both coordinates are set to the same values.</div>

### Evaluate Cell

For as long as the stack is not empty, we keep calling `evaluate_cell`.

    function evaluate_cell() {
        cell = this.stack.pop();

        vald = is_valid(cell.next_x, cell.next_y);
        type = get_cell(cell.next_x, cell.next_y);

        if (vald && type === "wall") {
            draw_path(cell);
            add_cell_neighbours(cell);
        }
    }

First, the top element of the stack is removed, and stored in the variable, `cell`. This shortens the stack by one. Since a stack is a last in first out data structure, `cell` will contain the element most recently added to the stack.

After, we declare two variables, `vald` , and `type` .

* The variable `vald` stores the return value of `is_valid` , which tests to ensure the passed coordinates are within the bounds of our grid. It simply compares the passed cooridnates to `sizex` and `sizey` to ensure they don't lie outside the grid.
* The variable `type` stores the type of cell at the passed position. This will either be `"wall"` or `"path"` .

If the cell's next position is within the bounds of the grid and is a wall, meaning it hasn't been visited yet, then a path is drawn to it from the cell's last position using the function `draw_path`.

Finally, the `add_cell_neighbours` function is called. This adds the neighbours of the passed cell onto the stack.

### Draw Path

The `draw_path` function is where the four values for each cell in the stack become useful.

![Example Maze Generated Using a Randomised Depth First Search](/assets/images{{ page.url}}/figure2.png)
> **Figure 2** - Example Maze Generated Using a Randomised Depth First Search

Notice that in any maze we generate, like the one in *Figure 2*, only the even rows and even columns have continous paths. All of the odd rows and odd columns only have connecting paths. The maze is generated like this to ensure different passageways don't connect. To achieve this effect, each time a new path is added, it has to be exactly two cells away from the previous. Then, the single cell inbetween the original and new path gets filled in to connect them.

The first two values in our cell, `last_x` and `last_y` represent the original cell, and the final two values `next_x` and `next_y` represent the new cell. We have to set both of these coordinates, and the cell inbetween them, to a path.

<div class="tip">The original cell will already be a path. For simplicity we just reassign it as a path again.</div>

The following code creates the passageway, which should be three cells long.

    function draw_path(cell) {
        x1 = cell.last_x;
        x2 = cell.next_x;
        y1 = cell.last_y;
        y2 = cell.next_y;

        for (var i = min(x1, x2); i <= max(x1, x2); i++) {
            for (var j = min(y1, y2); j <= max(y1, y2); j++) {
                set_cell(i, j, path);
            }
        }
    }

Since our for-loops iterate from lowest to highest values, we extract the two coordinates, and then loop from the minimum to the maximum on each axis. The function `set_cell` sets the cell located at `i` , `j` to a `path` .

### Add Cell Neighbours

The function `add_cell_neighbours` adds the neighbours of the passed cell in a randomised order to the stack, allowing the DFS algorithm to continue.

It first calls the function, `get_random_neighbours`. This returns each of the four neighbouring cells in a random order. The four neighbours will be the cells to the north, east, south, and west of the passed coordinates. Each of the returned neighbours are two cells away from the current.

    function add_cell_neighbours(cell) {
        let ns = this.get_random_neighbours(cell.next_x, cell.next_y);

        for (var i = 0; i < 4; i++) {
            this.stack.push({ 
                last_x: cell.next_x, 
                last_y: cell.next_y, 
                next_x: ns[i][0], 
                next_y: ns[i][1] 
            });
        }
    }

Once the neighbouring cells are stored in the variable, `ns` , they are added to the stack. For each of the four cells in `ns` , a new object is created that consists of four values.

* The first two coordinates,  `last_x` and `last_y`, are the coordinates of the cell whose neighbours have just been found.
* The second two coordinates,  `next_x` and `next_y`, are the newly found neighbouring coordinates, stored in `ns`.

A stack is a last in first out data structure. The order each cell is added is important because it will determine how good the maze looks. The cells added are done so in a random order, so that the first element "popped" off the stack is not always in the same direction. For example, if we added cells in the order: north, east, south, and west all the time, then the west cell will always be picked and evaluated first. This will cause our maze to just head straight to the west border of the grid.

Each time a cell is evaluated and set to a path, four new cells will be added to the stack. As soon as there are no new cells to evaluate, the stack will begin shrinking. Eventually, it will empty and so the while loop will terminate.

### Get Random Neighbours

The `get_random_neighbours` function creates an array of arrays. Each of the smaller arrays contain two elements: an x, and a y coordinate. These coordinates are relative to the passed `x` and `y` parameters, and represent each of the four directions.

    function get_random_neighbours(x, y) {
        return shuffle([[x, y - 2], [x + 2, y], [x, y + 2], [x - 2, y]]);
    }

Each of the four elements of this array are:

* `[x, y - 2]` represents the north neighbour.
* `[x + 2, y]` represents the east neighbour.
* `[x, y + 2]` represents the south neighbour.
* `[x - 2, y]` represents the west neighbour.

Before being returned, the array is shuffled so that the directions are randomised.

## Further Reading

* The Wikipedia page on [Depth First Search](https://en.wikipedia.org/wiki/Depth-first_search) has some nice pseudo code for a DFS.
* Another wikipedia page exploring various [Maze Generation](https://en.wikipedia.org/wiki/Maze_generation_algorithm) algorithms also has some good pseudo code.
