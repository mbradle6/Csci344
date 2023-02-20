const makeBigger = () => {
   const contentElem = document.getElementsByClassName("content");
   const headerElem = document.getElementById("#title");
   for(let i =0;i<contentElem.length;i++){
      contentElem[i].style.fontSize = "20px";
   }
   for(let i = 0; i<headerElem.length;i++){
      headerElem[i].style.fontSize = "24px"
   }
};

const makeSmaller = () => {
   const contentElem = document.getElementsByClassName("content");
   const headerElem = document.getElementById("#title");
   for(let i =0;i<contentElem.length;i++){
      contentElem[i].style.fontSize = "15px";
   }
   for(let i = 0; i<headerElem.length;i++){
      headerElem[i].style.fontSize = "19px"
   }
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
