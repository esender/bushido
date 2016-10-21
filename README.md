# Busido
Very simple and laconic path helper

## Usage

```javascript
// paths.js
import Busido, { addResource } from 'busido';

let busido = new Busido();

export default busido.createPaths([
  addResource('books', [
    addResource('pages', [
      addResource('paragraphs')
    ]),
    addResource('content')
  ]),
  addResource('pages')
])
```

```javascript
import paths from './paths'

paths.pages.path // => '/pages'
paths.pages(4).path // => '/pages/4'

paths.books.pages.paragraphs.path // => '/books/pages/paragraphs'
paths.books(3).pages(5).paragraphs(7).path // => '/books/3/pages/5/paragraphs/7'
paths.books(6).pages.paragrahps.path // => '/books/6/pages/paragraphs'
```

