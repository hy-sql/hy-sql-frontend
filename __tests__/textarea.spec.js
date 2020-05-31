const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(
  path.resolve(__dirname, '../public/index.html'),
  'utf8'
)

jest.dontMock('fs')

describe('form', function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  afterEach(() => {
    // restore the original func after test
    jest.resetModules()
  })

  it('Form exists', function () {
    expect(document.getElementById('form')).toBeTruthy()
  })
})

describe('textarea', function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  afterEach(() => {
    // restore the original func after test
    jest.resetModules()
  })

  it('Textarea exists', function () {
    expect(document.getElementById('box')).toBeTruthy()
  })
})

describe('button', function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  afterEach(() => {
    // restore the original func after test
    jest.resetModules()
  })

  it('Button exists', function () {
    expect(document.getElementById('button')).toBeTruthy()
  })
})
