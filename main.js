//tablica znaków
const znak =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K'
	,'L','M','N','O','P','E','R','S','T','U','V','W','X','Y','Z','!','@','#','$','%','^','&','*','(',')','_','?','>','<',':','[',']','{','}'];

let dlugosc = znak.length;


function losowehaslo() {
	
	const dlugoscHasla = 16;
	let haslo = '';
	let losowyZnak = '';

	for (let i = dlugoscHasla - 1; i >= 0; i--) {
		
 		losowyZnak = Math.floor(Math.random() * dlugosc );

		haslo += znak[losowyZnak];
	}
	// console.log(haslo);
	setTimeout(() => { document.querySelector('#haslo').value = haslo; }, 300);
	  
 }