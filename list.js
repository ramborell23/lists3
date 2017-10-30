var input = window.prompt('Chose an id')
var input2 = window.prompt('Whats your change')
var tag = document.getElementById(input)
if (input === 'one' || input === 'two' || input === 'three' || input === 'four') {
    tag.innerHTML = input2

} else {
    var tag = document.getElementById('one')
    tag.innerHTML = 'No id selected'

}

