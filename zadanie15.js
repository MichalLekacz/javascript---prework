function validatePassword(password, repeatedPassword) {
  if (password !== repeatedPassword) {
    return "Password and repeated password don't match";
  }
  if (password.length < 6) {
    return "Password is too short";
  }
  if (!/[!@#$%&]/.test(password)) {
    return "Password does not contain special character";
  }
  return "Password is ok";
}
