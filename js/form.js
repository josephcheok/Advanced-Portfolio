$("form").on("submit", e => {
  e.preventDefault();

  const username = $("#sc_contact_form_username")
    .val()
    .trim();
  const email = $("#sc_contact_form_email")
    .val()
    .trim();
  const message = $("#sc_contact_form_message")
    .val()
    .trim();

  const data = { username, email, message };

  $.post("/email", data, function() {
    console.log("Server received our data");
  });
});
