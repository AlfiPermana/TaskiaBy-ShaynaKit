// file ini untuk penghubung antara UI html dan model User
document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");

  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {
      username: document.getElementById("username").value,
    };
    const users = userManager.saveUser(userData);

    if (users.success) {
      return (window.location.href = "./signin.html");
    } else {
      console.log("proses simpan gagal");
    }
  });
});
