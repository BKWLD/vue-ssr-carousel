# vue-ssr-carousel

A performance focused Vue carousel designed for SSR/SSG environments.

Check out the demo: https://vue-ssr-carousel.netlify.app

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
- `responsive` (`[]`) - Adjust settings at breakpoints. See https://vue-ssr-carousel.netlify.app/responsive.
- `paginate-by-slide` (`false`) - When `false`, dragging the carousel or interacting with the arrows will advance a full page of slides at a time.  When `true`, the carousel will come to a rest at each slide.
- `show-arrows` (`false`) - Whether to show back/forward arrows. See https://vue-ssr-carousel.netlify.app/ui.
- `show-dots` (`false`) - Whether to show dot style pagination dots. See https://vue-ssr-carousel.netlify.app/ui.

### Slots

- `default` - Where your slides get injected.
- `back-arrow` - Replace the default back icon.
- `next-arrow` - Replace the default next icon.
- `dot` - Replace the default pagination dots.
