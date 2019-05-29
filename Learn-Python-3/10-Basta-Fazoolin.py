# You’ve started position as the lead programmer for the family-style 
# Italian restaurant Basta Fazoolin’ with My Heart. The restaurant has 
# been doing fantastically and seen a lot of growth lately. You’ve been 
# hired to keep things organized.

class Menu(): #Menu template includes menu name, menu items, start and end times for service.
  def __init__(self, name, items, start_time, end_time): #Constructor.
    self.name = name
    self.items = items
    self.start_time = start_time
    self.end_time = end_time
    
  def __repr__(self): #String representation of menu.
    return "The {name} menu is available from {start_time} to {end_time}pm.".format(
      name=self.name, 
      start_time=str(self.start_time % 12) + ('am' if (self.start_time % 12 > 9) else 'pm'), 
      end_time=self.end_time % 12)
  
  def calculate_bill(self, purchased_items): #Returns total price of a purchase.
    total_owing = 0
    
    # print(self.items) #A list of all items on this menu.
    print(purchased_items) #A list of purchased items.
    
    for item in self.items: #Iterates through each item on this menu list.
      # print(item) #Name of current item
      # print(self.items[item]) #This is the cost of current_item.
      if item in purchased_items: #If current item is in purchased_item list.     	
      	total_owing += self.items[item] #Adds current item's price to total_owing
      	print("$" + str(self.items[item]) + " - " + str(item)) #Print current item's price and name.
    return total_owing

  
  
class Franchise(): #Franchise template includes address and menus available
  def __init__(self, address, menus): #Constructor.
    self.address = address
    self.menus = menus
  
  def __repr__(self): #String representation of the franchise.
    return "One franchise is located at {address}.".format(
      address=self.address)

  def available_menus(self, time): #Returns a list of Menu objects available at that time.
    avail_menus = ""
    
    for item in self.menus: #Iterates through each item in Franchise's menu list.
      if (time >= item.start_time) and (time <= item.end_time): 
        avail_menus += str("\n--" + item.name) + " is available from " + str(item.start_time % 12) + " until " + str(item.end_time % 12) + "pm."
       
    if (avail_menus): #If at least 1 menu is available to order from at this time.
      avail_menus = "-It is currently " + str(time) + ". You can order from these menus:" + avail_menus
    else: #Else nothing can be ordered at this time
     avail_menus = "-It is currently " + str(time) + ". You cannot order from any menu at this time."
  
    return avail_menus
    
    
    
class Business(): #Business template includes name of business and list of franchises.
  def __init__(self, name, franchises): #Constructor.
    self.name = name
    self.franchises = franchises
  
  
  
  
#Step 3 - First Menu.
brunch = Menu("Brunch", { 'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50, 'coffee': 1.50, 'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50 }, 11, 16)
print(brunch)
# print(brunch.name)
# print(brunch.items)
# print(brunch.start_time % 12)
# print(brunch.end_time % 12)
print("\n")

#Step 4 - Second Menu.
early_bird = Menu("Early-bird Dinner", { 'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00, 'pizza with quattro formaggi': 9.00, 'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 1.50, 'espresso': 3.00 }, 15, 18)
print(early_bird)
# print(early_bird.name)
# print(early_bird.items)
# print(early_bird.start_time % 12)
# print(early_bird.end_time % 12)
print("\n")

#Step 5 - Third Menu.
dinner = Menu("Dinner", { 'crostini with eggplant caponata': 13.00, 'ceaser salad': 16.00, 'pizza with quattro formaggi': 11.00, 'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00 }, 17, 23)
print(dinner)
# print(dinner.name)
# print(dinner.items)
# print(dinner.start_time % 12)
# print(dinner.end_time % 12)
print("\n")

#Step 6 - Fourth Menu.
kids = Menu("Kids", { 'chicken nuggets': 6.50, 'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00 }, 11, 21)
print(kids)
# print(kids.name)
# print(kids.items)
# print(kids.start_time % 12)
# print(kids.end_time % 12)
print("\n")

#Step 10 - Uses Menu method to calculate bill.
print("$" + str(brunch.calculate_bill(['pancakes', 'home fries', 'coffee']))) #Returns $13.50
print("\n")

#Step 11 - Uses Menu method to calculate bill.
print("$" + str(early_bird.calculate_bill(['salumeria plate', 'mushroom ravioli (vegan)']))) #Returns $12.50
print("\n\n")


#Step 14 - First Franchise
flagship_store = Franchise('1232 West End Road', [brunch, early_bird, dinner, kids])
print(flagship_store)
#Step 17 - Uses Franchise method to show available menus.
print(flagship_store.available_menus(12))
print(flagship_store.available_menus(17))
print("\n")

#Step 14 - Second Franchise
new_installment = Franchise('12 East Mulberry Street', {})
print(new_installment)
# print("\n")
#Step 17 - Uses Franchise method to show available menus.
print(new_installment.available_menus(12))
# print("\n")
# print(new_installment.available_menus(17))
print("\n\n")


#Step 21 - First Business
basta_fazoolin = Business("Basta Fazoolin' with my Heart", [flagship_store, new_installment])
print(basta_fazoolin.name)
print(basta_fazoolin.franchises)
print("\n")

#Step 22 - Fifth menu.
arepas_menu = Menu("Take a’ Arepa", { 'arepa pabellon': 7.00, 'pernil arepa': 8.50, 'guayanes arepa': 8.00, 'jamon arepa': 7.50 }, 10, 20)
print(arepas_menu)
# print(kids.name)
# print(kids.items)
# print(kids.start_time % 12)
# print(kids.end_time % 12)
print("\n")

#Step 23 - First Franchise
arepas_place = Franchise('189 Fitzgerald Avenue', {arepas_menu})
print(arepas_place)
# print("\n")
#Step 17
print(arepas_place.available_menus(12))
# print("\n")
# print(new_installment.available_menus(17))
print("\n")

#Step 24 - Second Business
take_a_arepa = Business("Take a' Arepa", [arepas_place])
print(take_a_arepa.name)
print(take_a_arepa.franchises)
print("\n")
