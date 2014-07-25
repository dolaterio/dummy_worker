console.log("Argv: ", process.argv)
setTimeout(function() {
  console.log("This goes to stdout")
  console.error("This goes to stderr")
  process.exit(Math.round(Math.random() * 50))
}, (Math.random()* 1000) + 4000)
