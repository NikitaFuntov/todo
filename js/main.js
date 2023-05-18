let add=document.getElementById('mainForm').classList
let least = 0
let eventNum = 0;

function addNew() {
    add.remove("hidden")
    add.add("wiew")
}

function Subm() {
    let data = document.getElementById('form').value
    gData = data
    console.log(gData)
    add.remove("wiew")
    add.add("hidden")
    console.log(least)
    newEvent()
    document.getElementById('form').value = ''
}

function newEvent(){
    let data = document.getElementById('form').value
    if (data == '') {
        alert("You can't add empty event")
        least = 0
    }else{
        let newDiv = document.createElement('div')
        newDiv.classList.add('event')
        newDiv.id="event"+least;
        let newP = document.createElement('p')
        newP.classList.add('event__text')
        let newB = document.createElement('button')
        newB.classList.add('event__don')
        newB.id = 'but'+least
        newB.textContent = 'Done!'
        newB.setAttribute('onclick',`deleteEvent(${least})`)
        let textP = document.createTextNode(data)
        newP.appendChild(textP)
        newDiv.appendChild(newP)
        newDiv.appendChild(newB)
        let currentDiv = document.getElementById('example')
        document.body.insertBefore(newDiv,currentDiv)
        eventNum++
        least++
        document.getElementById('example').style = "display:none;"
    }
}


function deleteEvent(number) {
    let doneElement = document.getElementById('event'+number)
    doneElement.style = "display:none;"
}