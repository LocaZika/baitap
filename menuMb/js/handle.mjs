/*===MOUSE DIRECTION X===*/
let currentX = "",
  oldX = 0,
  mouseX = (e) => {
    oldX > e.pageX ? (currentX = "left") : (currentX = "right");
    oldX = e.pageX;
    return currentX;
  };
const mouseXEvent = (moveLeftEvent, moveRightEvent) => {
  let mousemove = mouseX();
  mousemove == "left" ? moveLeftEvent : moveRightEvent;
};
export default { mouseXEvent };
