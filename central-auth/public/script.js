const SERVICE_URL = "http://localhost:5500";

window.onload = function () {
  const receiver = window.parent;
  const btn = document.getElementById("send");

  function sendMessage(e) {
    e.preventDefault();
    const data = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlODM4Y2Q0Zi03NzNlLTRiNmEtODM3Zi0wYjU4ZDU3M2FjN2QiLCJuYW1lIjoiQWJoaWxhc2giLCJlbWFpbCI6ImFrYWt1bWFudUBrdW5hdG8uaW8iLCJyb2xlIjoidXNlciIsImFjdGl2ZSI6dHJ1ZSwic2VydmljZXMiOlt7InNlcnZpY2VJZCI6IjVkMGY5OWM3LWViZjQtNGY1Yi05NmJmLWQ5OGE2MTJlYWIzYSIsIm5hbWUiOiJjb3JyZWN0aW9uIHRvb2wiLCJlbnZpcm9ubWVudCI6ImRldmVsb3BtZW50IiwidXJsIjoiaHR0cDovL3F4LmNvcnJlY3Rpb250b29sLmNvbSIsImFjdGl2ZSI6dHJ1ZSwicm9sZSI6ImFkbWluIn1dLCJpYXQiOjE2NDg3ODIyNTIsImV4cCI6MTY0ODc4MjI1Mn0.TNokci_IdjJVYC58T2cg5t9nhpQxMpBOMNeGv1JAV_8",
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlODM4Y2Q0Zi03NzNlLTRiNmEtODM3Zi0wYjU4ZDU3M2FjN2QiLCJlbWFpbCI6ImFrYWt1bWFudUBrdW5hdG8uaW8iLCJpYXQiOjE2NDg3ODIyNTIsImV4cCI6MTY0ODc4MjY4NH0.xxx_y9F_0GaZk6edf_HHT5BJHA-RWaIx5i7oLA99A4c",
    };
    receiver.postMessage(JSON.stringify(data), SERVICE_URL);
  }

  btn.addEventListener("click", sendMessage);
};
