export const setTheme = (theme) => {
    var body = document.getElementsByTagName('body')[0];
    var profileArea = document.getElementById('profileArea');

    if (theme === 'light') {
        body.style.backgroundColor = '#f1f2f6';
        profileArea.style.backgroundColor = '#fff';
    
    } else {
        body.style.backgroundColor = '#000';
        profileArea.style.backgroundColor = '#24292E';
    }
}