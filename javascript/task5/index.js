let listItem = document.getElementsByTagName("li");
for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", function () {
    if (i % 2 == 0) {
      this.style.color = "red";
    } else {
      this.style.color = "green";
    }
  });
}
