'''
x = 2
y = 3
z = 4
print("x" + "y")
if x > y:
    print("x is greater than y")

print("y is greater than x")
'''

def add(x,y):
    return x + y

def do_twice(func, x, y):
    return func(func(x,y), func(x,y))

a = 5
b = 10

print(do_twice(add, a, b))
