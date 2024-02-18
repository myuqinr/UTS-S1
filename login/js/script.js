const checkbox = document.querySelector("#lihat-password");
const password = document.querySelector("#password");

// ketika checkbox mengalami perubahan
checkbox.addEventListener("change", function () {
  // memeriksa apakah checkbox di klik/centang
  if (checkbox.checked) {
    // jika di centang, ubah input type 'password' menjadi 'teks'
    password.setAttribute("type", "text");
  } else {
    // jika sudah tidak di centang, kembalikan input menjadi type 'password'
    password.setAttribute("type", "password");
  }
});

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
