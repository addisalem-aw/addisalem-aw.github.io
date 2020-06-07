(function(){
    $(document).ready(function(){
        $(function() {
            $('#myselect').change(function() {
               // var file = 'samplefiles/'+$('#myselect').val();
               var file = 'https://github.com/Addis-git/Addis-git.github.io/samplefiles/aboutme.txt';
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
        
       // $.get('https://github.com/Addis-git/Addis-git.github.io');

    });
})();




