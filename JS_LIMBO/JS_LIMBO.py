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
        ggwp = {
                    'a':   '(false+"")[1]',
                    'b':   '([]["entries"]()+"")[2]',
                    'c':   '([]["flat"]+"")[3]',
                    'd':   '(undefined+"")[2]',
                    'e':   '(true+"")[3]',
                    'f':   '(false+"")[0]',
                    'g':   '(false+[0]+String)[20]+',
                    'h':   '(+(101))["to"+String["name"]](21)[1]',
                    'i':   '([false]+undefined)[10]',
                    'j':   '([]["entries"]()+"")[3]',
                    'k':   '(+(20))["to"+String["name"]](21)',
                    'l':   '(false+"")[2]',
                    'm':   '(Number+"")[11]',
                    'n':   '(undefined+"")[1]',
                    'o':   '(true+[]["flat"])[10]',
                    'p':   '(+(211))["to"+String["name"]](31)[1]',
                    'q':   '("")["fontcolor"]([0]+false+")[20]',
                    'r':   '(true+"")[1]',
                    's':   '(false+"")[3]',
                    't':   '(true+"")[0]',
                    'u':   '(undefined+"")[0]',
                    'v':   '(+(31))["to"+String["name"]](32)',
                    'w':   '(+(32))["to"+String["name"]](33)',
                    'x':   '(+(101))["to"+String["name"]](34)[1]',
                    'y':   '(NaN+[Infinity])[10]',
                    'z':   '(+(35))["to"+String["name"]](36)',

                    'A':   '(NaN+[]["entries"]())[11]',
                    'B':   '(+[]+Boolean)[10]',
                    'C':   'Function("return escape")()(("")["italics"]())[2]',
                    'D':   'Function("return escape")()([]["flat"])["slice"]("-1")',
                    'E':   '(RegExp+"")[12]',
                    'F':   '(+[]+Function)[10]',
                    'G':   '(false+Function("return Date")()())[30]',
                    'H':   'Function("return `H`")',
                    'I':   '(Infinity+"")[0]',
                    'J':   'Function("return `J`")()',
                    'K':   'Function("return `K`")()',
                    'L':   'Function("return `L`")()',
                    'M':   '(true+Function("return Date")()())[30]',
                    'N':   '(NaN+"")[0]',
                    'O':   '(+[]+Object)[10]',
                    'P':   'Function("return `P`")()',
                    'Q':   'Function("return `Q`")()',
                    'R':   '(+[]+RegExp)[10]',
                    'S':   '(+[]+String)[10]',
                    'T':   '(NaN+Function("return Date")()())[30]',
                    'U':   '(NaN+Object()["to"+String["name"]]["call"]())[11]',
                    'V':   'Function("return `V`")()',
                    'W':   'Function("return `W`")()',
                    'X':   'Function("return `X`")()',
                    'Y':   'Function("return `Y`")()',
                    'Z':   'Function("return `Z`")()',
                    '=' :'Function("return `=`")()',
                    '0':'Function("return `0`")()',
                    '1':'Function("return `1`")()',
                    '2':'Function("return `2`")()',
                    '3':'Function("return `3`")()',
                    '4':'Function("return `4`")()',
                    '5':'Function("return `5`")()',
                    '6':'Function("return `6`")()',
                    '7':'Function("return `7`")()',
                    '8':'Function("return `8`")()',
                    '9':'Function("return `9`")()'

            }

        def codeESC(ltr):
            return ggwp[ltr]
        bs64 = str(base64.b64encode(code.encode('UTF-8'))).replace("b'","")[:-1]
        realBS = ""
        for l in bs64:
            realBS += codeESC(l)+"+"
        realBS = realBS[:-1]
        bs64 = realBS
        atob = '(false+"")[1]+(true+"")[0]+(true+[]["flat"])[10]+([]["entries"]()+"")[2]'
        obfuscato = "(function(self){[]['filter']['constructor']([]['filter']['constructor']('return this')()["+atob+"]("+bs64+"))()})(typeof(exports) === 'undefined' ? window : exports);"
        

        print("[*] RESULTS:"+obfuscato)



        

    else:
        print("[*] Ure dumb! Command not found >_<")




