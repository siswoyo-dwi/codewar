function hello(name) {
    if(!name==0){
        let a = name.toLowerCase()
        let b = Array.from(a)
        let c = []
        for(let i = 0 ;i<b.length;i++ ){
            i==0?c.push(b[i].toUpperCase()):c.push(b[i])
        }return 'Hello, '+c.join('')+c.join('')
    }
  return 'Hello, World!'
}
console.log(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
console.log(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
console.log(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
console.log(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )
