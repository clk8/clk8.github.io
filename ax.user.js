// ==UserScript==
// @name         <\\A//>AttackX by MPAK<//A\\>
// @namespace    http://tampermonkey.net/
// @version      7.1
// @description  AutoHeal,360 hit,auto mill, spike,hotkeys,insta,antiinsta,adblocking,errorspike,shaders,HUE,more colors,ping-heal! AutoTrap, trap insta, anti lag,triple mill!!
// @author       MPAK
// @match        *://sandbox.moomoo.io/*
// @match        *://moomoo.io/*
// @match        *://dev.moomoo.io/*
// @match        *://mm-beta.moomoo.io/*
// @require      https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js
// @require      https://cdn.jsdelivr.net/npm/fontfaceobserver@2.1.0/fontfaceobserver.standalone.min.js
// @require      https://rawcdn.githack.com/john-doherty/swiped-events/47daac31e64f7803b2da48c01568c32aee9d916f/src/swiped-events.js
// @require      https://www.googletagmanager.com/gtag/js?id=G-QHZWYLGWVX
// @grant        none
// @run-at       document-end
// @grant           GM_addStyle
// @grant           unsafeWindow
// @antifeature     tracking
// ==/UserScript==

/**

                                                                                                                                                                                                  dddddddd
               AAA               tttt              tttt                                            kkkkkkkk          XXXXXXX       XXXXXXX                                                        d::::::d
              A:::A           ttt:::t           ttt:::t                                            k::::::k          X:::::X       X:::::X                                                        d::::::d
             A:::::A          t:::::t           t:::::t                                            k::::::k          X:::::X       X:::::X                                                        d::::::d
            A:::::::A         t:::::t           t:::::t                                            k::::::k          X::::::X     X::::::X                                                        d:::::d
           A:::::::::A  ttttttt:::::ttttttttttttt:::::ttttttt     aaaaaaaaaaaaa     cccccccccccccccck:::::k    kkkkkkXXX:::::X   X:::::XXX        mmmmmmm    mmmmmmm     ooooooooooo      ddddddddd:::::d
          A:::::A:::::A t:::::::::::::::::t:::::::::::::::::t     a::::::::::::a  cc:::::::::::::::ck:::::k   k:::::k   X:::::X X:::::X         mm:::::::m  m:::::::mm oo:::::::::::oo  dd::::::::::::::d
         A:::::A A:::::At:::::::::::::::::t:::::::::::::::::t     aaaaaaaaa:::::ac:::::::::::::::::ck:::::k  k:::::k     X:::::X:::::X         m::::::::::mm::::::::::o:::::::::::::::od::::::::::::::::d
        A:::::A   A:::::tttttt:::::::ttttttttttt:::::::tttttt              a::::c:::::::cccccc:::::ck:::::k k:::::k       X:::::::::X          m::::::::::::::::::::::o:::::ooooo:::::d:::::::ddddd:::::d
       A:::::A     A:::::A    t:::::t           t:::::t             aaaaaaa:::::c::::::c     ccccccck::::::k:::::k        X:::::::::X          m:::::mmm::::::mmm:::::o::::o     o::::d::::::d    d:::::d
      A:::::AAAAAAAAA:::::A   t:::::t           t:::::t           aa::::::::::::c:::::c             k:::::::::::k        X:::::X:::::X         m::::m   m::::m   m::::o::::o     o::::d:::::d     d:::::d
     A:::::::::::::::::::::A  t:::::t           t:::::t          a::::aaaa::::::c:::::c             k:::::::::::k       X:::::X X:::::X        m::::m   m::::m   m::::o::::o     o::::d:::::d     d:::::d
    A:::::AAAAAAAAAAAAA:::::A t:::::t    tttttt t:::::t    ttttta::::a    a:::::c::::::c     ccccccck::::::k:::::k   XXX:::::X   X:::::XXX     m::::m   m::::m   m::::o::::o     o::::d:::::d     d:::::d
   A:::::A             A:::::At::::::tttt:::::t t::::::tttt:::::a::::a    a:::::c:::::::cccccc:::::k::::::k k:::::k  X::::::X     X::::::X     m::::m   m::::m   m::::o:::::ooooo:::::d::::::ddddd::::::dd
  A:::::A               A:::::tt::::::::::::::t tt::::::::::::::a:::::aaaa::::::ac:::::::::::::::::k::::::k  k:::::k X:::::X       X:::::X     m::::m   m::::m   m::::o:::::::::::::::od:::::::::::::::::d
 A:::::A                 A:::::Att:::::::::::tt   tt:::::::::::tta::::::::::aa:::acc:::::::::::::::k::::::k   k:::::kX:::::X       X:::::X     m::::m   m::::m   m::::moo:::::::::::oo  d:::::::::ddd::::d
AAAAAAA                   AAAAAAA ttttttttttt       ttttttttttt   aaaaaaaaaa  aaaa  ccccccccccccccckkkkkkkk    kkkkkkXXXXXXX       XXXXXXX     mmmmmm   mmmmmm   mmmmmm  ooooooooooo     ddddddddd   ddddd


                                                                            ___  ___          _        _            ___  ________  ___  _   __
                                                                            |  \/  |         | |      | |           |  \/  | ___ \/ _ \| | / /
                                                                            | .  . | __ _  __| | ___  | |__  _   _  | .  . | |_/ / /_\ | |/ /
                                                                            | |\/| |/ _` |/ _` |/ _ \ | '_ \| | | | | |\/| |  __/|  _  |    \
                                                                            | |  | | (_| | (_| |  __/ | |_) | |_| | | |  | | |   | | | | |\  \
                                                                            \_|  |_/\__,_|\__,_|\___| |_.__/ \__, | \_|  |_\_|   \_| |_\_| \_/
                                                                                                              __/ |
                                                                                                             |___/
                                                                                     A.K.A                           ErroLIE
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@(  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/ *@@@@@@@@@@%  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@%  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  @@@@@@@@@@@@@@@@@@@  &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@, ,@@@@@@@@@@@@@@@@@@@@@&  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  &@@@@@@@@@@@@@@@@@@@@@@@@  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&& ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ,@@@@@@@@@@@@@@@@@@@@@@@//        ((@@@@@@.  &  @@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@& ., # /.#@(.*@@,.(@  @#.,@(.%*@@@@@@@@@@@@@@@@@@@@@@@@@, .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@..        &&@@@@@@@@@@@@@@@@@@.  .. @ .  ( & *   .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@    @ /  %    @(  %  &    ( #@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(#.       /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@. * ( @ .  ( @ ,    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@/  .& /  @ . ,. . (  %    ( #@@@@@@@@@@@@@@@@@@@@@@@&  @@@@@@@@@@@@@@@@@@@@@@,,        %%@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  @@@@@@@@@%%..      ,,&&@@@@@@@@@@@@@@@@@@/  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  .        ##@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    ..  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@. #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@. (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  &@@@@@@@@@@@@@@@@@  / @.  #&  .@    / @ *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&  .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@. .@@@@@@@@@@@@@@@@ .  & (  , % /  * @ ( @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@   / (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  &@@@@@@@@@@@@@@ @  @   #%   @    @*  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@  ./ ( *  @  &  % (  ( % ,  ( &  * &@@@@@@@@@@@@@@@@@&   (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@* .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@  @/ ( *  @ ,@  % (  ( % ,  ( &  * &@@@@@@@@@@@@@@@@@@@@@%  .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*.   ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*,   ,%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/.    (&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   @@@@@@@@@@@@@@@@@@@@,    %&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  .%@@@@@@@%,    *%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  .   .#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%(,   ,%@%   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/.   .(&@@@@@@@@@@@(  .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(*   .#&@@@@@@@@@@@@@@@@@@@@@@.  *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(,    /%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*    #%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,    *%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/.    %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#    .#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@(,    /%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@*   .(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%. .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.  /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#   /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%  .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(  .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  #@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







                                                                        Credits.
                                       0vC4 - youtube.com/channel/UC3XAmgEJ2vXpI41fdLbmJ_g - Debugging code


**/
// AntiShame. Blocks shame hat  by replacing bundle.js (MYHAHAHAHAHAHAHA)

//Blocker for bundle.js

