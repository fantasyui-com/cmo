const squirm = require('squirm');
module.exports = function({css, rotate, desaturate, text, format}){
  return new Promise(function(resolve, reject){
    const setup = {
      css,
      format,
      logger:({color})=>{ },
      transformer:({color, rule, decl, node })=>color, // unused, but must return color.
    };
    squirm(setup).then(result=>resolve(result));
  });
}
