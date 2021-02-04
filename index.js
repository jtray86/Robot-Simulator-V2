document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  // const directionKey = document.createElement(button)

  document.body.addEventListener("keydown", function(e){
        console.log(e)
      let directionLi = document.createElement("li")
      const directionUl = document.querySelector('#moves-container') 
      if (e.key === "ArrowLeft"){
        console.log("left")
        directionLi.textContent = "left"
        directionUl.append(directionLi)
      }
      else if (e.key === "ArrowRight"){
        console.log("Right")
        directionLi.textContent = "right"
        directionUl.append(directionLi)
    }
      else if (e.key === "ArrowUp"){
        console.log("Up")
        directionLi.textContent = "up"
        directionUl.append(directionLi)
      }
      else if (e.key === "ArrowDown"){
        console.log("Down")
        directionLi.textContent = "down"
        directionUl.append(directionLi)
      }



  })
  const moveButton = document.querySelector("#move-button")
  

  moveButton.addEventListener("click", function(e){
    
    const moveUl = document.querySelector('#moves-container')
     const moveLi = moveUl.querySelector("li")

     const direction = moveLi.innerText
    
    const allLi = moveUl.querySelectorAll("li")
    while (allLi.length > 0){
    // allLi.forEach(function(moveLi){
      console.log(moveLi)
      move(direction)
      moveLi.remove()
    }
     
  })

}); 

