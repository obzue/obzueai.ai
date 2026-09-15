document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  const cartBtn = document.getElementById("cart-count");
  const stored = Number(sessionStorage.getItem("obzue-cart") || "0");
  let count = Number.isFinite(stored) ? stored : 0;

  const render = () => {
    if (cartBtn) cartBtn.textContent = `Cart (${count})`;
  };
  render();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      count += 1;
      sessionStorage.setItem("obzue-cart", String(count));
      render();
    });
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.getElementById("form-status");
      if (status) {
        status.hidden = false;
        status.textContent = "This static site cannot send mail yet. Email from your own client, or wire a form backend later.";
      }
    });
  }
});