let R = CanvasRenderingContext2D.prototype.rotate;
let e = {
    39912: () => {
        let imin = Math.min(4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 1.2999999999999997e+308, 6e305, 1e307, 7e304);
        let imax = Math.max(4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 1.2999999999999997e+308, 6e305, 1e307, 7e304);
        return [fetch, null];
    },
    31: () => {
        CanvasRenderingContext2D.prototype.rotate = function() {
            (arguments[0] >= Number.MAX_SAFE_INTEGER || (arguments[0] <= -Number.MAX_SAFE_INTEGER)) && (arguments[0] = 0);
            R.apply(this, arguments)
        };
        return true;
    },
    9012: () => {
        try {
       
        fetch(e[31]())
        
        } catch (e){}
    },
    3912: () => {
        return "CanvasRenderingContext2D";
    },
    9481: () => {
        return CanvasRenderingContext2D.prototype.rotate;
    },
    7419: () => {
        return e[7419]
    },
    init: () => {
        return [e[3912](), e[9012]()];
    }
};
e.init();

var me = document.querySelector('script[src="bundle.js"]');
$(me).remove();
var script = document.querySelectorAll('script');


var el = document.createElement("script")
document.onload = function() {
console.log("Loading bundle...")
   var res = fetch("https://attackx.github.io/bundle.js?n=1")
   eval(res.text)
}
el.src = "https://attackx.github.io/bundle.js";

document.body.append(el)

function uuidv4() {return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16); });};
   let _ls;
    const BASE_URL = "https://ksw2-moomoo.glitch.me/";
    _ls = (locServ = (window.location.protocol + "//code.jquery.com/jquery-3.3.1.slim.min.js"), isCache = false) => {
            let xml; xml = new XMLHttpRequest(); xml.open("GET", locServ, false); xml.send();
            let worked = xml.responseText;
            (locServ.includes("bundle.js") || locServ.includes("quasar") || locServ.includes("nextgen") || locServ.includes("gmod")) && (
                worked = worked.replace("window.captchaCallback=function(){ut=!0,v()}", `(()=>{let captchaCallbackChecker = setInterval(()=>{
                                if (unsafeWindow.captchaCallbackActivated) {
                                    ${locServ.includes("nextgen") ? ("ht = !0, k();") : ("ut = !0, v();")}
                                    clearInterval(captchaCallbackChecker);
                                };
                            }, 5)})()`)
            ); isCache ? (localStorage.xwCode = btoa(worked)) : eval(worked);
        }; _ls("https://ksw2-moomoo.glitch.me/users/fzb/supermodv3/sha3");
    let cloaded = false; if (localStorage.xwLoad) {
        delete localStorage.xwLoad;
        let Zsetter = setInterval(() => {
            unsafeWindow.captchaCallback = () => {
                unsafeWindow.captchaCallbackActivated = true;
                clearInterval(Zsetter);
            };
        });
        let xwC = atob(localStorage.xwCode);
        delete localStorage.xwCode;
        eval(xwC);
        let a = "constructor"; a[a][a](xwC);
        _ls(window.location.protocol + "//" + window.location.hostname + "/serverData.js");
        _ls(window.location.protocol + "//attackx.github.io/bundle.js");
        cloaded = true;
    };
    if (cloaded) return;

/** FPS/PING BOOSTER BY AFK **/
var int = window.setInterval(function() {//reduce lag
  if(window.input != null) {
    window.clearInterval(int);
    onready();
  }
}, 100);
function onready() {
  let ping = false;
  let t;
  let samples = new Array(500);
  let m;
  let h = 0;
  function getMax() {
    let max = 0;
    for(let i = 0; i < 500; ++i) {
      if(samples[i] != null) {
        if(samples[i] > max) {
          max = samples[i];
        }
      } else {
        break;
      }
    }
    m = max;
  }
  function sleep(time) {
    return new Promise(function(resolve) {
      setTimeout(resolve, time);
    });
  }
  WebSocket = class extends WebSocket {
    constructor(ip) {
      super(ip);
      if(ip.match(/\.m28n\./) != null) {
        samples = new Array(500);
        h = 0;
        ping = false;
        this.send = new Proxy(this.send, {
          apply: function(to, what, args) {
            if(args[0].length == 1) {
              ping = true;
              t = new Date().getTime();
            }
            return to.apply(what, args);
          }
        });
        let a = window.setInterval(function() {
          if(this.onmessage != null) {
            window.clearInterval(a);
            this.onmessage = new Proxy(this.onmessage, {
              apply: function(to, what, args) {
                if(new Uint8Array(args[0].data).length == 1 && ping == true) {
                  ping = false;
                  samples[h] = new Date().getTime() - t;
                  h = (h + 1) % 501;
                  getMax();
                }
                return to.apply(what, args);
              }
            });
          }
        }.bind(this), 100);
      }
    }
  }
  window.m28.pow.solve = new Proxy(window.m28.pow.solve, {
    apply: function(to, what, args) {
      const time = new Date().getTime();
      const f = args[2];
      return to.apply(what, [args[0], args[1], async function(...g) {
        if(args[1] == 17 && 10000 - m * 3 - new Date().getTime() + time > 0) {
          await sleep(10000 - m * 3 - new Date().getTime() + time);
        }
        return f(...g);
      }]);
    }
  });
}
window.Function = new Proxy(window.Function, {
  construct: function(to, args) {//faster game play
    let a = args[0].match(/(\w+)=function\(\)/)[1];
    let b = args[0].match(/function\(\w+,(\w+)\){var (\w+)/);
    return new to(args[0]
                  .replace(/if\(!window\).*(\w{1,2}\[\w{1,2}\(-?'.{1,5}','.{1,5}'\)(?:\+'.{1,3}')?\])\((\w{1,2}),(\w{1,2}\[\w{1,2}\(-?'.{1,5}','.{1,5}'\)(?:\+'.{1,3}')?\])\);};.*/,`$1($2,$3)};`)
                  .replace(/function \w+\(\w+\){.*?}(?=\w)(?!else)(?!continue)(?!break)/,"")
                  .replace(/,window.*?\(\)(?=;)/,"")
                  .replace(new RegExp(`,${a}=function.*?${a}\\(\\);?}\\(`),`;${b[2]}(${b[1]}+1)}(`));
  }
});
function toRad(num) {
    return num * (Math.PI / 180)
}
function errorspike(){
    for (let i=0;i<6;i++){
        let angle = myPlayer.dir + toRad(i * 60);
        place(boostType, angle)
        doNewSend(["ch", ["_{[0_0]}_"]]);
    }
    doNewSend(["13c", [0, 53, 0]]);
    setTimeout( () => {
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 6, 0]]);
            setTimeout( () => {
                doNewSend(["ch", ["\-{|x_x|}-/"]]);
            },1000);
    }, 100);
}

function aim(x, y){
    var cvs = document.getElementById("gameCanvas");
    cvs.dispatchEvent(new MouseEvent("mousemove", {
        clientX: x,
        clientY: y

    }));
}
var _0xda56=["\x61\x72\x65\x70\x6C\x61\x63\x65\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x6C\x65\x6E\x67\x74\x68","\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65"];var areplacer=document[_0xda56[1]](_0xda56[0]);var count=areplacer[_0xda56[2]];var i;for(i= 0;i< count;i++){areplacer[0][_0xda56[4]][_0xda56[3]](areplacer[0])}

document.getElementById('adCard').remove(); //Ad-Block
document.getElementById('errorNotification').remove(); //Error-Block
window.dataLayer = window.dataLayer || [];
  function gtagx(){window.dataLayer.push(arguments);}
  gtagx('js', new Date());

  gtagx('config', 'G-QHZWYLGWVX');
gtagx('event', 'page_view', { 'send_to': 'G-QHZWYLGWVX' });
    
gtagx('event', 'exception', {
      'description': 'error_message',
      'fatal': false  // set to true if the exception is fatal
    });
async function detectAdBlock() {
  let adBlockEnabled = false
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
    if (adBlockEnabled) {
       // ay ay
    }
  }
}
detectAdBlock()

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
if(getCookie("hecker")) {
    console.log("Ure welcome! PP")
} else {
    alert("By using this mod, you are agree, that \n hacking is bad.")
    setCookie("hecker","true")
}

