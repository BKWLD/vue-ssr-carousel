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

    - I'm pretty sure all the slides re-render and re-mount when Slick inits and un-inits.  This feels like extra unnecessary overhead and opportunity for bugs.

- *Difficulty determining if there's overflow after Slick inits*.  When Slick is initialized and `infinite: true`, Slick adds a full set of `.slick-cloned` slides before and after the real slides.  This makes it difficult to measure the width of the contents to determine if the slides don't overflow the container, which makes it difficult to determine if we can un-init Slick.  I figured it out and got it working, but it was non-trivial and I'm concerned the code is brittle.

