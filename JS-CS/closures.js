/**
 Closures


 function parent() {
   var privateVar = 10;

   return {
     increment: function () {
       privateVar++;
      },
      decrement: function () {
        privateVar--;
      },
      show: function () {
        console.log({ privateVar });
      },
    };
  }

  const myChild = parent();
  myChild.show(); // { privateVar: 10 }
  myChild.increment(); // 11
  myChild.increment(); // 12
  myChild.increment(); // 13
  myChild.show(); // { privateVar: 13 }

*/
