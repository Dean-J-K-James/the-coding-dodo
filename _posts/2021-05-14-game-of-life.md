---
title:       Game of Life
description: Create a two-dimensional cellular automaton with the rules of Conway's Game of Life.
category:    Algorithms
tags:        CellularAutomata
---

## What is Conway's Game of Life?

Conway's game of life is a type of outer-totalistic cellular automata using square cells in a two-dimensional grid. Each cell can be in one of two states, defined as either "live" or "dead". It was created by John Conway in 1970, and provides a simulation of birth and death by underpopulation and overpopulation.

Once the state of each cell is initialised, a set of rules are applied, causing the grid to evolve over several generations. The rules for Conway's game of life are as follows:

* A live cell with `< 2` live neighbours dies.
* A live cell with `> 3` live neighbours dies.
* A non-live (dead) cell with `= 3` live neighbours becomes live.

If none of the above rules apply, the cell remains in it's current state. The game of life starts at generation 0. When the rules are applied to every cell once, the game is then in generation 1. Each time the rules are fully applied to every cell, the generation increases and the grid is rerendered.

![Game of Life After 1000 Generations](/assets/images{{ page.url}}/figure1.png)

> **Figure 1** - Game of Life After 1000 Generations.

*Figure 1* shows generation 1000 of the game of life, when started from a random grid, with each cell having a 50% chance of being either dead or live. In other words, a grid whose initial state is entirely random, after having the rules applied 1000 times, looks like *Figure 1*.

## Algorithm

    Randomise all cells in the grid
    Loop x times:
        Loop all cells, C:
            Set N to number of live neighbours of C.
            If C is live and N < 2:
                Set C to dead
            If C is live and N > 3:
                Set C to dead
            If C is dead and N = 3:
                Set C to live

## Implementation

The function `game_of_life` is the root of our algorithm. First, a two-dimensional array of size `sizex` , `sizey` is created using the `create_2d_array` function, setting each cell to `dead` by default. Depending on the language you are using, a two-dimensional array will have to be generated manually. After, the grid gets randomised.

    function game_of_life() {
        this.grid = create_2d_array(this.sizex, this.sizey, this.dead);
        this.randomise_grid();

        for (let i = 0; i < 1000; i++) {
            let buffer = this.generate();
            this.apply_buffer(buffer);
        }
    }

Once the grid is intialised to random values, we begin producing new generations. For this example, we produce 1000 generations. This gives the cellular automata enough time to settle into a pattern, or repeating state. Generating a new generation consists of two steps.

1. A new array, called a `buffer`, containing the states of the next generation is produced.
1. This `buffer` array is then applied to the main grid array.

## Randomise Grid

The initial state of each cell can determine what sort of animation we get. We want a completely random animation, and so, the state of each cell is set to either dead or live, with a 50% chance of each. For this, we call the `randomise_grid` function.

    randomise_grid() {

        for (let x = 0; x < this.sizex; x++) {
            for (let y = 0; y < this.sizey; y++) {

                this.grid[x][y] = Math.random() > 0.5 ? this.dead : this.live;
            }
        }
    }

It iterates over each cell in our grid, randomly setting it to either `live` or `dead` . This will produce a grid like in *Figure 2*.

![Randomised Grid](/assets/images{{ page.url}}/figure2.png)

> **Figure 2** - Two-dimensional grid of cells in a random state.

## Generate

The `generate` function is where most of the work is done. First, a new array, `buffer` is created. This will be equal in size to our main array, with each cell initialised to `this.dead` .

