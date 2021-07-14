function animals(heads, legs){
    if(heads==0&&legs==0){return [heads, legs]}
        if(heads%2==0){
            let ayam =heads/2
            let sapi =heads/2
            let kaki =(ayam*2)+(sapi*4)
            if(kaki>legs){
                do{ kaki-=2
                    ayam+=1
                    sapi-=1
                }while(kaki>legs)
            }if(kaki<legs){
                do{ kaki+=2
                    ayam-=1
                    sapi+=1
                }while(kaki<legs)
            }if(Math.ceil(ayam)!=Math.floor(ayam)&&Math.ceil(sapi)!=Math.floor(sapi)){return 'No solutions'}
                return ayam>=0&&sapi>=0&&kaki>=0&&heads>0&&legs>0&&legs%2===0?[ayam,sapi]:'No solutions'
    }
    if(heads%2==1){
        let ayam =(heads/2)-0.5
        let sapi =(heads/2)-0.5
        let kaki =(ayam*2)+(sapi*4)
        if(kaki>legs){
            do{ kaki-=2
                ayam+=1
                sapi-=1
            }while(kaki>legs)
        }if(kaki<legs){
            do{ kaki+=2
                ayam-=1
                sapi+=1
            }while(kaki<legs)            
        }
        if(Math.ceil(ayam)!=Math.floor(ayam)&&Math.ceil(sapi)!=Math.floor(sapi)){return 'No solutions'}
            return ayam>=0&&sapi>=0&&kaki>=0&&heads>0&&legs>0&&legs%2===0?[ayam+2,sapi-1]:'No solutions'
        }
    }
console.log(animals(72, 200), [44, 28])
console.log(animals(116, 282), [91, 25])
console.log(animals(12, 24), [12, 0])
console.log(animals(6, 24), [0, 6])
console.log(animals(344, 872), [252, 92])
console.log(animals(195 ,642), [69, 126])
console.log(animals(299 ,840),[ 178, 121 ])