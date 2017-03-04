

function function1() {
        var text1 = document.getElementById("x").value;
        var text2 = document.getElementById("y").value;
       var text3 = document.getElementById("a").value;
       var text4 = document.getElementById("z").value;
         var ans=parseInt(text1)+parseInt(text2)+parseInt(text3)+parseInt(text4);    
        answer.value = ans+".00$";
		event.preventDefault();
}