window.addEventListener("DOMContentLoaded", () => {
   /**
    * Creating Div Dynamically
    * 
    */
   const circleContainer = document.createElement("div");
   const circleDiv = document.createElement("div");
   circleContainer.setAttribute("class", "highlighter_container");
   circleDiv.setAttribute("class", "highlighter_overlay");

   circleContainer.appendChild(circleDiv);
   document.body.appendChild(circleContainer);

   /**
    * Getting the x and y of the Mouse
    *
    */

   window.addEventListener("mousemove", (event) => {
      let x = event.clientX;
      let y = event.clientY;

      circleDiv.style.left = x + "px";
      circleDiv.style.top = y + "px";
   });

   /**
    * Getting the KeyBoard Button Press to perfom some task
    *
    */

   window.addEventListener("keydown", (event) => {
      const { shiftKey, code } = event;

      if (shiftKey && code === "KeyX") {
         circleDiv.style.height = circleDiv.clientHeight - 20 + "px";
         circleDiv.style.width = circleDiv.clientWidth - 20 + "px";
      } else if (shiftKey && code === "KeyZ") {
         circleDiv.style.height = circleDiv.clientHeight + 20 + "px";
         circleDiv.style.width = circleDiv.clientWidth + 20 + "px";
      }

      if (shiftKey && code === "KeyC") {
         circleContainer.style.display = "none";
      } else if (shiftKey && code === "KeyV") {
         circleContainer.style.display = "block";
      }
   });
});
