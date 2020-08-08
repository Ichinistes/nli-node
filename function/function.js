const chalk = require('chalk');
const figlet = require('figlet');
const box = require('boxen');
const OneLinerJoke = require('one-liner-joke');
var joke = OneLinerJoke.getRandomJoke();
var Args = process.argv.slice(2);

module.exports = {
    main: `
${chalk.whiteBright(figlet.textSync('NLI', { horizontalLayout: "full" }))}
  ${chalk.greenBright('nli [command] <options>')}
    ${chalk.blueBright('nli')}: show help menu
    ${chalk.blueBright('nli version')}: show NLI version
    ${chalk.blueBright('nli help <command>')}: show help of <command>

    ${chalk.yellowBright('nli joke')}: say a joke for you!
    ${chalk.yellowBright('nli hello <name>')}: say hello <name>!
    ${chalk.yellowBright('nli weather [City]')}: show the weather of a city`,

    version: `
${chalk.white(figlet.textSync('NLI', { horizontalLayout: "full" }))}
  ${chalk.greenBright('NLI Version: ' + require('../package.json').version)}
    `,

    hello: `${chalk.whiteBright('Hello ' + Args[1] + '!')}`,

    hellob: `${box(`${chalk.whiteBright('Hello ' + Args[1] + '!')}`, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'blueBright' })}`,

    joke: `${chalk.whiteBright(joke.body)}`,

  jokeb: `${box(`${chalk.whiteBright(joke.body)}`, { padding: 1, margin: 0, borderStyle: 'round', borderColor: 'blueBright' })}`,
    
  arg: {
    '--version': Boolean,
    '--box': Boolean,

    '-v': '--version',
    '-b': '--box'
  }
}