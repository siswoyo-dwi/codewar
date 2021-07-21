function crossedwords(str1,str2){
   //complete here
   let str=''
   if(str1.length==1&&str2.length==1){str+=str1+'\n'}
   else if(str1.length>1||str2.length>1){
      for(let i = 0 ;i<str2.length;i++ ){
         for(let k = 0 ;k<str1.length;k++ ){
            if(str1[str.length-1]==str2[i]){
            str+=str1+'\n'
            break
            }else{
               if(k==0){
                  str+=str2[k]
               }else{
                  str+=' '
               }
               
            }
         }str+='\n'
      }
   }
   return str
   }
   console.log(crossedwords("AAAAAAAAAAAAAAAAAAAA","BBBBBBBBBBBABBBBBBBB"),'B                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nAAAAAAAAAAAAAAAAAAAA\nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \n')
   console.log(crossedwords("ZAAAAAAAAAAAAAAAAAAA","ZBBBBBBBBBBABBBBBBBB"),'ZAAAAAAAAAAAAAAAAAAA\nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nA                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \nB                   \n')
   
