
            document.getElementById("C").addEventListener("click",clearScreen);
            function showInScreen(x){
                document.getElementById("result").innerHTML += x;
            }
            function equals(){
                document.getElementById("result").innerHTML = eval(document.getElementById("result").innerHTML);
            }
            function clearScreen(){
                document.getElementById("result").innerHTML = "";
            }  
