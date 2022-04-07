with open('pass.txt') as f: #you can change this with user.txt if you want tomake an array for the username list
    lines = [i.replace('\n','') for i in f.readlines()]
    print(lines)
