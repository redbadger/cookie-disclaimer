var dom = require('dom');
var store = require('store');

module.exports = function(target, content) {
  if(store('cookie-consent')) {
    return;
  }
  else {
    var d = dom(target);

    // Create elements
    var container = document.createElement('div');
    container.id = 'cookie-disclaimer';

    var customContent = document.createElement('div');
    customContent.id = 'customContent';
    customContent.innerHTML = content;
    container.appendChild(customContent);

    var actions = document.createElement('div');
    actions.class = 'actions';
    var button = document.createElement('button');
    button.id = 'close-disclaimer';
    button.innerText = 'Close';
    actions.appendChild(button);

    container.appendChild(actions);

    d.prepend(container);

    var button = dom('#close-disclaimer')[0];
    button.onclick = function(e) {
      var disclaimer = dom('#cookie-disclaimer')[0];
      var height = disclaimer.offsetHeight;
      var newValue = "-" + height + "px";
      disclaimer.style.marginBottom = newValue;
      window.setTimeout(function(){
          disclaimer.remove();
        }, 600);
      store("cookie-consent", true);
    }
  }
}

