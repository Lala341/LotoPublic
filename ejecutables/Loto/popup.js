document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('sub');
    // onClick's logic below:
    link.addEventListener("click", function() {
        document.getElementById("demo").color = "red";

        var name= document.getElementById("name").value;
        var name2= document.getElementById("name1").value ;
        var tel2=document.getElementById("tel1").value;
    
        chrome.storage.local.set({'name': name}, function() {
            chrome.storage.local.set({'name2': name2}, function() {
                chrome.storage.local.set({"tel2": tel2}, function() {
                    console.log('Value is set to ' + name);
                    console.log("Enviado");
                    console.log(name);
                    document.getElementById("save").style.display = "block";
                  
                  });
              
              
              });
          
          
          });
        
      });
   document.getElementById("save").style.display = "none";


    chrome.storage.local.get('name', function(result) {
        chrome.storage.local.get('name2', function(result2) {
            chrome.storage.local.get('tel2', function(result3) {
if(result.name!=null&&result2.name2!=null&&result3.tel2!=null){
                    document.getElementById("name").value = result.name;
                    document.getElementById("name1").value = result2.name2;
                    document.getElementById("tel1").value = result3.tel2;
                }
                  
              });
          });
      });

      
  });
  
  



