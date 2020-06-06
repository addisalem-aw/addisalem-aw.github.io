(function(){
    $(document).ready(function(){

        //let selected=  $( "#myselect option:selected" ).text();
        $("#myselect").change(function () {

            // var selectedVal = $("#myselect option:selected").text();
            var selectedVal = $("#myselect option:selected").val();
            if(selectedVal=="a1")
            alert("a11");
            $("#output").load("hello.html");
            

        });


     
        //$("assignment").click(function(){
            //$(file).load();

       // });
       


    });
})();


$(function() {
	$('#hw').change(function() {
		var file = 'homeworks/'+$('#hw').val();
		$.ajax({
			'url': file,
			'type': 'GET',
			'success': ajaxSuccess,
			'error': ajaxFailure
		});
	});
});

function ajaxSuccess(data) {
	$('#output').val(data);
}

function ajaxFailure(xhr, status, exception) {
  console.log(xhr, status, exception);
}

$.get('https://www.google.com/images/branding/product/ico/googleg_lodp.ico');