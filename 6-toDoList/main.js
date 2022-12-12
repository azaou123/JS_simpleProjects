

function del(x){
    document.getElementById('task'+x).remove()
}
function done(x){
    document.getElementById('li'+x).style.color = 'rgb(7, 75, 7)'
    document.getElementById('li'+x).style.textTransform = "through"
    document.getElementById('li'+x).style.listStyle = "none"
}


var i=1 
function tache(){
    var input = document.getElementById('input')
    if (input.value == ''){
        alert('It is Empty !')
    }
    else {
       var container = document.getElementById('container')
       let div = document.createElement('div')
       div.setAttribute('id','task'+i)
       container.appendChild(div)
       let li = document.createElement('li')
       li.innerHTML = input.value 
       li.setAttribute('id','li'+i)
       let done = document.createElement('span')
       done.innerHTML = '✔'
       done.setAttribute('onclick','done('+i+')')
       let del = document.createElement('span')
       del.innerHTML = '✘'
       del.setAttribute('onclick','del('+i+')')
       div.appendChild(li)
       div.appendChild(done)
       div.appendChild(del)
       input.value = ''
    }
    i++
}
