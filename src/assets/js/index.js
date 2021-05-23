console.log("Hello world");



let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};


window.addEventListener('click', function(e){
  if (!document.getElementById('navbar-toggle').contains(e.target)){
      collapse.classList.toggle("hidden");
  }
});