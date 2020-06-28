var h1 = document.createElement("h2");
h1.innerHTML="kAPREKAR'S  NUMBER"
document.getElementById("div1").appendChild(h1);
 
  var x = document.createElement("input");
  x.setAttribute("type", "text");
  x.setAttribute("id","type1")
  x.setAttribute("placeholder","enter 4 digit no");
  document.getElementById("div1").appendChild(x);
 

  var y = document.createElement("input");
 y.setAttribute("type","button")
  y.setAttribute("value","check");
  y.setAttribute("id","type2");
  y.onclick=first;
 document.getElementById("div1").appendChild(y);

 var cl = document.createElement("button");
  cl.innerHTML="clr"
  cl.setAttribute("value","check");
  cl.setAttribute("id","type3");
  cl.onclick=clr;
 document.getElementById("div1").appendChild(cl);
    
function first(){
   var m="";
   var f="";
   var h = "";
    var  c =   document.getElementById("type1").value; 
     var d = c.split("").map(Number);
     var e = d.sort((a, b) => b - a);
     var f = e.join("");
     var g = d.sort((a, b) => a - b);
     var h = e.join("");
     var m = f-h;
     document.getElementById("output").innerHTML +="<span>" + f + " - " + h + " = " + m + "</span><br>";
    
     for(i=0;i<7;i++){
     if(m === 6174){
        break;
     }
     else{
        var z1 = m;
        var d = z1.toString().split("").map(Number);
        var e = d.sort((a, b) => b - a);
        var f = e.join("");
        var g = d.sort((a, b) => a - b);
        var h = e.join("");
        var m = f - h;
        document.getElementById("output1").innerHTML +="<span>" + f + " - " + h + " = " + m + "</span><br>";
    }
}
}

function clr()
            {
                document.getElementById("type1").value ="";
                document.getElementById("output").innerHTML ="";
                document.getElementById("output1").innerHTML ="";
            }
    





  
