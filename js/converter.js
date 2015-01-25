var converter = (function($){

  var converter = {};

  converter.hexStrToAscii = function(hexStr) {
    var str = '';
    for (var i=0; i<hexStr.length; i+=2) {
      str += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
    }
    return str;
  };

  return converter;
  
})();
