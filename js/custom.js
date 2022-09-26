
slide_transform = document.getElementById('slide_transform');
img_trigger = document.querySelectorAll('.img_trigger ul li');
img_trigger.forEach(function(eachElement,index) {
  eachElement.addEventListener('click',function(){
    if(index == 0){
      slide_transform.style.transform = "translateY(0)"; 
    }else if(index == 1){
      slide_transform.style.transform = "translateY(-100vh)"; 
    }else if(index == 2){
      slide_transform.style.transform = "translateY(-200vh)"; 
    }else if(index == 3){
      slide_transform.style.transform = "translateY(-300vh)"; 
    }
  });
});