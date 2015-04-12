console.log("Argv: ", process.argv)
console.log("ENV: ", process.env)

process.stdin.setEncoding('utf8');

from_stdin = ""
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    from_stdin = from_stdin + chunk.toString()
  }
});

process.stdin.on('end', function() {
});

setTimeout(function() {
  process.stdout.write('data from stdin:\n---\n');
  process.stdout.write(from_stdin);
  process.stdout.write('\n---\n');
  process.stderr.write("This goes to stderr\n")
  process.exit(Math.round(Math.random() * 50))
}, (Math.random()* 100) + 100)
