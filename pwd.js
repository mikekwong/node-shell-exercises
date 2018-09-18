module.exports = (input) => {
  process.stdout.write('prompt > ');
  if (input === 'pwd') {
    process.stdin.on('data', () => {

      const cmd = process.cwd()
        .toString().trim();

      process.stdout.write(cmd);
      process.stdout.write('\nprompt > ');
    })
  }
}
