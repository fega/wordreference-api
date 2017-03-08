import assert from 'assert';
import wr from '../lib';
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
var expect = chai.expect

describe('wordreference-api', function () {
   this.timeout(5000);
  describe('When you use a no valid word', function(){
    it('Should throw an error');
  }) 
  describe('When you use a no valid language', function () {
    it('Should throw an error');
  });
  describe('When you use a valid word', function () {
    it('Should return a JSON with some properties', function (done) {
      expect(wr('rainbow')).to.eventually.have.property("word")
      .and.notify(done)
    });
  });
  describe('When you use a valid word and valid languages', function () {
    it('Should return a JSON with some properties', function (done) {
      expect(wr('rainbow')).to.eventually.have.property("word")
      .and.notify(done)
    });
  });
});
