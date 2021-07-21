function validateUsr(username) {
    let count =0
    if(username.length > 3 && username.length <17){
      for(let i = 0 ;i<username.length ; i++){
          if(username[i]!=' '){
            if(username[i].toLowerCase()===username[i]||typeof `${username[i]}`==='number'||username[i]=='_'){
                count+=1
              }
          }
        
    }
    }else{return false}
    return count == username.length
    
  }

  function validateUsr(username) {
    /**
      - `^`        Start from the beginning of the string.
      - `[]`       Allow any character specified, including...
      - `a-z`      anything from a to z,
      - `0-9`      anything from 0 to 9,
      - `_`        and underscore.
      - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
      - `$`        End the string right after specified amount of allowed characters is given.
    */
    const validator = /^[a-z0-9_]{4,16}$/;
    
    return validator.test(username);
  }
  
  console.log(validateUsr('asddsa'), true);
  console.log(validateUsr('a'), false);
  console.log(validateUsr('Hass'), false);
  console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
  console.log(validateUsr(''), false);
  console.log(validateUsr('____'), true);
  console.log(validateUsr('012'), false);
  console.log(validateUsr('p1pp1'), true);
  console.log(validateUsr('asd43 34'), false);
  console.log(validateUsr('asd43_34'), true);
