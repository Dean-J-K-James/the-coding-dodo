---
title:       Random Walk Dungeon Generation
description: Random walk uses a so-called walker cell to carve out a path in an n-dimensional grid, creating a fully connected graph that resembles a cave or dungeon. In this tutorial, the random walk algorithm is demonstrated on a two-dimensional tilemap.
category:    Algorithms
tags:        Caves
---

## Generating Caves and Dungeons Using Random Walk

Procedural cave and dungeon generation is a common feature in game development; whether it be a 2D top-down dungeon crawler, or a 3D voxel first person shooter, procedurally generated caves and dungeons add varied, unique environments for the player to experience.

![Example Cave Generated Using Random Walk](/assets/images{{ page.url}}/figure1.png)
> **Figure 1** - Example Cave Generated Using Random Walk

There are countless algorithms and techniques that can be used to generate caves, but perhaps the simplest is a random walk. The random walk algorithm can be used to quickly create fully connected, random looking caves of varying size and shape. It works by repeatedly traversing a grid in random directions, turning cells that are passed into a path. Once the random walk is done, the results will look similar to those in *Figure 1*.

## Algorithm

There are a few ways to implement a random walk, such as using queues, stacks, or recursion. We're just going to use a simple loop though, resulting in the following pseudo code:

    Set all cells to a wall
    Set walker to the centre cell
    Loop x times:
        Set cell where walker is to a path
        Move walker to random neighbouring cell

The RogueBasin wiki page, [Random Walk Cave Generation](http://www.roguebasin.com/index.php?title=Random_Walk_Cave_Generation), further describes the pseudo code for a random walk.

## Implementation

<div class="tip">All code shown in this tutorial is written in JavaScript, however, it should be relatively easy to translate into another language.</div>

### Initialisation

Let's start by initialising our grid. Since the idea behind the random walk is we carve a path in to the grid, it makes sense to default all of our cells to something impassable, like a wall. We use two nested for loops, iterating every possible coordinate in our tilemap, and set the cell at that position to a wall.

    let sizex = 16;
    let sizey = 16;

    for (var x = 0; x < sizex; x++)
    {
        for (var y = 0; y < sizey; y++)
        {
            set_cell(x, y, "wall");
        }
    }

The variables `sizex` and `sizey` refer to the width and height of our tilemap. The function `set_cell` is not defined in this tutorial because it's implementation entirely depends on what language and engine you are using, but assume it sets the cell located at the passed x and y coordinates to the passed cell type.

Once the grid is initialised, lets set up our walker.

    let x = Math.floor(sizex / 2);
    let y = Math.floor(sizey / 2);

The walker is a position within our grid. It will be the first cell in the grid to be a path; it is also the only cell guaranteed to be a path. This could be used as a player spawn point.

Since this algorithm is entirely random, there is no way to predict, nor are there any restrictions on, the direction the walker will move. To get the best coverage of the grid, the centre cell is chosen as the position of our walker. This doesn't have to be the case though. To get an even more random cave system, the starting walker position could be completely random.

### Traversing the Grid

Now that everything is set up, lets start carving a path into our grid.

The code for traversing the grid needs to be iterated a certain number of times. In the code below, we use a for loop to iterate a fixed 100 times. That means that in total, our walker will move 100 times, and on each iteration sets a single cell to a path. You should adjust the number of iterations according to your needs.

    for (var i = 0; i < 100; i++)
    {
        set_cell(x, y, "path");

        switch (Math.floor(Math.random() * 4)) {
            case 0: y--; break;
            case 1: x++; break;
            case 2: y++; break;
            case 3: x--; break;
        }

        x = Math.max(1, Math.min(x, sizex - 2));
        y = Math.max(1, Math.min(y, sizey - 2));
    }

Inside the for loop, we set the cell where the walker is currently positioned to a path. Then, we move the walker to an adjacent cell. To do this, we pick a random integer between 0 (inclusive) and 4 (exclusive). The produced number represents a direction: either north, east, south, or west. A switch statement increments/ decrements the x and y position of the walker accordingly.

For example, if the random number generated is a 2, that represents south. The y position is incremented by one to move the walker south by one cell.

Once the new position of the walker is calculated, we have to ensure it is within the bounds of our grid. This is done by clamping it to between 0, and either the width or height depending on the direction changed. Some languages have a built in `clamp` function. JavaScript does not so we combine the `min` and `max` functions to simulate it.

## Keeping the Cave Random

On each iteration of the algorithm, the data is never quality tested. The only validation is clamping the coordinates so that our array indexes dont overflow. This lack of quality assurance can result in two things:

* The next walker position is already a path. This is desirable because it keeps the size of the cave random and unpredictable.
* If the walker is already at the edge of the grid, there is a 25% chance of the next coordinate being clamped and therefore not changing. This can cause the undesirable effect of having our path "stick" to an edge, like in *Figure 2*.

![Cave Sticking to Edge of Grid](/assets/images{{ page.url}}/figure2.png)
> **Figure 2** - Cave Sticking to Edge of Grid

There are several ways the problem of having our cave stick to the edge can be fixed. One could be that when choosing a random direction to move our walker, we only choose directions that are valid. For example, if our walker is right on the east border, only allowing the north, south and west directions to be chosen will force the walker to move away from the edge.

The random walk algorithm is a very simple and easy technique to use. In reality, the caves it generates are not necessarily perfect for an actual game, because it's heavy reliance on random numbers can result in wierd looking worlds.

## Further Reading


* Mozilla web docs have a page describing [Tilemaps](https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps) for web development. Some of the concepts can be transferred to tilemaps in non-web environments.
