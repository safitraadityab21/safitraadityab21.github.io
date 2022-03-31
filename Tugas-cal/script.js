// Memasukkan Angka ke Layar
function insert(num){
	document.form.textLayar.value = document.form.textLayar.value + num;
}

// Menghitung Nilai
function equal(){
	var x = document.form.textLayar.value;
	document.form.textLayar.value = eval(x);
}

// Menghapus Semua Nilai
function clean(){
	document.form.textLayar.value = "";
}

// Menghapus Satu Angka
function back(){
	var x = document.form.textLayar.value;
	document.form.textLayar.value = x.substring(0,x.length-1);
}