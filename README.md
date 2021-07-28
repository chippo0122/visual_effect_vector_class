# visual_effect_vector_class
I hope the item will hit corners

This class has 4 params
ex: 
  let vector = new Vector(item, width, height)
  
  //item can be an element from DOM, such as document.getElementById('#item');
  //width and heigth is restrict the moving range of the item
  
  //before using this class, you gotta initialize your item's moving direction and position:
    
 vector.initialPos()
 //initital item position, the position will be given a random
 //(positionX, positionY) will between 0-width/height you gave
 
 vector.changeDirection()
 //set the item moving direction
 //(directionX, directionY) will be a boolean value, true means positive
 
 Example:
 
 DOM structure:
 
 <body>
    <div class="wraper">
      <div class="box">
    </div>   
 </body>
 
 <style>
    .wraper {
      width: 100%;
      height: 100vh;
    }
   
    .box {
      width: 100px;
      height: 100px;
      background-color: #000;
     }
   
 <style/>
  
 Javascript:
   let box = document.querySelector('.box');
   let boxVector = new Vector(box, box.offsetWidth, box.offsetHeight);
   
   boxVector.changeDirection();
   boxVector.initialPos();
   
   function anime() {
      vector.move();
      //start to moving by directionX/directionY and posX/posY
      window.requestAnimationFrame(anime);
      //render page 60 FPS(depends on browser)
   } 
   
   window.requestAnimationFrame(anime);
