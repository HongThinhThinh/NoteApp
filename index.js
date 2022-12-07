let btn = document.getElementById("button");
btn.addEventListener("click", function () {
  let card = document.getElementById("card");
  let card2 = document.getElementById("card2");
  card.style.opacity = "1";
  card.style.visibility = "visible";
  card2.style.visibility = "hidden";
  console.log(card2);
});
let light = document.getElementById("light");
light.addEventListener("click", function () {
  let t = document.getElementById("card2");
  t.classList.contains("actived")
    ? t.classList.remove("actived")
    : t.classList.add("actived");
});
let del = document.getElementById("noselect");
del.addEventListener("click", function () {
  Swal.fire({
    padding: "5em",
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Exit it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Exit!", "Your note has been exited.", "success");
      let card = document.getElementById("card");
      let card2 = document.getElementById("card2");
      card2.style.visibility = "visible";
      card.style.opacity = "0";
      card.style.visibility = "hidden";
    }
  });
});
console.log(del);
AOS.init();