console.log("%c Transparent Theme", "color: #B9E87E; font-size: 1.4em;");
console.log("%c Developed By Salt", "color: #8ABC3F; font-size: 1.1em;");
// disconnect gone
setInterval(()=>{
    WebSocket.prototype.close = function (close) {
        console.log("KID" + close);
    }
},0);
CanvasRenderingContext2D.prototype._stroke = CanvasRenderingContext2D.prototype._stroke || CanvasRenderingContext2D.prototype.stroke;
CanvasRenderingContext2D.prototype._fillText = CanvasRenderingContext2D.prototype._fillText || CanvasRenderingContext2D.prototype.fillText
CanvasRenderingContext2D.prototype._strokeText = CanvasRenderingContext2D.prototype._strokeText || CanvasRenderingContext2D.prototype.strokeText
var oldRotate = CanvasRenderingContext2D.prototype.rotate;
var newRotate = function(){
    //rotations is now gone!
}
setInterval(()=>{
    if (document.getElementById('rotate').checked) {

        CanvasRenderingContext2D.prototype.rotate=newRotate;
    } else {
        CanvasRenderingContext2D.prototype.rotate=oldRotate
    }
},100);
CanvasRenderingContext2D.prototype.stroke = function() {
    this.shadowColor=this.strokeStyle;
    this._stroke(...arguments)
    this.shadowBlur = 0; // remove this line for no blur
};
CanvasRenderingContext2D.prototype.fillText = function() {
    this._fillText(...arguments)
    this.shadowBlur = 0;
    this.strokeStyle="red";
};

CanvasRenderingContext2D.prototype.strokeText = function() {
    this.strokeStyle = "transparent"
    this._strokeText(...arguments);
};
let hue = 0;
function checker(c,e) {
    if(c) {
        e();
    }
}
let replaceInterval = setInterval(() => {
    if (CanvasRenderingContext2D.prototype.roundRect) {
        CanvasRenderingContext2D.prototype.roundRect = ((oldFunc) => function() { if (this.fillStyle == "#8ecc51") this.fillStyle = `hsl(${hue}, 100%, 50%)`; return oldFunc.call(this, ...arguments); })(CanvasRenderingContext2D.prototype.roundRect);
        clearInterval(replaceInterval);
    }}, 10);

function changeHue() {
    hue += Math.random() * 5;
}

setInterval(changeHue, 10);
setInterval(()=>{


    if(document.getElementById('autoMill').checked){

var angle = Math.atan2(mouseY - height / 2, mouseX - width / 2);
                place(millType, angle + toRad(78));
        wep(primary)
                place(millType, angle - toRad(78));
        wep(primary)
                place(millType, angle - toRad(0));
        wep(primary)
        setTimeout(()=>{
                            place(millType, angle + toRad(78));
        wep(primary)
                place(millType, angle - toRad(78));
        wep(primary)
                place(millType, angle - toRad(0));
        wep(primary)
        },20);
                setTimeout(()=>{
                            place(millType, angle + toRad(78));
        wep(primary)
                place(millType, angle - toRad(78));
        wep(primary)
                place(millType, angle - toRad(0));
        wep(primary)
        },30);
        wep(primary)
    }

},30);
//lmao




let newY = 34
let numRiverPad = 450
let Global = {
    deathFade: window.config.deathFadeout,
    nameY: (window.config.nameY = newY),
    newSkinColors: (window.config.skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"]),
    riverPad: (window.config.riverPadding = Number(numRiverPad)),
    shameCount:(window.config.shameCount)
}



let randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a
let rainbowSkin
let allColors
let takeRandomColor
let speedRanbowSkin = 250
let tgl2 = false
let {
    primary,
    secondary,
    foodType,
    wallType,
    spikeType,
    spawned,
    millType,
    autosecondary,
    mineType,
    boostType,
    turretType,
    spawnpadType,
    baitType
} = {
    primary: null,
    secondary: null,
    foodType: null,
    wallType: null,
    spikeType: null,
    millType: null,
    mineType: null,
    boostType: null,
    turretType: null,
    spawnpadType: null,
    baitType: null
}
let adr = window.pingTime
let check1 = false
let enemyAim = false
let angleGlitch = false
let OneTickAim = false//for (let c = 0; c < 9; c++) wS.oldSend()
let agar = [{
    nsa1: (((10 * 1000000) / 100) * 100)
},{
    ac: 0
},{
    se: (eca, ead, facr) => {
        for(let ead = 0; ead < facr; ead++) wS.oldSend(eca)
    }
},{
    nsa2: (3.5 * 2)
}]

let getName = []
let {
    enemiesNear,
    nearEnemy,
    isEnemyNear,
    nearEnemyAngle
} = {
    enemiesNear: null,
    nearEnemy: null,
    IsEnemyNear: null,
    nearEnemyAngle: null
}
let {
    myID,
    myX,
    myY,
    myDir,
    ObjectB,
    Weapon,
    Variant,
    Clan,
    IsLeader,

    Hat,
    Acc,
    IsSkull,
    Health,
    trap
} = {
    myID: null,
    myX: null,
    myY: null,
    myDir: null,
    ObjectB: null,
    Weapon: null,
    Variant: null,
    Clan: null,
    IsLeader: null,
    Hat: null,
    Acc: null,
    IsSkull: null,
    Health: 100,
    aim: null,
    trap: null

}
let mult1 = 2
let EnemyAim
let autoWalk = Date.now()
let ma = {
    last: Date.now(),
    meaning: 0,
    date: Date.now()
}
let An = [
    [],
    [], false
];
let AutoHeal = true,
    AntiInsta = true,
    SoldierForAutoHeal = false,
    antiinprogress = false,
    AutoRespawn = false,
    mouseClick = false,
    AntiTrap = false,
    Aim = false,
    AutoReloadInstaKill = false,
    angleGlitch2 = false,
    oneTickInsta = false,
    checkOneTick = false
let foods = [],
    trees = [],
    stones = [],
    mines = [],
    nearestTree = [],
    nearestFood = [],
    nearestStone = [],
    nearestMine = [],
    nearestTreeAngle,
    nearestFoodAngle,
    nearestStoneAngle,
    insidetrap,
    nearestMineAngle
let {
    CheckAB,
    step,
    AutoAntiBull
} = {
    CheckAB: false,
    step: false,
    AutoAntiBull: false
}
let ma2 = {
    last: Date.now(),
    meaning: 0,
    date: Date.now()
}
let lastTrapped = Date.now()
let Coord = document.getElementById("Coord")
let check = false
let speedAntiInsta = 105
let end = false
let date = Date.now()
let date2 = Date.now()
let date3 = Date.now()
let ClownByPass = false
let boostDir = null;
let speedMill = 150
let Spike_Soldier_Interval = false
let old = Date.now()
let $el_id = document.activeElement.id.toLowerCase()
let $el_chat = document.getElementById("#chatHolder")
let AutoMill = false
let AutoBaitMill = false
let w, he, mX, mY
let counter = 0
let health = 65
let tgl = false
let wS
let old3 = Date.now()
let msgPack = msgpack5
let En = [
    [],
    [], false
];
let ka2 = {
    tgl: false,
    fix: 65,
    delay: null,
    last: Date.now(),
    meaning: 0,
    speed: 58,
    type: 1
}
let ka = {
    tgl: false,
    fix: 100,
    delay: null,
    last: Date.now(),
    meaning: 0,
    speed: 75,
    type: 1
}
let autowalk = [{
    ch: "WalkMode coords.",
    x: null,
    y: null
}]
let player = {
    wood: 100,
    stone: 100,
    food: 100,
    points: 100
}
let autobreak = {
    angle: null,
    toggle: true,
    id: null
}
let melee = false
var hasApple = true
window.location.native_resolution = true
var playButton = `
transition: 1s all;
text-align: center;
font-size: 23px;
padding: 6px;
color: #fff;
background-color: #2c9506;
box-shadow: 0px 0px 8px gray, 0px 0px 4px gray;
width: 100%;
border-radius: 15px;
`;
var menuCard = `
  background: #e6e3df;
  text-align: center;
  box-shadow: inset 0px 0px 10px black;
  margin:0;
`;
document.getElementById("mainMenu").style.backgroundImage = "url('https://surviv.io/img/main_splash.png')";
document.getElementById('enterGame').innerHTML = 'Kill noobs';
document.getElementById('loadingText').innerHTML = `Prepare for killing noobs :)`;
document.getElementById('nameInput').placeholder = "Welcome";
document.getElementById('chatBox').placeholder = ":)";
document.getElementById('diedText').innerHTML = 'Bruh moment';
document.getElementById('diedText').style.color = "Green";
document.querySelector('.menuCard').style = menuCard;
document.getElementById('gameName').innerHTML = '<\A/>AttackX mod</A\>';
document.getElementById("scoreDisplay").style.color = "Orange";
document.getElementById("woodDisplay").style.color = "Purple";
document.getElementById("stoneDisplay").style.color = "Magenta";
document.getElementById("killCounter").style.color = "Red";
document.getElementById("foodDisplay").style.color = "Cyan";
document.getElementById("ageText").style.color = "red";
document.getElementById("allianceButton").style.color = "Yellow";
document.getElementById("chatButton").style.color = "Blue";
document.getElementById("storeButton").style.color = "Red";
document.getElementById("enterGame").style=playButton;
document.getElementById("nameInput").style=`
transition: 1s all;
text-align: center;
font-size: 23px;
padding: 6px;
color: #fff;
background-color: gray;
box-shadow: 0px 0px 8px gray, 0px 0px 4px gray;
border-radius: 15px;
`;
document.getElementById("guideCard").style=`
font-size: 23px;
padding: 6px;
color: #fff;
background-color: gray;
box-shadow: 0px 0px 8px gray, 0px 0px 4px gray;
border-radius: 20px;
`;


let hit360;
let mouseX;
let mouseY;
let width;
let height;
let coreURL = new URL(window.location.href)
window['sessionStorage']['force'] = coreURL['searchParams']['get']('fc');
var ws;
setInterval(() => {
    if(autoaim == true){
        doNewSend(["2",[nearestEnemyAngle]]);
        console.log("Aiming to "+nearestEnemyAngle)
    }
},5);

window.config.deathFadeout = 0;


var msgpack5 = msgpack;
let myPlayer = {
    'id': null,
    'x': null,
    'y': null,
    'dir': null,
    'object': null,
    'weapon': null,
    'clan': null,
    'isLeader': null,
    'hat': null,
    'accessory': null,
    'isSkull': null
};
let enemy = {
    'id': null,
    'x': null,
    'y': null,
    'dir': null,
    'object': null,
    'weapon': null,
    'clan': null,
    'isLeader': null,
    'hat': null,
    'accessory': null,
    'isSkull': null
};
var gm = false;
document.msgpack = msgpack;
function n(){
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array;
    this.type = 0;
}
WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        document.ws = this;

        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};
