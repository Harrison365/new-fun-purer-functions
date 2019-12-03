# Building pure functions

These katas are designed to make you think about building functions that are **pure** and part of this means creating functions without _side effects_ so they don't for example mutate the data they are passed as arguments. Functions that have _side effects_ can expose you to bugs that are often difficult to find, so avoiding side effects as soon as possible is a very good habit to get in to from the beginning.

As with previous days, you will need to set up a few things first:

1. Create a `package.json`

2. Install your dependencies (the amazing Jest as ever)

3. Update the scripts section of your `package.json` so you can get Jest to run your test files

For each of the sections in this repository there are 2 separate READMEs with detailed specifications for all the behaviour you should test for when implementing your functions. Good luck!
