function fruits() {
  if (true) {
    var fruit1 = "Apple" // function scope
    let fruit2 = "Kiwi" // block scope
    const fruit3 = "Banana" // block scope
    console.log("🚀 ~ file: block.js:5 ~ fruits ~ fruit2:", fruit2)
    console.log("🚀 ~ file: block.js:7 ~ fruits ~ fruit3:", fruit3)
  }
  console.log("🚀 ~ file: block.js:4 ~ fruits ~ fruit1:", fruit1)
}

fruits()