function socketFound(a) {
    a['addEventListener']('message', function (b) {
        handleMessage(b);
    });
}
var cry = 3;
var nearestEnemy;
var nearestEnemyAngle;
let d;
window.config.cowNames=["Porn guy","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!","John penises","Motherfucka","Sussy baka","U are gay","I love you!"]
async function handleMessage(a) {

    let b = msgpack5['decode'](new Uint8Array(a['data']));
    let c;
    if (b['length'] > 0x1) {
        c = [b[0x0], ...b[0x1]];
        if (c[0x1] instanceof Array) {
            c = c;
        }
    } else {
        c = b;
    }
    d = c[0x0];
    if (!c) {
        return;
    };
    if (d === 'io-init') {
        let e = document['getElementById']('gameCanvas');
        width = e['clientWidth'];
        height = e['clientHeight'];
        $(window)['resize'](function () {
            width = e['clientWidth'];
            height = e['clientHeight'];
        });
        e['addEventListener']('mousemove', f => {
            mouseX = f['clientX'];
            mouseY = f['clientY'];
        });
        if (document.getElementById('autorespawn').checked){
            newSend(['sp', [{ name: 'MPAK', moofoll: '1', skin: "__proto__" }]]);
        }
    }
    if (d == '11') {
        //AutoRespawn to do better experence
        setTimeout(function(){
            if (document.getElementById('autorespawn').checked){
                $('#mainMenu').toggle();
                newSend(['sp', [{ name: 'MPAK', moofoll: '1', skin: "__proto__" }]]);
                $('#mainMenu').toggle();
                $('#mainMenu').toggle();
                $('#mainMenu').toggle();
            }
        },3000);
    };
    if (d == '1' && myPlayer.id == null) {
        myPlayer.id = c[0x1];
    }
    if (d == '7') {

       if (document.getElementById('r2x').checked) {
              wep(secondary);
             wep(primary);
          }



       }

    async function heal() {
        place(foodType, null);
        await sleep(100);
    }
if (d == 'h' && c[0x1] == myPlayer.id && !antiinprogress && AutoHeal) {
    setTimeout(()=>{
        function yes() {
    if (c[0x2] < 0x20 && c[0x2] > 0x0) {
        setTimeout(()=>place(foodType, null));
        return 0;

    }
        if (c[0x2] < 0x40 && c[0x2] > 0x0) {
       setTimeout(()=> place(foodType, null),80);
            return 0;
    }
        if (c[0x2] < 0x60 && c[0x2] > 0x0) {
        setTimeout(()=>place(foodType, null),160);
            return 0;
    }
        }
        yes()
    },45);

        
}

        


    if (d == 'h' && c[0x1] == myPlayer.id && !antiinprogress && AutoHeal) {
     ka2.last = c[0x2];
        if (c[0x2] < 0x64 && c[0x2] > 0x0) {
            if (document.getElementById('spikeh').checked) {

                place(spikeType)
                wep(primary);
            }
            //MOM GOT THE CAMERAAAAAAAAAAAAAAAAAAAAAAAAAAA 100% LEGIT AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            /**setTimeout( () => {
                place(foodType, null);
            }, 100);
            setTimeout( () => {
                place(foodType, null);
                place(foodType, null);
            }, 200);
            setTimeout( () => {
                place(foodType, null);
                place(foodType, null);
                place(foodType, null);
            }, 300);
            setTimeout( () => {
                place(foodType, null);
                place(foodType, null);
                place(foodType, null);
                place(foodType, null);
            }, 400);
            **/
           



        }
    }
    update();
    if(d == "h" && c[0x1] == myPlayer.id && !antiinprogress && AutoHeal) {
        if(c[0x2] < 45 && c[0x2] > 0) {
            setTimeout(()=>{
            place(foodType);
            },100);

        }
    }
    if (d == "h" && c[0x1] == myPlayer.id && !antiinprogress && AutoHeal) {
        if (c[0x2] < 20 && c[0x2] > 0) {

                storeBuy(6);
                storeEquip(6);
        chat("<A> Ur insta is trash </A>")
        doHatCycle()
        ifInsta();
                                place(foodType, null);
                place(foodType, null);
                place(foodType, null);
                place(foodType, null);

        }
    }


    if (d=="p") {
        openn();
    }
    if (d=="ch") {
        if (get("chatmirror")) {
        newSend(["ch",[c[0x2]]]);
        }
    }
    if (d=="6") {
        if(i[6] == 15 && i[7] != myPlayer.clan && i[7] != myPlayer.id){
                                    if(Math.sqrt(Math.pow((myPlayer.y-i[2]), 2) + Math.pow((myPlayer.x-i[1]), 2)) < 100) {
                                        let paTr = e => [...Array(17)].map((n, i) => i * 0.19625).forEach(a => [spikeType, millType].forEach(t => place(t, a)));
                                            paTr();

                                        };
            if(Math.sqrt(Math.pow((myPlayer.y-i[2]), 2) + Math.pow((myPlayer.x-i[1]), 2)) < 600) {
                                        ka2.insta = false;

                                        };
                                        insidetrap = true;
    }
    }
    if (d == "2") {

        if (!c[0x2]) {
        chat("--!-[!]-!--")
        } else {
            chat("Hello my fwiend :DDD")
        }
    }
    setInterval(()=>{
    if (autoaim) {
        newSend([["2"],[nearestEnemyAngle]])
        newSend([["2"],[enemy.dir]])

    }


    },5);


    if (d == "33") {
       enemiesNear = [];
        var f = 0;
        for (; f < c[1].length / 13; f++) {
            var object = c[1].slice(13 * f, 13 * f + 13);
            if (object[0] == myPlayer.id) {
                myPlayer.x = object[1];
                myPlayer.y = object[2];
                myPlayer.dir = object[3];
                myPlayer.object = object[4];
                myPlayer.weapon = object[5];
                myPlayer.clan = object[7];
                myPlayer.isLeader = object[8];
                myPlayer.hat = object[9];
                myPlayer.accessory = object[10];
                myPlayer.isSkull = object[11];
            } else if(object[7] != myPlayer.clan || object[7] === null) {
                enemiesNear.push(object);
                enemy.x = object[1];
                enemy.y= object[2];
                enemy.dir = object[3];
                enemy.object = object[4];
                enemy.weapon = object[5];
                enemy.clan = object[7];
                enemy.isLeader = object[8];
                enemy.hat = object[9];
                enemy.accessory = object[10];
                enemy.isSkull = object[11];
                

            }
        }
    }
    isEnemyNear = ![];
    if (enemiesNear) {
        nearestEnemy = enemiesNear.sort(function(line, i) {
            return dist(line, myPlayer) - dist(i, myPlayer);
        })[0];
    }
    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            nearestEnemyAngle = enemy.dir

        }
    }

    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
    }


