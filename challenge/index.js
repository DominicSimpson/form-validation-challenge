const fields = document.querySelectorAll("input", "textarea");

fields.forEach((field) => {
  field.setAttribute("aria-invalid", "false");

  const feedback = document.createElement("p");
  const id = field.id + "Error";
  feedback.setAttribute("id", id);

  const prevIds = field.getAttribute("aria-describedBy");
  const describedBy = prevIds ? prevIds + " " + id : id;
  field.setAttribute("aria-describedBy", describedBy);

  field.after(feedback);

  field.addEventListener("invalid", () => {
    field.setAttribute("aria-invalid", "true");

    const message = field.validationMessage;
    feedback.textContent = message;
  });

  field.addEventListener("input", () => {
    field.setAttribute("aria-invalid", "false");

    feedback.textContent = "";
  });
});
