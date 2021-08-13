
 var i= 0;
    var txt="Hi Welcome To This Service";
    var speed= 100;
    function type(){
    document.getElementById("type").innerHTML
    +=txt.charAt(i);
    i++;
    setTimeout(type,speed);
    }
    type();