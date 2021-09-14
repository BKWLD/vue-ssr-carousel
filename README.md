# vue-carousel

A bespoke Vue based carousel.

## Why another carousel component

#### Issues with using [flickity](https://flickity.metafizzy.co/)

- No SSR support, delaying LCP scoring
- When JS hydrates, the slides get nested in a new parent, which affects LCP calculations

#### Issues with [vue-slick-carousel](https://github.com/gs-shop/vue-slick-carousel)

- *Slick manipulating the DOM when it initializes*, and associated pain points:

    - Not being able to use `$refs` on Slick elements.  Instead, having to do `$nextTick` and `querySelector` to get references to elements.

    - It's extra work to make the carousel look the same before and after Slick inits, since you have to style them two different ways.

    - I'm pretty sure all the slides re-mount when Slick inits and un-inits (I see the vue-visual components do their animated fade-in again).  This feels like extra unnecessary overhead and opportunity for bugs.

- *Difficulty determining if there's overflow after Slick inits*.  When Slick is initialized and `infinite: true`, Slick adds a full set of `.slick-cloned` slides before the "real" slides, and another full set after them.  This makes it difficult to measure the width of the contents to determine if the slides don't overflow the container anymore, which makes it difficult to determine if we can un-init Slick.  I figured it out and got it working, but it was non-trivial and I'm concerned the code is brittle.

- Would be nice if it could handle being empty.  I had to put `(v-if='!$fetchState.pending')` because it errored during fetch.

-----

- There are some classes and functions from the original Slick Carousel like `.slick-loading` or `.dragging` that aren't working in this Vue implementation. 
- If you set the property `columns` to `4` for example, it first renders 4 columns and just after JS inits it takes the breakpoint you put in the `responsive` prop. This affects mobile scores as it would first render 4 columns instead of 1 column. (It would be nice to set breakpoints with CSS instead of JS)
- When using custom arrows or dots, it would show a warning that the Nodes does not match(like what renders from SSR and what is showing in the browser or something like that)
- It is a little difficult to add gutters between slides.
- Slick reinits like 3 or 4 times when changing columns(like when you get the browser narrower).
- 


Things `vue-slick-carousel` does well:

- Adding slides via the default slot.  Very easy.
- Adding custom arrows with named slots.  I like this.

----
- It supports SSR
- It supports some Accessibility stuff
