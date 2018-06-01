#!/usr/bin/env node

const core = require('./index.js');

const chalk = require('chalk');
const getit = require('getit');

const path = require('path');
const fs = require('fs');
const program = require('commander');

// Avoid require 'magic' and use FS
const packageJson = JSON.parse( fs.readFileSync(__dirname + path.sep + 'package.json').toString() );


program
  .version(packageJson.version)

  // REQUIRED
  .option('-i, --input [url]', 'Url or path of file to use as input.')
  .option('-o, --output [file]', 'path to output file, if not specified STDOUT is used')

  .option('-f, --format [type]', 'HTML color format hex, rgb, hsl, hsv, hwb, cmyk')
  .option('-d, --debug', 'Put program in debug mode.')

  .parse(process.argv);

if(!program.input) console.error(chalk.red('Error: input file is required for normal operation.'))

const bean = {
  debug: program.debug,
  input: program.input,
  output: program.output||'STDOUT',
  format: program.format||'hex', // NOTE: by default format is hex
}

if(bean.debug) console.log(chalk.yellow(JSON.stringify(bean, null, '  ')));

getit(program.input, function(err, css) {

  if(err){
    console.error(chalk.red('Error: ', err))
    return;
  }

  bean.css = css;

  core(bean).then(function(result){

    if(bean.output === 'STDOUT'){
      console.log(result)
    }else if(bean.output === 'shh'){
      // do nothing
    }else{
      fs.writeFileSync( path.normalize(bean.output), result);
    }

  });
});
