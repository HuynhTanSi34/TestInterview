function isPalindrome(s) {
  const cleanedString = s
    .normalize("NFD") // Chuẩn hóa chuỗi Unicode
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu
    .toLowerCase()
    .replace(/[\W_]/g, ""); // Loại bỏ các ký tự không phải chữ và số

  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}

// Example usage
const input = "A man, a plan, a canal, Panamá";
console.log(isPalindrome(input));
