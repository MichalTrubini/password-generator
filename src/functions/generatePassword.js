export default function generatePassword(length, checkedInputs) {
  const completeCharacterSet = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  };

  let resultingCharacterSet = "";
  for (let key in checkedInputs) {
    if ((checkedInputs[key] === true)) {
      resultingCharacterSet += completeCharacterSet[key];
    }
  }
  let characterSetLength = resultingCharacterSet.length;

  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSetLength);
    randomString += resultingCharacterSet.charAt(randomIndex);
  }

  return randomString;
}