It is important to remember that when a new state is calculated, it should not be stored in the array currently being evaluated, because this will pollute it with states for the current and next generation. Each time a state is calculated, it should be put into a seperate, empty "buffer" array so that it doesn't affect the other cells.

    generate() {
        let buffer = create_2d_array(this.sizex, this.sizey, this.dead);

        for (let x = 0; x < this.sizex; x++) {
            for (let y = 0; y < this.sizey; y++) {

                let c = this.get_live_neighbours(x, y);

                if (this.get_cell(x, y) == this.live && c <= 1) { buffer[x][y] = this.dead; }
                if (this.get_cell(x, y) == this.live && c >= 4) { buffer[x][y] = this.dead; }
                if (this.get_cell(x, y) == this.live && c == 2) { buffer[x][y] = this.live; }
                if (this.get_cell(x, y) == this.live && c == 3) { buffer[x][y] = this.live; }
                if (this.get_cell(x, y) == this.dead && c == 3) { buffer[x][y] = this.live; }
            }
        }

        return buffer;
    }

For each coordinate in the grid, `get_live_neighbours` is called. This counts the live neighbours of the cell at `x` , `y` and stores it in `c` . For the rules of the Game of Life, there are five possible combinations of live neighbours and cell state. Depending on the combination, either `dead` or `live` is set in the buffer.

1. If the cell is `live`, and there are `<= 1` live neighbours, this cell becomes `dead`.
2. If the cell is `live`, and there are `>= 4` live neighbours, this cell becomes `dead`.
3. If the cell is `live`, and there are `== 2` live neighbours, this cell becomes `live`.
4. If the cell is `live`, and there are `== 3` live neighbours, this cell becomes `live`.
5. If the cell is `dead`, and there are `== 3` live neighbours, this cell becomes `live`.

Once the buffer array is filled, it is returned.

## Get Live Neighbours

The function, `get_live_neighbours` takes two parameters; an `x` and a `y` coordinate. It then gets the state of each of the eight neighbouring cells, incrementing `count` if the state is `live` . The number of live neighbours is then returned.

    get_live_neighbours(x, y) {
        let count = 0;

        if (this.get_cell(x + 0, y - 1) == this.live) { count++; }
        if (this.get_cell(x + 1, y - 1) == this.live) { count++; }
        if (this.get_cell(x + 1, y + 0) == this.live) { count++; }
        if (this.get_cell(x + 1, y + 1) == this.live) { count++; }
        if (this.get_cell(x + 0, y + 1) == this.live) { count++; }
        if (this.get_cell(x - 1, y + 1) == this.live) { count++; }
        if (this.get_cell(x - 1, y + 0) == this.live) { count++; }
        if (this.get_cell(x - 1, y - 1) == this.live) { count++; }

        return count;
    }

In a square grid like the one we are using, there are 8 possible neighbouring cells. The function `get_cell` gets the state of the cell in the main array storing the state of cells in the current generation. It does not take the states from the buffer array, since that is not filled in.

Consider the four examples in *Figure 3*.

![Four Example Neighbourhoods](/assets/images{{ page.url}}/figure3.png)

> **Figure 3** - Four example cells and their neighbourhoods.

In each of the four examples in *Figure 3*, the cell being evaluated is the central, blue cell. Cells with `state = 0` (dead) are black, and cells with `state = 1` (live) are white.

* In example 1,  `get_live_neighbours` would return 3 if the `x`,  `y` coordinates of the blue cell were passed.
* In example 2,  `get_live_neighbours` would return 2 if the `x`,  `y` coordinates of the blue cell were passed.
* In example 3,  `get_live_neighbours` would return 4 if the `x`,  `y` coordinates of the blue cell were passed.
* In example 4,  `get_live_neighbours` would return 5 if the `x`,  `y` coordinates of the blue cell were passed.

## Apply Buffer

Once the states of every cell have been calculated, they need to be applied. Remember, each new state is stored in a seperate "buffer" array, so that the original doesn't get polluted. Now that every cell has been evaluated, the values in the "buffer" array can be set in the main array.

    apply_buffer(buffer) {
        for (let x = 0; x < this.sizex; x++)
            for (let y = 0; y < this.sizey; y++) {
                this.set_cell(x, y, buffer[x][y]); 
            }
    }

The `apply_buffer` function iterates over each cell, copying the state stored in `buffer` to our main grid.
