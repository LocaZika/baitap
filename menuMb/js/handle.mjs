/*===MOUSE DIRECTION X===*/
let currentX = "",
  oldX = 0,
  mouseX = (e) => {
    oldX > e.pageX ? (currentX = "left") : (currentX = "right");
    oldX = e.pageX;
    console.log(currentX);
    return currentX;
  };
const mouseXEvent = (element, moveLeftEvent, moveRightEvent) => {
  let mousemove = mouseX(element);
  mousemove == "left" ? moveLeftEvent : moveRightEvent;
};
export default { mouseXEvent };
