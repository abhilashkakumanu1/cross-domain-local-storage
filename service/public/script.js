const CENTRAL_AUTH_URL = "http://localhost:5000";

window.onload = () => {
  function receiveMessage(e) {
    // Check to make sure that this message came from the correct domain.
    if (e.origin !== CENTRAL_AUTH_URL) return;

    console.log(JSON.parse(e.data));
    alert(e.data);
  }

  window.addEventListener("message", receiveMessage);
};
