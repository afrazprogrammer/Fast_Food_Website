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

document.getElementById('Classic_French_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Classic French Fries', 'price':'2.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Classic French Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Classic French Fries x${valueCounts['Classic French Fries']} - ${priceCounts["Classic French Fries"]}$`) {
                    exists = true;
                    valueCounts['Classic French Fries']++;
                    priceCounts['Classic French Fries'] += 2.99;
                    focus[i].textContent = 'Classic French Fries x' + valueCounts['Classic French Fries'].toString() + ` - ${priceCounts["Classic French Fries"]}$`
                }
            }
        } else {
            valueCounts['Classic French Fries'] = 1;
            priceCounts['Classic French Fries'] = 2.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Classic French Fries x' + valueCounts['Classic French Fries'].toString() + ` - ${priceCounts["Classic French Fries"]}$`;
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

document.getElementById('Cheese_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Cheese Fries', 'price':'3.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Cheese Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Cheese Fries x${valueCounts['Cheese Fries']} - ${priceCounts['Cheese Fries']}$`) {
                    exists = true;
                    valueCounts['Cheese Fries']++;
                    priceCounts['Cheese Fries'] += 3.99;
                    focus[i].textContent = 'Cheese Fries x' + valueCounts['Cheese Fries'].toString() + ` - ${priceCounts['Cheese Fries']}$`;
                }
            }
        } else {
            valueCounts['Cheese Fries'] = 1;
            priceCounts['Cheese Fries'] = 3.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Cheese Fries x' + valueCounts['Cheese Fries'].toString() + ` - ${priceCounts['Cheese Fries']}$`;
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

document.getElementById('Chili_Cheese_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Chili Cheese Fries', 'price':'4.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Chili Cheese Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Chili Cheese Fries x${valueCounts['Chili Cheese Fries']} - ${priceCounts["Chili Cheese Fries"]}$`) {
                    exists = true;
                    valueCounts['Chili Cheese Fries']++;
                    priceCounts["Chili Cheese Fries"] += 4.99;
                    focus[i].textContent = 'Chili Cheese Fries x' + valueCounts['Chili Cheese Fries'].toString() + ` - ${priceCounts["Chili Cheese Fries"]}$`
                }
            }
        } else {
            valueCounts['Chili Cheese Fries'] = 1;
            priceCounts["Chili Cheese Fries"] = 4.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Chili Cheese Fries x' + valueCounts['Chili Cheese Fries'].toString() + ` - ${priceCounts["Chili Cheese Fries"]}$`;
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

document.getElementById('Garlic_Parmesan_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Garlic Parmesan Fries', 'price':'3.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Garlic Parmesan Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Garlic Parmesan Fries x${valueCounts['Garlic Parmesan Fries']} - ${priceCounts["Garlic Parmesan Fries"]}$`) {
                    exists = true;
                    valueCounts['Garlic Parmesan Fries']++;
                    priceCounts["Garlic Parmesan Fries"] += 3.99;
                    focus[i].textContent = 'Garlic Parmesan Fries x' + valueCounts['Garlic Parmesan Fries'].toString() + ` - ${priceCounts["Garlic Parmesan Fries"]}$`
                }
            }
        } else {
            valueCounts['Garlic Parmesan Fries'] = 1;
            priceCounts["Garlic Parmesan Fries"] = 3.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Garlic Parmesan Fries x' + valueCounts['Garlic Parmesan Fries'].toString() + ` - ${priceCounts["Garlic Parmesan Fries"]}$`;
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

document.getElementById('Sweet_Potato_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Sweet Potato Fries', 'price':'3.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Sweet Potato Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Sweet Potato Fries x${valueCounts['Sweet Potato Fries']} - ${priceCounts['Sweet Potato Fries']}$`) {
                    exists = true;
                    valueCounts['Sweet Potato Fries']++;
                    priceCounts['Sweet Potato Fries'] += 3.49;
                    focus[i].textContent = 'Sweet Potato Fries x' + valueCounts['Sweet Potato Fries'].toString() + ` - ${priceCounts['Sweet Potato Fries']}$`
                }
            }
        } else {
            valueCounts['Sweet Potato Fries'] = 1;
            priceCounts['Sweet Potato Fries'] = 3.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Sweet Potato Fries x' + valueCounts['Sweet Potato Fries'].toString() + ` - ${priceCounts['Sweet Potato Fries']}$`;
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

document.getElementById('Truffle_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Truffle Fries', 'price':'4.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Truffle Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Truffle Fries x${valueCounts['Truffle Fries']} - ${priceCounts['Truffle Fries']}$`) {
                    exists = true;
                    valueCounts['Truffle Fries']++;
                    priceCounts['Truffle Fries'] += 4.99;
                    focus[i].textContent = 'Truffle Fries x' + valueCounts['Truffle Fries'].toString() + ` - ${priceCounts['Truffle Fries']}$`
                }
            }
        } else {
            valueCounts['Truffle Fries'] = 1;
            priceCounts['Truffle Fries'] = 4.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Truffle Fries x' + valueCounts['Truffle Fries'].toString() + ` - ${priceCounts['Truffle Fries']}$`;
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

document.getElementById('Curly_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Curly Fries', 'price':'3.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Curly Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Curly Fries x${valueCounts['Curly Fries']} - ${priceCounts['Curly Fries']}$`) {
                    exists = true;
                    valueCounts['Curly Fries']++;
                    priceCounts['Curly Fries'] += 3.49;
                    focus[i].textContent = 'Curly Fries x' + valueCounts['Curly Fries'].toString() + ` - ${priceCounts['Curly Fries']}$`
                }
            }
        } else {
            valueCounts['Curly Fries'] = 1;
            priceCounts['Curly Fries'] = 3.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Curly Fries x' + valueCounts['Curly Fries'].toString() + ` - ${priceCounts['Curly Fries']}$`;
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

document.getElementById('Cajun_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Cajun Fries', 'price':'3.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Cajun Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Cajun Fries x${valueCounts['Cajun Fries']} - ${priceCounts["Cajun Fries"]}$`) {
                    exists = true;
                    valueCounts['Cajun Fries']++;
                    priceCounts["Cajun Fries"] += 3.49;
                    focus[i].textContent = 'Cajun Fries x' + valueCounts['Cajun Fries'].toString() + ` - ${priceCounts["Cajun Fries"]}$`
                }
            }
        } else {
            valueCounts['Cajun Fries'] = 1;
            priceCounts["Cajun Fries"] = 3.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Cajun Fries x' + valueCounts['Cajun Fries'].toString() + ` - ${priceCounts["Cajun Fries"]}$`;
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

document.getElementById('Bacon_Cheese_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Bacon Cheese Fries', 'price':'4.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Bacon Cheese Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Bacon Cheese Fries x${valueCounts['Bacon Cheese Fries']} - ${priceCounts["Bacon Cheese Fries"]}$`) {
                    exists = true;
                    valueCounts['Bacon Cheese Fries']++;
                    priceCounts["Bacon Cheese Fries"] += 4.99;
                    focus[i].textContent = 'Bacon Cheese Fries x' + valueCounts['Bacon Cheese Fries'].toString() + ` - ${priceCounts["Bacon Cheese Fries"]}$`
                }
            }
        } else {
            valueCounts['Bacon Cheese Fries'] = 1;
            priceCounts["Bacon Cheese Fries"] = 4.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Bacon Cheese Fries x' + valueCounts['Bacon Cheese Fries'].toString() + ` - ${priceCounts["Bacon Cheese Fries"]}$`;
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

document.getElementById('Loaded_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Loaded Fries', 'price':'5.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Loaded Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Loaded Fries x${valueCounts['Loaded Fries']} - ${priceCounts["Loaded Fries"]}$`) {
                    exists = true;
                    valueCounts['Loaded Fries']++;
                    priceCounts["Loaded Fries"] += 5.49;
                    focus[i].textContent = 'Loaded Fries x' + valueCounts['Loaded Fries'].toString() + ` - ${priceCounts["Loaded Fries"]}$`;
                }
            }
        } else {
            valueCounts['Loaded Fries'] = 1;
            priceCounts["Loaded Fries"] = 5.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Loaded Fries x' + valueCounts['Loaded Fries'].toString() + ` - ${priceCounts["Loaded Fries"]}$`;
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

document.getElementById('Poutine').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Poutine', 'price':'5.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Poutine']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Poutine x${valueCounts['Poutine']} - ${priceCounts["Poutine"]}$`) {
                    exists = true;
                    valueCounts['Poutine']++;
                    priceCounts["Poutine"] += 5.99;
                    focus[i].textContent = 'Poutine x' + valueCounts['Poutine'].toString() + ` - ${priceCounts["Poutine"]}$`;
                }
            }
        } else {
            valueCounts['Poutine'] = 1;
            priceCounts["Poutine"] = 5.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Poutine x' + valueCounts['Poutine'].toString() + ` - ${priceCounts["Poutine"]}$`;
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

document.getElementById('Steak_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Steak Fries', 'price':'3.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Steak Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Steak Fries x${valueCounts['Steak Fries']} - ${priceCounts["Steak Fries"]}$`) {
                    exists = true;
                    valueCounts['Steak Fries']++;
                    priceCounts["Steak Fries"] += 3.49;
                    focus[i].textContent = 'Steak Fries x' + valueCounts['Steak Fries'].toString() + ` - ${priceCounts["Steak Fries"]}$`;
                }
            }
        } else {
            valueCounts['Steak Fries'] = 1;
            priceCounts["Steak Fries"] = 3.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Steak Fries x' + valueCounts['Steak Fries'].toString() + ` - ${priceCounts["Steak Fries"]}$`;
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

document.getElementById('Crinkle_Cut_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Crinkle Cut Fries', 'price':'3.29'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Crinkle Cut Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Crinkle Cut Fries x${valueCounts['Crinkle Cut Fries']} - ${priceCounts["Crinkle Cut Fries"]}$`) {
                    exists = true;
                    valueCounts['Crinkle Cut Fries']++;
                    priceCounts["Crinkle Cut Fries"] += 3.29;
                    focus[i].textContent = 'Crinkle Cut Fries x' + valueCounts['Crinkle Cut Fries'].toString() + ` - ${priceCounts["Crinkle Cut Fries"]}$`
                }
            }
        } else {
            valueCounts['Crinkle Cut Fries'] = 1;
            priceCounts["Crinkle Cut Fries"] = 3.29;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Crinkle Cut Fries x' + valueCounts['Crinkle Cut Fries'].toString() + ` - ${priceCounts["Crinkle Cut Fries"]}$`;
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

document.getElementById('Tater_Tots').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Tater Tots', 'price':'3.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Tater Tots']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Tater Tots x${valueCounts['Tater Tots']} - ${priceCounts["Tater Tots"]}$`) {
                    exists = true;
                    valueCounts['Tater Tots']++;
                    priceCounts["Tater Tots"] += 3.49;
                    focus[i].textContent = 'Tater Tots x' + valueCounts['Tater Tots'].toString() + ` - ${priceCounts["Tater Tots"]}$`;
                }
            }
        } else {
            valueCounts['Tater Tots'] = 1;
            priceCounts["Tater Tots"] = 3.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Tater Tots x' + valueCounts['Tater Tots'].toString() + ` - ${priceCounts["Tater Tots"]}$`;
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

document.getElementById('Zucchini_Fries').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Zucchini Fries', 'price':'4.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Zucchini Fries']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Zucchini Fries x${valueCounts['Zucchini Fries']} - ${priceCounts["Zucchini Fries"]}$`) {
                    exists = true;
                    valueCounts['Zucchini Fries']++;
                    priceCounts["Zucchini Fries"] += 4.49;
                    focus[i].textContent = 'Zucchini Fries x' + valueCounts['Zucchini Fries'].toString() + ` - ${priceCounts["Zucchini Fries"]}$`
                }
            }
        } else {
            valueCounts['Zucchini Fries'] = 1;
            priceCounts["Zucchini Fries"] = 4.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Zucchini Fries x' + valueCounts['Zucchini Fries'].toString() + ` - ${priceCounts["Zucchini Fries"]}$`;
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