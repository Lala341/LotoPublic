

var myVar = undefined;
var apikey="UiSmWO_D1xVl2ZDyMbJRNCusZmbI9c3t1uRRsJXxolYE";
var tabf= undefined;
var notienes= false;
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
  alert("\n\n\nVoy;)\n\n\n");
        
}

function myStopFunction() {
  clearInterval(myVar);
  myVar= undefined;
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  
  if(myVar==undefined&&comprobateUrl(tab.url)){
    tabf=tab.id;
    myVar = setInterval(function() { 
       chrome.tabs.getSelected(null, function(tab2){
         if(tabf==tab2.id){
            chrome.tabs.captureVisibleTab(null,{"format":"png"},function (image) {
              if(image!=undefined){
                predict(image);
      
              }
         });
        }
        });
      
      
    },5000);
    }
  
});
chrome.tabs.onCreated.addListener(function(tab) {
    
    //Verificacion de url

    var parts = tab.url.match(/https?:\/\/chrome.google.com\/?.*/);
        if (parts !== null) {
          alert("\n\n\nI'm sorry.\n\nDue to security restrictions \non the Google Chrome Store, \nBlipshot can't run here.\n\nTry on any other page. ;)\n\n\n");
          return false;
        }
        
        
       
        
        
        if(myVar==undefined&&comprobateUrl(tab.url)){
          tabf=tab.id;
          myVar = setInterval(function() { 
             chrome.tabs.getSelected(null, function(tab2){
               if(tabf==tab2.id){
                  chrome.tabs.captureVisibleTab(null,{"format":"png"},function (image) {
                    if(image!=undefined){
                      predict(image);
            
                    }
               });
              }
              });
            
            
          },5000);
          }
        

})

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
  if(tabf==tabId){
    myStopFunction();
  }
           
});
function comprobateUrl(url){
  if(url.includes("meet.google.com")||
  url.includes("us04web.zoom.us")||
  url.includes("sceenic.co")||
  url.includes("web.skype.com")||
  url.includes("teams.microsoft.com")||
  url.includes("bluejeans.com")||
  url.includes("webapp.lifesize.com")||
  url.includes("google.duo.com")||
  url.includes("app.houseparty.com")||url.includes("i.ibb.co")){
    urlf= url;
    return true;
  }
return false;
}
function b64toBlob(dataURI) {

  var byteString = atob(dataURI.split(',')[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/png' });
}


function label(label, self){
  if(label=="lesion"||label=="signo"){


    chrome.storage.local.get('name', function(result) {
      chrome.storage.local.get('name2', function(result2) {
          chrome.storage.local.get('tel2', function(result3) {
          if(result.name!=null&&result2.name2!=null&&result3.tel2!=null){
                  var name = result.name;
                  var name2 = result2.name2;
                  var tel2 = result3.tel2;

var msj= "La persona "+ name + " te ha referenciado como un contacto de apoyo, para una alerta de amenaza o violencia y se ha lanzado una alerta desde loto por la identificación de un "+label+" desde el navegador de "+ name +""+"."



self.sendSMS(msj,tel2, self, label);

              }else{
                if(!notienes){
                  notienes=true;
                  alert("No tienes un contacto guardado. Abre el icono de la extensión y sigue los pasos." + "Se identifico : "+ label)

                }

              }
                
            });
        });
    });


    
  }
}
function sendSMS(msj,tel2, self, label){
  chrome.storage.local.get('las', function(result) {
    var now= new Date();
    
     if(result.las==null){
       chrome.storage.local.set({'las': now.getTime()}, function() {
       self.sendFinal(msj,tel2, self,label);
       
       });

     }else{
      var diffMs = (now- result.las);
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
      if(diffMins > 6){

        chrome.storage.local.set({'las': now.getTime()}, function() {
         self.sendFinal(msj,tel2, self, label);
         });
      }
     }    
  });

}
function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}
function sendFinal(msj,tel2, self, label){
  alert("Mensaje enviado, para efectos de prototipo solo se podran enviar mensajes cada 6 minutos. Se identificó:"+ label);

  var httpPost = new XMLHttpRequest();
  var path = "https://api.twilio.com/2010-04-01/Accounts/AC341dc4666e122250c695ae7203c5fb19/Messages.json";
  httpPost.open("POST", path, true);
  var params = 'From=+12025197645&To=+57'+tel2+"&Body="+msj;
var authtoken = "YTA1OGE2ZWU1ODRmZTI1YzIwOGZlMGM3MDVlNDFlNTI=";
console.log(b64_to_utf8(authtoken));
console.log((authtoken));

  httpPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  httpPost.setRequestHeader("Authorization", "Basic " + btoa("AC341dc4666e122250c695ae7203c5fb19:"+b64_to_utf8(authtoken)));
  httpPost.onreadystatechange = function() { // Call a function when the state changes.
      if ((this.readyState === XMLHttpRequest.DONE && this.status === 200)||this.status ===201) {
          console.log("Got response 200!");
      }
      console.log("Got response no!");
      console.log(httpPost.response);
      console.log(httpPost.status); 
  }
     
    httpPost.send(params);
}

function predict(image){
// You can add that image HTML5 canvas, or Element.
var httpPost = new XMLHttpRequest();
var path = "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19";
httpPost.open("POST", path, true);
//var path2 = "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19&classifier_ids=Default-Hackapp_1826717008&"+"url=https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/fruitbowl.jpg";

var formData = new FormData();  


var blob = b64toBlob(image);
formData.append("images_file", blob);
var self= this;

formData.append("classifier_ids", "Default-Hackapp_1826717008");
httpPost.setRequestHeader("Authorization", "Basic " + btoa("apikey:"+apikey));
var label= "noLesion";
httpPost.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("Got response 200!");
        console.log(httpPost.response);
        label= JSON.parse(httpPost.response)["images"][0]["classifiers"][0]["classes"][0]["class"];
        console.log(label);
        self.label(label, self);
    }
    console.log("Got response no!");
    console.log(httpPost.response);
    console.log(httpPost.status); 
}
   
  httpPost.send(formData);

}