function yes() {
    text = document.getElementById('text')
    btnY = document.getElementById('yes')
    btnN = document.getElementById('no')

    text.innerHTML = "жи есть"
    btnY.style.display = "none"
    btnN.style.display = "none"
}

function no() {
    btnN = document.getElementById('no')
  
    let w = (document.documentElement.clientWidth / 2) - 40
    let h = (document.documentElement.clientHeight / 2) - 30
    btnN.style.left = Math.random() * (w * 2) - w + 'px'
    btnN.style.top = Math.random() * (h * 2) - h + 'px'
  }

function dno() {
    text = document.getElementById('text')
    text.innerHTML = 'Красава'

    btnY = document.getElementById('yes')
    btnN = document.getElementById('no') 

    btnY.style.display = "none"
    btnN.style.display = "none"
} 
