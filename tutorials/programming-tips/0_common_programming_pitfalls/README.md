# Common Programming Pitfalls

Over the course of learning how to program, there are a few (harmful) patterns that people tend to fall into. These can make it more difficult for you to write code, and can make your code less readable to others (and yourself). I'd like to present you with a list of some of these pitfalls, as well as ways to avoid them.

Throughout this article, we'll be working with the following piece of code:
```js
function sum(n) {
    let s = 0;
    
    for(let i = 1; i <= n; i++) {
        s = i;
    }
    
    return s;
}
```

It's a piece of code that adds up all the numbers from `1` to `n`, then returns the result. **It also has a bug in it.** If you don't fully understand it, that's okay! The concepts that I'll be discussing aren't tied down to a specific piece of code, so you'll still be able to follow along.

## Missing Comments/Documentation

Comments are important. Not just for others reading your code, but for you. The most important thing to understand is that comments aren't meant to be written once your code is done. In fact, you should be writing them before you write your code. This could mean that you plan out all of your code prior to writing it, or you could just write incorporate comments as part of your code-writing process (write a comment, then a bit of code, then a comment, etc.). Whatever works for you. The point is that if you can write comments before code, you can use them as a tool to think through your code before writing it.

It's also important to understand what comments are for. Comments aren't meant to explain what your code does. That's what code's for. Comments are meant to explain everything that the code doesn't tell us. They're meant to explain what you were thinking when you wrote the code. They tell us how the code fits in with everything else. They explain why the code was written the way it does. This is all information that we know when we're writing the code, but we quickly forget once we're done.

This is especially useful when we show our code to someone else or even when we review our own code in the future. But it's even helpful when we're writing the code. Our brains don't store that much information, so if we're in the process of writing a program, and we need to look at a piece of code (even one that we wrote only a few minutes ago), we might not know as much about it as we need to. Comments give us this information instantly, so we won't get confused by our code and won't have to spend time understanding it.

So, let's go back to our example above:
```js
function sum(n) {
    let s = 0;
    
    for(let i = 1;  i <= n; i++) {
        s = i;
    }
    
    return s;
}
```

There's at least one place here that really needs comments: the function itself. `sum` isn't a very good name, but even if it had a more descriptive one, names just don't convey enough information. Let's fix that by adding a comment:
```js
/**
 * Sums every number from 0 to n (inclusive), and returns the result.
 */
function sum(n) {
    let s = 0;
    
    for(let i = 1; i <= n; i++) {
        s = i;
    }
    
    return s;
}
```
*(note that the comments used in methods follow a special formatting, look up JSDoc comments for more details)*

Now, we're able to see what this function does at a quick glance, but there are still a few places that are unclear. One of the reasons for this is the variable names (which we'll talk about in a bit), but even if we still had good names, the loop might need some explaining: `for(let i = 1; i <= n; i++)`. This for loop goes from 1 to n, and, because that might not be immediately obvious, we should document it:
```js
/**
 * Sums every number from 1 to n (inclusive), and returns the result.
 */
function sum(n) {
    let s = 0;
    
    // Goes from 1 to n, as we don't need to add 0, and n
    // should be in the sum.
    for(let i = 1; i <= n; i++) {
        s = i;
    }
    
    return s;
}
```

Nice! This function still has issues, but adding comments helps us make our intentions behind the code clearer and allows us to focus on the "big picture" ideas. For more info on how to write good comments, check out this [StackOverflow blog post on the topic](https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/). Now, let's take a look at naming.

## Naming

Like comments, naming things well makes our code more understandable. Names should be clear and precise, and should give us hints at what the thing with the name does (functions) or contains (variables), and how it's used in the code. Also, like comments, naming shouldn't be an afterthought. If you don't name things well while you're writing your code, it can lead to confusion later down the line.

Our example code doesn't name things well. First off, the function declaration (the line that starts with `function`) is pretty unclear. What is it being summed up? What is `n`? We can come up with some new names that are a bit more descriptive (making sure to update our comments as well):
```js
/**
 * Sums every number from 1 to n (inclusive), and returns the result.
 */
function sumToN(n) {
    let s = 0;
    
    // Goes from 1 to n, as we don't need to add 0, and n
    // should be in the sum.
    for(let i = 1; i <= n; i++) {
        s = i;
    }
    
    return s;
}
```

Now, paired with the JSDoc comment, our function is a bit more descriptive. Also, I didn't change `n` to something else. The reason is that, while before `n` was just a random name, it now carries some significance within the function. Because our function name (`sumToN`) directly references `n`, it's obvious what `n` represents, so it's good as-is. Some variables inside the function, on the other hand, aren't.

First, we'll tackle `s`. We should give it a name that carries some significance and is related to what it does. `s` is the `sum`, and also the `output`. Both of those are perfectly valid, names, but I'm going to go with `sum`.

Next up is `i`. This one is a little tricky, because `i` is a common variable in for loops. However, it's usually used as an array/list index (`i` stands for index), and because we aren't using it as an index here, it doesn't make much sense to call it `i` (and even if it was an index, it still might be a good idea to make it more descriptive, but that's up to you). In this case, `i` represents the number being added to the sum, so we can call it `num`:
```js
/**
 * Sums every number from 1 to n (inclusive), and returns the result.
 */
function sumToN(n) {
    let sum = 0;
    
    // Goes from 1 to n, as we don't need to add 0, and n
    // should be in the sum.
    for(let num = 1; num <= n; num++) {
        sum = num;
    }
    
    return sum;
}
```

