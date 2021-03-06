/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 254 2010-07-23 05:14:44Z emartin24 $
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#music').click(function (e) {
		
		$('#basic-modal-content-music').modal();
		return false;
	});
	
	$('#sushi').click(function (e) {
		
		$('#basic-modal-content-sushi').modal();
		return false;
	});
	
	$('#islam').click(function (e) {
		
		$('#basic-modal-content-islam').modal();
		return false;
	});
	
	$('#startup').click(function (e) {
		
		$('#basic-modal-content-startup').modal();
		return false;
	});
	
	
});