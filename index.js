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
    actions.className = 'actions';
    var button = document.createElement('button');
    button.id = 'close-disclaimer';
    button.innerHTML = 'Close';
    actions.appendChild(button);

    container.appendChild(actions);

    d.prepend(container);

    var button = document.getElementById('close-disclaimer');
    button.onclick = function(e) {
      var disclaimer = document.getElementById('cookie-disclaimer');
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

