/* =====================| ayr_ton.console.js - BEGIN |=================== */
function Console(){var a="To be implemented soon. (or not)";this.init=function(){$(document).ready(function(c){var d="Welcome to ayrtonaraujo.net. - Under Development (v0.4.0 Alpha)\n    Type '\033[1mhelp\033[0m' for a list of available commands.\n";window.jqconsole=c("body").jqconsole(d,"$ -> ");jqconsole.RegisterShortcut("Z",function(){jqconsole.AbortPrompt();b()});jqconsole.RegisterShortcut("A",function(){jqconsole.MoveToStart();b()});jqconsole.RegisterShortcut("E",function(){jqconsole.MoveToEnd();b()});jqconsole.RegisterMatching("{","}","brace");jqconsole.RegisterMatching("(",")","paran");jqconsole.RegisterMatching("[","]","bracket");var b=function(g){if(g){try{Console[g]()}catch(f){jqconsole.Write(g+": command not found\n")}}jqconsole.Prompt(true,b,function(i){try{Function(i)}catch(h){if(/[\[\{\(]$/.test(i)){return 1}else{return 0}}return false})};b()})};this.help=function(){var b="\033[1mList of available commands:\033[0m\n\033[33mblog\033[0m ==> \033[36mAyrton's blog.\n\033[33mclear\033[0m ==> \033[36mClear screen.\n\033[33mcontact\033[0m ==> \033[36mContact info.\n\033[33mdate\033[0m ==> \033[36mDisplays the current date.\n\033[33mgoto\033[0m ==> \033[36mJump to other pages.\n\033[33mhelp\033[0m ==> \033[36mhelp Displays this list.\n\033[33missues\033[0m ==> \033[36mFound bugs or have suggestions for this site?\n\033[33mpress\033[0m ==> \033[36mPress related links.\n\033[33mresume\033[0m ==> \033[36mDisplays a compact resume.\n\033[33mskills\033[0m ==> \033[36mProfessional skills.\n\033[33mwhois\033[0m ==> \033[36mWho is Ayrton Araujo?\033[0m\n\nThere's some other available commands. Use your imagination :-)\n";jqconsole.Write(b)};this.blog=function(){window.location="http://blog.ayrtonaraujo.net/"};this.contact=function(){window.location.href="mailto:root@ayrtonaraujo.net"};this.date=function(){var b="[[;#73d216;]In a relationship with] [[b;#FFF;]Madoka Ito] [[;#A40;]x3]";jqconsole.Write(a)};this.issues=function(){window.location="http://github.com/ayr-ton/ayrtonaraujo.net/issues"};this.press=function(){jqconsole.Write(a)};this.projects=function(){jqconsole.Write(a)};this.resume=function(){jqconsole.Write(a)};this.skills=function(){jqconsole.Write(a)};this.whois=function(){var b='[[b;#FFF;]Ayrton Araújo] [[;#73d216;]is a software enginner with more than five years of experience in development,\r\n              desktop and server software focused on unix.\r\n\n             "I am a software engineer who likes efficiency and security.\r\n              I love debugging and digging into the code, finding out how things work and\r\n              performing client side and server side hardening.\r\n              I have also been in contact with web development, both front and back end,\r\n              learning from the latest technologies and putting them in practice in multiple projects."]';jqconsole.Write(a)}}var Console=new Console();Console.init();
/* =====================| ayr_ton.console.js - END |=================== */
