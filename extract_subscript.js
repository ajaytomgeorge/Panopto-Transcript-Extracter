subscripts=Array.from(document.getElementsByClassName("event-text"))
data = subscripts.map(function(element){return element.querySelector('.event-text > span').textContent})
data
