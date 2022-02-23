# vue-ssr-carousel

A performance focused Vue carousel designed for SSR/SSG environments.

Check out the demo: https://vue-ssr-carousel.netlify.app.

## Install

```sh
yarn add vue-ssr-carousel
```

```js
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
Vue.component 'ssr-carousel', SsrCarousel
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

## API

### Props

- `slides-per-page` (`1`) - How many slides are shown per page.
- `gutter` (`20`) - The size of the space between slides.  This can a number or any CSS resolvable string. See https://vue-ssr-carousel.netlify.app/gutters.
- `responsive` (`[]`) - Adjust settings at breakpoints. See https://vue-ssr-carousel.netlify.app/responsive.  The following properties can be set responsively: `slidesPerPage`, `gutter`, and any `peek` related property.
- `paginate-by-slide` (`false`) - When `false`, dragging the carousel or interacting with the arrows will advance a full page of slides at a time.  When `true`, the carousel will come to a rest at each slide.
- `loop` (`false`) - Boolean to enable looping / infinite scroll. See https://vue-ssr-carousel.netlify.app/looping.
- `peek` (`0`) - A width value for how far adjacent cards should peek into the carousel canvas. This can a number or any CSS resolvable string. See https://vue-ssr-carousel.netlify.app/peeking.  There are couple related properties:
  - `peek-left` - Set peek value on just the left edge.
  - `peek-right` - Set peek value on just the right edge.
  - `peek-gutter` - Set peek value on to the `gutter` value.
- `show-arrows` (`false`) - Whether to show back/forward arrows. See https://vue-ssr-carousel.netlify.app/ui.
- `show-dots` (`false`) - Whether to show dot style pagination dots. See https://vue-ssr-carousel.netlify.app/ui.

### Slots

- `default` - Where your slides get injected.
- `back-arrow` - Replace the default back icon.
- `next-arrow` - Replace the default next icon.
- `dot` - Replace the default pagination dots.

### Methods

- `next()` - Go forward a page or slide, depending on the `paginate-by-slide` prop
- `back()` - Go back a page or slide, depending on the `paginate-by-slide` prop
- `goto(index)` - Go to an index.  If `paginate-by-slide` is `false`, this equates to a page offset.  If `true`, this equates to a slide offset.

### Events

See https://vue-ssr-carousel.netlify.app/events

- `change({ index })` - Fired when the internal index counter changes
- `press` - Fired on mouse or touch down
- `release` - Fired on mouse or touch up
- `drag:start` - Fired on start of dragging
- `drag:end` - Fired on end of dragging
- `tween:start({ index })` - Fired when the carousel starts tweening to it's final position
- `tween:end({ index })` - Fired when the carousel has finished tweening to it's destination.
