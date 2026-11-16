// A CI-only release-note check for the wholeloop CI correction trial (P8-01). The
// local suite does not run it, and its line names the pull request, which exists
// only after publication, so the first candidate always fails here and a repair
// that knows the published pull request can pass.
const fs = require('node:fs')
const number = /^refs\/pull\/([1-9][0-9]*)\/merge$/.exec(process.env.GITHUB_REF ?? '')?.[1]
if (!number) {
  console.error('Release-note check FAILED: run it for a pull request.')
  process.exit(1)
}
const line = `- #${number}: status: public fixture`
const notes = fs.existsSync('CHANGES.md') ? fs.readFileSync('CHANGES.md', 'utf8') : ''
if (!notes.split('\n').includes(line)) {
  console.error(`Release-note check FAILED: CHANGES.md must contain the line "${line}".`)
  process.exit(1)
}
console.log('Release-note check PASS')