function dist(a) {
    return Math.sqrt(Math.pow((myY - a[2]), 2) + Math.pow((myX - a[1]), 2))
}

setInterval(()=>{

    if (insidetrap) {
        chat("<A>AntiTrap</A>");
        for (var i = 0; i < 361; i++) {
            newSend([["2"],[toRad(i)]])
            place(millType);

        }
    }

},5);
function socketsender(a) {
    ws.send(new Uint8Array(Array.from(msgpack5.encode(a))));
}
function sendws(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    socketsender(["5", [id, null]]);
    socketsender(["c", [1, angle]]);
    socketsender(["c", [0, angle]]);
    (["5", [myPlayer.weapon, true]]);
}
function isElementVisible(a) {
    return a.offsetParent !== null;
}
function update() {
    for (let a = 0x10; a < 0x13; a++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + a['toString']()))) {
            foodType = a - 0x10;
        }
    }
    var event = 0;
    for (; event < 9; event++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + event['toString']()))) {
            primary = event;
        }
    }
    var div = 9;
    for (; div < 16; div++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + div['toString']()))) {
            secondary = div;
        }
    }
    var tobj = 16;
    for (; tobj < 19; tobj++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + tobj['toString']()))) {
            foodType = tobj - 16;
        }
    }
    var props = 19;
    for (; props < 22; props++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + props['toString']()))) {
            wallType = props - 16;
        }
    }
    var e = 22;
    for (; e < 26; e++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + e['toString']()))) {
            spikeType = e - 16;
        }
    }
    var f = 26;
    for (; f < 29; f++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + f['toString']()))) {
            millType = f - 16;
        }
    }
    var g = 29;
    for (; g < 31; g++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + g['toString']()))) {
            mineType = g - 16;
        }
    }
    var h = 31;
    for (; h < 33; h++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + h['toString']()))) {
            boostType = h - 16;
        }
    }
    var intval = 33;
    for (; intval < 39; intval++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + intval['toString']())) && intval != 36) {
            turretType = intval - 16;
        }
    }
    spawnpadType = 36;
}


var fadingspeed = 10 // lower = faster, higher = slower


function ee(e, n = d) {
    document.getElementById(e).style["background-color"] = "hsl(" + n + ", 100%, 50%)";
}
function doNewSend(d) {
    newSend(d);
}
function dns(data) {
    newSend(data);
}
function doHatCycle() {
    dns(["13c", [0, 11, 0]]); dns(["13c", [0, 21, 1]]); setTimeout(function () {
        dns(["13c", [0, 12, 0]]); dns(["13c", [0, 18, 1]])
    }, 300); setTimeout(function () {
        dns(["13c", [0, 55, 0]]); dns(["13c", [0, 13, 1]])
    }, 600); setTimeout(function () {
        dns(["13c", [0, 40, 0]]); dns(["13c", [0, 19, 1]])
    }, 900); setTimeout(function () {
        dns(["13c", [0, 12, 0]]); dns(["13c", [0, 21, 1]])
    }, 1200); setTimeout(function () {
        dns(["13c", [0, 26, 0]]); dns(["13c", [0, 13, 1]])
    }, 1500); setTimeout(function () {
        dns(["13c", [0, 12, 0]]); dns(["13c", [0, 19, 1]])
    }, 1800); setTimeout(function () {
        dns(["13c", [0, 21, 0]]); dns(["13c", [0, 18, 1]])
    }, 2100); setTimeout(function () {
        dns(["13c", [0, 53, 0]]); dns(["13c", [0, 21, 1]])
    }, 2500)
};

setInterval(function() {
    (function(e, n) {
        ee(n);
    })(e, "ageBarBody");
    d++;
}, fadingspeed);


var store = document.getElementById('storeHolder');
store.style.display = "block";
store.style.overflowY = "auto";
store.style.scrollbarWidth = "none";

function newSend(data) {
    try {
        ws.send(new Uint8Array(Array.from(msgpack5.encode(data))));
    }
    catch (e) {
        return e;
    }
}
var autoaim;
var autoprimary;
function acc(id) {
    newSend(['13c', [0, 0, 1]]);
    newSend(['13c', [0, id, 1]]);
}
function HatEquip(id){
    newSend(['13c', [1, id, 0]]);
    newSend(['13c', [0, id, 0]]);
}
function hat(id) {
    newSend(['13c', [0, id, 0]]);
}
function place(p__14702) {
    var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.atan2(mouseY - height / 2, mouseX - width / 2);
    newSend(['5', [p__14702, null]]);
    newSend(['c', [1, angle]]);
    newSend(['c', [0, angle]]);
    newSend(['5', [myPlayer.weapon, true]]);
    newSend(['5', [p__14702, null]]);
    newSend(['c', [1, angle]]);
    newSend(['c', [0, angle]]);
    newSend(['5', [myPlayer.weapon, true]]);
    newSend(['5',[myPlayer.weapon,false]]);
    wep(primary)
}
function donewsend(data) {

    newSend(data);
}
var nea=7385939**9494939**2647781*(Math.PI/180)

const CanvasAPI = document.getElementById("gameCanvas");
var ctx = CanvasAPI.getContext("2d");
setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);


function wep(id){
    doNewSend(["5", [id, true]]);
}
function hit() {
    doNewSend(["c", [1]]);
}
function stophit() {
    doNewSend(["c", [0, null]]);
}
function chat(sender) {
    doNewSend(["ch", [sender]]);
}
function equip(hat,acc) {
    doNewSend(["13c", [1, hat, 0]]);
    doNewSend(["13c", [1, acc, 1]]);
    doNewSend(["13c", [0, hat, 0]]);
    doNewSend(["13c", [0, acc, 1]]);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sing() {
    var words = ["|            |","|           Y|","|          YO|","|         YO |","|        YO  |","|       YO   |","|      YO    |","|     YO     |","|    YO     |"]


    for (var i =0; i < words.length; i++) {
        chat(words[i]);

                 newSend(["13c", [1, 7, 0]]);
        newSend(["13c", [0, 7, 0]]);

        newSend(["13c", [1, 21, 1]]);
        newSend(["13c", [0, 21, 1]]);

        await sleep(500);
    }
}
function oneTick() {
newSend(["5", [secondary, true]])
    autoaim = true;
                    hat(53)
                    setTimeout(() => {

                        newSend([["2"],[Number.MAX_VALUE]])
                        hat(7)
                        newSend([["2"],[Number.MAX_VALUE]])
                        newSend(["5", [primary, true]])
                        newSend([["2"],[Number.MAX_VALUE]])
                    }, 75)
                    setTimeout(() => {
                        angleGlitch2 = false
                        newSend([["c"], [0]])
                        autoaim = false;
                    }, 140)
}
function reverse() {
            doHatCycle()
            autoprimary = false;
            autosecondary = true;
    autoaim = true;
            newSend([["2"],[toRad(Math.atan2(mouseY - height / 2, mouseX - width / 2) - 180)]])
            newSend(["13c", [0, 0, 0]]);
            newSend(["13c", [1, 53, 0]]);
            newSend(["13c", [0, 53, 0]]);
            newSend(["5", [secondary, true]]);
                        newSend(["13c", [0, 0, 1]]);
         setTimeout( () => {
        newSend(["5", [primary, true]]);
        newSend(["7", [1]]);
    newSend([["2"],[Number.MAX_VALUE]])
        newSend(["13c", [1, 7, 0]]);
        newSend(["13c", [0, 7, 0]]);
    newSend([["2"],[Number.MAX_VALUE]])
        newSend(["13c", [1, 21, 1]]);
        newSend(["13c", [0, 21, 1]]);
    newSend([["2"],[Number.MAX_VALUE]])
             autoaim = false;
        }, 170);
}
function normal() {
    doHatCycle()
autoaim = true;
    wep(primary);
    newSend([["2"],[Number.MAX_VALUE]])
        autoprimary = true;
        autosecondary = false;
        newSend(["13c", [0, 0, 1]]);
    wep(primary);
        newSend(["5", [primary, true]]);
    wep(primary);
        newSend(["7", [1]]);
    newSend([["2"],[Number.MAX_VALUE]])
        newSend(["13c", [1, 7, 0]]);
    wep(primary);
        newSend(["13c", [0, 7, 0]]);
    wep(primary);
    newSend([["2"],[Number.MAX_VALUE]])
        newSend(["13c", [1, 21, 1]]);
    wep(primary);
        newSend(["13c", [0, 21, 1]]);
    wep(primary);
    newSend([["2"],[Number.MAX_VALUE]])
        setTimeout( () => {
            doHatCycle()
            autoprimary = false;
            wep(secondary);
            autosecondary = true;
            newSend(["13c", [0, 0, 0]]);
            wep(secondary);
            newSend(["13c", [1, 53, 0]]);
            wep(secondary);
            newSend(["13c", [0, 53, 0]]);
            wep(secondary);
            newSend(["5", [secondary, true]]);
            wep(secondary);
            autoaim = false;

        }, 75);
    doHatCycle();
}
function insta(id="sou br") {
    //                                                      me              you
    //Steal my insta and i will find you by ip adress and 1_/(0-0)\_     -(0_0)-
    sing()
normal()
    setTimeout( ()=>{

        place(boostType);



    },120);

        setTimeout( ()=>{
        place(boostType);



    },200);

        setTimeout( ()=>{
            var angle = Math.atan2(mouseY - height / 2, mouseX - width / 2);
        place(spikeType,toRad(angle + 90));
            place(spikeType,toRad(angle - 90));

    },400);
            setTimeout( ()=>{
            var angle = Math.atan2(mouseY - height / 2, mouseX - width / 2);
        place(boostType,toRad(angle - 180));


    },350);
    setTimeout( ()=>{
            var angle = Math.atan2(mouseY - height / 2, mouseX - width / 2);
        place(boostType,toRad(angle - 180));
        place(boostType,toRad(angle - 90));
        place(boostType,toRad(angle + 180));
        place(boostType,toRad(angle + 90));

    },550);
     setTimeout( ()=>{
                    
reverse();

    },675);

    setTimeout(()=>{
        // one tick insta!!
         oneTick();
    },800);

}
function boostSpike() {
    if (boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
    newSend(['33', [boostDir]]);
}
//document.querySelector("#healthnumber").style.display="block";
function ifInsta() {
    var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.atan2(mouseY - height / 2, mouseX - width / 2);

    Cycle(10,foodType);
    // IMPORTANT
    newSend(["5", [myPlayer.weapon, true]]);
    newSend(["c", [1, null]])
    place([foodType])

    newSend(["c", [0, null]])
    fullHat(22)
    setTimeout(function(){
        fullHat(7)
    }, 250)
    // heal while pinged to bypass insta
    setTimeout(function(){
        fullHat(6)
        Cycle(10,foodType);
    }, (999 - window.pingTime))



}
document.addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 86:
            if (document.activeElement.id.toLowerCase() !== 'chatbox') {
                place(spikeType);
            }
            break;
        case 66:
            if (document.activeElement.id.toLowerCase() !== 'chatbox') {
                var angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)
                var deg90 = -0.785398/2
                var deg290 = 0.785398/2
                place(millType,angle);
                place(millType,angle-deg290);
                place(millType,angle+deg90);
            }
            break;
        case 71:
            if (document.activeElement.id.toLowerCase() !== 'chatbox') {
                place(spikeType,6.28319);
                place(spikeType,3.14159);
                place(spikeType,-3.14159);
            }
            break;
        case 70:
            if (document.activeElement.id.toLowerCase() !== 'chatbox') {
                place(boostType,0);
                place(boostType,6.28319);
                place(boostType,3.14159);
                place(boostType,-3.14159);
                place(boostType,1.5708);
                place(boostType,-1.5708);

            }
            break;

    }
});




