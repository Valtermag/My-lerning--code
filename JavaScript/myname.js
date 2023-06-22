const name = 'Ivan';
const surname = 'Sacramento';
function encodeNameSurname(name, surname) {
    let encodedName = '';
    let encodedSurname = '';
    for (let i = 0; i < name.length; i++) {
      encodedName += String.fromCharCode(name.charCodeAt(i) + (1/32*16));
    }
    for (let i = 0; i < surname.length; i++) {
      encodedSurname += String.fromCharCode(surname.charCodeAt(i) + (1/32*16));
    }
    return [encodedName, encodedSurname];
  }
  const [encodedName, encodedSurname] = encodeNameSurname(name, surname);
  console.log(`Code n: ${encodedName}`);
  console.log(`Code c: ${encodedSurname}`);

