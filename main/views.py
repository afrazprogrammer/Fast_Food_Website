from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from main.models import User, Orders, Reservations, Inventory
from django.views.decorators.csrf import csrf_exempt
import json
import os
import datetime

# Create your views here.

def landing(request):
    name = request.session.get('user')
    print(name)
    context = {
        'name' : name if name else None
    }

    #request.session["name"] = name
    return render(request, 'landing.html', context)

def about(request):
    name = request.session.get('user')

    print(name)

    context = {
        'name' : name if name else ''
    }

    return render(request, "about.html", context)

"""def menu(request):
    name = request.session.get('user')

    context = {
        'name' : name if name else ''
    }

    return render(request, "burgers.html", context)
"""
@csrf_exempt
def menu_burgers(request):
    name = request.session.get('user')
    data = None
    burger = None
    price = None
    if request.method == "POST":
        name = request.session.get('user')
        body = json.loads(request.body)
        burger = body.get('burger_type')
        price = body.get('price')

        context = {
            'message' : 'Added to Cart',
            'data' : [],
            'price' : []
        }
        context['data'].append(burger)
        context['price'].append(price)

        user = User.objects.filter(name=name)
        file_path = f'{user.first().id}.txt'

        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")
            with open(file_path, 'w') as f:
                f.write(f'{burger} - {price} - Burger\n')

                f.close()
        else:
            with open(file_path, 'a') as f:
                f.write(f'{burger} - {price} - Burger\n')

        print(context)
        
        return JsonResponse({'message': 'Data received', 'data': data})

    user = User.objects.filter(name=name)
    file_path = None
    if(name):
        file_path = f'{user.first().id}.txt'

    data = {}
    if file_path != None:
        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")

            context = {
                'name' : name if name else '',
                'message' : 'Added to Cart',
                'data' : None,
            }

            print("Context:", context)
        else:
            with open(file_path, 'r') as f:
                lines = f.readlines()
                sep_lines = []
                for line in lines:
                    sep_lines.append(line.strip())
                    print(line.strip())

            for i in sep_lines:
                burg_price = i.split("-")

                if burg_price[0].strip() not in data.keys():
                    data[burg_price[0].strip()] = [float(burg_price[1].strip()), 1]
                else:
                    data[burg_price[0].strip()][1]+=1
                    data[burg_price[0].strip()] = [data[burg_price[0].strip()][0] + float(burg_price[1].strip()), data[burg_price[0].strip()][1]]

            f.close()

    context = {}
    if len(data) == 0:
        context = {
            'name' : name,
            'message' : 'Orders Not Available',
            'data' : data,
        }
    else:
        context = {
            'name' : name,
            'message' : 'Orders Available',
            'data' : data,
        }
    
    print(context)
    return render(request, "burgers.html", context)

def menu_pizzas(request):
    name = request.session.get('user')
    data = None
    burger = None
    price = None
    if request.method == "POST":
        name = request.session.get('user')
        body = json.loads(request.body)
        burger = body.get('pizza_type')
        price = body.get('price')

        context = {
            'message' : 'Added to Cart',
            'data' : [],
            'price' : []
        }
        context['data'].append(burger)
        context['price'].append(price)

        user = User.objects.filter(name=name)
        file_path = f'{user.first().id}.txt'

        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")
            with open(file_path, 'w') as f:
                f.write(f'{burger} - {price} - Pizza\n')

                f.close()
        else:
            with open(file_path, 'a') as f:
                f.write(f'{burger} - {price} - Pizza\n')

        print(context)
        
        return JsonResponse({'message': 'Data received', 'data': data})

    user = User.objects.filter(name=name)
    file_path = None
    if(name):
        file_path = f'{user.first().id}.txt'

    data = {}

    if file_path != None:
        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")

            context = {
                'name' : name if name else '',
                'message' : 'Added to Cart',
                'data' : None,
            }

            print("Context:", context)
        else:
            with open(file_path, 'r') as f:
                lines = f.readlines()
                sep_lines = []
                for line in lines:
                    sep_lines.append(line.strip())
                    print(line.strip())

            for i in sep_lines:
                burg_price = i.split("-")

                if burg_price[0].strip() not in data.keys():
                    data[burg_price[0].strip()] = [float(burg_price[1].strip()), 1]
                else:
                    data[burg_price[0].strip()][1]+=1
                    data[burg_price[0].strip()] = [data[burg_price[0].strip()][0] + float(burg_price[1].strip()), data[burg_price[0].strip()][1]]
                    print(data)

            f.close()

    context = {}
    if len(data) == 0:
        context = {
            'name' : name,
            'message' : 'Orders Not Available',
            'data' : data,
        }
    else:
        context = {
            'name' : name,
            'message' : 'Orders Available',
            'data' : data,
        }

    print(context)
    return render(request, "pizzas.html", context)

