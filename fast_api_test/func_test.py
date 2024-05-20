def get_full_name(first_name :str, last_name:str):
    full_name = first_name.title() + last_name.title()
    return full_name

def get_name_with_age(name:str, age:int):
    name_with_age = name + "은" + str(age) + "살"
    return name_with_age

print(get_full_name("John", "Smith"))
