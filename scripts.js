let elements = document.getElementsByClassName('column');

const one = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.flex = '100%';
    }
}

const two = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.flex = '50%';
    }
}

const four = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.flex = '25%';
    }
}
//side navbar for phone size
function openNav() {
    document.getElementById('mysidenav').style.width = '250px';
}
function closeNav() {
    document.getElementById('mysidenav').style.width = '0px';
}