---
title:       Cellular Automata Rules
description: Explore the difference between totalistic, outer-totalistic and elementary cellular automata in one-dimensions, including how their rules are applied.
category:    CellularAutomata
---

## Types of Cellular Automata

All cellular automata have a set of rules that are used to create new generations. How these rules are applied depends on the type of CA. There are three main types of cellular automata: elementary, totalistic, and outer-totalistic.

Although the ideas investigated in this article can be applied to more complex CA, we are only going to look at one-dimensional cellular automata with range `r = 1` and possible states `m = 2`. *Figure 1* shows all eight possible neighbourhood configurations for such a CA.

![All Eight Elementary Neighbourhood Configurations](/assets/images{{ page.url}}/figure1.png)
> **Figure 1** - All Eight Elementary Neighbourhood Configurations

Processing a cellular automata is quite simple: for each cell, provide it's neighbourhood as input, and as output, a single cell state will be produced.

### Elementary Cellular Automata

Let's start with the elementary rules. Elementary cellular automata use the state of each cell in a neighbourhood individually as input. For example, we could say that the input neighbourhood `{110}` produces an output state of 0. We could also say that the input neighbourhood `{011}` produces an output state of 1.

In total, there are eight possible elementary inputs and outputs, shown in *Figure 2*.

![All Eight Elementary Inputs and Outputs](/assets/images{{ page.url}}/figure2.png)
> **Figure 2** - All Eight Elementary Inputs and Outputs

*Figure 2* shows a common way for rules in a one-dimensional CA to be visualised. In each of the four diagrams, the top shows the three cell wide neighbourhood used as input; and the bottom shows the single cell state produced as output.

If the ruleset is expanded into words, it will state:

* An input neighbourhood `{111}` will produce an output state of 1.
* An input neighbourhood `{110}` will produce an output state of 0.
* An input neighbourhood `{101}` will produce an output state of 1.
* An input neighbourhood `{100}` will produce an output state of 0.
* An input neighbourhood `{011}` will produce an output state of 1.
* An input neighbourhood `{010}` will produce an output state of 0.
* An input neighbourhood `{001}` will produce an output state of 1.
* An input neighbourhood `{000}` will produce an output state of 0.

### Totalistic Cellular Automata

Totalistic cellular automata use the total state of a cell's neighbourhood as input for its rules. For example, we could say that the input neighbourhood `{010}`, which has a total neighbourhood state of `0 + 1 + 0 = 1`, produces an output state of 0. We could also say that the input neighbourhood `{110}`, which has a total neighbourhood state of `1 + 1 + 0 = 2`, produces an output state of 1. The actual neighbourhood configuration itself makes no difference when using totalistic CA, only the total state matters.

In total, there are four possible totalistic inputs and outputs, shown in *Figure 3*.

![All Four Totalistic Inputs and Outputs](/assets/images{{ page.url}}/figure3.png)
> **Figure 3** - All Four Totalistic Inputs and Outputs

For the purpose of making the visualisation easier, a neighbourhood with total state of 3, achieved only with the neighbourhood configuration: `{111}`, is coloured black. A neighbourhood with total state of 2, achieved with the neighbourhood configurations: `{011}`, `{101}`, or `{110}`, is coloured dark grey. A neighbourhood with total state of 1, achieved with the neighbourhood configurations: `{001}`, `{010}`, or `{100}`, is coloured light grey. Finally, a neighbourhood state of 0, achieved only with a neighbourhood configuration `{000}`, is coloured white.

If the ruleset is expanded into words, it will state:

* A total input neighbourhood state of 3 will produce an output state of 1.
* A total input neighbourhood state of 2 will produce an output state of 0.
* A total input neighbourhood state of 1 will produce an output state of 1.
* A total input neighbourhood state of 0 will produce an output state of 0.

### Outer-Totalistic Cellular Automata

Outer-totalistic cellular automata use the total state of a cell's outer-neighbourhood, and the state of the cell itself, as input for it's rules. For example, we could say that the input outer-neighbourhood `{10}`, which has a total neighbourhood state of `1 + 0 = 1`, combined with a cell state of 1 produces an output state of 0. We could also say that the input outer-neighbourhood `{11}`, which has a total neighbourhood state of `1 + 1 = 2`, combined with a cell state of 0 produces an output state of 1. Like with totalistic CA, the configuration of the outer-neighbourhood makes no difference, only the total state matters.

In total, there are six possible outer-totalistic inputs and outputs, shown in *Figure 4*.

![All Four Outer-Totalistic Neighbourhood Inputs and Outputs](/assets/images{{ page.url}}/figure4.png)
> **Figure 4** - All Four Outer-Totalistic Inputs and Outputs

As with totalistic CA, input neighbourhoods are coloured a shade of grey, indicating the total neighbourhood state. The small cell in the middle of the input indicates the state of the cell being evaluated.

If the ruleset is expanded into words, it will state:

* A total input outer-neighbourhood state of 2 and input state of 1 will produce an output state of 0.
* A total input outer-neighbourhood state of 1 and input state of 1 will produce an output state of 0.
* A total input outer-neighbourhood state of 0 and input state of 1 will produce an output state of 1.
* A total input outer-neighbourhood state of 2 and input state of 0 will produce an output state of 1.
* A total input outer-neighbourhood state of 1 and input state of 0 will produce an output state of 0.
* A total input outer-neighbourhood state of 0 and input state of 0 will produce an output state of 0.

