// file ini dugunakan untuk mengurus bussines logic
// file ini digunakan untuk mengelola data sepeti create, read, update, etc

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }
  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };

    // return (window.location.href = "./signin.html");
  }

  signInUser(usernameByInput) {
    // proses pemeriksaan data username pada localstorage
    const userExists = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase(),
    );

    if (userExists) {
      return {
        success: true,
        username: usernameByInput,
      };
    } else {
      return {
        success: false,
        message: "username not found",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
