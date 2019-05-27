from nile import get_distance, format_price, SHIPPING_PRICES
from test import test_function

# Define calculate_shipping_cost() here:
def calculate_shipping_cost(from_coords, to_coords, shipping_type='Overnight'):
  # print(from_coords) # (0, 1)
  # print(to_coords) # (2, 3)
  # print(shipping_type) #Defaults to Overnight.
  
  #Method 1:  
  # from_lat, from_long = from_coords #Saves as 0, 1.
  # to_lat, to_long = to_coords #Saves as 2, 3.
  # distance = get_distance(from_lat, from_long, to_lat, to_long)
  
  
  #Method 2
  distance = get_distance(*from_coords, *to_coords)
  print(distance) # 0.5774278040487338
  
  shipping_rate = SHIPPING_PRICES[shipping_type]
  print(shipping_rate) # 2.3
  
  price = distance * shipping_rate
  print(price) # 1.3280839493120877
  print(format_price(price)) # $1.33
  
  return format_price(price)


# Test the function by calling 
test_function(calculate_shipping_cost)
# calculate_shipping_cost((0, 1), (2, 3), "Priority") #Returns $0.92
# calculate_shipping_cost((0, 1), (2, 3)) #Returns $1.33
print("\n")



# Define calculate_driver_cost() here
def calculate_driver_cost(distance, *drivers):
  # print(distance) #80
  # print(drivers) #(Nile Driver speed 2 salary 10, Nile Driver speed 7 salary 20)
  
  cheapest_driver = None
  cheapest_driver_price = None
  
  for driver in drivers:
    # print(driver.speed) # 2, then 7
    driver_time = driver.speed * distance
    # print(driver_time) # 160, then 560
    
    # print(driver.salary) # 10, then 20
    price_for_driver = driver.salary * driver_time
    # print(price_for_driver) #1600, then 11200
    
    if cheapest_driver is None: #This if the first driver on the list.
      cheapest_driver = driver
      cheapest_driver_price = price_for_driver
    elif price_for_driver < cheapest_driver_price: #If current price is cheaper than last cheapest price.
      cheapest_driver = driver
      cheapest_driver_price = price_for_driver
      
  print(cheapest_driver_price) # 1600
  print(cheapest_driver) # Nile Driver speed 2 salary 10
  return cheapest_driver_price, cheapest_driver
      

# Test the function by calling 
test_function(calculate_driver_cost)
print("\n")



# Define calculate_money_made() here
def calculate_money_made(**trips):
  total_money_made = 0
  
  for trip_id, trip in trips.items():
    # print(trip_id) # UEXODI, then DEFZXIE
    # print(trip) # <test.Trip object at 0x7fecdbf1e3c8>, then <test.Trip object at 0x7fecdbf1e400>
    # print(trip.cost) # 300, then 200
    # print(trip.driver.cost) # 15, then 40
    trip_revenue = trip.cost - trip.driver.cost
    print(trip_revenue) # 260, then 185
    total_money_made += trip_revenue
    # print(total_money_made) # 260, then 445
  print(total_money_made) # 445
  return total_money_made


# Test the function by calling 
test_function(calculate_money_made)
