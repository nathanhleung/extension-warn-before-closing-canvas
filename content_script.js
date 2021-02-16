// From https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload#example
function onBeforeUnload(e) {
  e.preventDefault();
  e.returnValue = "";
}

window.addEventListener("beforeunload", onBeforeUnload);
