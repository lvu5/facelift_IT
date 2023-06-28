( function ( $ ) {
	$( document ).ready( function () {

		//check if field actually exists
    if($('form#post input#title').length) {
      // apply required attribute to the field
      $('form#post input#title').prop('required', true);
    }
	});
}( jQuery ) );
