let humburger = document.getElementById('humburger-button-container');

function humburgerToggle () {
    humburger.classList.toggle('active');
}

humburger.addEventListener('click', humburgerToggle);