function hiddenWord(num) {
    let arr=  Array.from(`${num}`)
    console.log(arr)
    let str = ''
    for(let i = 0 ;i<arr.length ; i++){
      console.log(arr[i])
      switch(arr[i]){
          case  '6':str+='a' ;break;
            case  '1':str+='b';break;
              case  '7':str+='d';break;
                case  '4':str+='e';break;
                  case  '3':str+='i';break;
                    case  '2':str+='l';break;
                      case  '9':str+='m';break;
                        case  '8':str+='n';break;
                          case  '0':str+='o';break;
                            case  '5':str+='t';break;
      }
    }
    return str
    }
    console.log(hiddenWord(637), "aid");
console.log(hiddenWord(7415), "debt");
console.log(hiddenWord(49632), "email");
console.log(hiddenWord(942547), "melted");
