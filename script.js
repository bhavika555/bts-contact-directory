import contacts from './contact.js'

const parentDiv = document.querySelector('.contact-list')
const addBtn = document.getElementById('addBtn')

const createContactCard = (contact) => {
    let contactDiv = document.createElement('div')
    contactDiv.setAttribute('class', 'contact')

    const imgSrc = contact.image ? contact.image : 'https://via.placeholder.com/120?text=User'

    contactDiv.innerHTML = `
    <img src="${imgSrc}" alt="${contact.name}">
    <h2>${contact.name}</h2>
    <p>📞 <a href="tel:${contact.mobile}" style="text-decoration: none; color: #333;">${contact.mobile}</a></p>
    <p>✉️ <a href="mailto:${contact.email}" style="text-decoration: none; color: #333;">${contact.email}</a></p>
    `
    
    parentDiv.prepend(contactDiv) 
}

[...contacts].reverse().forEach(createContactCard)


addBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput')
    const mobileInput = document.getElementById('mobileInput')
    const emailInput = document.getElementById('emailInput')

    if(nameInput.value === "" || mobileInput.value === "") {
        alert("Please enter at least a Name and Mobile Number!")
        return
    }

    const newContact = {
        name: nameInput.value,
        mobile: mobileInput.value,
        email: emailInput.value,
        image: ""
    }

    createContactCard(newContact)

    nameInput.value = ""
    mobileInput.value = ""
    emailInput.value = ""
})