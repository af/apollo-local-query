const {createGroup, assert} = require('painless')
const {createLocalInterface} = require('..')
const test = createGroup()


const fakeGraphql = {execute: () => Promise.resolve({foo: 'bar'})}
const fakeSchema = {}

test('it doesn\'t blow up for the most basic usage', () => {
    const iface = createLocalInterface(fakeGraphql, fakeSchema)
    const result = iface.query({})
    return assert.eventually.deepEqual(result, {foo: 'bar'})
})
