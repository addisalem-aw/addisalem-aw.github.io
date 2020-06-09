(function(){
    $(document).ready(function(){
        $("#btn").click(function(){
 
       // $('#myselect').change(function() {
            var backendUrl = "https://addis-git.github.io/assignmentFetcher/fileFetcher.html";
            $.ajax({
                type: "GET",
                url: backendUrl
            }).done(function (result) {
                console.log("working");
                window.location.href = backendUrl;
            }).fail(function () {
                alert("Sorry URL is not access able");
             });
            });
    
    });
})();