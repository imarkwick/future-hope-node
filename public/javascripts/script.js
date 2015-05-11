$(document).ready(function() {

  // Multi-select form


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
<<<<<<< HEAD

  String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this + ',');
  };
});
=======
});
>>>>>>> 1e45f61f80a903a291a55f148116fa79e314ee99
