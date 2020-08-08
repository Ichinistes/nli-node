#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const arg = require('arg');
const box = require('boxen');

const args = arg({
    '--name': String,
    '--box': Boolean,

    '-n': '--name',
    '-b': '--box'
});

if (args["--name"]) {
    if (args["--box"]) {
        console.log();
    } else if (!args["--box"]) {
        console.log();
    }
} else if (!args["--name"]) {
    console.log(chalk.red('No name provided !'))
}