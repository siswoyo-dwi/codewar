var words = [
    ["like", "a", "tweet", "what", "for", "world", "whale", "one", "last", "sun"],
    ["ocean", "beauty", "tweet", "monster", "yellow", "return", "despair", "flower", "return", "contrast"],
    ["romantic", "curious", "banana", "jealousy", "tactlessly", "remorseful", "follower", "elephant", "however", "instagram"],
    ["salmonella", "consequently", "irregular", "intelligence", "vegetable", "ordinary", "alternative", "watermelon", "controversial", "marijuana"],
    ["lackadaisical", "serendipity", "colonoscopy", "dramatically", "parsimonius", "imagination", "electricity", "diabolical", "deforestation", "abomination"],
    ["extraterrestrial", "onomatopoeia", "responsibility", "revolutionary", "generalisation", "enthusiastically", "biodiversity", "veterinarian", "characteristically", "indefatigable"],
    ["oversimplification", "individuality", "decriminalisation", "compartmentalisation", "anaesthesiologist", "industrialisation", "buckminsterfullerene", "irresponsibility", "autobiographical", "utilitarianism"]]


    function haikuWizard(arr) {
        console.log(arr.length)
        let str =''
        for(let i=0;i<arr.length;i++){
            let newArr=[]
            let b=''
            console.log(arr[i].length)
            for(let k=0;k<arr[i].length;k++){
                let a =`${arr[i][k]}`
                let z = +a[0]-1
                let x = +a[1]
                newArr.push(words[z][x])
            } b = newArr.join(' ')
                str+=b
            if(i!=arr.length-1){
                str+='\n'
            }
        }
        return str
        }
console.log(haikuWizard([[11, 30, 17], [51, 21], [52]]),'a romantic one\nserendipity beauty\ncolonoscopy')
