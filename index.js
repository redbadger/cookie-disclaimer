var dom = require('dom');
var store = require('store');

template = require('./cookie');

module.exports = function(target) {
  if(store('cookie-consent')) {
    return;
  }
  else {
    d = dom(target);
    d.prepend(template());

    button = dom('#close-disclaimer')[0];
    button.onclick = function(e) {
      disclaimer = dom('#cookie-disclaimer')[0];
      height = disclaimer.offsetHeight;
      newValue = "-" + height + "px";
      disclaimer.style.marginBottom = newValue;
      window.setTimeout(function(){
          disclaimer.remove();
        }, 600);
      store("cookie-consent", true);
    }
  }
}

