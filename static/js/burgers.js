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

document.getElementById('Classic_Cheeseburger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Classic Cheeseburger', 'price':'6.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Classic Cheeseburger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Classic Cheeseburger x${valueCounts['Classic Cheeseburger']} - ${priceCounts["Classic Cheeseburger"]}$`) {
                    exists = true;
                    valueCounts['Classic Cheeseburger']++;
                    priceCounts['Classic Cheeseburger'] += 6.99;
                    focus[i].textContent = 'Classic Cheeseburger x' + valueCounts['Classic Cheeseburger'].toString() + ` - ${priceCounts["Classic Cheeseburger"]}$`
                }
            }
        } else {
            valueCounts['Classic Cheeseburger'] = 1;
            priceCounts['Classic Cheeseburger'] = 6.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Classic Cheeseburger x' + valueCounts['Classic Cheeseburger'].toString() + ` - ${priceCounts["Classic Cheeseburger"]}$`;
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

document.getElementById('Bacon_Cheeseburger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Bacon Cheeseburger', 'price':'7.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Bacon Cheeseburger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Bacon Cheeseburger x${valueCounts['Bacon Cheeseburger']} - ${priceCounts['Bacon Cheeseburger']}$`) {
                    exists = true;
                    valueCounts['Bacon Cheeseburger']++;
                    priceCounts['Bacon Cheeseburger'] += 7.99;
                    focus[i].textContent = 'Bacon Cheeseburger x' + valueCounts['Bacon Cheeseburger'].toString() + ` - ${priceCounts['Bacon Cheeseburger']}$`;
                }
            }
        } else {
            valueCounts['Bacon Cheeseburger'] = 1;
            priceCounts['Bacon Cheeseburger'] = 7.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Bacon Cheeseburger x' + valueCounts['Bacon Cheeseburger'].toString() + ` - ${priceCounts['Bacon Cheeseburger']}$`;
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

document.getElementById('Double_Cheeseburger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Double Cheeseburger', 'price':'8.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Double Cheeseburger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Double Cheeseburger x${valueCounts['Double Cheeseburger']} - ${priceCounts["Double Cheeseburger"]}$`) {
                    exists = true;
                    valueCounts['Double Cheeseburger']++;
                    priceCounts["Double Cheeseburger"] += 8.99;
                    focus[i].textContent = 'Double Cheeseburger x' + valueCounts['Double Cheeseburger'].toString() + ` - ${priceCounts["Double Cheeseburger"]}$`
                }
            }
        } else {
            valueCounts['Double Cheeseburger'] = 1;
            priceCounts["Double Cheeseburger"] = 8.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Double Cheeseburger x' + valueCounts['Double Cheeseburger'].toString() + ` - ${priceCounts["Double Cheeseburger"]}$`;
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

document.getElementById('Mushroom_Swiss_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Mushroom Swiss Burger', 'price':'7.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Mushroom Swiss Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Mushroom Swiss Burger x${valueCounts['Mushroom Swiss Burger']} - ${priceCounts["Mushroom Swiss Burger"]}$`) {
                    exists = true;
                    valueCounts['Mushroom Swiss Burger']++;
                    priceCounts["Mushroom Swiss Burger"] += 7.99;
                    focus[i].textContent = 'Mushroom Swiss Burger x' + valueCounts['Mushroom Swiss Burger'].toString() + ` - ${priceCounts["Mushroom Swiss Burger"]}$`
                }
            }
        } else {
            valueCounts['Mushroom Swiss Burger'] = 1;
            priceCounts["Mushroom Swiss Burger"] = 7.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Mushroom Swiss Burger x' + valueCounts['Mushroom Swiss Burger'].toString() + ` - ${priceCounts["Mushroom Swiss Burger"]}$`;
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

document.getElementById('BBQ_Bacon_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'BBQ Bacon Burger', 'price':'8.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['BBQ Bacon Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `BBQ Bacon Burger x${valueCounts['BBQ Bacon Burger']} - ${priceCounts['BBQ Bacon Burger']}$`) {
                    exists = true;
                    valueCounts['BBQ Bacon Burger']++;
                    priceCounts['BBQ Bacon Burger'] += 8.49;
                    focus[i].textContent = 'BBQ Bacon Burger x' + valueCounts['BBQ Bacon Burger'].toString() + ` - ${priceCounts['BBQ Bacon Burger']}$`
                }
            }
        } else {
            valueCounts['BBQ Bacon Burger'] = 1;
            priceCounts['BBQ Bacon Burger'] = 8.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'BBQ Bacon Burger x' + valueCounts['BBQ Bacon Burger'].toString() + ` - ${priceCounts['BBQ Bacon Burger']}$`;
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

document.getElementById('Avocado_Bacon_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Avocado Bacon Burger', 'price':'8.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Avocado Bacon Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Avocado Bacon Burger x${valueCounts['Avocado Bacon Burger']} - ${priceCounts['Avocado Bacon Burger']}$`) {
                    exists = true;
                    valueCounts['Avocado Bacon Burger']++;
                    priceCounts['Avocado Bacon Burger'] += 8.99;
                    focus[i].textContent = 'Avocado Bacon Burger x' + valueCounts['Avocado Bacon Burger'].toString() + ` - ${priceCounts['Avocado Bacon Burger']}$`
                }
            }
        } else {
            valueCounts['Avocado Bacon Burger'] = 1;
            priceCounts['Avocado Bacon Burger'] = 8.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Avocado Bacon Burger x' + valueCounts['Avocado Bacon Burger'].toString() + ` - ${priceCounts['Avocado Bacon Burger']}$`;
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

document.getElementById('Blue_Cheese_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Blue Cheese Burger', 'price':'7.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Blue Cheese Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Blue Cheese Burger x${valueCounts['Blue Cheese Burger']} - ${priceCounts['Blue Cheese Burger']}$`) {
                    exists = true;
                    valueCounts['Blue Cheese Burger']++;
                    priceCounts['Blue Cheese Burger'] += 7.99;
                    focus[i].textContent = 'Blue Cheese Burger x' + valueCounts['Blue Cheese Burger'].toString() + ` - ${priceCounts['Blue Cheese Burger']}$`
                }
            }
        } else {
            valueCounts['Blue Cheese Burger'] = 1;
            priceCounts['Blue Cheese Burger'] = 7.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Blue Cheese Burger x' + valueCounts['Blue Cheese Burger'].toString() + ` - ${priceCounts['Blue Cheese Burger']}$`;
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

document.getElementById('Veggie_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Veggie Burger', 'price':'6.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Veggie Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Veggie Burger x${valueCounts['Veggie Burger']} - ${priceCounts["Veggie Burger"]}$`) {
                    exists = true;
                    valueCounts['Veggie Burger']++;
                    priceCounts["Veggie Burger"] += 6.99;
                    focus[i].textContent = 'Veggie Burger x' + valueCounts['Veggie Burger'].toString() + ` - ${priceCounts["Veggie Burger"]}$`
                }
            }
        } else {
            valueCounts['Veggie Burger'] = 1;
            priceCounts["Veggie Burger"] = 6.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Veggie Burger x' + valueCounts['Veggie Burger'].toString() + ` - ${priceCounts["Veggie Burger"]}$`;
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

document.getElementById('Spicy_Jalapeño_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Spicy Jalapeño Burger', 'price':'7.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Spicy Jalapeño Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Spicy Jalapeño Burger x${valueCounts['Spicy Jalapeño Burger']} - ${priceCounts["Spicy Jalapeño Burger"]}$`) {
                    exists = true;
                    valueCounts['Spicy Jalapeño Burger']++;
                    priceCounts["Spicy Jalapeño Burger"] += 7.49;
                    focus[i].textContent = 'Spicy Jalapeño Burger x' + valueCounts['Spicy Jalapeño Burger'].toString() + ` - ${priceCounts["Spicy Jalapeño Burger"]}$`
                }
            }
        } else {
            valueCounts['Spicy Jalapeño Burger'] = 1;
            priceCounts["Spicy Jalapeño Burger"] = 7.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Spicy Jalapeño Burger x' + valueCounts['Spicy Jalapeño Burger'].toString() + ` - ${priceCounts["Spicy Jalapeño Burger"]}$`;
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

document.getElementById('Turkey_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Turkey Burger', 'price':'7.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Turkey Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Turkey Burger x${valueCounts['Turkey Burger']} - ${priceCounts["Turkey Burger"]}$`) {
                    exists = true;
                    valueCounts['Turkey Burger']++;
                    priceCounts["Turkey Burger"] += 7.49;
                    focus[i].textContent = 'Turkey Burger x' + valueCounts['Turkey Burger'].toString() + ` - ${priceCounts["Turkey Burger"]}$`;
                }
            }
        } else {
            valueCounts['Turkey Burger'] = 1;
            priceCounts["Turkey Burger"] = 7.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Turkey Burger x' + valueCounts['Turkey Burger'].toString() + ` - ${priceCounts["Turkey Burger"]}$`;
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

document.getElementById('Buffalo_Chicken_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Buffalo Chicken Burger', 'price':'7.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Buffalo Chicken Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Buffalo Chicken Burger x${valueCounts['Buffalo Chicken Burger']} - ${priceCounts["Buffalo Chicken Burger"]}$`) {
                    exists = true;
                    valueCounts['Buffalo Chicken Burger']++;
                    priceCounts["Buffalo Chicken Burger"] += 7.99;
                    focus[i].textContent = 'Buffalo Chicken Burger x' + valueCounts['Buffalo Chicken Burger'].toString() + ` - ${priceCounts["Buffalo Chicken Burger"]}$`;
                }
            }
        } else {
            valueCounts['Buffalo Chicken Burger'] = 1;
            priceCounts["Buffalo Chicken Burger"] = 7.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Buffalo Chicken Burger x' + valueCounts['Buffalo Chicken Burger'].toString() + ` - ${priceCounts["Buffalo Chicken Burger"]}$`;
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

document.getElementById('Teriyaki_Pineapple_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Teriyaki Pineapple Burger', 'price':'7.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Teriyaki Pineapple Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Teriyaki Pineapple Burger x${valueCounts['Teriyaki Pineapple Burger']} - ${priceCounts["Teriyaki Pineapple Burger"]}$`) {
                    exists = true;
                    valueCounts['Teriyaki Pineapple Burger']++;
                    priceCounts["Teriyaki Pineapple Burger"] += 7.49;
                    focus[i].textContent = 'Teriyaki Pineapple Burger x' + valueCounts['Teriyaki Pineapple Burger'].toString() + ` - ${priceCounts["Teriyaki Pineapple Burger"]}$`;
                }
            }
        } else {
            valueCounts['Teriyaki Pineapple Burger'] = 1;
            priceCounts["Teriyaki Pineapple Burger"] = 7.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Teriyaki Pineapple Burger x' + valueCounts['Teriyaki Pineapple Burger'].toString() + ` - ${priceCounts["Teriyaki Pineapple Burger"]}$`;
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

document.getElementById('Black_Bean_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Black Bean Burger', 'price':'6.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Black Bean Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Black Bean Burger x${valueCounts['Black Bean Burger']} - ${priceCounts["Black Bean Burger"]}$`) {
                    exists = true;
                    valueCounts['Black Bean Burger']++;
                    priceCounts["Black Bean Burger"] += 6.99;
                    focus[i].textContent = 'Black Bean Burger x' + valueCounts['Black Bean Burger'].toString() + ` - ${priceCounts["Black Bean Burger"]}$`
                }
            }
        } else {
            valueCounts['Black Bean Burger'] = 1;
            priceCounts["Black Bean Burger"] = 6.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Black Bean Burger x' + valueCounts['Black Bean Burger'].toString() + ` - ${priceCounts["Black Bean Burger"]}$`;
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

document.getElementById('Chili_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Chili Burger', 'price':'7.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Chili Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Chili Burger x${valueCounts['Chili Burger']} - ${priceCounts["Chili Burger"]}$`) {
                    exists = true;
                    valueCounts['Chili Burger']++;
                    priceCounts["Chili Burger"] += 7.99;
                    focus[i].textContent = 'Chili Burger x' + valueCounts['Chili Burger'].toString() + ` - ${priceCounts["Chili Burger"]}$`;
                }
            }
        } else {
            valueCounts['Chili Burger'] = 1;
            priceCounts["Chili Burger"] = 7.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Chili Burger x' + valueCounts['Chili Burger'].toString() + ` - ${priceCounts["Chili Burger"]}$`;
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

document.getElementById('Greek_Lamb_Burger').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Greek Lamb Burger', 'price':'9.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Greek Lamb Burger']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Greek Lamb Burger x${valueCounts['Greek Lamb Burger']} - ${priceCounts["Greek Lamb Burger"]}$`) {
                    exists = true;
                    valueCounts['Greek Lamb Burger']++;
                    priceCounts["Greek Lamb Burger"] += 9.49;
                    focus[i].textContent = 'Greek Lamb Burger x' + valueCounts['Greek Lamb Burger'].toString() + ` - ${priceCounts["Greek Lamb Burger"]}$`
                }
            }
        } else {
            valueCounts['Greek Lamb Burger'] = 1;
            priceCounts["Greek Lamb Burger"] = 9.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Greek Lamb Burger x' + valueCounts['Greek Lamb Burger'].toString() + ` - ${priceCounts["Greek Lamb Burger"]}$`;
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