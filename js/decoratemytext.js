
function timer(){
    s=setInterval(makeBigT,2000);
}
//make text big 
function makeBig(){
          const ta=document.getElementById("txtarea");
          const fsize = window.getComputedStyle(ta).fontSize
          const c=parseInt(fsize) + 2 +"pt";
          ta.style.fontSize=c;

        }
        //make texts of textarea big using timer
function makeBigT(){
    const ta=document.getElementById("txtarea");
    const fsize = window.getComputedStyle(ta).fontSize
    const c=parseInt(fsize) + 2 +"pt";
    ta.style.fontSize=c;
}
//stop timer
function end(){
     
        clearInterval(s); 
    }
//change size of text using checkbox
function onChange() {
    if (document.getElementById("chk").checked) {
        const check=document.getElementById("txtarea")
        check.style.color="green";
        check.style.fontWeight="bold";
        check.style.textDecoration="underline";
    } else {
         check=document.getElementById("txtarea")
        check.style.color="black";
        check.style.textDecoration="none";
    }
}
