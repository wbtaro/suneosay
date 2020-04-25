#!/usr/bin/env node
const readline = require('readline')
const textProcessor = require('./text_processor.js')
const argv = require('optimist')
  .usage('Usage: suneosay [-s say_string], [-s say_string] [-t think_string], [-c]')
  .describe({
    s: 'Suneo says input text',
    t: 'Suneo thinks input text',
    c: 'Suneo cries and calls his mam',
    h: 'Diplay this help message'
  })
  .alias('s', 'say')
  .alias('t', 'think')
  .alias('c', 'cry')
  .alias('h', 'help')
  .argv

class Suneo {
  constructor () {
    this.himselfIsdisplayed = false
  }

  say (text) {
    var sayTextInBaloon = textProcessor.createSayTextBaloon(text)
    this.displayHimself()
    console.log(sayTextInBaloon)
  }

  think (text) {
    var thinkTextInBaloon = textProcessor.createThinkTextBaloon(text)
    console.log(thinkTextInBaloon)
    this.displayHimself()
  }

  cry () {
    var cryText = textProcessor.getCryText()
    this.say(cryText)
  }

  displayHimself () {
    if (this.himselfIsdisplayed) return
    this.himselfIsdisplayed = true
    var suneoText = textProcessor.getSuneoText()
    process.stdout.write(suneoText)
  }
}

var acceptFromStdin = () => {
  var inputText = ''
  const rl = readline.createInterface({
    input: process.stdin
  })
  return new Promise((resolve) => {
    rl.on('line', (line) => {
      inputText += line + '\n'
    })
    rl.on('close', () => { resolve(inputText) })
  })
}

var main = async () => {
  var suneo = new Suneo()
  var sayText
  var thinkText

  if (argv.s && (!argv.t && !argv.c && !argv.h)) {
  // suneosay -s xxxxx
    sayText = argv.s
  } else if (argv._.length && !argv.s && !argv.t && !argv.c && !argv.h) {
  // suneosay xxxxx
    sayText = argv._.join(' ')
  } else if (!argv._.length && !argv.s && !argv.t && !argv.c && !argv.h) {
  // suneosay (without any options and get sayText from stdin)
    sayText = await acceptFromStdin()
  } else if (argv.t && (!argv.s && !argv.c && !argv.h)) {
  // suneosya -t xxxxx
    thinkText = argv.t
  } else if (argv.t && argv.s && !argv.c && !argv.h) {
  // suneosay -s xxxxx -t xxxxx
    thinkText = argv.t
    sayText = argv.s
  } else if (argv.c && (!argv.s && !argv.t && !argv.h)) {
  // suneosay -c
  // When -c is input, both thinkText and sayText should be undifined
  } else if (argv.h && (!argv.s && !argv.t && !argv.c)) {
  // suneosay -h
    require('optimist').showHelp()
    return
  } else {
    require('optimist').showHelp()
    return
  }

  if (thinkText) suneo.think(thinkText)
  if (sayText) suneo.say(sayText)
  if (!thinkText && !sayText) suneo.cry()
  console.log('')
}
main()
