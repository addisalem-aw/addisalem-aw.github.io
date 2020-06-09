(function(){
    $(document).ready(function(){
            let choiceSelector = $("#myselect");
            let outputArea = $("#output");

            choiceSelector.change(function() {
                let val = $(this).val();
                $.ajax({
                    url: "https://Addis-git.github.io/sampleFiles" + val,
                    type: 'GET',
                    success: function(response) {
                        outputArea.val(response);
                    },
                    error: function(error) {
                        console.log(error)
                    },

                })
            })
                
    
    });
})();