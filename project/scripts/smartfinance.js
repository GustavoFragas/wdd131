const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = currentYear;
}

const lastModifiedP = document.getElementById('lastModified');
if(lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}

const menuBtn = document.getElementById('hamburgerBtn');
const nav = document.querySelector('.navigation');

if(menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
        if(nav.classList.contains('open')){
            menuBtn.innerHTML = '&#10006;'; 
        } else {
            menuBtn.innerHTML = '&#9776;';
        }
    });
}

const visitCountSpan = document.getElementById('visitCount');
if(visitCountSpan) {
    let numVisits = Number(window.localStorage.getItem('smartFinanceVisits')) || 0;
    numVisits++;
    localStorage.setItem('smartFinanceVisits', numVisits);
    visitCountSpan.textContent = numVisits;
}

const servicesData = [
    {
        id: 1,
        title: "Basic Savings Tracker",
        category: "individual",
        price: "Free",
        imgUrl: "images/Mobile.png",
        description: "An AI tracker that hooks to your cards and predicts future recurring spending."
    },
    {
        id: 2,
        title: "Pro Stock Advisor",
        category: "individual",
        price: "$15/mo",
        imgUrl: "images/Mobile.png",
        description: "Uses learning algorithms to give buy and sell signals based on market news."
    },
    {
        id: 3,
        title: "Business Cashflow Master",
        category: "business",
        price: "$49/mo",
        imgUrl: "images/Desktop.png",
        description: "Avoid bankruptcy. Our AI manages payrolls, invoices, and calculates runaways."
    },
    {
        id: 4,
        title: "Corporate Tax AI",
        category: "business",
        price: "$99/mo",
        imgUrl: "images/Desktop.png",
        description: "Analyzes every transaction and identifies tax deduction opportunities."
    }
];

const servicesContainer = document.getElementById('servicesContainer');

function renderServices(list) {
    if(!servicesContainer) return;
    
    servicesContainer.innerHTML = '';
    
    list.forEach(item => {
        let cardHTML = `
            <div class="service-card">
                <img src="${item.imgUrl}" alt="${item.title}" loading="lazy">
                <h3>${item.title}</h3>
                <span class="price">${item.price}</span>
                <p><strong>For:</strong> ${item.category}</p>
                <p>${item.description}</p>
            </div>
        `;
        servicesContainer.innerHTML += cardHTML;
    });
}

if(servicesContainer) {
    renderServices(servicesData);
    
    const filterAll = document.getElementById('filterAll');
    const filterInd = document.getElementById('filterIndividual');
    const filterBus = document.getElementById('filterBusiness');
    
    function resetBtnStyles() {
        filterAll.classList.remove('active');
        filterInd.classList.remove('active');
        filterBus.classList.remove('active');
    }
    
    filterAll.addEventListener('click', () => {
        resetBtnStyles();
        filterAll.classList.add('active');
        renderServices(servicesData);
    });
    
    filterInd.addEventListener('click', () => {
        resetBtnStyles();
        filterInd.classList.add('active');
        const filtered = servicesData.filter(s => s.category === 'individual');
        renderServices(filtered);
    });
    
    filterBus.addEventListener('click', () => {
        resetBtnStyles();
        filterBus.classList.add('active');
        const filtered = servicesData.filter(s => s.category === 'business');
        renderServices(filtered);
    });
}