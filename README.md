[![Code Climate](https://codeclimate.com/github/esender/bushido/badges/gpa.svg)](https://codeclimate.com/github/esender/bushido)

[![Test Coverage](https://codeclimate.com/github/esender/bushido/badges/coverage.svg)](https://codeclimate.com/github/esender/bushido/coverage)

[![Issue Count](https://codeclimate.com/github/esender/bushido/badges/issue_count.svg)](https://codeclimate.com/github/esender/bushido)

# Bushido
Very simple and laconic path helper

## Usage

```javascript
// paths.js
import Bushido, { addResource } from 'bushido';

let bushido = new Bushido();

export default bushido.createPaths([
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

