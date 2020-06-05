(function(){
    $(document).ready(function () {
    let filledposition = []; 
    let blank= {leftpx:"300px",toppx:"300px"};
    
//function for setting the position and css for the filled squares
    let count = 0;
    $('#puzzlearea div').each(function ()
    {   
        let filledSquares = {};
        let x = ((count % 4) * 100);
        let y = (Math.floor(count / 4) * 100); 
        $(this).addClass('puzzlepiece');
        let leftpx = x + 'px';
        let toppx = y + 'px';
        filledSquares.leftpx = leftpx;
        filledSquares.toppx = toppx;
        filledposition.push(filledSquares);
        $(this).css({"left": leftpx, "top": toppx, "backgroundImage": 'url("background.jpg")', "backgroundPosition": -x + 'px ' + (-y) + 'px'});
        count++;
    });

//this function checks if the square can be moved, and swaps the value for emptysquare
    $('.puzzlepiece').click(function ()
    {

        let changedleft = $(this).css("left");
        let changedtop = $(this).css("top");
        if (clickableleft(changedleft, changedtop))
        {
            $(this).css({"left":blank.leftpx, "top": blank.toppx});
            blank.leftpx = changedleft;
            blank.toppx = changedtop;
        } else if (clickableTop(changedleft, changedtop))
        {
            $(this).css({"left":blank.leftpx, "top":blank.toppx});
            blank.leftpx = changedleft;
            blank.toppx = changedtop;

        }

    });

//shuffel the indexs of the array 
    $('#shufflebutton').click(function () {

        let i = 0, j = 0,suff=0, temp = null;

        for (i = filledposition.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = filledposition[i];
            filledposition[i] = filledposition[j];
            filledposition[j] = temp;
        }

        //setting the css from the shuffled array
        $('#puzzlearea div').each(function ()
        {
            $(this).css({"left": filledposition[suff].leftpx, "top": filledposition[suff].toppx});
            suff++;
        });
        suff = 0;
        blank.leftpx = "300px";
        blank.toppx = "300px";
    });

    $('.puzzlepiece').hover(function ()
    {

        let changedleft = $(this).css("left");
        let changedtop = $(this).css("top");

        if (clickableleft(changedleft, changedtop))
        {
            $(this).addClass('movablepiece');
        } else if (clickableTop(changedleft, changedtop))
        {
            $(this).addClass('movablepiece');
        }

    }, function ()
    {
        $(this).removeClass('movablepiece');
    });


    let clickableleft = function (changedleft, changedtop)
    {
        if (parseInt(changedtop) === parseInt(blank.toppx))
        {
            if (parseInt(changedleft) + 100 === parseInt(blank.leftpx) || parseInt(changedleft) - 100 === parseInt(blank.leftpx))
            {

                return true;
            } else
            {
                return false;
            }
        }
    };

    let clickableTop = function (changedleft, changedtop)
    {
        if (parseInt(changedleft) === parseInt(blank.leftpx))
        {
            //a simplelogic for checking the element neighbours an empty div
            if (parseInt(changedtop) + 100 === parseInt(blank.toppx) || parseInt(changedtop) - 100 === parseInt(blank.toppx))
            {

                return true;

            } else
            {
                return false;
            }
        }
    };

});
})();