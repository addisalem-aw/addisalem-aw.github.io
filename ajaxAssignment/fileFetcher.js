(function(){
    $(document).ready(function(){
        $(function() {
            $('#myselect').change(function() {
                var file = 'samplefiles/'+$('#myselect').val();
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
        
        $.get('https://github.com/Addis-git/Addis-git.github.io');

    });
})();






        //let selected=  $( "#myselect option:selected" ).text();
        // $("#myselect").change(function () {

        //     // var selectedVal = $("#myselect option:selected").text();
        //     var selectedVal = $("#myselect option:selected").val();
        //     if(selectedVal=="a1"){

        //     }
        //     if(selectedVal=="a2"){

        //     }
        //     if(selectedVal=="a3"){

        //     }
          
            

        // });


     
        //$("assignment").click(function(){
            //$(file).load();

       // });