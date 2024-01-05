MicroModal.init();
/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

$("#confirm-btn").on('click', function () {
    let input = $("#confirm-input").val()
    if (input === 'hello') {
        $("#confirm-input").val("")
        link = document.createElement("a");
        link.setAttribute("href", "/assets/pdf/CV-Backend-TienDat-01-2024.pdf");
        link.setAttribute("download", "CV-Backend-TienDat-01-2024.pdf");
        link.click();
        link.remove()
        MicroModal.close('modal-2')
    }
})

