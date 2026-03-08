// Submenu Toggle logic
function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    submenu.classList.toggle('open');
    element.classList.toggle('active-menu');
}

// Sidebar Navigation logic
function loadContent(pageName) {
    const content = document.getElementById('dynamic-content');
    
    // UI Feedback: Change active state in menu
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Case logic for specific pages like User Administration
    if(pageName === 'User Setup' || pageName === 'Role Management') {
        content.innerHTML = `<h1>${pageName} Panel</h1><p>Welcome to the ${pageName} configuration module.</p>`;
    } else {
        // Default page loader view
        content.innerHTML = `<h1>${pageName}</h1><p>Currently viewing ${pageName} section.</p>`;
    }
    console.log(`Mapsd to: ${pageName}`);
}

// Grid Processing Interaction
function processGridItem(statusType) {
    alert(`Processing Request for: ${statusType}... Please wait.`);
    // Ingu ungal real-time processing API-ai call seiyalam
}

// Button Click Processing
function processAction(actionType) {
    const btn = event.target;
    btn.innerText = "Processing...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert(`${actionType} successfully processed!`);
        btn.innerText = actionType;
        btn.style.opacity = "1";
    }, 1500);
}

function handleLogout() {
    if(confirm("Are you sure you want to logout?")) {
        window.location.reload();
    }
}