def menu_pastas(request):
    name = request.session.get('user')
    data = None
    burger = None
    price = None
    if request.method == "POST":
        name = request.session.get('user')
        body = json.loads(request.body)
        burger = body.get('pizza_type')
        price = body.get('price')

        context = {
            'message' : 'Added to Cart',
            'data' : [],
            'price' : []
        }
        context['data'].append(burger)
        context['price'].append(price)

        user = User.objects.filter(name=name)
        file_path = f'{user.first().id}.txt'

        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")
            with open(file_path, 'w') as f:
                f.write(f'{burger} - {price} - Pasta\n')

                f.close()
        else:
            with open(file_path, 'a') as f:
                f.write(f'{burger} - {price} - Pasta\n')

        print(context)
        
        return JsonResponse({'message': 'Data received', 'data': data})

    user = User.objects.filter(name=name)
    file_path = None
    if(name):
        file_path = f'{user.first().id}.txt'

    data = {}

    if file_path != None:
        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")

            context = {
                'name' : name if name else '',
                'message' : 'Added to Cart',
                'data' : None,
            }

            print("Context:", context)
        else:
            with open(file_path, 'r') as f:
                lines = f.readlines()
                sep_lines = []
                for line in lines:
                    sep_lines.append(line.strip())
                    print(line.strip())

            for i in sep_lines:
                burg_price = i.split("-")

                if burg_price[0].strip() not in data.keys():
                    data[burg_price[0].strip()] = [float(burg_price[1].strip()), 1]
                else:
                    data[burg_price[0].strip()][1]+=1
                    data[burg_price[0].strip()] = [data[burg_price[0].strip()][0] + float(burg_price[1].strip()), data[burg_price[0].strip()][1]]
                    print(data)

            f.close()

    context = {}
    if len(data) == 0:
        context = {
            'name' : name,
            'message' : 'Orders Not Available',
            'data' : data,
        }
    else:
        context = {
            'name' : name,
            'message' : 'Orders Available',
            'data' : data,
        }

    print(context)
    return render(request, "pastas.html", context)

def menu_fries(request):
    name = request.session.get('user')
    data = None
    burger = None
    price = None
    if request.method == "POST":
        name = request.session.get('user')
        body = json.loads(request.body)
        burger = body.get('pizza_type')
        price = body.get('price')

        context = {
            'message' : 'Added to Cart',
            'data' : [],
            'price' : []
        }
        context['data'].append(burger)
        context['price'].append(price)

        user = User.objects.filter(name=name)
        file_path = f'{user.first().id}.txt'

        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")
            with open(file_path, 'w') as f:
                f.write(f'{burger} - {price} - Fries\n')

                f.close()
        else:
            with open(file_path, 'a') as f:
                f.write(f'{burger} - {price} - Fries\n')

        print(context)
        
        return JsonResponse({'message': 'Data received', 'data': data})

    user = User.objects.filter(name=name)
    file_path = None
    if(name):
        file_path = f'{user.first().id}.txt'

    data = {}

    if file_path != None:
        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")

            context = {
                'name' : name if name else '',
                'message' : 'Added to Cart',
                'data' : None,
            }

            print("Context:", context)
        else:
            with open(file_path, 'r') as f:
                lines = f.readlines()
                sep_lines = []
                for line in lines:
                    sep_lines.append(line.strip())
                    print(line.strip())

            for i in sep_lines:
                burg_price = i.split("-")

                if burg_price[0].strip() not in data.keys():
                    data[burg_price[0].strip()] = [float(burg_price[1].strip()), 1]
                else:
                    data[burg_price[0].strip()][1]+=1
                    data[burg_price[0].strip()] = [data[burg_price[0].strip()][0] + float(burg_price[1].strip()), data[burg_price[0].strip()][1]]
                    print(data)

            f.close()

    context = {}
    if len(data) == 0:
        context = {
            'name' : name,
            'message' : 'Orders Not Available',
            'data' : data,
        }
    else:
        context = {
            'name' : name,
            'message' : 'Orders Available',
            'data' : data,
        }

    print(context)
    return render(request, "fries.html", context)