Now that our code is nice and readable, we'll have an easier time fixing it. If you want to learn more about this, here's an [article on how to name things well](https://builtin.com/data-science/variable-names). Otherwise, let's make this code work!

## Trial-and-Error

You might be tempted to fix it using trial-and-error. Using trial-and-error isn't a bad thing per se. I would absolutely recommend trying things out in a language in order to become more familiar with it. Explore different language features and learn how the computer responds to different inputs. Trying things out is essential to learning how they work. That being said, trial-and-error should be avoided when solving problems.

If you find yourself stuck, it's easy to turn to trying out random things. It isn't a bad strategy, and if you aren't too far off from the solution, it can even work. But as soon as you start changing your code without knowing what you're doing, it's very easy to end up with code that doesn't make any sense. And even if trial-and-error works, you may not learn as much from it as you could have with a different strategy. Programming isn't meant to be a guessing game, so try to understand your code as best you can, and see if you can draw conclusions from there. The internet is also a wonderful resource if you can identify exactly what problem you're trying to solve (think "how do I get every other element from an array" and "how do I split a string into an array of words" instead of "how do I get every other word in a sentence").

That being said, there is some merit to trial-and-error, and there are times when it's appropriate to use it, but if you decide to do so, you must be careful. Let's take a few steps back and see our example code before we added comments and made the naming nicer:
```js
function sum(n) {
    let s = 0;
    
    for(let i = 1; i <= n; i++) {
        s = i;
    }
    
    return s;
}
```

If we try to use trial-and-error here, we could make things worse:
```js
function sum(n) {
    let s = 0;
    
    for(let i = n; i <= 1; i++) {
        s = i;
    }
    
    return i;
}
```
*(the loop won't run at all if we put anything bigger than `1` in!)*

Now our code is even farther from being correct. This is actually one of the reasons that good naming and comments are so important: if we made the same changes with our new code, it's obvious that it's incorrect (whereas our original code and the broken version look nearly identical):
```js
/**
 * Sums every number from 1 to n (inclusive), and returns the result.
 */
function sumToN(n) {
    let sum = 0;
    
    // Goes from 1 to n, as we don't need to add 0, and n
    // should be in the sum.
    for(let num = n; num <= 1; num++) {
        sum = num;
    }
    
    return num;
}
```

What we should really do in this situation is try to debug our code. There are many ways to go about this, but the simplest way here might be to just trace it. If we go through our code the same way a computer might, we'll notice that `sum` never gets added to. Instead, it always gets overridden, and in the end, `sum` has the same value as `n`. Does it really make sense for something called `sum` to never be added to? Luckily, this is an easy fix: we just need to replace `sum = num` with `sum += num`. Here's the fixed code:
```js
/**
 * Sums every number from 1 to n (inclusive), and returns the result.
 */
function sumToN(n) {
    let sum = 0;
    
    // Goes from 1 to n, as we don't need to add 0, and n
    // should be in the sum.
    for(let num = 1; num <= n; num++) {
        sum += num;
    }
    
    return sum;
}
```

Now, our code finally works! Not only that, but it looks good and is understandable. If you want to learn more about debugging, check out this [post about different strategies](https://www.freecodecamp.org/news/what-is-debugging-how-to-debug-code). Otherwise, there's some more that can still be improved.

## Un-optimized Code

Optimizing code means making it run faster. Of course, optimizing code shouldn't be your main priority (especially if you're just starting out), but there are still some places where you should optimize. A big way to optimize your code is thinking about whether your overall strategy is the best way of doing something. In our example, we're going through every number from `1` to `n` in order to sum them all together. But frequently, there's a better way to do things. If we look up "sum from 1 to n", we might come across this [Wikipedia article](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF) that gives us a formula for doing this, no loops required! By taking a different approach, we can completely remove our loop and make our code a lot simpler:
```js
/**
 * Sums every number from 1 to n (inclusive), and returns the result.
 */
function sumToN(n) {
    // https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF
    // The sum of 1 to n is just n(n+1)/2.
    return (n * (n + 1)) / 2;
}
```

I wouldn't worry too much about optimizing your code, but it can be helpful to see if there are other strategies to solve the problem. Sometimes they can lead to simpler (and more readable) code, or code that runs much faster.

## Closing Thoughts

The most important thing, in my opinion, is to keep your code clean, since clean code is just easier to understand. A big part of that comes down to comments and good naming conventions. There's nothing wrong with needing to clean things up when you're done (there's no sense in making your code pretty if it'll just be re-written), but there are a lot of things that seem like they can be done at the end but are actually extremely helpful to you while you're writing your code. You don't need to make your code pretty (especially when you're writing it), but it always needs to be readable and understandable.

I highly recommend you take a look at some resources that were linked to above. They go much more in-depth into some of these topics than I have, and are excellent references for keeping your code clean.

In any case, I hope this article gave you an overview of some common issues you might encounter when learning how to code. If there's one thing you should take away from this, it's that clean code is easier to write than messy code. Good luck (and have fun) on your programming journey!