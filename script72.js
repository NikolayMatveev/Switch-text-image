var i=0;
function change() {
	a=document.getElementById('pic')
	b=document.getElementById('smtx')
	c=document.getElementById('tekst')
	if (a.style.display == 'none', c.style.display == 'block', i==0) {
		a.style.display = 'block'
		b.value="Показать текст"
		c.style.display = 'none'
		i=1;
	}
	else {
		a.style.display = 'none'
		b.value="Показать свечу"
		c.style.display = 'block'
		i=0;
	}
}