def menu_cds(request):
    name = request.session.get('user')

    data = None
    burger = None
    price = None
    if request.method == "POST":
        name = request.session.get('user')
        body = json.loads(request.body)
        burger = body.get('pizza_type')
        price = body.get('price')

        context = {
            'message' : 'Added to Cart',
            'data' : [],
            'price' : []
        }
        context['data'].append(burger)
        context['price'].append(price)

        user = User.objects.filter(name=name)
        file_path = f'{user.first().id}.txt'

        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")
            with open(file_path, 'w') as f:
                f.write(f'{burger} - {price} - Drink\n')

                f.close()
        else:
            with open(file_path, 'a') as f:
                f.write(f'{burger} - {price} - Drink\n')

        print(context)
        
        return JsonResponse({'message': 'Data received', 'data': data})

    user = User.objects.filter(name=name)
    file_path = None
    if(name):
        file_path = f'{user.first().id}.txt'

    data = {}

    if file_path != None:
        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")

            context = {
                'name' : name if name else '',
                'message' : 'Added to Cart',
                'data' : None,
            }

            print("Context:", context)
        else:
            with open(file_path, 'r') as f:
                lines = f.readlines()
                sep_lines = []
                for line in lines:
                    sep_lines.append(line.strip())
                    print(line.strip())

            for i in sep_lines:
                burg_price = i.split("-")

                if burg_price[0].strip() not in data.keys():
                    data[burg_price[0].strip()] = [float(burg_price[1].strip()), 1]
                else:
                    data[burg_price[0].strip()][1]+=1
                    data[burg_price[0].strip()] = [data[burg_price[0].strip()][0] + float(burg_price[1].strip()), data[burg_price[0].strip()][1]]
                    print(data)

            f.close()

    context = {}
    if len(data) == 0:
        context = {
            'name' : name,
            'message' : 'Orders Not Available',
            'data' : data,
        }
    else:
        context = {
            'name' : name,
            'message' : 'Orders Available',
            'data' : data,
        }

    print(context)
    return render(request, "cds.html", context)

def reservations(request):
    name = request.session.get('user')

    if not name:
        return render(request, 'login.html')

    if request.method == "POST":
        name_post = request.POST.get('name')
        contact = request.POST.get('contact')
        date = request.POST.get('date')
        time = request.POST.get('time')
        number_of_people = request.POST.get('people')
        table = request.POST.get('table')

        reservation = Reservations(name=name_post, number=contact, date=date, time=time, number_of_people=number_of_people, table_number=table)

        reservation.save()

        print(name_post, contact, date, time, number_of_people, table)

        return render(request, 'landing.html', context={"message":"Reservation Booked"})
    context = {
        'name' : name if name else ''
    }

    return render(request, 'reservations.html', context)

def contact(request):
    name = request.session.get('user')

    context = {
        'name' : name if name else ''
    }

    return render(request, "contact.html", context)

