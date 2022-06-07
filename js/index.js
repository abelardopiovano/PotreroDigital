function mensaje1()
{
   alert("Abelardo H. Piovano");
}

function cambia_de_modo()
{
    var msn1=document.getElementById('btmodo');
    if (msn1.value == 'cambiar a modo oscuro')
    {
        msn1.value='cambiar a modo claro';
        msn1.textContent='cambiar a modo claro';
        document.getElementById('estilo').href='./css/styles2.css';
        
    }
    else if (msn1.value == 'cambiar a modo claro')
    {
        msn1.value='cambiar a modo oscuro';
        msn1.textContent='cambiar a modo oscuro';
        document.getElementById('estilo').href='./css/styles.css';
    }
    //console.log(msn1.value)
}