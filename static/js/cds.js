document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.menu-item');

    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });
});

const button = document.getElementById("hidden_menu_button");
const menu = document.getElementById("hidden_menu_container");
const button_2 = document.getElementById("hidden_menu_button_2");
let clicked = false;

button.onclick = () => {
    if (clicked === false){
        console.log("Clicked");
        menu.style.display = "grid";
        clicked = true;   
    }
    else{
        const menu = document.getElementById("hidden_menu_container");
        console.log("Clicked");
        menu.style.display = "none";
        clicked = false;
    }
}

button_2.onclick = () => {
    if (clicked === false){
        console.log("Clicked");
        menu.style.display = "grid";
        clicked = true;   
    }
    else{
        const menu = document.getElementById("hidden_menu_container");
        console.log("Clicked");
        menu.style.display = "none";
        clicked = false;
    }
}

let valueCounts = {};
let priceCounts = {};

document.getElementById('Coca_Cola').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Coca Cola', 'price':'2.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Coca Cola']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Coca Cola x${valueCounts['Coca Cola']} - ${priceCounts["Coca Cola"]}$`) {
                    exists = true;
                    valueCounts['Coca Cola']++;
                    priceCounts['Coca Cola'] += 2.99;
                    focus[i].textContent = 'Coca Cola x' + valueCounts['Coca Cola'].toString() + ` - ${priceCounts["Coca Cola"]}$`
                }
            }
        } else {
            valueCounts['Coca Cola'] = 1;
            priceCounts['Coca Cola'] = 2.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Coca Cola x' + valueCounts['Coca Cola'].toString() + ` - ${priceCounts["Coca Cola"]}$`;
            // Optionally, set attributes or classes to the new element
            //newElement.className = 'new-paragraph';
            
            // Get the container div
            let containerDiv = document.getElementById('cart_container_s');
            // Append the new element to the container div
            containerDiv.appendChild(newElement);
        }
        
        console.log('Data sent successfully', data);
    });
});

document.getElementById('Diet_Coke').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Diet Coke', 'price':'2.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Diet Coke']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Diet Coke x${valueCounts['Diet Coke']} - ${priceCounts['Diet Coke']}$`) {
                    exists = true;
                    valueCounts['Diet Coke']++;
                    priceCounts['Diet Coke'] += 2.99;
                    focus[i].textContent = 'Diet Coke x' + valueCounts['Diet Coke'].toString() + ` - ${priceCounts['Diet Coke']}$`;
                }
            }
        } else {
            valueCounts['Diet Coke'] = 1;
            priceCounts['Diet Coke'] = 2.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Diet Coke x' + valueCounts['Diet Coke'].toString() + ` - ${priceCounts['Diet Coke']}$`;
            // Optionally, set attributes or classes to the new element
            //newElement.className = 'new-paragraph';
            
            // Get the container div
            let containerDiv = document.getElementById('cart_container_s');
            // Append the new element to the container div
            containerDiv.appendChild(newElement);
        }
        
        console.log('Data sent successfully', data);
    });
});

document.getElementById('Sprite').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Sprite', 'price':'2.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Sprite']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Sprite x${valueCounts['Sprite']} - ${priceCounts["Sprite"]}$`) {
                    exists = true;
                    valueCounts['Sprite']++;
                    priceCounts["Sprite"] += 2.99;
                    focus[i].textContent = 'Sprite x' + valueCounts['Sprite'].toString() + ` - ${priceCounts["Sprite"]}$`
                }
            }
        } else {
            valueCounts['Sprite'] = 1;
            priceCounts["Sprite"] = 2.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Sprite x' + valueCounts['Sprite'].toString() + ` - ${priceCounts["Sprite"]}$`;
            // Optionally, set attributes or classes to the new element
            //newElement.className = 'new-paragraph';
            
            // Get the container div
            let containerDiv = document.getElementById('cart_container_s');
            // Append the new element to the container div
            containerDiv.appendChild(newElement);
        }
        
        console.log('Data sent successfully', data);
    });
});

document.getElementById('Fanta_Orange').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Fanta_Orange', 'price':'2.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Fanta Orange']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Fanta Orange x${valueCounts['Fanta Orange']} - ${priceCounts["Fanta Orange"]}$`) {
                    exists = true;
                    valueCounts['Fanta Orange']++;
                    priceCounts["Fanta Orange"] += 2.99;
                    focus[i].textContent = 'Fanta Orange x' + valueCounts['Fanta Orange'].toString() + ` - ${priceCounts["Fanta Orange"]}$`
                }
            }
        } else {
            valueCounts['Fanta Orange'] = 1;
            priceCounts["Fanta Orange"] = 2.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Fanta Orange x' + valueCounts['Fanta Orange'].toString() + ` - ${priceCounts["Fanta Orange"]}$`;
            // Optionally, set attributes or classes to the new element
            //newElement.className = 'new-paragraph';
            
            // Get the container div
            let containerDiv = document.getElementById('cart_container_s');
            // Append the new element to the container div
            containerDiv.appendChild(newElement);
        }
        
        console.log('Data sent successfully', data);
    });
});

document.getElementById('Dr_Pepper').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Dr Pepper', 'price':'2.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Dr Pepper']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Dr Pepper x${valueCounts['Dr Pepper']} - ${priceCounts['Dr Pepper']}$`) {
                    exists = true;
                    valueCounts['Dr Pepper']++;
                    priceCounts['Dr Pepper'] += 2.99;
                    focus[i].textContent = 'Dr Pepper x' + valueCounts['Dr Pepper'].toString() + ` - ${priceCounts['Dr Pepper']}$`
                }
            }
        } else {
            valueCounts['Dr Pepper'] = 1;
            priceCounts['Dr Pepper'] = 2.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Dr Pepper x' + valueCounts['Dr Pepper'].toString() + ` - ${priceCounts['Dr Pepper']}$`;
            // Optionally, set attributes or classes to the new element
            //newElement.className = 'new-paragraph';
            
            // Get the container div
            let containerDiv = document.getElementById('cart_container_s');
            // Append the new element to the container div
            containerDiv.appendChild(newElement);
        }
        
        console.log('Data sent successfully', data);
    });
});

document.getElementById('Mountain_Dew').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Mountain Dew', 'price':'2.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Mountain Dew']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Mountain Dew x${valueCounts['Mountain Dew']} - ${priceCounts['Mountain Dew']}$`) {
                    exists = true;
                    valueCounts['Mountain Dew']++;
                    priceCounts['Mountain Dew'] += 2.99;
                    focus[i].textContent = 'Mountain Dew x' + valueCounts['Mountain Dew'].toString() + ` - ${priceCounts['Mountain Dew']}$`
                }
            }
        } else {
            valueCounts['Mountain Dew'] = 1;
            priceCounts['Mountain Dew'] = 2.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Mountain Dew x' + valueCounts['Mountain Dew'].toString() + ` - ${priceCounts['Mountain Dew']}$`;
            // Optionally, set attributes or classes to the new element
            //newElement.className = 'new-paragraph';
            
            // Get the container div
            let containerDiv = document.getElementById('cart_container_s');
            // Append the new element to the container div
            containerDiv.appendChild(newElement);
        }
        
        console.log('Data sent successfully', data);
    });
});