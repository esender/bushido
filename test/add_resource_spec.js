import addResource from '../src/add_resource';
import { expect } from 'chai';

describe('addResource', function(){
  describe('without subResources', () => {
    let carredResource;

    beforeEach(() => {
      carredResource = addResource('books');
    });

    it('should return function', () => {
      expect(carredResource).to.be.instanceof(Function);
    });

    it('should have resourceName', () => {
      expect(carredResource.resourceName).to.equal('books');
    });

    describe('set parent resource', () => {
      let resource;
      
      beforeEach(() => {
        resource = carredResource();
      });

      it('should return resource function', () => {
        expect(resource).to.be.instanceof(Function);
      });

      it('have path', () => {
        expect(resource.path).to.equal('/books');
      });

      describe('resource call', () => {
        it('returns object', () => {
          expect(resource(5)).to.be.instanceof(Object);
        });

        it('have path', () => {
          expect(resource(5).path).to.equal('/books/5');
        });

        it('with string have path', () => {
          expect(resource('string').path).to.equal('/books/string');
        });
      });
    });
  });

  describe('with subResources', () => {
    let resource;

    beforeEach(() => {
      resource = addResource('books', [
        addResource('pages'),
        addResource('paragraphs')
      ])();
    });

    it('have subResources', () => {
      expect(resource).to.contain.all.keys('pages', 'paragraphs');
    });

    it('subResources be a functions', () => {
      expect(resource.pages).to.be.instanceof(Function);
      expect(resource.paragraphs).to.be.instanceof(Function);
    });

    describe('resource call', () => {
      it('have subResources', () => {
        expect(resource(5)).to.contain.all.keys('pages', 'paragraphs');
      });

      it('subResources be a functions', () => {
        expect(resource(5).pages).to.be.instanceof(Function);
        expect(resource(5).paragraphs).to.be.instanceof(Function);
      });
    });
  });
});