## Applying the Rules

Now that we have explored the differences between the three main types of cellular automata, let's have a go at evaluating some cells and applying the rules. To create a new generation, each cell in a grid needs to be evaluated. It doesn't matter which order this is done in, but for convenience, lets evaluate each cell in order from left to right. *Figure 5* shows an example cellular automata.

![Example Cellular Automata](/assets/images{{ page.url}}/figure5.png)
> **Figure 5** - Example Cellular Automata

To evaluate a cell, we follow the following instructions:

1. Identify the cell with index `i`, and it's neighbourhood.
2. Compare the neighbourhood to the provided ruleset.
3. Calculate the output state and store it in the new grid at position `i`.

### Applying Elementary Rules

First, let's try applying the elementary ruleset shown in *Figure 6* to the CA in *Figure 5*.

![Example Elementary Ruleset](/assets/images{{ page.url}}/figure6.png)
> **Figure 6** - Example Elementary Ruleset

The cell with index `i = 0` has a neighbourhood configuration `{001}`. According to our ruleset, this produces an output state of 1, which we store in the new grid at index `i = 0`, as shown in *Figure 7*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure7.png)
> **Figure 7** - Evaluating Cell With Index `i = 0`

The cell with index `i = 1` has a neighbourhood configuration `{011}`. According to our ruleset, this produces an output state of 1, which we store in the new grid at index `i = 1`, as shown in *Figure 8*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure8.png)
> **Figure 8** - Evaluating Cell With Index `i = 1`

The cell with index `i = 2` has a neighbourhood configuration `{110}`. According to our ruleset, this produces an output state of 0, which we store in the new grid at index `i = 2`, as shown in *Figure 9*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure9.png)
> **Figure 9** - Evaluating Cell With Index `i = 2`

The cell with index `i = 3` has a neighbourhood configuration `{101}`. According to our ruleset, this produces an output state of 1, which we store in the new grid at index `i = 3`, as shown in *Figure 10*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure10.png)
> **Figure 10** - Evaluating Cell With Index `i = 3`

The rest of the grid will follow the same method.

### Applying Totalistic Rules

Next, let's try applying the totalistic ruleset shown in *Figure 11* to the CA in *Figure 5*.

![Example Totalistic Ruleset](/assets/images{{ page.url}}/figure11.png)
> **Figure 11** - Example Totalistic Ruleset

The cell with index `i = 0` has a neighbourhood configuration `{001}`, producing a total neighbourhood state of 1. According to our ruleset, this produces an output state of 1, which we store in the new grid at index `i = 0`, as shown in *Figure 12*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure12.png)
> **Figure 12** - Evaluating Cell With Index `i = 0`

The cell with index `i = 1` has a neighbourhood configuration `{011}`, producing a total neighbourhood state of 2. According to our ruleset, this produces an output state of 0, which we store in the new grid at index `i = 1`, as shown in *Figure 13*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure13.png)
> **Figure 13** - Evaluating Cell With Index `i = 1`

The cell with index `i = 2` has a neighbourhood configuration `{110}`, producing a total neighbourhood state of 2. According to our ruleset, this produces an output state of 0, which we store in the new grid at index `i = 2`, as shown in *Figure 14*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure14.png)
> **Figure 14** - Evaluating Cell With Index `i = 2`

The cell with index `i = 3` has a neighbourhood configuration `{101}`, producing a total neighbourhood state of 2. According to our ruleset, this produces an output state of 0, which we store in the new grid at index `i = 3`, as shown in *Figure 15*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure15.png)
> **Figure 15** - Evaluating Cell With Index `i = 3`

The rest of the grid will follow the same method.

### Applying Outer-Totalistic Rules

Finally, let's try applying the outer-totalistic ruleset shown in *Figure 16* to the CA in *Figure 5*.

![Example Outer-Totalistic Ruleset](/assets/images{{ page.url}}/figure16.png)
> **Figure 16** - Example Outer-Totalistic Ruleset

The cell with index `i = 0` has an outer-neighbourhood configuration `{01}`, producing a total neighbourhood state of 1, and a cell state of 0. According to our ruleset, this produces an output state of 0, which we store in the new grid at index `i = 0`, as shown in *Figure 17*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure17.png)
> **Figure 17** - Evaluating Cell With Index `i = 0`

The cell with index `i = 1` has an outer-neighbourhood configuration `{01}`, producing a total neighbourhood state of 1, and a cell state of 1. According to our ruleset, this produces an output state of 0, which we store in the new grid at index `i = 1`, as shown in *Figure 18*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure18.png)
> **Figure 18** - Evaluating Cell With Index `i = 1`

The cell with index `i = 2` has an outer-neighbourhood configuration `{10}`, producing a total neighbourhood state of 1, and a cell state of 1. According to our ruleset, this produces an output state of 0, which we store in the new grid at index `i = 2`, as shown in *Figure 19*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure19.png)
> **Figure 19** - Evaluating Cell With Index `i = 2`

The cell with index `i = 3` has an outer-neighbourhood configuration `{11}`, producing a total neighbourhood state of 2, and a cell state of 0. According to our ruleset, this produces an output state of 1, which we store in the new grid at index `i = 3`, as shown in *Figure 20*.

![Evaluating Cell With Index i = 0](/assets/images{{ page.url}}/figure20.png)
> **Figure 20** - Evaluating Cell With Index `i = 3`

The rest of the grid will follow the same method.