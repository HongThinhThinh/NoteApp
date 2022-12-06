let btn = document.getElementById("button");
btn.addEventListener("click", function () {
  let card = document.getElementById("card");
  card.style.opacity = "1";
  card.style.visibility = "visible";
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
      card.style.opacity = "0";
      card.style.visibility = "hidden";
    }
  });
});
console.log(del);
AOS.init();
