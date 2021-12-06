let panel=document.querySelectorAll(".panel");
let label =document.querySelectorAll(".tab");
let onetab=document.getElementById("one-tab");
let storedPanel;
label.forEach(x=>{
    x.onclick=function(){
      let dataId=this.getAttribute("data-id");
      let panel=document.getElementById(dataId);
      if(dataId!="one-tab"){
        onetab.style.display="none";
      }
      if(storedPanel){
            storedPanel.style.display="none";
        }
      storedPanel=panel;
      panel.style.display="block";
    }
});