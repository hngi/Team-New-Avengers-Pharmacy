function openCart() {
  document.getElementById('mySidepanel').style.width = '100vw';
}

function closeCart() {
  document.getElementById('mySidepanel').style.width = '0';
}

function toggleSearch() {
  document.getElementById('search-icon').classList.add('d-none');
  document.getElementById('search').classList.remove('d-none');
}
