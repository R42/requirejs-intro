define(
  [
    'underscore',
    'text!templates/image.html'
  ],
  function(_, imageTemplateText) {
    var compiledTemplate = _.template(imageTemplateText);

    return {
      render: function() {
        var span = document.createElement('span');
        span.innerHTML = compiledTemplate({ char: 'r' });
        document.body.appendChild(span);
      }
    };
  }
);