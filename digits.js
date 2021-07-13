function digits(n) {

    let str = `${n}`.split('')
        return str.length
  }
  console.log(digits(100), 1, "Fail!");
  console.log(digits(6665235259), 9, "Fail!");
  console.log(digits(32160201222), 9, "Fail!");