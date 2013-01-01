function Console() {
    this.init = function () {
        $(document).ready(function($) {
            // Creating the console.
            var header = "Welcome to ayrtonaraujo.net. - Under Development (v0.4.0 Alpha)\n" +
                     "    Type '\033[1mhelp\033[0m' for a list of available commands.\n";
            window.jqconsole = $('body').jqconsole(header, '$ -> ');

            // Abort prompt on Ctrl+Z.
            jqconsole.RegisterShortcut('Z', function() {
            jqconsole.AbortPrompt();
            handler();
            });

            // Move to line start Ctrl+A.
            jqconsole.RegisterShortcut('A', function() {
            jqconsole.MoveToStart();
            handler();
            });

            // Move to line end Ctrl+E.
            jqconsole.RegisterShortcut('E', function() {
            jqconsole.MoveToEnd();
                handler();
            });

            jqconsole.RegisterMatching('{', '}', 'brace');
            jqconsole.RegisterMatching('(', ')', 'paran');
            jqconsole.RegisterMatching('[', ']', 'bracket');
            // Handle a command.
            var handler = function(command) {
            if (command) {
                try {
                  Console[command]();
                } catch (e) {
                  jqconsole.Write(command + ': command not found\n');
                }
            }
            jqconsole.Prompt(true, handler, function(command) {
                // Continue line if can't compile the command.
                try {
                Function(command);
                } catch (e) {
                if (/[\[\{\(]$/.test(command)) {
                    return 1;
                } else {
                    return 0;
                }
                }
                return false;
            });
            };

            // Initiate the first prompt.
            handler();
        });
    }

    this.help = function () {
        var help =
        '\033[1mList of available commands:\033[0m\n' +
        '\033[33mblog\033[0m ==> \033[36mAyrton\'s blog.\n' +
        '\033[33mclear\033[0m ==> \033[36mClear screen.\n' +
        '\033[33mcontact\033[0m ==> \033[36mContact info.\n' +
        '\033[33mdate\033[0m ==> \033[36mDisplays the current date.\n' +
        '\033[33mgoto\033[0m ==> \033[36mJump to other pages.\n' +
        '\033[33mhelp\033[0m ==> \033[36mhelp Displays this list.\n' +
        '\033[33missues\033[0m ==> \033[36mFound bugs or have suggestions for this site?\n' +
        '\033[33mpress\033[0m ==> \033[36mPress related links.\n' +
        //term.echo('[[b;#FFF;]projects] [[;#A40;]=>]  [[;#73d216;]List of projects Ayrton is involved on.]');
        '\033[33mresume\033[0m ==> \033[36mDisplays a compact resume.\n' +
        '\033[33mskills\033[0m ==> \033[36mProfessional skills.\n' +
        '\033[33mwhois\033[0m ==> \033[36mWho is Ayrton Araujo?\033[0m\n' +
        '\nThere\'s some other available commands. Use your imagination :-)\n'
        jqconsole.Write(help);
    }
};
var Console = new Console();
Console.init();
