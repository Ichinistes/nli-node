#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const arg = require('arg');
const box = require('boxen');
const Weather = require('weather-js');
const OneLinerJoke = require('one-liner-joke');
var joke = OneLinerJoke.getRandomJoke();
var Args = process.argv.slice(2);
const menus = require('../function/function');
const args = arg(menus.arg);

switch (Args[0]) {
    case 'hello':
        if (Args[1]) {
            if (args["--box"]) {
                console.log(menus.hellob);
            } else if (!args["--box"]) {
                console.log(menus.hello);
            }
        } else if (!Args[1]) {
            console.log(chalk.red('No name provided!'));
        }
        break;
    case 'weather':
        if (Args[1]) {
            Weather.find({ search: Args[1], degreeType: "C" }, function (err, result) {
                if (err) return console.log(err);
                console.log(`${box(`${chalk.whiteBright(`     Here is the time for ${result[0].location.name}`)}
        ${chalk.yellowBright(`
        Weather: ${result[0].current.skytext}
        Temperature: ${result[0].current.temperature}°C
        Felt temperature: ${result[0].current.feelslike}°C
        Wind: ${result[0].current.winddisplay}
        Humidity: ${result[0].current.humidity}%`)}`, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'blueBright' })}`)
        });
        } else if (!Args[1]) {
            console.log(chalk.red('No city name provided!'));
        }
        break;
    case 'joke':
        if (args["--box"]) {
            console.log(menus.jokeb);
        } else if (!args["--box"]) {
            console.log(menus.joke);
        }
        break;
    case 'version':
        console.log(menus.version);
        break;
    case 'calc':
        console.log(2020 - 1981);
        break;
    default:
        console.log(menus.main);
}