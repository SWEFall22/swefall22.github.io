// Javascript/jQuery page to handle menu expansion


$(document).ready(function () {
				$('#moreheader').click(function () { 
								$("#headerdropdown").toggle(250);
						});
        
				// for hiding the more menu on any click outside of #header
				$('body').click(function(evt){
								if(evt.target.id == "#header")
										return;
								if($(evt.target).closest('#header').length)
										return;
								$("#headerdropdown").hide(250);

						});

				// handles expansion of department and resource menus on navigation bar
				$("#dept").click(function() {
								$("#deptmenu").toggle(250);
								$("#resourcemenu").hide(250);
						});
				$("#resource").click(function() {
								$("#resourcemenu").toggle(250);
								$("#deptmenu").hide(250);
						});
				$("#content").click(function() {
								$("#deptmenu").hide(250);
								$("#resourcemenu").hide(250);
						});
				$("#resourcemenu").click(function() {
								$("#resourcemenu").hide(250);
						});
	
				// for mobile menu
				$("#phonemenuicon").click(function() {
								$("#phonemenu").slideToggle(300);		
						});

		})


//activates if the user clicks more in the main top header
/*
function toggleMoreHeader () {
	if (document.getElementById('moreheader').innerHTML === "More") {
		//show the other links and change text to less
		document.getElementById('moreheader').innerHTML = "Less";
		var elements = document.getElementsByClassName('hiddenheader');
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.display = 'inline';
		};
	} else {
		//hids links and change back to More
		document.getElementById('moreheader').innerHTML = "More";
		var elements = document.getElementsByClassName('hiddenheader');
		for (var i = elements.length - 1; i >= 0; i--) {
			elements[i].style.display = 'none';
		};
	}
}
*/

/*
function toggleMoreHeader () {
		if (document.getElementById('moreheader').innerHTML === "More") {
				//show the other links and change text to less
				document.getElementById('moreheader').innerHTML = "Less";
		} else {
				//hides links and change back to More
				document.getElementById('moreheader').innerHTML = "More";
		}
		$("#headerdropdown").toggle(250);
}


$(document).ready(function () {
	document.getElementById('moreheader').onclick = function () { toggleMoreHeader() };

	// handles expansion of department and resource menus on navigation bar
	$("#dept").click(function() {
		$("#deptmenu").toggle(250);
		$("#resourcemenu").hide(250);
	});
	$("#resource").click(function() {
		$("#resourcemenu").toggle(250);
		$("#deptmenu").hide(250);
	});
	$("#content").click(function() {
		$("#deptmenu").hide(250);
		$("#resourcemenu").hide(250);
	});
	$("#resourcemenu").click(function() {
		$("#resourcemenu").hide(250);
	});
	
	// for mobile menu
	$("#phonemenuicon").click(function() {
		$("#phonemenu").slideToggle(300);		
	});

})

*/