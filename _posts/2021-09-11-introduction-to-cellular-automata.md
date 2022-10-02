---
title:       Introduction to Cellular Automata
description: Learn about cellular automata, including how they are structured, how they evolve according to a set of rules, and how they can be visualised in one-dimensions and two-dimensions.
category:    CellularAutomata
---

## What are Cellular Automata?

A cellular automaton (plural: cellular automata), or CA, is an n-dimensional grid of cells, each in one of m possible states. This grid can be visualised, as shown by *Figure 1*. This example shows a 16x8 two-dimensional cellular automaton, where cells are coloured either black or white, each representing one of two states.

![Example Cellular Automata](/assets/images{{ page.url}}/figure1.png)
> **Figure 1** - Example Cellular Automata

Cellular automata by themselves are just a static grid and don't do anything. However, when a set of rules are applied, cells change based on their state, and the states of their neighbours.

Perhaps the most famous cellular automaton is Conway's Game of Life. The Game of Life is an outer-totalistic CA in a two-dimensional grid, uses a Moore neighbourhood, and has two possible states for each cell. More on what these features mean will be explained throughout this article.

## Cell States

Cellular automata consist of cells, each in one of `m` possible states, where `m` is a finite integer. When visualised, cells can be coloured according to their state.

![One-Dimensional Cellular Automata](/assets/images{{ page.url}}/figure2.png)
> **Figure 2** - One-Dimensional Cellular Automata.

*Figure 2* shows a one-dimensional CA of size 11, with a value of `m = 3`, meaning each cell can be in one of three states. Cells in state 0 are coloured white, cells in state 1 are coloured grey, and cells in state 2 are coloured black.

In memory, cells are usually represented by integers in a n-dimensional array, where `n` is the number of dimensions of the CA. Since the example in *Figure 2* is a one-dimensional CA, we use a one-dimensional array to store it's cell states. The array would look like this: `{20102210100}`.

To make it easier to distinguish states, they are often given labels. For example, in a CA with two possible states, labels include: true and false, on and off, or live and dead.

## Generations

A single instance/ snapshot of a CA, with each cell having a state, is called a generation. *Figure 1* could be considered a single generation of a two-dimensional CA. Cellular automata become useful when a set of rules are applied to them. These rules cause the states of each cell to change, and when applied to every cell, will produce a new generation.

Comparisons between consecutive generations allow programmers to evaluate and observe different patterns. For example, the four generations in *Figure 3* show the so-called "blinker" pattern found in Conway's Game of Life.

![Four Generations of a 3x3 CA](/assets/images{{ page.url}}/figure3.png)
> **Figure 3** - Four Generations of a 3x3 CA

This type of pattern is called an oscillator pattern, because over the course of several generations, the states of each cell oscillate.

If we assume that the first example in *Figure 3* is the initial state of our CA, then we would label is as the first generation, or `generation = 0`. If we then apply a set of rules to every cell in the first generation, the resulting grid will be the second generation, or `generation = 1`.

The generation tells us how many times a cell has had the rules applied to it. If the initial state of the grid is `generation = 0`, this means no rules have yet been applied. For `generation = 1`, every cell has been evaluated against the rules once. For `generation = 45`, every cell has had the rules applied to it 45 times.