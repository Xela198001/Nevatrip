window.onload = function (event) {

  const flightTimeHideShow = (count, item, disp) => {

    
    console.log(count)

    if (count > 4) {
      for (let idx = 4; idx < count; idx++) {
        item.children[idx].style.display = disp;
      }
    }
  }
  let flightTime = document.querySelectorAll(".flight-time");
  flightTime.forEach((item) => {
    var count = item.children.length;
    
     flightTimeHideShow(count, item, "none");

    if (count > 4) {
      const more = document.createElement('div');
     more.classList.add('time-item');
     more.innerHTML = "еще";
     item.appendChild(more);
     more.addEventListener("click", () => {
       flightTimeHideShow(count, item, "flex");
       more.remove();
     }, false);}
  });
}