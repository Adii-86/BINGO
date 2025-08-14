document.querySelectorAll(".input-cell").forEach((cell) => {
  cell.addEventListener("input", () => {
    console.log(cell.value);
  });
});
