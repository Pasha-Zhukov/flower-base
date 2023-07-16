const nameClass = document.querySelector("#v-pills-tab");
const screenWidth = window.screen.width;
function styleChange() {
  if (screenWidth > 767) {
    nameClass.classList.remove("flex-row");
    nameClass.classList.add("flex-column");
  }
}
styleChange();

function focusInput() {
  document.getElementById("input").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
