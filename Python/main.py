print("Test Hello")
#file = open("C:\\Users\otaco\Desktop\DevProjects\Test_Codes\Python\datafile.txt", "r")
#cont = file.read()
#print(cont)
#file.close()
name = raw_input("Enter your name: ")
file = open("C:\\Users\otaco\Desktop\DevProjects\Test_Codes\Python\datafile.txt", "w")
cont = file.write('name')
file.close()
file = open("C:\\Users\otaco\Desktop\DevProjects\Test_Codes\Python\datafile.txt", "r")
cont = file.read(1)
file.close()
