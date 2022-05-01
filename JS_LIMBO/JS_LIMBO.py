import base64
import os
'''
    ████████████████████████████████████████████████████████████████████████████████
    ███████████████████████████████████████████████████████████████████▀▀▀██████████
    ████      █████      ▐██        ███        ██             █████           ██████
    ████      █████      ▐██        ▐█         ██              ███      █      █████
    ████      █████      ▐██         █         ██      ▐█      ███      █       ████
    ████      █████      ▐██         █         ██      ▐█      ███      █       ████
    ████      █████      ▐██                   ██            ▄████      █       ████
    ████      █████      ▐██     █             ██              ███      █       ████
    ████      █████      ▐██     █             ██      ▐█      ▐██      █       ████
    ████      █████      ▐██     ██     █      ██      ▐█       █▌      █       ████
    ████          █      ▐██     ██     █      ██       █      ▐██      █      █████
    ████          █      ▐██     ██     █      ██              ████           ██████
    ███████████████████████████████████████████████████████████████████   ▄█████████
    ████████████████████████████████████████████████████████████████████████████████
    ████████████████████████████████████████████████████████████████████████████████
'''
import random
print("> LIMBO OBFUSCATOR < MADE MY ERROLIE")
def hlp():
    print("--------------------------")
    print("COMMANDS")
    print("|")
    print("|__obfs [CODE] - FUCK CODE")
    print("|__unobfs [CODE] - DEFUCK CODE")
    print("|__help - HELP ME IM SINK!!!")
    print("|__ext - EXIT")



# Snips

decoder = ""


# End
while True:
    COM = input("JS_LIMBO>")
    if COM == "help":
        hlp()
    elif COM == "ext":
        exit()
    elif not COM.find("obfs") == -1:
        print("LIMBO:Obfuscato...")
        #todo: str.split
        code = COM.removeprefix('obfs ')
        
        
        atob = '(false+"")[1]+(true+"")[0]+(true+[]["flat"])[10]+([]["entries"]()+"")[2]'
        obfuscato = "(function(self){[]['filter']['constructor']([]['filter']['constructor']('return this')()["+atob+"]('"+str(base64.b64encode(code.encode('UTF-8'))).replace("b'","")[:-1]+"'))()})(typeof(exports) === 'undefined' ? window : exports);"
        

        print("[*] RESULTS:"+obfuscato)

        

    else:
        print("[*] Ure dumb! Command not found >_<")




