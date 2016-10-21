import Bushido, { addResource } from '../src/index';
import { expect } from 'chai';

describe('Bushido', function(){
  let helper;

  beforeEach(() => {
    let bushido = new Bushido();
    helper = bushido.createPaths([
      addResource('books', [
        addResource('pages', [
          addResource('paragraphs')
        ])
      ]),
      addResource('authors')
    ]);
  });

  it('resources path', () => {
    expect(helper.books.path).to.equal('/books');
    expect(helper.authors.path).to.equal('/authors');
  });

  it('resource path', () => {
    expect(helper.books(5).path).to.equal('/books/5');
  });

  describe('generate child', () => {
    it('resources page', () => {
      expect(helper.books.pages.path).to.equal('/books/pages');
    });

    it('resource path', () => {
      expect(helper.books.pages(3).path).to.equal('/books/pages/3');
    });

    it('resources path with specific books', () => {
      expect(helper.books(3).pages.path).to.equal('/books/3/pages');
    });

    it('resource path with specific books', () => {
      expect(helper.books(3).pages(5).path).to.equal('/books/3/pages/5');
    });
  });

  describe('generate third level of nesting', () => {
    it('resources', () => {
      expect(helper.books.pages.paragraphs.path).to.equal('/books/pages/paragraphs');
    });

    it('resources with specific books', () => {
      expect(helper.books(3).pages.paragraphs.path).to.equal('/books/3/pages/paragraphs');
    });

    it('resources with specific pages', () => {
      expect(helper.books.pages(4).paragraphs.path).to.equal('/books/pages/4/paragraphs');
    });

    it('resource', () => {
      expect(helper.books.pages.paragraphs(5).path).to.equal('/books/pages/paragraphs/5');
    });

    it('resources with specific books and pages', () => {
      expect(helper.books(6).pages(7).paragraphs.path).to.equal('/books/6/pages/7/paragraphs');
    });

    it('resource with specific books', () => {
      expect(helper.books(6).pages.paragraphs(7).path).to.equal('/books/6/pages/paragraphs/7');
    });

    it('resource with specific pages', () => {
      expect(helper.books.pages(6).paragraphs(7).path).to.equal('/books/pages/6/paragraphs/7');
    });
  });
});
