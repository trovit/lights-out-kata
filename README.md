# ⚡ Lights Out Kata ⚡ (with React.js ⚛)

## Introduction 

You work on a prestigious game development company, Lizard Entertainiment. 
Your tech lead asked you to find the source code of the first ever game the company realeased, Lights Out,
because the company executives want to re-release a mobile version of it for the 40th aniversary of the company.

After a few hours searching on a enourmous box of floppys you found the game source code but... oh-Oh...
Almost all the data it's corrupted and you are only able to translate the inner logic of the game
from C to JavaScript, but you need to reproduce the original game interface, so you decide to rebuild it using
React.js.


## Exercise

The goal of this kata is pratice the React.js basics and explore the different use cases & pitfalls we can face 
developing user interfaces with this library.

We want you to reproduce the Light Out game using React.js for building the user interface. The game is a simple puzzle. 
In this caes we have a 3x3 grid that looks like this:

```
1 1 1
1 1 1
1 1 1
```

The elements of the grid can change between two states, in this example from 1 to 0 and from 0 to 1.

Whenever you click on a number, that element and its inmediate neighbours (above, below, right and left) of it change state. 
So, if you click on the center element the result will be something like this:

```
1 0 1
0 0 0
1 0 1
```

And if I then click on the top left element, will look like this:

```
0 1 1
1 0 0
1 0 1
```

In order to win the game we need to turn all the elements to 0.

Also, the game will be registering how many steps gets you to finish the game. The less steps, the better your score is.

Finally, when you win the game, you need to have a way to restart the game.


## Pre-requisites
You will need to have a computer with Node.js v8.X or higher and npm in order to setup the environment.


## Instructions

Clone the repo:

```
git clone git@github.com:mariosanchez/lights-out-kata.git
```

Go to the project folder:

```
cd lights-out-kata
```

Install npm dependencies:

```
npm install
```

Start the environment:

```
npm start
```

If you want to run test in watch mode execute:

```
npm test
```

---

This exercise is based on:
https://github.com/xpmatteo/lights-out-kata
