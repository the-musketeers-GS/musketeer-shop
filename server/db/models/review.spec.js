/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Review = db.model('review')

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('test_review', () => {
      let review1, review2

      beforeEach(async () => {
        review1 = await Review.build({
          body: 'jfklajflkasffjafkjsdfjla',
          rating: 1
        })
      })

      it('returns true if the body is correct', () => {
        expect(review1.body).to.be.equal('jfklajflkasffjafkjsdfjla')
      })

      it('returns false if the rating is correct', () => {
        expect(review1.rating).to.be.equal(1)
      })

      describe('validations', () => {
        it('requires `body` to be within a specific length range', async () => {
          review2 = await Review.build({
            body: 'jfkla',
            rating: 5
          })

          try {
            await review2.validate()
            throw Error(
              'validation was successful but should have failed if body was not the proper length'
            )
          } catch (err) {
            expect(err.message).to.contain('Validation error')
          }
        })
        it('requires rating to be within a specific range', async () => {
          review2 = await Review.build({
            body: 'jfklaghjggigkhifiuyiuotitgioruirtyuot',
            rating: 8
          })

          try {
            await review2.validate()
            throw Error(
              'validation was successful but should have failed if rating was not in the proper range'
            )
          } catch (err) {
            expect(err.message).to.contain('Validation error')
          }
        })
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
