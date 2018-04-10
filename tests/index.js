const {createGroup, assert} = require('painless')
const {createLocalInterface} = require('..')
const test = createGroup()


const fakeSchema = {}

test('it doesn\'t blow up for the most basic usage', () => {
    const fakeGraphql = {execute: () => Promise.resolve({foo: 'bar'})}
    const iface = createLocalInterface(fakeGraphql, fakeSchema)
    const result = iface.query({})
    return assert.eventually.deepEqual(result, {foo: 'bar'})
})

test('it doesn\'t blow up for non-promise values', () => {
    const fakeGraphql = {execute: () => ({foo: 'bar'})}
    const iface = createLocalInterface(fakeGraphql, fakeSchema)
    const result = iface.query({})
    return assert.eventually.deepEqual(result, {foo: 'bar'})
})
