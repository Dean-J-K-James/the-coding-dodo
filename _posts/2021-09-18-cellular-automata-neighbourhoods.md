---
title:       Cellular Automata Neighbourhoods
description: Find out how neighbourhoods are calculated in one-dimensional and two-dimensional cellular automata, including the von Neumann and Moore neighbourhoods.
tags:    [CellularAutomata]
---

## Neighbourhood

The neighbourhood of a cell refers to the set of cells that are in some way relevant to that cell in respect to the rules of a given cellular automaton. When the rules of a cellular automaton are applied to a cell, it's neighbourhood is used when calculating it's new state.

![Cell Neighbourhood Examples](/assets/images{{ page.url}}/figure1.png)
> **Figure 1** - Cell Neighbourhood Examples

*Figure 1* shows some example neighbourhoods in a two-dimensional CA. Each 5x5 grid consists of a cell, coloured blue, it's neighbourhood, coloured yellow, and other cells not in it's neighbourhood, coloured white.

## Neighbourhoods in One Dimension

One dimensional CA consist of a set of cells kept together in a row. Each cell has two neighbours. One to the left, and one to the right. Cells on the edge of the row will only have one neighbour.

![Cell Neighbourhood in One Dimension](/assets/images{{ page.url}}/figure2.png)
> **Figure 2** - Cell Neighbourhood in One Dimension

*Figure 2* shows a single one dimensional CA generation. Highlighted in blue is a cell, and highlighted in yellow are the two cells that are part of it's neighbourhood. Cells in white are not part of the neighbourhood of this cell.

Typically, a cell's neighbourhood will only consist of the cells directly next to it. In this case, the neighbourhood has a range `r = 1`, where only cells within a distance of 1 are contained in the neighbourhood. Occasionally, CA are defined with a range greater than 1.

![Cell Neighbourhood in One Dimension With Range 2](/assets/images{{ page.url}}/figure3.png)
> **Figure 3** - Cell Neighbourhood in One Dimension With Range 2

*Figure 3* shows a one-dimensional CA with `r = 2`. Any cell within a distance of 2 is part of the cell's neighbourhood.

For most cellular automata, the cell itself is included as part of it's own neighbourhood. This means for one-dimensional CA with range `r = 1`, there will be three cells in it's neighbourhood.

1) The cell at index `i`.
2) The cell at index `i - 1`.
3) The cell at index `i + 1`. 

Cells at the end of a row will obviously have one of their neighbours missing. In this case, a placeholder cell with a default state of 0 is often used. Sometimes, a cell is not considered part of it's own neighbourhood. Neighbourhoods that do not contain the cell itself are called outer-neighbourhoods and are often used in outer-totalistic cellular automata.

## Neighbourhoods in Two Dimensions

Similarly to one-dimensional CA, the neighbourhood of a two-dimensional CA also consists of any bordering cells. There are two main types of neighbourhood in two dimensional CA, each using a different measure of distance:

* von Neumann Neighbourhood
* Moore Neighbourhood

### von Neumann Neighborhood

The first of the two most common two-dimensional neighbourhoods is the von Neumann neighbourhood. Named after the famous computer scientist and mathmatician John von Neumann, the von Neumann neighbourhood of a cell in a two dimensional cellular automata comprises the set of cells within a Manhattan distance of `r` of the cell in question. The variable `r` refers to the range, and by default is assigned a value of 1.

When using `r = 1`, the von Neumann neighbourhood of a cell consists of it's four directly adjacent cells: one from the north, east, south and west of the cell, and the cell itself.

![von Neumann Cell Neighbourhood](/assets/images{{ page.url}}/figure4.png)
> **Figure 4** - von Neumann Cell Neighbourhood

*Figure 4* shows the von Neumann neighbourhood of a cell in three different cellular automata. The first grid uses `r = 0`, the second uses `r = 1`, and the third uses `r = 2`.

The von Neumann neighbourhood uses the Manhattan distance between cells to determine the contents of a neighbourhood. To calculate the Manhattan distance, sum the absolute values of each axis between the cell coordinates.

Given two cells with coordinates `(a, b)` and `(c, d)`, the Manhattan distance can be calculated using the following formula:

    |a - c| + |b - d|

If cell *A* has coordinates `(3, 4)` and cell *B* has coordinates `(1, 2)`, the Manhattan distance between them is `|3 - 1| + |4 - 2| = 4`.

![Colour Coded Manhattan Distance](/assets/images{{ page.url}}/figure5.png)
> **Figure 5** - Colour Coded Manhattan Distance

*Figure 5* shows the Manhattan distance of each cell in the grid to the centre cell using the following key:

* Cells with distance of `0` are coloured blue.
* Cells with distance of `1` are coloured yellow.
* Cells with distance of `2` are coloured orange.

A typical von Neumann neighbourhood with `r = 1` will consist of 5 cells.

### Moore Neighborhood

The second main type of neighbourhood used in two-dimensional cellular automata is the Moore neighbourhood, named after the computer scientist and mathmatician Edward Moore. The Moore neighbourhood of a cell comprises the cells within a Chebyshev distance of `r`. Arguably, this is the most common type of neighbourhood, and is used by the most popular cellular automaton, Conway's Game of Life.

The Moore neighbourhood of a cell when using `r = 1` will consist of it's eight neighbouring cells (including the diagonals), and the cell itself, for a total of 9 cells.

![Moore Cell Neighbourhood](/assets/images{{ page.url}}/figure6.png)
> **Figure 6** - Moore Cell Neighbourhood

*Figure 6* shows the Moore neighbourhood of a cell in three different cellular automata. The first uses `r = 0`, the second uses `r = 1`, and the third uses `r = 2`.

Whereas a von Neumann neighbourhood uses the Manhattan distance, a Moore neighbourhood will use the Chebyshev distance. The formula for calculating this distance is similar, the difference being instead of summing the difference between each axis, the largest of the two is chosen. Given two cells with coordinates `(a, b)` and `(c, d)`, the Chebyshev distance can be calculated using the following formula:

    max(|a - c|, |b - d|)

If cell *A* has coordinates `(3, 4)` and cell *B* has coordinates `(1, 2)`, the Chebyshev distance between them is `max(|3 - 1|, |4 - 2|) = 2`.

![Colour Coded Manhattan Distance](/assets/images{{ page.url}}/figure7.png)
> **Figure 7** - Colour Coded Manhattan Distance

*Figure 7* shows the Chebyshev distance of each cell in the grid to the centre cell using the following key:

* Cells with distance of `0` are coloured blue.
* Cells with distance of `1` are coloured yellow.
* Cells with distance of `2` are coloured orange.

A typical Moore neighbourhood with `r = 1` will consist of 9 cells.

## Further Reading

* LifeWiki has a page for each type of two-dimensional neighbourhood: [von Neumann Neighbourhood](https://conwaylife.com/wiki/Von_Neumann_neighbourhood) and [Moore Neighbourhood](https://conwaylife.com/wiki/Moore_neighbourhood).