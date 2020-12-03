const copyright = document.querySelector('.copyright');
const clientWidth = document.documentElement.clientWidth;

go()
//window.addEventListener('resize', go);

function go() {
    if (clientWidth <= 768) {
        let div = document.createElement('div')
        div.className = "logo"
        copyright.prepend(div);
      //console.log(`window was resized ${clientWidth}`);
    }
}

//document.querySelector('.show').sty