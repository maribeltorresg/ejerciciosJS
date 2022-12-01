$(document).ready(function () {
  console.log("hola");
  const $form = $("#form");
  const $email = $("#email");
  const $phone = $("#phone");
  const $first_name = $("#first-name");

  function validarName() {
    const nameOk = /^[a-z]{4,16}$/.test($first_name.val());
    $first_name.removeClass("is-invalid");
    $first_name.addClass(nameOk ? "is-valid" : "is-invalid");
  }

  function validarEmail() {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($email.val());
    $email.removeClass("is-invalid");
    $email.addClass(emailOk ? "is-valid" : "is-invalid");
  }

  function validarPhone() {
    const phoneOk = /^9\d{8}$/.test($phone.val());
    $phone.removeClass("is-invalid");
    $phone.addClass(phoneOk ? "is-valid" : "is-invalid");
  }

  function validar(e) {
    e.preventDefault();

    validarEmail();

    validarPhone();
  }

  $("input, select, textarea").on("mouseenter", function () {
    $(this).addClass("shadow");
  });

  $("input, select, textarea").on("mouseleave", function () {
    $(this).removeClass("shadow");
  });

  $first_name.on("input", validarName);
  $email.on("input", validarEmail);
  $phone.on("input", validarPhone);

  $form.on("submit", validar);
});
