import string
random_gib_shit = input("enter random shit: ")

gib_split = list(random_gib_shit)
gib_sorted = sorted(set(random_gib_shit))
print([gib_split.count(i) for i in gib_sorted])