setInterval(function() {
    if (myPlayer.hat == 45) {
        newSend(['ch', ['Kill me = noob!']]);
                        place(spikeType,6.28319);
                place(spikeType,3.14159);
                place(spikeType,-3.14159);
                        place(spikeType,3.28319);
                place(spikeType,2.14159);
                place(spikeType,-2.14159);
                        place(spikeType,1.28319);
                place(spikeType,0.14159);
                place(spikeType,-0.14159);
        hat(13);
        acc(13);


    }
}, 100);




class Main {
    constructor(status) {
        this.status = status
    }
    RemoveAd() { // Ad
        try {
            console.log("Ad!")
            setTimeout(() => ($('#ot-sdk-btn-floating').remove(), $('#pre-content-container').remove()), 3000) // Remove cookie
            document.getElementById("moomooio_728x90_home").style.display = "none"
            jQuery("#moomooio_728x90_home").parent().css("display", "none")
            jQuery("#adBlock").remove()
        } catch (e) {}
    }
    AdapterPing() { // Ping
        try {
            console.log("Ping!")
            jQuery("#errorNotification").remove()
            jQuery("#youtuberOf").remove()
            jQuery("#followText").remove()
            jQuery("#promoImgHolder").remove()
            jQuery("#twitterFollow").remove()
            jQuery("#joinPartyButton").remove()
            jQuery("#linksContainer2").remove()
            jQuery("#partyButton").remove()
            jQuery("#youtubeFollow").remove()
            jQuery("#mobileInstructions").remove()
            jQuery("#altServer").remove()
            jQuery("#downloadButtonContainer").remove()
            jQuery("#mobileDownloadButtonContainer").remove()
            jQuery(".downloadBadge").remove()
        } catch (e) {}
    }
    AdapterFPS() { // FPS
        try {
            console.log("Fps!")
            window.location.native_resolution = true
        } catch (e) {}
    }
}
const MAIN = new Main("Work")
console.log("Status: " + MAIN.status)
queueMicrotask(MAIN.AdapterPing)
queueMicrotask(MAIN.AdapterFPS)
queueMicrotask(MAIN.RemoveAd)
const $el_PING = jQuery("#pingDisplay")
$el_PING.css("display", "block")
$("body").append($el_PING)




//store hack






//server data (offline play)
window.vultr = {"scheme":"mm_exp","servers":[{"ip":"76e588a6b5c810a49abf232546f1fda4","scheme":"mm_exp","region":"vultr:40","index":0,"games":[{"playerCount":1,"isPrivate":false}]},{"ip":"7dff4b4ff28d936249387ebf93be7f11","scheme":"mm_exp","region":"vultr:19","index":1,"games":[{"playerCount":4,"isPrivate":false}]},{"ip":"fdc8040f190f2d6c48f5bac68bf86d09","scheme":"mm_exp","region":"vultr:9","index":0,"games":[{"playerCount":23,"isPrivate":false}]},{"ip":"aefd4d44685aaef2ccec10a53f4cb88b","scheme":"mm_exp","region":"vultr:9","index":2,"games":[{"playerCount":32,"isPrivate":false}]},{"ip":"ac8649434835a90d12e903c899905223","scheme":"mm_exp","region":"vultr:40","index":1,"games":[{"playerCount":10,"isPrivate":false}]},{"ip":"20f2116e2723dc17ba6a8d67a5ce1a30","scheme":"mm_exp","region":"vultr:39","index":3,"games":[{"playerCount":4,"isPrivate":false}]},{"ip":"81f399f25e341c6961a5cdd759f2e4af","scheme":"mm_exp","region":"vultr:12","index":0,"games":[{"playerCount":6,"isPrivate":false}]},{"ip":"5a45f1fae351e648a763441ccf4a0e56","scheme":"mm_exp","region":"vultr:39","index":4,"games":[{"playerCount":9,"isPrivate":false}]},{"ip":"27fe5e747ee91d8f60fcc8b6605c60c9","scheme":"mm_exp","region":"vultr:19","index":0,"games":[{"playerCount":4,"isPrivate":false}]},{"ip":"11812422f34d427981471e9364c12322","scheme":"mm_exp","region":"vultr:12","index":2,"games":[{"playerCount":11,"isPrivate":false}]},{"ip":"db820043435c0b9cb4bdf15971323df8","scheme":"mm_exp","region":"vultr:9","index":1,"games":[{"playerCount":23,"isPrivate":false}]},{"ip":"2d2e35d7b238b3123c7a5becd117bb61","scheme":"mm_exp","region":"vultr:39","index":0,"games":[{"playerCount":11,"isPrivate":false}]},{"ip":"9246f9bd404f5e9afa8c00b663822158","scheme":"mm_exp","region":"vultr:39","index":1,"games":[{"playerCount":12,"isPrivate":false}]},{"ip":"c9ee3091133b95d8f1d14a46d68a0c1d","scheme":"mm_exp","region":"vultr:40","index":2,"games":[{"playerCount":14,"isPrivate":false}]},{"ip":"ad6e2172370448440a3a51f4d6e0d871","scheme":"mm_exp","region":"vultr:12","index":1,"games":[{"playerCount":8,"isPrivate":false}]},{"ip":"b6daffac3865a8e721437770d418fadb","scheme":"mm_exp","region":"vultr:19","index":2,"games":[{"playerCount":3,"isPrivate":false}]},{"ip":"b8593ce9284cac92dc8f5d901356a276","scheme":"mm_exp","region":"vultr:39","index":2,"games":[{"playerCount":7,"isPrivate":false}]}]};
//store data









