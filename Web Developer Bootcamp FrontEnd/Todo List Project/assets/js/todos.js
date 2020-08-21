//******Check off specific todos by clicking**************//

/* THIS CODE IS REPLACED BY TOGGLE WITH COMPLETED CSS CLASS
$("li").click(function(){
	console.log($(this).css("color"));
	//if li is grey (must use rgb or doesn't work)
	if($(this).css("color")==="rgb(128, 128, 128)"){
		//turn it black
		$(this).css({
			color : "black",
			textDecoration : "none"
		});
	} 
	else {
	    //turn it gray
	    $(this).css({
			color : "gray",
			textDecoration : "line-through" 
			//must use camel case on textDecoration
		});	
	}
});
*/

//THIS SINGLE LINE DOES EVERYTHING ABOVE

//code needs to be changed again or we cannot add todos
//that work with our remove 

//$("li").click(function(){

//this line was added, 
//any time we click on ul, 
   //listener fires but checks second argument, when li clicked
   //inside a ul
$("ul").on("click", "li", function(){	
	$(this).toggleClass("completed");
});



//******Click on X to delete Todo********************//

//$("span").on("click",function(event){
//same change here 
$("ul").on("click", "span", function(){
	//remove the li that contains it

	//$(this).parent().remove(); 
	//.parent removes the parent of $(this) (span in this case)
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //this is the element above, ->the li
	});
	event.stopPropagation(); 
	//ends the event on the innermost element
	/*$("li").fadeOut(1000,function(){
		$(this).remove();
	});*/
});

//******Add new Todos*******************************//

$("input[type = 'text'").keypress(function(event){
	if(event.key==="Enter")
	{
		//grabbing new todo string from input
		let todoText = $(this).val();
		//clear input
		$(this).val(""); //val is a setter here
		//create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + " </li>");
	

	}
});

//******Make toggle work**************************//

//*this will not work with new fontAwesome*/
/*$(".fa-plus").click(function(){*/
$("#toggle-form").click(function(){	//use #toggle-form
	$("input[type='text']").fadeToggle();
});

	