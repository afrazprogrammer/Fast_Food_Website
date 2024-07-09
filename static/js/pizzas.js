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

document.getElementById('Margherita_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Margherita Pizza', 'price':'9.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Margherita Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Margherita Pizza x${valueCounts['Margherita Pizza']} - ${priceCounts["Margherita Pizza"]}$`) {
                    exists = true;
                    valueCounts['Margherita Pizza']++;
                    priceCounts['Margherita Pizza'] += 9.99;
                    focus[i].textContent = 'Margherita Pizza x' + valueCounts['Margherita Pizza'].toString() + ` - ${priceCounts["Margherita Pizza"]}$`
                }
            }
        } else {
            valueCounts['Margherita Pizza'] = 1;
            priceCounts['Margherita Pizza'] = 9.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Margherita Pizza x' + valueCounts['Margherita Pizza'].toString() + ` - ${priceCounts["Margherita Pizza"]}$`;
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

document.getElementById('Pepperoni_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Pepperoni Pizza', 'price':'10.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Pepperoni Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Pepperoni Pizza x${valueCounts['Pepperoni Pizza']} - ${priceCounts['Pepperoni Pizza']}$`) {
                    exists = true;
                    valueCounts['Pepperoni Pizza']++;
                    priceCounts['Pepperoni Pizza'] += 10.99;
                    focus[i].textContent = 'Pepperoni Pizza x' + valueCounts['Pepperoni Pizza'].toString() + ` - ${priceCounts['Pepperoni Pizza']}$`;
                }
            }
        } else {
            valueCounts['Pepperoni Pizza'] = 1;
            priceCounts['Pepperoni Pizza'] = 10.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Pepperoni Pizza x' + valueCounts['Pepperoni Pizza'].toString() + ` - ${priceCounts['Pepperoni Pizza']}$`;
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

document.getElementById('BBQ_Chicken_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'BBQ Chicken Pizza', 'price':'12.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['BBQ Chicken Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `BBQ Chicken Pizza x${valueCounts['BBQ Chicken Pizza']} - ${priceCounts["BBQ Chicken Pizza"]}$`) {
                    exists = true;
                    valueCounts['BBQ Chicken Pizza']++;
                    priceCounts["BBQ Chicken Pizza"] += 12.49;
                    focus[i].textContent = 'BBQ Chicken Pizza x' + valueCounts['BBQ Chicken Pizza'].toString() + ` - ${priceCounts["BBQ Chicken Pizza"]}$`
                }
            }
        } else {
            valueCounts['BBQ Chicken Pizza'] = 1;
            priceCounts["BBQ Chicken Pizza"] = 12.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'BBQ Chicken Pizza x' + valueCounts['BBQ Chicken Pizza'].toString() + ` - ${priceCounts["BBQ Chicken Pizza"]}$`;
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

document.getElementById('Hawaiian_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Hawaiian Pizza', 'price':'11.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Hawaiian Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Hawaiian Pizza x${valueCounts['Hawaiian Pizza']} - ${priceCounts["Hawaiian Pizza"]}$`) {
                    exists = true;
                    valueCounts['Hawaiian Pizza']++;
                    priceCounts["Hawaiian Pizza"] += 11.49;
                    focus[i].textContent = 'Hawaiian Pizza x' + valueCounts['Hawaiian Pizza'].toString() + ` - ${priceCounts["Hawaiian Pizza"]}$`
                }
            }
        } else {
            valueCounts['Hawaiian Pizza'] = 1;
            priceCounts["Hawaiian Pizza"] = 11.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Hawaiian Pizza x' + valueCounts['Hawaiian Pizza'].toString() + ` - ${priceCounts["Hawaiian Pizza"]}$`;
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

document.getElementById('Veggie_Supreme_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Veggie Supreme Pizza', 'price':'11.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Veggie Supreme Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Veggie Supreme Pizza x${valueCounts['Veggie Supreme Pizza']} - ${priceCounts['Veggie Supreme Pizza']}$`) {
                    exists = true;
                    valueCounts['Veggie Supreme Pizza']++;
                    priceCounts['Veggie Supreme Pizza'] += 11.99;
                    focus[i].textContent = 'Veggie Supreme Pizza x' + valueCounts['Veggie Supreme Pizza'].toString() + ` - ${priceCounts['Veggie Supreme Pizza']}$`
                }
            }
        } else {
            valueCounts['Veggie Supreme Pizza'] = 1;
            priceCounts['Veggie Supreme Pizza'] = 11.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Veggie Supreme Pizza x' + valueCounts['Veggie Supreme Pizza'].toString() + ` - ${priceCounts['Veggie Supreme Pizza']}$`;
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

document.getElementById('Meat_Lovers_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Meat Lovers Pizza', 'price':'13.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Meat Lovers Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Meat Lovers Pizza x${valueCounts['Meat Lovers Pizza']} - ${priceCounts['Meat Lovers Pizza']}$`) {
                    exists = true;
                    valueCounts['Meat Lovers Pizza']++;
                    priceCounts['Meat Lovers Pizza'] += 13.49;
                    focus[i].textContent = 'Meat Lovers Pizza x' + valueCounts['Meat Lovers Pizza'].toString() + ` - ${priceCounts['Meat Lovers Pizza']}$`
                }
            }
        } else {
            valueCounts['Meat Lovers Pizza'] = 1;
            priceCounts['Meat Lovers Pizza'] = 13.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Meat Lovers Pizza x' + valueCounts['Meat Lovers Pizza'].toString() + ` - ${priceCounts['Meat Lovers Pizza']}$`;
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

document.getElementById('Four_Cheese_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Four Cheese Pizza', 'price':'10.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Four Cheese Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Four Cheese Pizza x${valueCounts['Four Cheese Pizza']} - ${priceCounts['Four Cheese Pizza']}$`) {
                    exists = true;
                    valueCounts['Four Cheese Pizza']++;
                    priceCounts['Four Cheese Pizza'] += 10.99;
                    focus[i].textContent = 'Four Cheese Pizza x' + valueCounts['Four Cheese Pizza'].toString() + ` - ${priceCounts['Four Cheese Pizza']}$`
                }
            }
        } else {
            valueCounts['Four Cheese Pizza'] = 1;
            priceCounts['Four Cheese Pizza'] = 10.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Four Cheese Pizza x' + valueCounts['Four Cheese Pizza'].toString() + ` - ${priceCounts['Four Cheese Pizza']}$`;
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

document.getElementById('Buffalo_Chicken_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Buffalo Chicken Pizza', 'price':'12.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Buffalo Chicken Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Buffalo Chicken Pizza x${valueCounts['Buffalo Chicken Pizza']} - ${priceCounts["Buffalo Chicken Pizza"]}$`) {
                    exists = true;
                    valueCounts['Buffalo Chicken Pizza']++;
                    priceCounts["Buffalo Chicken Pizza"] += 12.99;
                    focus[i].textContent = 'Buffalo Chicken Pizza x' + valueCounts['Buffalo Chicken Pizza'].toString() + ` - ${priceCounts["Buffalo Chicken Pizza"]}$`
                }
            }
        } else {
            valueCounts['Buffalo Chicken Pizza'] = 1;
            priceCounts["Buffalo Chicken Pizza"] = 12.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Buffalo Chicken Pizza x' + valueCounts['Buffalo Chicken Pizza'].toString() + ` - ${priceCounts["Buffalo Chicken Pizza"]}$`;
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

document.getElementById('Spinach_and_Feta_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Spinach and Feta Pizza', 'price':'11.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Spinach and Feta Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Spinach and Feta Pizza x${valueCounts['Spinach and Feta Pizza']} - ${priceCounts["Spinach and Feta Pizza"]}$`) {
                    exists = true;
                    valueCounts['Spinach and Feta Pizza']++;
                    priceCounts["Spinach and Feta Pizza"] += 11.49;
                    focus[i].textContent = 'Spinach and Feta Pizza x' + valueCounts['Spinach and Feta Pizza'].toString() + ` - ${priceCounts["Spinach and Feta Pizza"]}$`
                }
            }
        } else {
            valueCounts['Spinach and Feta Pizza'] = 1;
            priceCounts["Spinach and Feta Pizza"] = 11.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Spinach and Feta Pizza x' + valueCounts['Spinach and Feta Pizza'].toString() + ` - ${priceCounts["Spinach and Feta Pizza"]}$`;
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

document.getElementById('Mushroom_and_Truffle_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Mushroom and Truffle Pizza', 'price':'12.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Mushroom and Truffle Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Mushroom and Truffle Pizza x${valueCounts['Mushroom and Truffle Pizza']} - ${priceCounts["Mushroom and Truffle Pizza"]}$`) {
                    exists = true;
                    valueCounts['Mushroom and Truffle Pizza']++;
                    priceCounts["Mushroom and Truffle Pizza"] += 12.99;
                    focus[i].textContent = 'Mushroom and Truffle Pizza x' + valueCounts['Mushroom and Truffle Pizza'].toString() + ` - ${priceCounts["Mushroom and Truffle Pizza"]}$`;
                }
            }
        } else {
            valueCounts['Mushroom and Truffle Pizza'] = 1;
            priceCounts["Mushroom and Truffle Pizza"] = 12.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Mushroom and Truffle Pizza x' + valueCounts['Mushroom and Truffle Pizza'].toString() + ` - ${priceCounts["Mushroom and Truffle Pizza"]}$`;
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

document.getElementById('Italian_Sausage_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Italian Sausage Pizza', 'price':'11.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Italian Sausage Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Italian Sausage Pizza x${valueCounts['Italian Sausage Pizza']} - ${priceCounts["Italian Sausage Pizza"]}$`) {
                    exists = true;
                    valueCounts['Italian Sausage Pizza']++;
                    priceCounts["Italian Sausage Pizza"] += 11.99;
                    focus[i].textContent = 'Italian Sausage Pizza x' + valueCounts['Italian Sausage Pizza'].toString() + ` - ${priceCounts["Italian Sausage Pizza"]}$`;
                }
            }
        } else {
            valueCounts['Italian Sausage Pizza'] = 1;
            priceCounts["Italian Sausage Pizza"] = 11.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Italian Sausage Pizza x' + valueCounts['Italian Sausage Pizza'].toString() + ` - ${priceCounts["Italian Sausage Pizza"]}$`;
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

document.getElementById('Caprese_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Caprese Pizza', 'price':'11.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Caprese Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Caprese Pizza x${valueCounts['Caprese Pizza']} - ${priceCounts["Caprese Pizza"]}$`) {
                    exists = true;
                    valueCounts['Caprese Pizza']++;
                    priceCounts["Caprese Pizza"] += 11.49;
                    focus[i].textContent = 'Caprese Pizza x' + valueCounts['Caprese Pizza'].toString() + ` - ${priceCounts["Caprese Pizza"]}$`;
                }
            }
        } else {
            valueCounts['Caprese Pizza'] = 1;
            priceCounts["Caprese Pizza"] = 11.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Caprese Pizza x' + valueCounts['Caprese Pizza'].toString() + ` - ${priceCounts["Caprese Pizza"]}$`;
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

document.getElementById('Taco_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Taco Pizza', 'price':'12.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Taco Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Taco Pizza x${valueCounts['Taco Pizza']} - ${priceCounts["Taco Pizza"]}$`) {
                    exists = true;
                    valueCounts['Taco Pizza']++;
                    priceCounts["Taco Pizza"] += 12.99;
                    focus[i].textContent = 'Taco Pizza x' + valueCounts['Taco Pizza'].toString() + ` - ${priceCounts["Taco Pizza"]}$`
                }
            }
        } else {
            valueCounts['Taco Pizza'] = 1;
            priceCounts["Taco Pizza"] = 12.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Taco Pizza x' + valueCounts['Taco Pizza'].toString() + ` - ${priceCounts["Taco Pizza"]}$`;
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

document.getElementById('White_Garlic_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'White Garlic Pizza', 'price':'10.99'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['White Garlic Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `White Garlic Pizza x${valueCounts['White Garlic Pizza']} - ${priceCounts["White Garlic Pizza"]}$`) {
                    exists = true;
                    valueCounts['White Garlic Pizza']++;
                    priceCounts["White Garlic Pizza"] += 7.99;
                    focus[i].textContent = 'White Garlic Pizza x' + valueCounts['White Garlic Pizza'].toString() + ` - ${priceCounts["White Garlic Pizza"]}$`;
                }
            }
        } else {
            valueCounts['White Garlic Pizza'] = 1;
            priceCounts["White Garlic Pizza"] = 10.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'White Garlic Pizza x' + valueCounts['White Garlic Pizza'].toString() + ` - ${priceCounts["White Garlic Pizza"]}$`;
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

document.getElementById('Pesto_Chicken_Pizza').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Pesto Chicken Pizza', 'price':'12.49'})
    })
    .then(response => response.json())
    .then(data => {
        cart = document.getElementById('cart');
        cart.style.display = 'grid';
        if (valueCounts['Pesto Chicken Pizza']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Pesto Chicken Pizza x${valueCounts['Pesto Chicken Pizza']} - ${priceCounts["Pesto Chicken Pizza"]}$`) {
                    exists = true;
                    valueCounts['Pesto Chicken Pizza']++;
                    priceCounts["Pesto Chicken Pizza"] += 12.49;
                    focus[i].textContent = 'Pesto Chicken Pizza x' + valueCounts['Pesto Chicken Pizza'].toString() + ` - ${priceCounts["Pesto Chicken Pizza"]}$`
                }
            }
        } else {
            valueCounts['Pesto Chicken Pizza'] = 1;
            priceCounts["Pesto Chicken Pizza"] = 12.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Pesto Chicken Pizza x' + valueCounts['Pesto Chicken Pizza'].toString() + ` - ${priceCounts["Pesto Chicken Pizza"]}$`;
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