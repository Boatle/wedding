
/// OPEN MODAL ///
function launchModal() {
  let modal = document.getElementById('modal')
  modal.style.display = 'flex'
}

document.getElementById('RSVP-button').onclick = launchModal
document.getElementById('RSVP-button-2').onclick = launchModal

/// CLOSE MODAL ///
function closeModal() {
  let modal = document.getElementById('modal')
  modal.style.display = 'none'
}

document.getElementById('modal-overlay').onclick = closeModal
document.getElementById('modal-cross').onclick = closeModal

/// SHOW ROW CONTAINING THE FORM FIELDS FOR SECOND PERSON ///
function addPersonRow() {
  let row = document.getElementById('person2')
  row.style.display = 'flex'
  hideAddPersonButton()
  removePersonRow()
  setTimeout(function() {
    row.classList.toggle('show')
  })
}

/// HIDE ROW CONTAINING ADD PERSON BUTTON ///
function hideAddPersonButton() {
  let button = document.getElementById('add-person-button-row')
  button.style.display = 'none'
}

/// SHOW ROW CONTAINING MINUS PERSON BUTTON ///
function removePersonRow() {
  let row = document.getElementById('remove-person-button-row')
  row.style.display = 'flex'
  setTimeout(function() {
    row.classList.toggle('show')
  })
}

document.getElementById('add-person-button').onclick = addPersonRow

/// HIDE ROW CONTAINING SECOND PERSON FIELDS ///
function hideSecondPersonRow() {
  let row = document.getElementById('person2')
  row.classList.toggle('show')
  row.style.display = 'none'
  hideMinusPersonButton()
  showAddPersonButton()
}

/// HIDE ROW CONTAINING MINUS PERSON BUTTON ///
function hideMinusPersonButton() {
  let row = document.getElementById('remove-person-button-row')
  row.style.display = 'none'
}

/// SHOW ROW CONTAINING ADD PERSON BUTTON ///
function showAddPersonButton() {
  let row = document.getElementById('add-person-button-row')
  row.style.display = 'flex'
  setTimeout(function() {
    row.classList.toggle('show')
  })
}

document.getElementById('remove-person-button').onclick = hideSecondPersonRow
