# vue-ssr-carousel [![vue-ssr-carousel](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/b4x3of/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/b4x3of/runs) [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/7531dcbc/vue-ssr-carousel)

A performance focused Vue carousel designed for SSR/SSG environments. No JS is used to layout the carousel or it's slides. The goal is to improve LCP and CLS scores because there is no layout or markup changes when JS hydates. It's primarily designed for rendering "card" style slides (like for linking to articles or products) where the carousel-ness is conditionally applied based on the number of cards that are slotted in as well as the viewport width.

Check out the demo: https://vue-ssr-carousel.netlify.app.

## Install

```sh
yarn add vue-ssr-carousel
```

### Default

```js
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
Vue.component 'ssr-carousel', SsrCarousel
```

### Nuxt

```js
// nuxt.config.js
export default {
  buildModules: [ 'vue-ssr-carousel/nuxt' ]
}
```

## Usage

```vue
<ssr-carousel>
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</ssr-carousel>
```

For more examples, see the demo: https://vue-ssr-carousel.netlify.app.

### Tips

- If your slides are generated with `v-for`, use `key` values that are based on the data you are looping through.  In other words, do `v-for='slide in slides' :key='slide.id'` _rather_ that `v-for='slide, index in slides' :key='index'`.
- Don't use `v-if` on the root element of slide components.

## API

### Props

| **Props**           | **Default** | **Description**
|---------------------|-------------|----------------
| `slides-per-page`   | `1`         | How many slides are shown per page. Can be set to `null` to allow for flexible widths for slides. See https://vue-ssr-carousel.netlify.app/responsive and note the caveats mentiond within.
| `gutter`            | `20`        | The size of the space between slides. This can a number or any CSS resolvable string. See https://vue-ssr-carousel.netlify.app/gutters.
| `paginate-by-slide` | `false`     | When `false`, dragging the carousel or interacting with the arrows will advance a full page of slides at a time.  When `true`, the carousel will come to a rest at each slide.
| `pagination-label`  | `null`      | Customizes the label used in aria labels to describe a page.
| `autoplay-delay`    | `0`         | Add a delay in seconds for auto playing the slides. See https://vue-ssr-carousel.netlify.app/misc#autoplay.
| `loop`              | `false`     | Boolean to enable looping / infinite scroll. See https://vue-ssr-carousel.netlify.app/looping.
| `center`            | `false`     | Render the first slide in the middle of the carousel.  Should only be used with odd numbers of `slides-per-page`.  This results in the slides being rendered visually in a different order than the DOM [which is an accessibility concern](https://developer.mozilla.org/en-US/docs/Web/CSS/order#accessibility_concerns). See https://vue-ssr-carousel.netlify.app/looping.
| `peek`              | `0`         | A width value for how far adjacent cards should peek into the carousel canvas. This can a number or any CSS resolvable string. See https://vue-ssr-carousel.netlify.app/peeking.
| `peek-left`         | `0`         | Set peek value on just the left edge.
| `peek-right`        | `0`         | Set peek value on just the right edge.
| `peek-gutter`       | `false`     | Set peek value equal to `gutter` value.
| `feather`           | `false`     | Fades out the left and right edges using a CSS `mask-image` gradient.  Set to `true` to use the default `20px` value or as number or any CSS resolvable string to set an explicit width. This is designed to be used with `peek` properties. See https://vue-ssr-carousel.netlify.app/peeking.
| `overflow-visible`  | `false`     | Disables the `overflow:hidden` that wraps the slide track.  You would do this if you want to handle that masking in an ancestor element.  See https://vue-ssr-carousel.netlify.app/peeking.
| `no-drag`           | `false`     | Disables the ability to drag the carousel.
| `show-arrows`       | `false`     | Whether to show back/forward arrows. See https://vue-ssr-carousel.netlify.app/ui.
| `show-dots`         | `false`     | Whether to show dot style pagination dots. See https://vue-ssr-carousel.netlify.app/ui.
| `value`             | `undefined` | Used as part of `v-model` to set the initial slide to show.  See https://vue-ssr-carousel.netlify.app/events.
| `responsive`        | `[]`        | Adjust settings at breakpoints. See https://vue-ssr-carousel.netlify.app/responsive. Note, `loop` and `paginate-by-slide` cannot be set responsively.

### Slots

| **Slots**    | **Description**
|--------------|----------------------------------------------------------
| `default`    | Where your slides get injected.
| `back-arrow` | Replace the default back icon. **Slot props:**
|              | `disabled` - True if at first page when not looping.
| `next-arrow` | Replace the default next icon. **Slot props:**
|              |  `disabled` - True if at last page when not looping.
| `dot`        | Replace the default pagination dots.  **Slot props:**
|              | `index` - The page index that the dot represents.
|              | `disabled` - True if dot represents current page.

### Methods

| Methods       | Description
|---------------|----------------------------------------------------------------------------------------------------------------------------------
| `next()`      | Go forward a page or slide, depending on the `paginate-by-slide` prop
| `back()`      | Go back a page or slide, depending on the `paginate-by-slide` prop
| `goto(index)` | Go to an index.  If `paginate-by-slide` is `false`, this equates to a page offset.  If `true`, this equates to a slide offset.

### Events

See https://vue-ssr-carousel.netlify.app/events

| Events                   | Description
|--------------------------|--------------------------------------------------------------------
| `change({ index })`      | Fired when the internal index counter changes.
| `input`                  | Same as `change` but intended for use with `v-model`.
| `press`                  | Fired on mouse or touch down.
| `release`                | Fired on mouse or touch up.
| `drag:start`             | Fired on start of dragging.
| `drag:end`               | Fired on end of dragging.
| `tween:start({ index })` | Fired when the carousel starts tweening to it's final position.
| `tween:end({ index })`   | Fired when the carousel has finished tweening to it's destination.

## Why another carousel component

#### Issues with [flickity](https://flickity.metafizzy.co/)

- Not a Vue component, so extra work building a Vue wrapper for it.
- No SSR support, delaying LCP scoring.
- When JS hydrates, the slides get nested in a new parent, which affects LCP calculations.

#### Issues with [vue-slick-carousel](https://github.com/gs-shop/vue-slick-carousel)

- Slick applies responsive rules only after JS inits. This also results in getting a `Mismatching childNodes vs. VNodes` error when the page hydrates at a viewport width that changes the `slidesToShow`.
- It's extra work to make the carousel look the same before and after Slick inits, since you have to style them two different ways.
- Difficulty determining if there's overflow after Slick inits because when Slick is initialized and `infinite: true`, Slick adds a full set of `.slick-cloned` slides before the "real" slides, and another full set after them
- Doesn't handle being empty well.
- When using custom arrows or dots, it would show a warning that the Nodes does not match.
- Doesn't do a good job of preventing images and links within slides from preventing dragging.
