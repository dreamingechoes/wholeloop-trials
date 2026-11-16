// A CI-only release-note check for the wholeloop CI correction trial (P8-01). The
// local suite does not run it, so a candidate can pass QA and still fail here.
const fs = require('node:fs')
const notes = fs.existsSync('CHANGES.md') ? fs.readFileSync('CHANGES.md', 'utf8') : ''
if (!/^- status: public fixture$/m.test(notes)) {
  console.error(
    'Release-note check FAILED: CHANGES.md must contain the line "- status: public fixture" for the status change.',
  )
  process.exit(1)
}
console.log('Release-note check PASS')
