function isPalindrome(string) {
  // Start coding here
  let reverseString = string.split("").reverse().join("");
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
  // ใช้ Loop แล้วคิดไม่ออกโว่ยยยยยย ไว้ก่อนละกัน
  //   for (let i = 0; i < string.length/2; i++) {
  //     if (i != string[length - 1 - i]) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  // let reversed = ""
	// for (let i = string.length - 1; i >= 0; i--) {

	// 	reversed += string[i]
	// }
	// if (string == reversed) {
	// 	return true
	// } else {
	// 	return false
	// }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
