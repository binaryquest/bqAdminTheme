// Navbar Toggler
let sidebarToggler = document.querySelectorAll(".sidebar-toggler");
for (var i = 0; i < sidebarToggler.length; i++) {
    let toggler = sidebarToggler[i];
    toggler.addEventListener('click', () => {
        let sidebar = document.getElementById('sidebar');
        if(sidebar.classList.contains('active')) sidebar.classList.remove('active');
        else sidebar.classList.add('active');
    });
}

//Perfect Scrollbar INit
if(typeof PerfectScrollbar == 'function') {
    const container = document.querySelector(".sidebar-wrapper");
    const ps = new PerfectScrollbar(container);
}

window.onload = function() {

    var w = window.innerWidth;
    if(w < 768) {
        console.log('widthnya ', w)
        document.getElementById('sidebar').classList.remove('active');
    }
}

//------- search feild hide show-----------
// window.onload = function toggle(sr) {
//     // var search = document.getElementById('search');
//     // if (search != null) {
//     //     if (search.style.display == 'block') {
//     //         search.style.display = 'none';
//     //     }
//     //     else {
//     //         search.style.display = 'block';
//     //     }
//     // }
// }



