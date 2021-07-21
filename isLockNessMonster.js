/*You're on your way to the market when you hear beautiful music coming from a nearby street performer. 
The notes come together like you wouln't believe as the musician puts together patterns of tunes. 
As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, 
it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, 
"How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. 
The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) 
It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". 
Since you are tired of being grifted by this monster, the time has come to code a solution for finding 
The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.
*/
const isLockNessMonster = s =>{
   let arr =  s.split('')
   let newArr=[]
   for(let i = 0 ; i < arr.length ; i++){
      if(arr[i]+arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]+arr[i+5]+arr[i+6]+arr[i+7]+arr[i+8]+arr[i+9]=='tree fiddy'){
         newArr.push(arr[i]+arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]+arr[i+5]+arr[i+6]+arr[i+7]+arr[i+8]+arr[i+9])
       }else if(arr[i]+arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]+arr[i+5]+arr[i+6]+arr[i+7]+arr[i+8]+arr[i+9]+arr[i+10]=='three fifty'){
        newArr.push(arr[i]+arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]+arr[i+5]+arr[i+6]+arr[i+7]+arr[i+8]+arr[i+9]+arr[i+10])
       }else if(arr[i]+arr[i+1]+arr[i+2]+arr[i+3]=='3.50'){
         newArr.push(arr[i]+arr[i+1]+arr[i+2]+arr[i+3])
       }else{}
      }return newArr=='tree fiddy'||newArr=='three fifty'||newArr=='3.50'
}

     console.log("Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?");
     console.log(isLockNessMonster("Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?"));
     console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
     console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));
      
