"use client";
export const LoginTest = () => {
 /*  const handleLogin = () => {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    // Hardcoded credentials for demonstration purposes (not secure)
    var storedUsername = "pyme"; // Replace with your desired username
    var storedPassword = "gato1"; // Replace with your desired password

    if (enteredUsername && enteredPassword) {
      if (
        enteredUsername === storedUsername &&
        enteredPassword === storedPassword
      ) {
        // Username and password match, proceed with login
        document.getElementById("login-container").style.display = "none";
        document.getElementById("dashboard-container").style.display = "block"; // Initialize charts after successful login

        window.location.replace("index.html");
      } else {
        // Username or password does not match
        alert("Incorrect username or password.");
      }
    } else {
      alert("Please enter both username and password.");
    }
  }; */
  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" id="username" placeholder="Usuario" />
      <input type="password" id="password" placeholder="Contraseña" />
      {/* <button onClick={() => handleLogin()}>Login</button> */}
    </div>
  );
};
