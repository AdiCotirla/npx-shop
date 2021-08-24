const buton = document.getElementById('btn')
const container = document.getElementById('container')
const nume = document.getElementById('nume')
const email = document.getElementById('email')
const mesaj = document.getElementById('mesaj')
const newDiv = document.createElement('div')

newDiv.classList.add('invisible')


buton.addEventListener('click', function()
{
    if(nume.value == "")
{
    alert("Do not forget to type in your email , thank you.")
}
else if(email.value == "")
{
    alert("Do not forget to type in your email, thank you.")
}
else if (mesaj.value == "")
{
    alert("Do not forget to type in the message , thank you")
}
else if (nume.value == "" && email.value == "")
{
    alert("Do not forget to fill all the inputs please , thank you")
}
else if (nume.value == "" && mesaj.value == "")
{
    alert("Do not forget to fill all the inputs please , thank you")
}
else if (email.value == "" && mesaj.value =="")
{
    alert("Do not forget to fill all the inputs please , thank you")
}
else{
    const divBtn = document.createElement('div')
    const btnDel = document.createElement('button')
    btnDel.addEventListener('click', invisible)
    divBtn.appendChild(btnDel)
    btnDel.innerText = "X"
    btnDel.classList.add('btndelete')

    const divH1 = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.innerText="Thank you for your support , " + nume.value
    divH1.appendChild(h1)

    newDiv.appendChild(divBtn)
    newDiv.appendChild(divH1)
    console.log("The message has been send from " + nume.value + " to us.")
    container.appendChild(newDiv)
}
})
function invisible()
{
    newDiv.innerHTML =""
   container.removeChild(newDiv)
}