def login(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        user = User.objects.filter(email = email, password = password)
        print(email, password)

        if user.exists():
            user = user.first()
            print(user.name)
            context = {
                'name' : user.name,
                'login' : 'success',
            }
            
            request.session["user"] = user.name
            return render(request, "landing.html", context)
        else:
            return render(request, "login.html")
        
    return render(request, 'login.html')

def signup(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        password = request.POST.get("password")
        contact_no = request.POST.get("contact_no")
        address = request.POST.get("address")
        user = User(name=name, email=email, password=password, contact=contact_no, address=address, usertype="c")
        user.save()
        print(name, email, password, contact_no, address)

        return render(request, "landing.html")
    
    return render(request, "signup.html")

def checkout(request):
    name = request.session.get('user')
    user = User.objects.filter(name=name)
    file_path = None
    if(name):
        file_path = f'{user.first().id}.txt'

    if request.method == "POST":
        cust_id = user.first().id
        address = request.POST.get('address')
        delivery = request.POST.get('delivery')
        instructions = request.POST.get('instructions')
        burgers = []
        pizzas = []
        pastas = []
        fries = []
        drinks = []
        total = []
        now = datetime.datetime.now()
        date = f'{now.year}/{now.month}/{now.day}'
        time = f'{now.hour}:{now.minute}:{now.second}'
        order_complete = False

        with open(file_path, 'r') as f:
            lines = f.readlines()
            sep_lines = []
            for line in lines:
                sep_lines.append(line.strip())
                #print(line.strip())

            sum_ = 0
            for i in sep_lines:
                burg_price = i.split("-")

                if burg_price[2].strip() == "Burger":
                    print("Burger")
                    burgers.append(f'{burg_price[0].strip()} - {burg_price[1].strip()}')
                    sum_ += float(burg_price[1].strip())
                elif burg_price[2].strip() == "Pizza":
                    print("Pizza")
                    pizzas.append(f'{burg_price[0].strip()} - {burg_price[1].strip()}')
                    sum_ += float(burg_price[1].strip())
                elif burg_price[2].strip() == "Pasta":
                    print("Pasta")
                    pastas.append(f'{burg_price[0].strip()} - {burg_price[1].strip()}')
                    sum_ += float(burg_price[1].strip())
                elif burg_price[2].strip() == "Fries":
                    print("Fries")
                    fries.append(f'{burg_price[0].strip()} - {burg_price[1].strip()}')
                    sum_ += float(burg_price[1].strip())
                elif burg_price[2].strip() == "Drink":
                    print("Drink")
                    drinks.append(f'{burg_price[0].strip()} - {burg_price[1].strip()}')
                    sum_ += float(burg_price[1].strip())

            items = {
                'burgers': burgers,
                'pizzas' : pizzas,
                'pastas' : pastas,
                'fries' : fries,
                'drinks' : drinks,
            }

        print(name, cust_id, address, delivery, instructions, items, sum_, date, time, instructions, order_complete)

        order = Orders(cust_id = cust_id, name=name, items=items, delivery=delivery, address=address, amount=sum_, date=date, time=time, instructions=instructions, order_complete=order_complete)
        order.save()

        try:
            os.remove(file_path)
            print(f"File {file_path} has been deleted successfully.")
        except FileNotFoundError:
            print(f"File {file_path} does not exist.")
        except PermissionError:
            print(f"Permission denied: unable to delete {file_path}.")
        except Exception as e:
            print(f"An error occurred: {e}")

        return render(request, 'landing.html', context={"message" : "Order is Confirmed"})


    data = {}
    if file_path != None:
        if not os.path.exists(file_path):
            print(f"{file_path} does not exist. Creating a new file...")

            context = {
                'name' : name if name else '',
                'message' : 'Added to Cart',
                'data' : None,
            }

            print("Context:", context)
        else:
            with open(file_path, 'r') as f:
                lines = f.readlines()
                sep_lines = []
                for line in lines:
                    sep_lines.append(line.strip())
                    print(line.strip())

            for i in sep_lines:
                burg_price = i.split("-")

                if burg_price[0].strip() not in data.keys():
                    data[burg_price[0].strip()] = [float(burg_price[1].strip()), 1]
                else:
                    data[burg_price[0].strip()][1]+=1
                    data[burg_price[0].strip()] = [data[burg_price[0].strip()][0] + float(burg_price[1].strip()), data[burg_price[0].strip()][1]]
                    print(data)

            f.close()

    context = {}
    if len(data) == 0:
        context = {
            'name' : name,
            'message' : 'Orders Not Available',
            'data' : data,
        }
    else:
        context = {
            'name' : name,
            'message' : 'Orders Available',
            'data' : data,
        }
        
        total = 0
        for i, j in context["data"].items():
            print(j)
            total += float(j[0])

        context["data"]['Total'] = [total, '']

    return render(request, 'checkout.html', context)


def bookings(request):
    if request.method == "GET":
        reservation_all = Reservations.objects.all()
        context = {
            'Booking Number' : [],
            'Name' : [],
            'Number' : [],
            'Date' : [],
            'Time' : [],
            'Number of People' : [],
            'Table Number' : [],
        }

        for i in reservation_all:
            print(i.id)
            context['Booking Number'].append(i.id)
            print(i.name)
            context['Name'].append(i.name)
            print(i.number)
            context['Number'].append(i.number)
            print(i.date)
            context['Date'].append(i.date)
            print(i.time)
            context['Time'].append(i.time)
            print(i.number_of_people)
            context['Number of People'].append(i.number_of_people)
            print(i.table_number)
            context['Table Number'].append(i.table_number)

        if len(context['Booking Number']) == 0:
            context = None
        return render(request, 'bookings.html', context = {'data' : context})

    return render(request, 'bookings.html')

def orders(request):
    if request.method == "GET":
        name = request.session.get('user')
        if name:
            user = User.objects.filter(name=name)
            user = user.first()
            orders_all = Orders.objects.filter(cust_id=user.id)

            context = {
                'Order Number' : [],
                'Name' : [],
                'Delivery Type' : [],
                'Address' : [],
                'Total Amount' : [],
                'Date' : [],
                'Time' : [],
                'Instructions' : [],
                'Order Status' : [],
            }

            for i in orders_all:
                print(i.id)
                context['Order Number'].append(i.id)
                print(i.name)
                context['Name'].append(i.name)
                print(i.delivery)
                context['Delivery Type'].append(i.delivery)
                print(i.address)
                context['Address'].append(i.address)
                print(i.amount)
                context['Total Amount'].append(i.amount)
                print(i.date)
                context['Date'].append(i.date)
                print(i.time)
                context['Time'].append(i.time)
                print(i.instructions)
                context['Instructions'].append(i.instructions)
                print(i.order_complete)
                context['Order Status'].append(i.order_complete)

            if len(context['Order Number']) == 0:
                context = None

            print(context)
            return render(request, 'orders.html', context = {'data' : context})
        else:
            return render(request, 'login.html')

    return render(request, 'orders.html')

def logout(request):
    request.session.flush()
    return redirect('/')