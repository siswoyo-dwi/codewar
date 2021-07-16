function allContinents(list) {
    // thank you for checking out the Coding Meetup kata :)
    let continent =[ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    let continents =new Set()
    for(let i = 0 ;i<continent.length ; i++){
        for(let k = 0 ;k<list.length ; k++){
            if(list[k].continent==continent[i]){
                continents.add(list[k].continent)
                }
            }
        }
    return continents.size==continent.length
  }
var listb=[{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},{"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Clojure"},{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"}]
var lista=[{"firstName":"Fatima","lastName":"K.","country":"Saudi Arabia","continent":"Asia","age":21,"language":"Clojure"},{"firstName":"William","lastName":"L.","country":"Sweden","continent":"Europe","age":32,"language":"Java"},{"firstName":"Stevenson","lastName":"O.","country":"Haiti","continent":"Americas","age":22,"language":"Ruby"},{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"},{"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"PHP"},{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":19,"language":"C"},{"firstName":"Marija","lastName":"U.","country":"Republic of Macedonia","continent":"Europe","age":42,"language":"JavaScript"},{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},{"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},{"firstName":"Sara","lastName":"Y.","country":"Montenegro","continent":"Europe","age":89,"language":"C"},{"firstName":"Lukas","lastName":"R.","country":"Austria","continent":"Europe","age":89,"language":"C"},{"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Europe","age":28,"language":"Java"},{"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":30,"language":"JavaScript"},{"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Ruby"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},{"firstName":"Odval","lastName":"F.","country":"Mongolia","continent":"Asia","age":38,"language":"Python"},{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},{"firstName":"Emma","lastName":"U.","country":"Belgium","continent":"Europe","age":39,"language":"Python"},{"firstName":"Emma","lastName":"Z.","country":"Netherlands","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":28,"language":"JavaScript"},{"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"Ruby"},{"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":35,"language":"JavaScript"},{"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"},{"firstName":"Aadya","lastName":"Y.","country":"India","continent":"Asia","age":29,"language":"PHP"},{"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Java"}]
var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
  ];
  
  var list2 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
  ];
  

console.log(allContinents(lista), false);
console.log(allContinents(listb), false);
console.log(allContinents(list1), true);
console.log(allContinents(list2), false);

  