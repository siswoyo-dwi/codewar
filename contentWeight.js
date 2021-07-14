function contentWeight(bottleWeight, scale) {
      let a = scale.split(' ')
      let b = +a[0]
      let c = a[2]
    return c=='larger'?(b/(b+1))*bottleWeight:(1/(b+1))*bottleWeight
  }

  console.log(contentWeight(120, "2 times larger"), 80)
