document.getElementById('bg')        .addEventListener('click',background)
document.getElementByI('change-text').addEventListener('click', report)

function background () {
  document.body.style.backgroundColor = 'tomato'
}

function report () {
  document.getElementById('change-text').innerHTML = 'Report Successfully submitted thanks for your feedback'
 }
} 