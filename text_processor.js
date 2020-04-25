const eaw = require('eastasianwidth')
const fs = require('fs')

const picturesDir = __dirname + '/pictures/'

module.exports = {
  createSayTextBaloon (text) {
    const lineHead = ' '.repeat(12) + '| '
    const lineTail = ' |\n'
    var textInBaloon = this.placeTextInBaloon(text, lineHead, lineTail)
    var baloonHead = this.readFile('say_baloon_head')
    textInBaloon = baloonHead + textInBaloon
    return textInBaloon
  },

  createThinkTextBaloon (text) {
    const lineHead = ' | '
    const lineTail = ' |\n'
    var textInBaloon = this.placeTextInBaloon(text, lineHead, lineTail)
    var baloonHead = this.readFile('think_baloon_head').slice(0, -1)
    textInBaloon += baloonHead
    return textInBaloon
  },

  getSuneoText () {
    return this.readFile('suneo').slice(0, -1)
  },

  getCryText () {
    return this.readFile('mama')
  },

  placeTextInBaloon (text, lineHead, lineTail) {
    const maxWidth = 40
    const minWidth = 15

    var width = text.split('\n').reduce((a, str) => Math.max(a, eaw.length(str)), 0)
    width = Math.min(width, maxWidth)
    width = Math.max(width, minWidth)

    var lineArray = []
    text.split('\n').forEach((line) => {
      var lineLength = eaw.length(line)
      if (lineLength <= width) {
        line += ' '.repeat(width - lineLength)
        lineArray.push(line)
        return
      }
      var lineStr = ''
      for (var i = 0; i < line.length; i++) {
        lineStr += line[i]
        if (eaw.length(lineStr) > width) {
          lineStr = lineStr.slice(0, lineStr.length - 1)
          lineStr = lineStr + ' '.repeat(width - eaw.length(lineStr))
          lineArray.push(lineStr)
          lineStr = ''
          i--
        }
      }
      if (lineStr !== '') lineArray.push(lineStr + ' '.repeat(width - eaw.length(lineStr)))
    })
    lineArray = lineArray.map(line => lineHead + line + lineTail)

    var textFrame = lineHead + '-'.repeat(width) + lineTail
    var textInBaloon = textFrame + lineArray.join('') + textFrame
    return textInBaloon
  },

  readFile (file) {
    return fs.readFileSync(picturesDir + file, 'utf-8')
  }
}
