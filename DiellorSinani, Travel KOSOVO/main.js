var tbtn = document.querySelector('.togglebutton');
var nav = document.querySelector('.navbar');

tbtn.addEventListener("click", function(){
   nav.classList.toggle("nav");
})






var btn = document.getElementById("btn");
var section_1 = document.getElementById("section1");
var section_2 = document.getElementById("Section2");
var section_3 = document.getElementById("Section3");
var section_4 = document.getElementById("Section4");
var section_5 = document.getElementById("Section5");
var section_6 = document.getElementById("Section6");

        function toggleBtn(){
            btn.classList.toggle("active");
            section_1.classList.toggle("on");
            section_2.classList.toggle("on2");
            section_3.classList.toggle("on3");
            section_4.classList.toggle("on4");
            section_5.classList.toggle("on5");
            section_6.classList.toggle("on6");
            
        }







        
function validation(){

    var username = document.getElementById("username").value;
 
    var valid_username_regex = /^[A-Za-z]+$/;
 
    var pass = document.getElementById("pass").value;
 
    var valid_pass_regex = /^[0-9]+$/;
 
    
   
   
 
       if(!(username.match(valid_username_regex)) || !(age.match(valid_pass_regex))) {
 
         if(!(username.match(valid_username_regex))){
 
          
          document.getElementById("username").style.borderColor = "red";
           
       }else{
 
          
          document.getElementById("username").style.borderColor = "black";
 
       }
 
       if(!(pass.match(valid_pass_regex))){
 
        document.getElementById("pass").style.borderColor = "red";
 
    
           
       }else{
 
        
          
        document.getElementById("pass").style.borderColor = "black";
 
       }
 
 
 
       return false;
 
 
     }else{
 
     
        document.getElementById("username").style.borderColor = "black";
       
        document.getElementById("pass").style.borderColor = "black";
        
        return true;
 
     }


    }