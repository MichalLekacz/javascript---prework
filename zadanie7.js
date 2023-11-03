function phoneNumber(rawPhoneNumber) {
  if (rawPhoneNumber.length !== 9) {
    return "Niepoprawny numer";
  }

  // Dodanie myślników w odpowiednich miejscach
  const formattedPhoneNumber = `${rawPhoneNumber.slice(
    0,
    3
  )}-${rawPhoneNumber.slice(3, 6)}-${rawPhoneNumber.slice(6, 9)}`;
  return formattedPhoneNumber;
}
