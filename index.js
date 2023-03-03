// let age = 50
// if(!(age <= 90 && age >= 14)){
//   alert("YEs");
// }else{
//   alert("No");
// }
// //de esta manera decimos que no essta entre 14 y 90 con un not.
// ¿ Cuál de estos alerts va a ejecutar?

// ¿ Cuáles serán los resultados de las expresiones dentro if(...)?
// if (-1 || 0){
//   alert( 'first' );
// } 
// if (-1 && 0){
//   alert( 'second' );
// }
// if (null || -1 && 1){
//   alert( 'third' );
// } 
// //eneste caso el primero y el tercero se ejecutaran
// //en el primer caso  me lanza true por que anbas condociones son falsas -1 o 0 = -1
// //en el segundo caso me va a lanzar falso por que -1 y 0=-1 es falso y el operador and me va a lanzar el primer valor falso
// //en el tercer caso el operador && tiene mayor precedencioa que el ||
// //entonces -1 && 1 se ejecuta primero, dándonos la caden
// //null || -1 && 1  ->  null || 1  ->  1
let userName = document.getElementsByClassName("user")[0];
let pass = document.getElementsByClassName("password")[0];
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
  if(userName.value === "Admin" && pass.value === "TheMaster"){
    alert("Welcome!");
    }else if (pass.value === "" || pass.value === null || pass.keycode == "27"){
      alert("Canceled " + " Wrong password")
    }else if(userName.value === '' || userName.value === null) {
      alert( 'Canceled' );
    } else {
      alert("I don't know you");
    };    
});
 

