let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  // Start coding here

  // ใช้ .includes แบบนี้เน่อ
  if (crimeRecordNames.includes(name)) {
    return `${name} has crime record!!!`;
  } else {
    return `${name} has no crime record`;
  }
}
//   let result;
//   for (let item of crimeRecordNames) {
//     if (name === item) {
//       result = `${name} has crime record!!!`;
//     } else {
//       result = `${name} has no crime record.`;
//     }
//   }
//   return result;
// }

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"
console.log(searchCrimeRecord("Parn"));
