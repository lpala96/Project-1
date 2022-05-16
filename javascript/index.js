
const plantsLink = () => document.getElementById('plants-list')




// Event Handler
const renderPlantsPage = (e) => {
    e.preventDefault();
}




// Event Listener
const attachPlantsLinkEvent = () => {
    plantsLink().addEventListener('click', renderPlantsPage);
}

document.addEventListener('DOMContentLoaded', () => {
    
    attachPlantsLinkEvent();
})