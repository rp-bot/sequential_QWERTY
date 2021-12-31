import string
random_gib_shit = input("enter random shit: ")

gib_split = list(random_gib_shit)
gib_sorted = sorted(set(random_gib_shit))
unique_set = [gib_split.count(i) for i in gib_sorted]

combined_dict = dict(zip(gib_sorted, unique_set))
# list(combined_dict.values()) # prints .values or .keys

print(gib_sorted)
print(unique_set)
print(combined_dict)
