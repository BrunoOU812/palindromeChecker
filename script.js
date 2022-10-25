function palindrome(str) {
    return str
    .toLowerCase()
    .match(/[a-z]|\d/gi).every((item,index,array)=>item==array.reverse()[index]);
  }
  let logo=document.querySelector(".header__span");
  let circle=document.querySelector(".header__circle");
  let text=document.querySelector(".header__trueorfalse");
  document.querySelector(".header__input").addEventListener("keyup",()=>{
    let string=document.querySelector(".header__input").value;
    if(string.length>2){
      let value=palindrome(string);
      value==false?
        logo.innerHTML="close":
        logo.innerHTML="done";
      value==false?
        logo.classList.remove("header__span--done"):
        logo.classList.remove("header__span--close");
      value==false?
        logo.classList.add("header__span--close"):
        logo.classList.add("header__span--done");
      value==false?
        logo.classList.remove("header__circle--done"):
        logo.classList.remove("header__circle--close");
      value==false?
        logo.classList.add("header__circle--close"):
        logo.classList.add("header__circle--done");
      value==false?
        text.innerHTML="Not!":
        text.innerHTML="Yeah!";
      }else{
        let value="";
        value==false?
          logo.innerHTML="close":
          "";
        value==false?
          logo.classList.remove("header__span--done"):
          "";
        value==false?
          logo.classList.add("header__span--close"):
          "";
        value==false?
          logo.classList.remove("header__circle--done"):
          "";
        value==false?
          logo.classList.add("header__circle--close"):
          "";
        value==false?
          text.innerHTML="Not!":
          "";
        
      }
  })