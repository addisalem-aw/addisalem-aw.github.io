(function(){
    $(document).ready(function(){
        $("#btn").click(function(){
 
       // $('#myselect').change(function() {
            var backendUrl = "https://github.com/Addis-git/Addis-git.github.io/tree/master/sampleFiles/aboutme.txt";
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