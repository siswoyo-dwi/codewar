function isLanguageDiverse(list) {
    // thank you for checking out the Coding Meetup kata :)

    let obj ={}
    let obj1=new Set()
    for(let i = 0 ;i<list.length ; i++){
        let count = 0
    for(let k = 0 ;k<list.length ; k++){
        if(list[i].language==list[k].language){
            count+=1
            obj1.add(list[i].language)
            }obj[list[i].language]=count
        }
    }let obj2 = [...obj1]
    let arr = []
    for(let i = 0 ;i<obj1.size ; i++){
        arr.push(obj[obj2[i]])
    }arr.sort((a,b)=>(a-b))
    return arr[arr.length-1]/arr[0]<=2
  }
  let list0=  [{"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"Python"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":22,"language":"Ruby"},{"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"Ruby"},{"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":95,"language":"JavaScript"},{"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":18,"language":"JavaScript"},{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":25,"language":"JavaScript"}]
  let list1=  [{"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"Python"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":22,"language":"Ruby"},{"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":95,"language":"JavaScript"},{"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":18,"language":"JavaScript"},{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":25,"language":"JavaScript"}]
  let list2=  [{"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"Python"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":22,"language":"Ruby"},{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":25,"language":"JavaScript"}]
  let list3= [{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"Python"},{"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"JavaScript"},{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Python"},{"firstName":"Lukas","lastName":"R.","country":"Austria","continent":"Europe","age":89,"language":"JavaScript"},{"firstName":"Shufen","lastName":"L.","country":"Taiwan","continent":"Asia","age":35,"language":"JavaScript"},{"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"Ruby"},{"firstName":"Ximena","lastName":"Q.","country":"Mexico","continent":"Americas","age":28,"language":"Ruby"},{"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"JavaScript"},{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"},{"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"JavaScript"},{"firstName":"Emma","lastName":"U.","country":"Belgium","continent":"Europe","age":39,"language":"JavaScript"},{"firstName":"Aya","lastName":"D.","country":"Libya","continent":"Africa","age":39,"language":"Python"},{"firstName":"Odval","lastName":"F.","country":"Mongolia","continent":"Asia","age":38,"language":"Python"},{"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Python"},{"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Ruby"},{"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"JavaScript"},{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"Python"},{"firstName":"Margret","lastName":"M.","country":"Iceland","continent":"Europe","age":28,"language":"Python"},{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"}]
  
  console.log(isLanguageDiverse(list3), true);
  

  

