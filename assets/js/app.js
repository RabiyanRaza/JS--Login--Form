function show() {
  var pswrd = document.getElementById("pswrd");
  if (pswrd.type == "password") {
    pswrd.type = "text";
  } else {
    pswrd.type = "password";
  }
}
