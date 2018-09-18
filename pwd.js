module.exports = () => {
  process.stdout.write('prompt > ');

  process.stdin.on('data', () => {

    const cmd = process.cwd()
      .toString().trim();

    process.stdout.write(cmd);
    process.stdout.write('\nprompt > ');
  })
}
