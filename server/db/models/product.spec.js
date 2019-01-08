const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('validations', () => {
      it('requires `title` to not be an empty string', async () => {
        const newProduct = Product.build({
          title: '',
          price: 1234
        })

        try {
          await newProduct.validate()
          throw Error(
            'validation was successful but should have failed if title is an empty string'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation error')
        }
      })
    })

    it('sets a default `image` if none is provided', () => {
      const newProduct = Product.build({
        title: 'shiny sword',
        price: 1234
      })

      expect(newProduct.image).to.be.equal(
        `http://sueadler.com/wp-content/uploads/2015/04/shutterstock_133818692-279x300.jpg`
      )
    })
  })
})
