$(document).ready(function() {

  var selected = {};
  $('#guest-list').click(function(e) {
    var $this = $(this),
    options = this.options,
    option,
    value,
    n;  
    value = $this.val();    
    for (n = 0; n < options.length; ++n) {
      option = options[n];
      if (option.value == value) {
        selected[value] = !selected[value];
      }
      option.selected = !!selected[option.value];
    }
    return false;
  });

  String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this + ',');
  };
});

