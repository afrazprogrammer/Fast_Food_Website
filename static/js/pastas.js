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

document.getElementById('Spaghetti_Marinara').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Spaghetti Marinara', 'price':'9.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Spaghetti Marinara']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Spaghetti Marinara x${valueCounts['Spaghetti Marinara']} - ${priceCounts["Spaghetti Marinara"]}$`) {
                    exists = true;
                    valueCounts['Spaghetti Marinara']++;
                    priceCounts['Spaghetti Marinara'] += 9.99;
                    focus[i].textContent = 'Spaghetti Marinara x' + valueCounts['Spaghetti Marinara'].toString() + ` - ${priceCounts["Spaghetti Marinara"]}$`
                }
            }
        } else {
            valueCounts['Spaghetti Marinara'] = 1;
            priceCounts['Spaghetti Marinara'] = 9.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Spaghetti Marinara x' + valueCounts['Spaghetti Marinara'].toString() + ` - ${priceCounts["Spaghetti Marinara"]}$`;
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

document.getElementById('Fettuccine_Alfredo').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Fettuccine Alfredo', 'price':'10.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Fettuccine Alfredo']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Fettuccine Alfredo x${valueCounts['Fettuccine Alfredo']} - ${priceCounts['Fettuccine Alfredo']}$`) {
                    exists = true;
                    valueCounts['Fettuccine Alfredo']++;
                    priceCounts['Fettuccine Alfredo'] += 10.99;
                    focus[i].textContent = 'Fettuccine Alfredo x' + valueCounts['Fettuccine Alfredo'].toString() + ` - ${priceCounts['Fettuccine Alfredo']}$`;
                }
            }
        } else {
            valueCounts['Fettuccine Alfredo'] = 1;
            priceCounts['Fettuccine Alfredo'] = 10.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Fettuccine Alfredo x' + valueCounts['Fettuccine Alfredo'].toString() + ` - ${priceCounts['Fettuccine Alfredo']}$`;
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

document.getElementById('Penne_Arrabbiata').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Penne Arrabbiata', 'price':'10.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Penne Arrabbiata']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Penne Arrabbiata x${valueCounts['Penne Arrabbiata']} - ${priceCounts["Penne Arrabbiata"]}$`) {
                    exists = true;
                    valueCounts['Penne Arrabbiata']++;
                    priceCounts["Penne Arrabbiata"] += 10.49;
                    focus[i].textContent = 'Penne Arrabbiata x' + valueCounts['Penne Arrabbiata'].toString() + ` - ${priceCounts["Penne Arrabbiata"]}$`
                }
            }
        } else {
            valueCounts['Penne Arrabbiata'] = 1;
            priceCounts["Penne Arrabbiata"] = 10.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Penne Arrabbiata x' + valueCounts['Penne Arrabbiata'].toString() + ` - ${priceCounts["Penne Arrabbiata"]}$`;
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

document.getElementById('Lasagna_Bolognese').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Lasagna Bolognese', 'price':'12.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Lasagna Bolognese']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Lasagna Bolognese x${valueCounts['Lasagna Bolognese']} - ${priceCounts["Lasagna Bolognese"]}$`) {
                    exists = true;
                    valueCounts['Lasagna Bolognese']++;
                    priceCounts["Lasagna Bolognese"] += 12.99;
                    focus[i].textContent = 'Lasagna Bolognese x' + valueCounts['Lasagna Bolognese'].toString() + ` - ${priceCounts["Lasagna Bolognese"]}$`
                }
            }
        } else {
            valueCounts['Lasagna Bolognese'] = 1;
            priceCounts["Lasagna Bolognese"] = 12.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Lasagna Bolognese x' + valueCounts['Lasagna Bolognese'].toString() + ` - ${priceCounts["Lasagna Bolognese"]}$`;
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

document.getElementById('Chicken_Pesto_Pasta').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Chicken Pesto Pasta', 'price':'11.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Chicken Pesto Pasta']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Chicken Pesto Pasta x${valueCounts['Chicken Pesto Pasta']} - ${priceCounts['Chicken Pesto Pasta']}$`) {
                    exists = true;
                    valueCounts['Chicken Pesto Pasta']++;
                    priceCounts['Chicken Pesto Pasta'] += 11.99;
                    focus[i].textContent = 'Chicken Pesto Pasta x' + valueCounts['Chicken Pesto Pasta'].toString() + ` - ${priceCounts['Chicken Pesto Pasta']}$`
                }
            }
        } else {
            valueCounts['Chicken Pesto Pasta'] = 1;
            priceCounts['Chicken Pesto Pasta'] = 11.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Chicken Pesto Pasta x' + valueCounts['Chicken Pesto Pasta'].toString() + ` - ${priceCounts['Chicken Pesto Pasta']}$`;
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

document.getElementById('Shrimp_Scampi_Linguine').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Shrimp Scampi Linguine', 'price':'13.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Shrimp Scampi Linguine']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Shrimp Scampi Linguine x${valueCounts['Shrimp Scampi Linguine']} - ${priceCounts['Shrimp Scampi Linguine']}$`) {
                    exists = true;
                    valueCounts['Shrimp Scampi Linguine']++;
                    priceCounts['Shrimp Scampi Linguine'] += 13.49;
                    focus[i].textContent = 'Shrimp Scampi Linguine x' + valueCounts['Shrimp Scampi Linguine'].toString() + ` - ${priceCounts['Shrimp Scampi Linguine']}$`
                }
            }
        } else {
            valueCounts['Shrimp Scampi Linguine'] = 1;
            priceCounts['Shrimp Scampi Linguine'] = 13.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Shrimp Scampi Linguine x' + valueCounts['Shrimp Scampi Linguine'].toString() + ` - ${priceCounts['Shrimp Scampi Linguine']}$`;
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

document.getElementById('Vegetable_Primavera').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Vegetable Primavera', 'price':'10.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Vegetable Primavera']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Vegetable Primavera x${valueCounts['Vegetable Primavera']} - ${priceCounts['Vegetable Primavera']}$`) {
                    exists = true;
                    valueCounts['Vegetable Primavera']++;
                    priceCounts['Vegetable Primavera'] += 10.99;
                    focus[i].textContent = 'Vegetable Primavera x' + valueCounts['Vegetable Primavera'].toString() + ` - ${priceCounts['Vegetable Primavera']}$`
                }
            }
        } else {
            valueCounts['Vegetable Primavera'] = 1;
            priceCounts['Vegetable Primavera'] = 10.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Vegetable Primavera x' + valueCounts['Vegetable Primavera'].toString() + ` - ${priceCounts['Vegetable Primavera']}$`;
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

document.getElementById('Four_Cheese_Ravioli').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Four Cheese Ravioli', 'price':'11.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Four Cheese Ravioli']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Four Cheese Ravioli x${valueCounts['Four Cheese Ravioli']} - ${priceCounts["Four Cheese Ravioli"]}$`) {
                    exists = true;
                    valueCounts['Four Cheese Ravioli']++;
                    priceCounts["Four Cheese Ravioli"] += 11.99;
                    focus[i].textContent = 'Four Cheese Ravioli x' + valueCounts['Four Cheese Ravioli'].toString() + ` - ${priceCounts["Four Cheese Ravioli"]}$`
                }
            }
        } else {
            valueCounts['Four Cheese Ravioli'] = 1;
            priceCounts["Four Cheese Ravioli"] = 11.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Four Cheese Ravioli x' + valueCounts['Four Cheese Ravioli'].toString() + ` - ${priceCounts["Four Cheese Ravioli"]}$`;
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

document.getElementById('Baked_Ziti').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Baked Ziti', 'price':'10.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Baked Ziti']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Baked Ziti x${valueCounts['Baked Ziti']} - ${priceCounts["Baked Ziti"]}$`) {
                    exists = true;
                    valueCounts['Baked Ziti']++;
                    priceCounts["Baked Ziti"] += 10.99;
                    focus[i].textContent = 'Baked Ziti x' + valueCounts['Baked Ziti'].toString() + ` - ${priceCounts["Baked Ziti"]}$`
                }
            }
        } else {
            valueCounts['Baked Ziti'] = 1;
            priceCounts["Baked Ziti"] = 10.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Baked Ziti x' + valueCounts['Baked Ziti'].toString() + ` - ${priceCounts["Baked Ziti"]}$`;
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

document.getElementById('Carbonara').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Carbonara', 'price':'12.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Carbonara']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Carbonara x${valueCounts['Carbonara']} - ${priceCounts["Carbonara"]}$`) {
                    exists = true;
                    valueCounts['Carbonara']++;
                    priceCounts["Carbonara"] += 12.49;
                    focus[i].textContent = 'Carbonara x' + valueCounts['Carbonara'].toString() + ` - ${priceCounts["Carbonara"]}$`;
                }
            }
        } else {
            valueCounts['Carbonara'] = 1;
            priceCounts["Carbonara"] = 12.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Carbonara x' + valueCounts['Carbonara'].toString() + ` - ${priceCounts["Carbonara"]}$`;
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

document.getElementById('Beef_Stroganoff').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Beef Stroganoff', 'price':'12.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Beef Stroganoff']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Beef Stroganoff x${valueCounts['Beef Stroganoff']} - ${priceCounts["Beef Stroganoff"]}$`) {
                    exists = true;
                    valueCounts['Beef Stroganoff']++;
                    priceCounts["Beef Stroganoff"] += 12.99;
                    focus[i].textContent = 'Beef Stroganoff x' + valueCounts['Beef Stroganoff'].toString() + ` - ${priceCounts["Beef Stroganoff"]}$`;
                }
            }
        } else {
            valueCounts['Beef Stroganoff'] = 1;
            priceCounts["Beef Stroganoff"] = 12.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Beef Stroganoff x' + valueCounts['Beef Stroganoff'].toString() + ` - ${priceCounts["Beef Stroganoff"]}$`;
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

document.getElementById('Pasta_Aglio_e_Olio').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Pasta Aglio e Olio', 'price':'9.49'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Pasta Aglio e Olio']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Pasta Aglio e Olio x${valueCounts['Pasta Aglio e Olio']} - ${priceCounts["Pasta Aglio e Olio"]}$`) {
                    exists = true;
                    valueCounts['Pasta Aglio e Olio']++;
                    priceCounts["Pasta Aglio e Olio"] += 9.49;
                    focus[i].textContent = 'Pasta Aglio e Olio x' + valueCounts['Pasta Aglio e Olio'].toString() + ` - ${priceCounts["Pasta Aglio e Olio"]}$`;
                }
            }
        } else {
            valueCounts['Pasta Aglio e Olio'] = 1;
            priceCounts["Pasta Aglio e Olio"] = 9.49;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Pasta Aglio e Olio x' + valueCounts['Pasta Aglio e Olio'].toString() + ` - ${priceCounts["Pasta Aglio e Olio"]}$`;
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

document.getElementById('Mac_and_Cheese').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Mac and Cheese', 'price':'9.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Mac and Cheese']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Mac and Cheese x${valueCounts['Mac and Cheese']} - ${priceCounts["Mac and Cheese"]}$`) {
                    exists = true;
                    valueCounts['Mac and Cheese']++;
                    priceCounts["Mac and Cheese"] += 9.99;
                    focus[i].textContent = 'Mac and Cheese x' + valueCounts['Mac and Cheese'].toString() + ` - ${priceCounts["Mac and Cheese"]}$`
                }
            }
        } else {
            valueCounts['Mac and Cheese'] = 1;
            priceCounts["Mac and Cheese"] = 9.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Mac and Cheese x' + valueCounts['Mac and Cheese'].toString() + ` - ${priceCounts["Mac and Cheese"]}$`;
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

document.getElementById('Seafood_Alfredo').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Seafood Alfredo', 'price':'14.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Seafood Alfredo']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Seafood Alfredo x${valueCounts['Seafood Alfredo']} - ${priceCounts["Seafood Alfredo"]}$`) {
                    exists = true;
                    valueCounts['Seafood Alfredo']++;
                    priceCounts["Seafood Alfredo"] += 14.99;
                    focus[i].textContent = 'Seafood Alfredo x' + valueCounts['Seafood Alfredo'].toString() + ` - ${priceCounts["Seafood Alfredo"]}$`;
                }
            }
        } else {
            valueCounts['Seafood Alfredo'] = 1;
            priceCounts["Seafood Alfredo"] = 14.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Seafood Alfredo x' + valueCounts['Seafood Alfredo'].toString() + ` - ${priceCounts["Seafood Alfredo"]}$`;
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

document.getElementById('Chicken_Parmesan_Pasta').addEventListener('click', function() {
    fetch("/menu/burgers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({'burger_type': 'Chicken Parmesan Pasta', 'price':'12.99'})
    })
    .then(response => response.json())
    .then(data => {
        if (valueCounts['Chicken Parmesan Pasta']) {
            let existingElement = document.getElementById("cart_container_s")
            let focus = existingElement.getElementsByTagName('p')

            let exists = false;

            console.log("Focus: ", focus)

            for (let i = 0; i < focus.length; i++) {
                if (focus[i].textContent === `Chicken Parmesan Pasta x${valueCounts['Chicken Parmesan Pasta']} - ${priceCounts["Chicken Parmesan Pasta"]}$`) {
                    exists = true;
                    valueCounts['Chicken Parmesan Pasta']++;
                    priceCounts["Chicken Parmesan Pasta"] += 12.99;
                    focus[i].textContent = 'Chicken Parmesan Pasta x' + valueCounts['Chicken Parmesan Pasta'].toString() + ` - ${priceCounts["Chicken Parmesan Pasta"]}$`
                }
            }
        } else {
            valueCounts['Chicken Parmesan Pasta'] = 1;
            priceCounts["Chicken Parmesan Pasta"] = 12.99;
            // Create a new element (e.g., a new paragraph)
            let newElement = document.createElement('p');
            // Set the content of the new element
            newElement.textContent = 'Chicken Parmesan Pasta x' + valueCounts['Chicken Parmesan Pasta'].toString() + ` - ${priceCounts["Chicken Parmesan Pasta"]}$`;
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