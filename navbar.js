let darkmode = localStorage.getItem('darkmode');
let checked = localStorage.getItem('checked');
const themeSwitch = document.getElementById('theme-check');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    localStorage.setItem('checked','active');
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    localStorage.setItem('checked', null);
}
if(darkmode === 'active') enableDarkMode();
if(checked == 'active') themeSwitch.checked = true;

themeSwitch.addEventListener('input', () => {
    darkmode = localStorage.getItem('darkmode');
    checked = localStorage.getItem('checked');
    darkmode != 'active' ? enableDarkMode() : disableDarkMode();
    checked != 'active' ? themeSwitch.checked = true : themeSwitch.checked = false;
})  