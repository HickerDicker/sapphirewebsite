const Home = document.getElementById('Home')
const Faq = document.getElementById('Faq')
const Unsupported = document.getElementById('Unsupported')
const OS = document.getElementById('OS')
const Tool = document.getElementById('Tool')

const Bar_Home = document.getElementById('Bar-Home')
const Bar_Faq = document.getElementById('Bar-Faq')
const Bar_Unsupported = document.getElementById('Bar-Unsupported')
const Bar_OS = document.getElementById('Bar-OS')
const Bar_Tool = document.getElementById('Bar-Tool')

let selectedBar = null;

function hideAll() {
    Home.style.display = 'none'
    Faq.style.display = 'none'
    Unsupported.style.display = 'none'
    OS.style.display = 'none'
    Tool.style.display = 'none'
}

function resetBars() {
    Bar_Home.style.backgroundColor = '#1c1a27'
    Bar_Faq.style.backgroundColor = '#1c1a27'
    Bar_Unsupported.style.backgroundColor = '#1c1a27'
    Bar_OS.style.backgroundColor = '#1c1a27'
    Bar_Tool.style.backgroundColor = '#1c1a27'

    Bar_Home.style.borderBottomStyle = 'none'
    Bar_Faq.style.borderBottomStyle = 'none'
    Bar_Unsupported.style.borderBottomStyle = 'none'
    Bar_OS.style.borderBottomStyle = 'none'
    Bar_Tool.style.borderBottomStyle = 'none'
}

function highlightBar(bar) {
    bar.style.backgroundColor = '#24222f'
    bar.style.borderBottomStyle = 'solid'
}

hideAll()
resetBars()
Home.style.display = 'block'
highlightBar(Bar_Home)
selectedBar = Bar_Home;

Bar_Home.addEventListener('click', function () {
    hideAll()
    resetBars()
    Home.style.display = 'block'
    highlightBar(Bar_Home)
    selectedBar = Bar_Home; 
});

Bar_Faq.addEventListener('click', function () {
    hideAll()
    resetBars()
    Faq.style.display = 'block'
    highlightBar(Bar_Faq)
    selectedBar = Bar_Faq; 
});

Bar_Unsupported.addEventListener('click', function () {
    hideAll()
    resetBars()
    Unsupported.style.display = 'block'
    highlightBar(Bar_Unsupported)
    selectedBar = Bar_Unsupported; 
});

Bar_OS.addEventListener('click', function () {
    hideAll()
    resetBars()
    OS.style.display = 'block'
    highlightBar(Bar_OS)
    selectedBar = Bar_OS; 
});

Bar_Tool.addEventListener('click', function () {
    hideAll()
    resetBars()
    Tool.style.display = 'block'
    highlightBar(Bar_Tool)
    selectedBar = Bar_Tool; 
});

Bar_Home.addEventListener('mouseover', function() {
    if (selectedBar !== Bar_Home) {  
        Bar_Home.style.backgroundColor = '#24222f';
    }
})
Bar_Home.addEventListener('mouseout', function() {
    if (selectedBar !== Bar_Home) {  
        Bar_Home.style.backgroundColor = '#1c1a27';
    }
})

Bar_Faq.addEventListener('mouseover', function() {
    if (selectedBar !== Bar_Faq) {  
        Bar_Faq.style.backgroundColor = '#24222f';
    }
})
Bar_Faq.addEventListener('mouseout', function() {
    if (selectedBar !== Bar_Faq) {  
        Bar_Faq.style.backgroundColor = '#1c1a27';
    }
})

Bar_Unsupported.addEventListener('mouseover', function() {
    if (selectedBar !== Bar_Unsupported) {  
        Bar_Unsupported.style.backgroundColor = '#24222f';
    }
})
Bar_Unsupported.addEventListener('mouseout', function() {
    if (selectedBar !== Bar_Unsupported) {  
        Bar_Unsupported.style.backgroundColor = '#1c1a27';
    }
})

Bar_OS.addEventListener('mouseover', function() {
    if (selectedBar !== Bar_OS) {  
        Bar_OS.style.backgroundColor = '#24222f';
    }
})
Bar_OS.addEventListener('mouseout', function() {
    if (selectedBar !== Bar_OS) {  
        Bar_OS.style.backgroundColor = '#1c1a27';
    }
})

Bar_Tool.addEventListener('mouseover', function() {
    if (selectedBar !== Bar_Tool) {  
        Bar_Tool.style.backgroundColor = '#24222f';
    }
})
Bar_Tool.addEventListener('mouseout', function() {
    if (selectedBar !== Bar_Tool) {  
        Bar_Tool.style.backgroundColor = '#1c1a27';
    }
})
