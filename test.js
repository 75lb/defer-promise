import TestRunner from 'test-runner'
import { strict as a } from 'assert'
import defer from 'defer-promise'

const tom = new TestRunner.Tom()

tom.test('resolve', function () {
  const deferred = defer()
  process.nextTick(() => {
    deferred.resolve('ok')
  })
  return deferred.promise
})

tom.test('reject', function () {
  const deferred = defer()
  process.nextTick(() => {
    deferred.reject(new Error('test'))
  })
  return deferred.promise
    .then(() => {
      throw new Error('failed')
    })
    .catch(err => {
      if (err.message === 'test') {
        return 'ok'
      } else {
        throw err
      }
    })
})

export default tom
