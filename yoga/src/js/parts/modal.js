function modal() {
  let more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    popClose = document.querySelector(".popup-close"),
    descBtn = document.querySelectorAll(".description-btn");

  more.addEventListener("click", function () {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });

  popClose.addEventListener("click", function () {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

  descBtn.forEach(function (item) {
    item.addEventListener("click", () => {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    });
  });
}

module.exports = modal;