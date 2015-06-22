//jquery function that enables multiple fields to be added to web form given the correct div structure
$(function() {
  $('.add-field-affiliation').on("click", function() {
    var copy_fields = $(this).siblings("#field-list").children('#fields').first().clone();
    var target = $(this).siblings('#field-list');
    var fields = copy_fields.appendTo(target);
    //apend the remove field span
    fields.append('<span class="icon-minus-sign remove-field"></span><br />   '); 
    clearFormAffiliation(fields);
  });
  $("body").on("click", ".remove-field", function(){
    $(this).parent().remove();
  });
});

    //<span class="icon-minus-sign remove-field"></span><br />

function clearFormAffiliation(form) {
  // iterate over all of the inputs for the form
  // element that was passed in
  $(':input', form).each(function() {
    var type = this.type;
    var tag = this.tagName.toLowerCase(); // normalize case
    // it's ok to reset the value attr of text inputs,
    // password inputs, and textareas
    if (type == 'text' || type == 'password' || tag == 'textarea')
      this.value = "";
    // checkboxes and radios need to have their checked state cleared
    // but should *not* have their 'value' changed
    else if (type == 'checkbox' || type == 'radio')
      this.checked = false;
    // select elements need to have their 'selectedIndex' property set to -1
    // (this works for both single and multiple select elements)
    else if (tag == 'select')
      this.selectedIndex = -1;

    // for this option we want to control the default option rather than offering a blank/nil/empty option
    if (this.className == 'affiliation') 
          this.selectedIndex = 0;

  });
};