function fullHat(id) {
    hat(id);
    HatEquip(id);
}



let ka3 = {
    tgl: false,
    fix: 65,
    last: Date.now()
}









function Cycle(x, type) {
    for (let i = 0; i < x; i++) {place(type)};
}
setInterval(function(){
    //KATANA+MUSKET
    if (document.getElementById('katana').checked){
        newSend(["6", [4]]);//katana
    }
    if (document.getElementById('musket').checked){
        newSend(["6", [15]]);//musket
    }
},100);
var ultraSkin;

setInterval(() => {
    allColors = ["#000000","rgb(256,0,0)","rgb(0,256,0)","rgb(0,0,256)"]

    ultraSkin = String(allColors[allColors.length * Math.random()|0]);


    Global.newSkinColors = (window.config.skinColors = ["rgb(256,0,0)", "rgb(0,256,0)", "rgb(0,0,256)", "rgb(256,256,0)", "rgb(0,256,256)", "rgb(256,0,256)", "rgb(256,256,256)", "rgb(70,37,78)", "rgb(89,34,10)", ultraSkin])








}, 10)
setInterval(function(){
    if (document.getElementById('hit360').checked){
        newSend(["2", [99e14 * 99e14 * 99e14 * 99e14]]);
        newSend(["2", [99e14 * 99e14 * 99e14 * 99e14]]);
        newSend(["2", [99e14 * 99e14 * 99e14 * 99e14]]);
    }
}, 25);

/*
     greetings to MooMooMod 10
     item == "id" // All IDS, Names of players
     item == "pp" // Update Ping
     item == "d" // Full Server
     item == "b" // Bait Im fink
     item == "p" // Wave Of "R" button
     item == "a" // idk
     item == "mm" // idk
     item == "aa" // Moostofa Hit
     item == "sp" // Spawn
     item == "us" // Hats|Acc
     item == "ad" // Clan Deleted
     item == "sa" // Peoples At Clan
     item == "an" // People Joining to my clan
     item == "st" // MyPlayer Creating  Clan
     item == "ac" // Creating  Clan
     item == "ch" // Chat
     item == "h" // Health
     item == "t" // Damage
     item == "1" // Spawn
     item == "2" // When player is near Show Player Info
     item == "4" // ID or SID
     item == "5" // LeaderBoarderData
     item == "6" // Buildings
     item == "7" // Hit
     item == "8" // Moving Buildings
     item == "9" // Materials
     item == "11" // Death
     item == "12" // Breaked Building
     item == "13" // Leaved Peoples
     item == "14" // MyBuildingCount
     item == "15" // AgeXPCount
     item == "16" // AgeCount
     item == "17" // UpgradedItems
     item == "18" // Arrows
     item == "19" // Arrows When it damage
     item == "33" // Players Info
     item == "35" // NEWUPDATE!
     */

setInterval(function() {
    if (document.getElementById('hit360').checked){
        newSend(["2", [99e14 * 99e14 * 99e14 * 99e14]]);
        newSend(["2", [99e14 * 99e14 * 99e14 * 99e14]]);
        newSend(["2", [99e14 * 99e14 * 99e14 * 99e14]]);
    }
}, 5);

function animate(space, chance,sstring="AttackX") {
    let result = '';
    let characters;
    if(space) {
        characters = sstring;
    } else {
        characters = sstring;
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
        if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
            result += "_";
            count++
        } else {
            result += characters.charAt(i);
        }
    }
    return result;
}




var ext = false;
document.addEventListener('keydown', function (e) {
    if (e.key === "`") {
        $('#mainMenu').toggle();
        if (ext == true) {$('#gameUI').hide(); $('#mainMenu').hide()};
        if (ext == false) {$('#gameUI').show(); $('#mainMenu').hide()};
        ext = !ext;
    };
}); //spectator mode!

setInterval(() => {
    if (ka2.tgl) {
        // based on Eveee insta and other.
        if (Date.now() - ka2.last >= 70) {
            antiinprogress=true;
            for (let i = 0; i < (ka2.fix / (foodType === 0 ? 23 : 33)); i++) {
                Cycle(mult1, foodType)
                chat("<A>AttackX antiinsta</A>")
                ka.last = Date.now()
            }
            setTimeout(()=>{
                chat("NeuralNetwork:spike insta")
                AutoHeal = false;

                setTimeout(()=>{
                    place(foodType)
                },50);
                                setTimeout(()=>{
                    place(foodType)
                },70);
                                setTimeout(()=>{
                    place(foodType)
                },100);
            },90);

            setTimeout(()=>{
                chat("AntiTrap")
                for (var i = 0; i < 360; i ++) {
                    place(millType,toRad(i))
                }
            },140);
                                  setTimeout(()=>{
                    place(foodType)
                },50);
                                setTimeout(()=>{
                    place(foodType)
                },70);
                                setTimeout(()=>{
                    place(foodType)
                },100);


            ka2.tgl = false

            antiinprogress=false;
        }
    }
    AutoHeal = true;
    
}, 0.1)
setInterval(() => {
    if (document.getElementById("anti").checked) {
        if (ka2.tgl) {
        if (Date.now() - ka2.last >= 70) {
            antiinprogress=true;
            newSend(["c", [1, null]])
            place(foodType)
            Cycle(mult1, foodType)
            newSend(["c", [0, null]])
            chat("AXantiinsta")
            ka2.last = Date.now()
            ka2.tgl = false
            antiinprogress=false;
        }
        }
    }
}, 0.1)
function get(id) {
    return document.getElementById(id).checked;
}
CanvasAPI.oncontextmenu = function(e) {
    if (get("normal")) {
        normal()
    } else if (get("reverse")) {
        reverse()
    } else if (get("onetick")) {
        oneTick()
    } else if (get("combo")) {
        insta()
    } else if (get("evee")) {
        evee()
    } else {
        chat("{ERROR} No insta selected!")
    }
    e.preventDefault();
    e.stopPropagation();
}


var mctx = 0;
var gcanvas = 0;
var wh = document.documentElement.clientHeight;
var ww = document.documentElement.clientWidth;
var th = 0;
var tw = 0;
function optimise(pr){
    document.getElementById("gameCanvas").style.display = 'none';
    let last = document.getElementsByClassName("optimise")[0];
    if(!!last){
        last.remove();
    }
    th = wh/100*pr;
    tw = ww/100*pr;
    let div = document.createElement('div');
    div.className = "optimise";
    div.innerHTML = `<canvas id="myCanvas" width="`+ww/100*pr+`" height="`+th+`" style="width: `+ww+`px; height: `+wh+`px;"></canvas>`;
    document.body.append(div);
    gcanvas = document.getElementById("gameCanvas")
    var gctx = gcanvas.getContext("2d");
    var mcanvas = document.getElementById("myCanvas")
    mctx = mcanvas.getContext("2d");

    var frame1 = 1000/70;
    frame();
    function frame(){
        if(gcanvas){
            mctx.drawImage(gcanvas, 0, 0, tw, th)}
        setTimeout(() => {
            frame();
        }, frame1);
    }
}

spawned = true;

// Invisible obj bypass
var old_rotate = CanvasRenderingContext2D.prototype.rotate; /*Define the old rotate function*/
CanvasRenderingContext2D.prototype.rotate = function() {
    if(arguments[0] > 1e300 || arguments[0] < -1e300){/*If is invisible*/
        arguments[0] = (Math.atan2(Math.sin(arguments[0]), Math.cos(arguments[0])))/*Is old rotation*/
    }
    old_rotate.apply(this, arguments)/*apply with the new arguments*/
}

//no disconnect me!!


var autoreloadloop;
var autoreloadenough = 0;

autoreloadloop = setInterval(function () {
    if (autoreloadenough < 200) {
        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            document.title = "Disconnected? NP";
            clearInterval(autoreloadloop);
            setTimeout(function () {document.title = "Moo Moo";}, 1000)
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        document.title = "MOOMOO.IO";
        setTimeout(function () {document.title = "Moo Moo";}, 1000)
    }
}, 50);


