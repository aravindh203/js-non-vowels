var text=prompt("Enter the text");
var vowels=["a","e","i","o","u"];

for(i=0;i<text.length;i++){
	var a=0;
	vowels.forEach(function(e){
		if(e!=text.toLocaleLowerCase().charAt(i)){
			a++;
		}
	})
	if(a==5){
		document.write(text.charAt(i)+", ");
		
	}
}