const buton = document.getElementById('buton')

buton.addEventListener('click', calculateBMI)

function calculateBMI()
{
    let height = parseInt(document.getElementById('height').value)
    let weight = parseInt(document.getElementById('weight').value)
    let result = document.getElementById('result')

    if(height == "" || isNaN(height))
    {
        alert("Provide a valid height !")
    }
    else if (weight == ""|| isNaN(weight))
    {
        alert("Provide a valid weight !")
    }
    else
    {
        let bmi = (weight/ ((height * height) / 10000)).toFixed(1)
       result.value = bmi
    }
}