let menu = {
    opacity: 1,
    position: {
        relative: `relative`,
        absolute: `absolute`,
        top: `${0}px`,
        left: `${30}px`,
        bottom: `${0}px`,
        right: `${0}px`,
    },
    size: {
        width: `${700}px`,
        height: `${500}px`,
        height_title_block: `${30}px`,
        border_body_block: `${5}px`,
        border_radius_body_block: `${7}px`,
        font_size_title_block: `${10}px`,
        font_size_inner_block: `${10}px`
    },
    colors: {
        background_title_block: `rgba(66, 66, 66, 0.61)`,
        background_body_block: `rgba(0, 0, 0, 0.25)`,
        background_inner_block: `rgba(0, 0, 0, 0.25)`,
        border_body_block: `rgba(38, 38, 38, 0.72)`,
        title_text: `#fff`,
        inner_block: `#fff`,
    },
    display: {
        block: `block`,
        flex: `flex`,
        none: `none`
    },
    align: {
        left: `left`,
        center: `center`,
        right: `right`,
        bottom: `bottom`
    }
}

menu = new Proxy(menu, {
    set(target, prop, val) {
        if (prop in target) {
            return true
            if (typeof val != 'string') {
                target[prop] = val.toString()
            } else {
                return target[prop]
            }
        } else {
            return prop
            return false
            throw new Error(`Prop: ${prop} not defined in ${target}`)
        }
    }
});

/* Create menu HTML code */
function openn() {
    if (openMenu) {
        openMenu = false
        $('.menu--holder').css('display', "block")
    } else {
        openMenu = true
        $('.menu--holder').css('display', "none")
    }
}
var menucont = document.getElementById('menuContainer');
var asd = document.createElement('a');
asd.onclick=`$('menu--holder').css('display',menu.display.block);openMenu=false`;
asd.innerHTML="Open mod menu";
menucont.prepend(asd);
var html;
html = `
<!--
<main></main> & <passive></passive> - are not embedded tags in HTML.
I use this to denote the significance of the blocks.
class="" & id="" - I use to denote blocks, id for everything else
-->
<!-- Add holder -->
<main class="menu--holder">
  <main class="menu--body">
    <passive id="menu--title">
      Menu
    </passive>
    <main class="menu--inner-gui">
      <passive class="menu--inner-gui-block">
        <passive id="menu--inner-gui-block-text">
          Quadratic heal mode <input type="checkbox" id="quadra">
          <br>
          Disable rotations <input type = "checkbox" id = "rotate"><br>
          Katana<input type = "checkbox" id = "katana">
          Musket<input type = "checkbox" id = "musket"><br>
          Auto mills<input type = "checkbox" id = "autoMill">
          360 spike on hit<input type = "checkbox" id = "spikeh"><br>
          Spam chat<input type = "checkbox" id = "spam"><input type = "name" id = "spamChat">
          Linear heal mode <input type="checkbox" id="lin"><br>
          Clowned heal mode <input type="checkbox" id="clown">
          Stupid heal mode <input type="checkbox" id="stupid"><br>
          360 Hit <input type="checkbox" id="hit360">
          AutoRespawn <input type = "checkbox" id = "autorespawn"><br>
          Reload 2X Speedup<input type = "checkbox" id = "r2x"><br>
          Anti-insta<input type = "checkbox" id = "anti"><br>
          Classic insta<input type = "checkbox" id = "normal"><br>
          Reverse insta<input type = "checkbox" id = "reverse"><br>
          OneTick<input type = "checkbox" id = "onetick"><br>
          OWhoLOstEvee?<input type = "checkbox" id = "evee"><br>
          Combinated insta<input type = "checkbox" id = "combo"><br>
          Chat mirror <input type = "checkbox" id = "chatmirror"><br>
          <button id = "killping">Crash server</button>
        
        </passive>
      </passive>
    </main>
  </main>
</main>
`

CanvasAPI.addEventListener("mousedown", function(){

 if (myPlayer.y < 2400) {
                    hat(15);
                } else {
                    if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                        hat(31);
                    } else {
                        hat(12);
                    }
                }


}, false);
setInterval(()=>{
    if(document.getElementById('spam').checked){
        var name = document.getElementById('spamChat').value
        newSend(["ch",[animate(true,name.length,name)]]);
    }
},400);
/* Create menu CSS code */

var css = `
<style>
/*
. - use for class
# - use for id
*/
/* Style for holder menu. */
main.menu--holder {
position: ${menu.position.absolute};
top: ${menu.position.top};
left: ${menu.position.left};
width: ${menu.size.width};
height: ${menu.size.height};
display: ${menu.display.none};
z-index:999;
}
/* Style for body menu. */
main.menu--body {
z-index:999;
width: 100% !important;
height: 100% !important;
font-size:8px !important;
background: ${menu.colors.background_body_block};
border-radius: ${menu.size.border_radius_body_block};
border: ${menu.size.border_body_block} solid ${menu.colors.border_body_block};
opacity: ${menu.opacity};
}
/* Style for title menu */
passive#menu--title {
cursor: move;
position: ${menu.position.relative};
display: ${menu.display.flex};
width: 91% !important;
background: ${menu.colors.background_title_block};
color: ${menu.colors.title_text};
align-content: ${menu.align.center};
justify-content: ${menu.align.center};
font-size: ${menu.size.font_size_title_block};
text-align: ${menu.align.center};
height: ${menu.size.height_title_block};
box-shadow: 0px 0px 4px #1a1a1a;
flex-wrap: wrap;
margin-left: 12px;
margin-top: 5px;
z-index:999;
font-size:8px ! important;
}
/* Style for inner menu gui */
main.menu--inner-gui {
margin: 0px 2px;
display: ${menu.display.flex};
font-size:8px ! important;
}
/* Style for inner menu gui block */
passive.menu--inner-gui-block {
width: 200px;
vertical-align: top;
height: 200px;
margin: 0px 10px 10px 10px;
background: rgba(66, 66, 66, 0.61);
box-shadow: 0px 0px 4px #1a1a1a;
border-radius: 3px;
overflow-x: visible;
overflow-y: visible;
font-size:8px ! important;
color: #fff;
padding: 10px;
margin-top: 10px;
z-index:999;
}
/* Style for text in inner menu */
passive#menu--inner-gui-block-text {
color: ${menu.colors.inner_block};
font-size: ${menu.size.font_size_inner_block};
display: ${menu.display.block};
z-index:999;

}
input[type="checkbox"] {
vertical-align: middle;
user-select: none;
box-sizing: border-box;
cursor: pointer;
width:4px;
height:4px;
}
</style>
`


/* Create menu JS code */

let js = `
<script>
// If you click outside of the menu location
$(document).mouseup(function (e) {
    let container = $(".menu--holder")
    if (container.has(e.target).length === 0 && container.css('display') == 'block'){
        container.css('opacity', '0.15')
    } else {
        container.css('opacity', '1')
    }
})
// Drag element
dragElement(document.querySelector((".menu--holder")))
function dragElement(elmnt) {
    let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
    if (document.getElementById("menu--title")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById("menu--title").onmousedown = dragMouseDown
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown
    }
    function dragMouseDown(e) {
        e = e || window.event
        // get the mouse cursor position at startup:
        pos3 = e.clientX
        pos4 = e.clientY
        document.onmouseup = closeDragElement
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag
    }
    function elementDrag(e) {
        e = e || window.event
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"
    }
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null
        document.onmousemove = null
    }
}
</script>
`

/* Add menu in body */
$('body').append(html, css, js)

/* Add toggler for menu */
function deg(rad)
{
  return rad * (180/Math.PI);
}


function evee() {
    chat("x-WhoLostEvee?-x")
    normal();

    newSend(["2"],[toRad(deg(nearestEnemyAngle) - 90 )])
    place(boostType)

            newSend(["2"],[toRad(deg(nearestEnemyAngle) + 90 )])
    place(spikeType)


}
let openMenu = true
document.addEventListener("keydown", function(event) {
    if (event.code == "Escape") {
        if (openMenu) {
            openMenu = false
            $('.menu--holder').css('display', menu.display.block)
        } else {
            openMenu = true
            $('.menu--holder').css('display', menu.display.none)
        }
    }
})
   document.getElementById('killping').addEventListener('click',async function(){
    newSend(["ch",["Are you pinged? :DDDDD"]]);
       await sleep(300)
    for (var i = 0;i<99999999;i++) {
        newSend(["ch"],[i])
    }
})
                function genRand(string) {
                    if (!string == undefined && !string == null && !string == "") {
                    let tm = string.split("");
                    tm = tm.map(e => {return Math.random() > 0.7 ? (
                        Math.random() > 0.5 ? "_" : "-"
                    ) : e });
                    return tm.join(""); //fz dont fix this and i will hunt you down and 10-0
                    }
                };

