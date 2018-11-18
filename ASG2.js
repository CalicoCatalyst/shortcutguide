

var categoriesEnum = {"Showing/Hiding Views":1,"Menus":2,"Adjusting Values":3,"Browsing":4,"Transport":5,"Editing":6,
                                    "Loop Brace & Start/End Markers":7,
                                   "Session View Commands":8,"Arrangement View Commands":9, "Track Commands":10,"Breakpoint Envelopes":11,
                                   "Key/MIDI Map Mode & Computer MIDI Keyboard":12,"Zooming, Display, & Selections":13,
                                   "Clip View Sample Display":14, "Clip View MIDI Editor":15, "Grid Snapping and Drawing":16,
                                   "Global Quantization":17, "Working With Sets and the Program":18,"Working With Plugins and Devices":19};

                                   // Yes, arrays start at 0, but I'm starting the uiboxes at 1 and it makes this a lot easier.
                                   // If someone is refactoring, take note that these numbers affect what uibox the category goes into


// The keys in these objects are the names of the shortcuts.

// 16 in this one
var showHideViews = {
    "Toggle Full Screen Mode":"<kbd>F11</kbd>",
    "Toggle Second Window":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>W</kbd>",
    "Toggle Session/Arrangement View":"<kbd>Tab</kbd>",
    "Toggle Device/Clip View":"<kbd>Shift</kbd>-<kbd>Tab</kbd> or <kbd>F12</kbd>",
    "Hide/Show Detail View":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>L</kbd> or <kbd>Shift</kbd>-<kbd>F12</kbd>",
    "Toggle Hot-Swap Mode":"<kbd>Q</kbd>",
    "Toggle Drum Rack/last-selected Pad":"<kbd>D</kbd>",
    "Hide/Show Info View":"<kbd>Shift</kbd>-<kbd>?</kbd>",
    "Hide/Show Video Window":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>V</kbd>",
    "Hide/Show Browser":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>B</kbd>",
    "Hide/Show Overview":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>O</kbd>",
    "Hide/Show In/Out":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>I</kbd>",
    "Hide/Show Sends":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>S</kbd>",
    "Hide/Show Mixer":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>M</kbd>",
    "Open the Preferences":"<kbd>CTRL</kbd>-<kbd>,</kbd>",
    "Close Window/Dialog":"<kbd>ESC</kbd>",
};
// 4
var accessMenus = {
    "Open a menu":"<kbd>ALT</kbd>-<kbd title='e.g. ALT+F to open the file menu!'>First Letter of the Menu</kbd>",
    "Navigate Menu Items":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Open Neighboring Menu":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Select a Menu Item":"<kbd>Enter</kbd>"
}
// 6
var adjValues = {
    "Decrement/Increment":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Finer resolution for dragging":"<kbd>Shift</kbd>",
    "Return to Default":"<kbd>Delete</kbd>",
    "Go to Next Field (Bar.beat.16th)":"<kbd>.</kbd>-<kbd>,</kbd>",
    "Abort Value Entry":"<kbd>ESC</kbd>",
    "Confirm Value Entry":"<kbd>Enter</kbd>"
}
// 8
var browsing = {
    "Scroll Down/Up":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Close/Open Folders":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Load Selected Item from Browser":"<kbd>Enter</kbd>",
    "Preview Selected File":"<kbd>Shift</kbd>-<kbd>Enter</kbd>",
    "Search in Browser":"<kbd>CTRL</kbd>-<kbd>F</kbd>",
    "Jump to Search Results":"<kbd>&darr;</kbd>",
    "Assign Color(s) to Selected Browser Item(s)":"<kbd>1</kbd>...<kbd>7</kbd>",
    "Reset Assigned Color(s) for Selected Browser Item":"<kbd>0</kbd>",
}
// 7
var transport = {
    "Play from Start Marker/Stop":"<kbd>Space</kbd>",
    "Continue Play from Stop Point":"<kbd>Shift</kbd>-<kbd>Space</kbd>",
    "Play Arrangement View Selection":"<kbd>Space</kbd>",
    "Move Insert Marker to Beginning":"<kbd>Home</kbd>",
    "Record":"<kbd>F9</kbd>",
    "Back to Arrangement":"<kbd>F10</kbd>",
    "Activate/Deactivate Track 1-8":"<kbd>F1</kbd>...<kbd>F8</kbd>"
}
// 9
var editing = {
    "Cut":"<kbd>CTRL</kbd>-<kbd>X</kbd>",
    "Copy":"<kbd>CTRL</kbd>-<kbd>C</kbd>",
    "Paste":"<kbd>CTRL</kbd>-<kbd>V</kbd>",
    "Duplicate":"<kbd>CTRL</kbd>-<kbd>D</kbd>",
    "Delete":"<kbd>Delete</kbd>",
    "Undo":"<kbd>CTRL</kbd>-<kbd>Z</kbd>",
    "Redo":"<kbd>CTRL</kbd>-<kbd>Y</kbd>",
    "Rename":"<kbd>CTRL</kbd>-<kbd>R</kbd>",
    "Select All":"<kbd>CTRL</kbd>-<kbd>A</kbd>",
}
// 6
var lbsem = {
    "Move Start Marker to Position":"<kbd>Shift</kbd>-<kbd title='Left Click'>&#128432</kbd>",
    "Nudge Loop Left/Right":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Move Loop by Loop Length":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Halve/Double Loop Length":"<kbd>CTRL</kbd> - <kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Shorten/Lengthen Loop":"<kbd>CTRL</kbd> - <kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Select Material in Loop":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>L</kbd>",
}
// 10
var sessvw = {
    "Launch Selected Clip/Slot":"<kbd>Enter</kbd>",
    "Select Neighboring Clip/Slot":"Arrow Keys",
    "Select all Clips/Slots":"<kbd>CTRL</kbd>-<kbd>A</kbd>",
    "Copy Clips":"<kbd>CTRL</kbd>-Drag",
    "Add/Remove Stop Button":"<kbd>CTRL</kbd>-<kbd>E</kbd>",
    "Insert Midi Clip":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>M</kbd>",
    "Insert Captured Scene":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>I</kbd>",
    "Move Nonadjacent Scenes Without Collapsing":"<kbd>CTRL</kbd>-<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Drop Browser Clips as a Scene":"<kbd>CTRL</kbd>",
    "Deactivate Selected Clip":"<kbd>0</kbd>",
}
// 13
var arrvw = {
    "Split Clip at Selection":"<kbd>CTRL</kbd>-<kbd>E</kbd>",
    "Consolidate Selection into Clip":"<kbd>CTRL</kbd>-<kbd>J</kbd>",
    "Create Fade/Crossfade":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>F</kbd>",
    "Toggle Loop Selection":"<kbd>CTRL</kbd>-<kbd>L</kbd>",
    "Insert Silence":"<kbd>CTRL</kbd>-<kbd>I</kbd>",
    "Pan Left/Right of Selection":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>",
    "Unfold all Tracks":"<kbd>ALT</kbd>- <a title='like the button to unfold one track i think'>unfold button</a>",
    "Scroll Display to Follow Playback":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Deactivate Selection":"<kbd>0</kbd>",
    "Nudge Selection Left/Right":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Reverse Audio Clip Selection":"<kbd>R</kbd>",
    "Zoom to Arrangement Time Selection":"<kbd>Z</kbd>",
    "Zoom back from Arrangement Time Selection/Zoom out Arrangement Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>"
}
// 13
var tracks = {
    "Insert Audio Track":"<kbd>CTRL</kbd>-<kbd>T</kbd>",
    "Insert MIDI Track":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>T</kbd>",
    "Insert Return Track":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>T</kbd>",
    "Rename Selected Track":"<kbd>CTRL</kbd>-<kbd>R</kbd>",
    "While Renaming, Go to next Track":"<kbd>Tab</kbd>",
    "Group Selected Tracks":"<kbd>CTRL</kbd>-<kbd>G</kbd>",
    "Ungroup Tracks":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>G</kbd>",
    "Show Grouped Tracks":"<kbd title='if i recall correctly this is SHIFT and = if u have no numpad'>+</kbd>",
    "Hide Grouped Tracks":"<kbd>-</kbd>",
    "Move Nonadjacent Tracks Without Collapsing":"<kbd>CTRL</kbd>- Arrow Keys",
    "Arm/Solo Multiple Tracks":"<kbd>CTRL</kbd>-<kbd title='Left Click'>&#128432</kbd>",
    "Add Device from Browser":"<kbd>Enter</kbd>",
    "Deactivate Selected Track":"<kbd>0</kbd>",
}
// 3. that was nice :)
var bpe = {
    "Toggle Automation Mode":"<kbd>A</kbd>",
    "Finer Resolution for Dragging":"<kbd>Shift</kbd>",
    "Create Curved Automation Segment":"<kbd>ALT</kbd>"
}
// 5
var kmmmcmk = {
    "Toggle MIDI Map Mode":"<kbd>CTRL</kbd>-<kbd>M</kbd>",
    "Toggle Key Map Mode":"<kbd>CTRL</kbd>-<kbd>K</kbd>",
    "Computer MIDI Keyboard":"<kbd>M</kbd>",
    "Adjust Computer Midi Keyboard Octave Range":"<kbd>x</kbd> and <kbd>z</kbd> keys",
    "Adjust Computer MIDI&nbsp;Keyboard Incoming Note Velocity":"<kbd>c</kbd> and <kbd>v</kbd> keys",

}
// 7
var zds = {
    "Zoom In":"<kbd>+</kbd>",
    "Zoom Out":"<kbd>-</kbd>",
    "Drag/Click to Append to a Selection":"<kbd>Shift</kbd>",
    "Click to Add Adjacent Clips/Tracks/Scenes to Multi-Selection":"<kbd>Shift</kbd>",
    "Click to add Nonadjacent Clips/Tracks/Scenes to Multi-Selection":"<kbd>CTRL</kbd>",
    "Follow (Auto Scroll)":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Pan Left/Right of Selection":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>"
}
// 8
var cvsd = {
    "Quantize":"<kbd>CTRL</kbd>-<kbd>U</kbd>",
    "Quantize Settings...":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>U</kbd>",
    "Move Selected Warp Marker":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Select Warp Marker":"<kbd>CTRL</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Scroll Display to Follow Playback":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Move Clip Region with Start Marker":"<kbd>Shift</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Zoom to Clip Selection":"<kbd>Z</kbd>",
    "Zoom Back from Clip Selection/Zoom Out Clip Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>",
}
// 12
var cvme = {
    "Quantize":"<kbd>CTRL</kbd>-<kbd>U</kbd>",
    "Quantize Settings...":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>U</kbd>",
    "Scroll Editor Vertically":"<kbd>PgUp</kbd> / <kbd>PgDn</kbd>",
    "Scroll Editor Horizontally":"<kbd>CTRL</kbd>-<kbd>PgUp</kbd> / <kbd>PgDn</kbd>",
    "Copy Notes":"<kbd>CTRL</kbd>- Drag",
    "Change Veolocity from Note Editor":"<kbd>ALT</kbd>- Drag",
    "Move Insert Marker to Beginning":"<kbd>Home</kbd>",
    "Move Insert Marker to End":"<kbd>End</kbd>",
    "Scroll Display to Follow Playback":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Move Clip Region with Start Marker":"<kbd>Shift</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Zoom to Clip Selection":"<kbd>Z</kbd>",
    "Zoom Back from Clip Selection/Zoom Out Clip Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>"
}
// 7
var gsd = {
    "Toggle Draw Mode":"<kbd>B</kbd>",
    "Narrow Grid":"<kbd>CTRL</kbd>-<kbd>1</kbd>",
    "Widen Grid":"<kbd>CTRL</kbd>-<kbd>2</kbd>",
    "Triplet Grid":"<kbd>CTRL</kbd>-<kbd>3</kbd>",
    "Snap to Grid":"<kbd>CTRL</kbd>-<kbd>4</kbd>",
    "Fixed/Zoom-Adaptive Grid":"<kbd>CTRL</kbd>-<kbd>5</kbd>",
    "Bypass Snapping While Dragging":"<kbd>ALT</kbd>"
}
var gq = {
    "Sixteenth-Note Quantization":"<kbd>CTRL</kbd>-<kbd>6</kbd>",
    "Eighth-Note Quantization":"<kbd>CTRL</kbd>-<kbd>7</kbd>",
    "Quarter-Note Quantization":"<kbd>CTRL</kbd>-<kbd>8</kbd>",
    "1-Bar Quantization":"<kbd>CTRL</kbd>-<kbd>9</kbd>",
    "Quantization Off":"<kbd>CTRL</kbd>-<kbd>0</kbd>",
}
// 7
var wsp = {
    "New Live Set":"<kbd>CTRL</kbd>-<kbd>N</kbd>",
    "Open Live Set":"<kbd>CTRL</kbd>-<kbd>O</kbd>",
    "Save Live Set":"<kbd>CTRL</kbd>-<kbd>S</kbd>",
    "Save Live Set As...":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>S</kbd>",
    "Quit Live":"<kbd>CTRL</kbd>-<kbd>Q</kbd>",
    "Export Audio/Video":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>R</kbd>",
    "Export MIDI file":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>E</kbd>"
}
// 6
var wpd = {
    "Show/Hide Plug-In Windows":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>P</kbd>",
    "Open Second/Multiple Windows with Plug-In Edit Button":"<kbd>CTRL</kbd>",
    "Group/Ungroup Devices":"<kbd>CTRL</kbd>-<kbd>G</kbd>",
    "Activate/Deactivate All Devices in Group":"<kbd>ALT</kbd> + Device Activator",
    "Click to Append Devices to a Selected Device":"<kbd>Shift</kbd>",
    "Load Selected Device From Browser":"<kbd>Enter</kbd>"
}
// This bad boy needs to be accessed both ways; by key and by value.
// Currently my solution to this was adding an ES6 function to let me get key by value
// If anyone refactors and wants to redo, shouldn't be too hard.
var itemvarsetidenum = {
        1:showHideViews,
        2:accessMenus,
        3:adjValues,
        4:browsing,
        5:transport,
        6:editing,
        7:lbsem,
        8:sessvw,
        9:arrvw,
        10:tracks,
        11:bpe,
        12:kmmmcmk,
        13:zds,
        14:cvsd,
        15:cvme,
        16:gsd,
        17:gq,
        18:wsp,
        19:wpd
    };

var categoriesInfoText = "<div class='subtext'>Click to view category</div>";

var activeSet = 0;
// 0 categories
// 1 subset



// 19 total categories holy fuck this is going to be a blast
// 152 total shortcuts yay.
// Next time we're writing a java app to make this faster lol.

// Lets get started on Search. I have a category fully up and running now and it loads perfectly.
// If I have to change something lets make it early in the dev process

// WORKING ON THE FIRST TRY OH GOD
// not case sensitive, iterates through every item set, and then through every shortcut in that set
// looks ready to implement on the searchbar

// lol wtf the search bar works exactly like i want it to
// k cool time to add the 100+ shortcuts

function search(searchContent) {
    smoothTopScroll();
    if (searchContent.length==0) {
        callCategories();
        return;
    }
    document.getElementById("pagetitle").innerHTML = "Search";
    var results = {};
    Object.keys(itemvarsetidenum).forEach(function(num) {
        Object.keys(itemvarsetidenum[num]).forEach(function(key) {
            if (key.toLowerCase().includes(searchContent.toLowerCase())) {
                results[key]=itemvarsetidenum[num][key];
            }
        });
    });

    hideAllBoxes();
    activeSet = 1;
    generateBox("Back", null, 0, 1, "<div class='subtext'>Click to return to categories</div>");
    Object.keys(results).forEach(function(key) {
        if (Object.keys(results).indexOf(key) + 2 > 20) {return};
        generateBox(key, results, 0, Object.keys(results).indexOf(key) + 2,
         "<div class='subtext shortcut'>" + results[key] + "</div>")
    });
}


// loop thru cats (mrow)

function callCategories() {
    smoothTopScroll();
    hideAllBoxes();
    activeSet = 0;
    document.getElementById("pagetitle").innerHTML = "Categories";
    Object.keys(categoriesEnum).forEach(function(key) {
        generateBox(key, categoriesEnum, 0, categoriesEnum[key], categoriesInfoText);
    });
}
function callSubset(subsetID) {
    smoothTopScroll();
    hideAllBoxes();
    activeSet = 1;
    generateBox("Back", null, subsetID, 1, "<div class='subtext'>Click to return to categories</div>");
    document.getElementById("pagetitle").innerHTML = getKeyByValue(categoriesEnum, subsetID);
    var set = evalItemSetID(subsetID);
        Object.keys(set).forEach(function(key) {
        // This is a doozy. We are sending the name of the shortcut, the set its in, the numerical number of it,
        // and the description.
        generateBox(key, set, 1, Object.keys(set).indexOf(key) + 2,
        "<div class='subtext shortcut'>" + set[key] + "</div>");
    });
}

function evalItemSetID(itemSetID){
    return itemvarsetidenum[itemSetID];
}

function hideAllBoxes(){
    // !!!!!! DO NOT use the style tag when coding the html. this will erase anything put there. !!!!!! //
    remAddedCSS("uibox");
    add("uibox", "none");
}

function generateBox(name, itemSet, itemSetID, itemID, subtext){
    if (activeSet) {
       var elementName = "uib" + itemID;
       var element = document.getElementById(elementName);
       element.innerHTML = name + subtext;
       remAddedCSSid(elementName);
    } else {
       var elementName = "uib" + itemID;
       var element = document.getElementById(elementName);
       element.innerHTML = name + subtext;
       remAddedCSSid(elementName);
    }
}

function buttonClicked(id) {
    // If we're in a category
    if (activeSet) {
        // Only time anything at all should be done is when back button is clicked.
        // Luckily its idem id is also javascript code for true!
        // lmao fuck this language
        if (eval(id)==1) {
            callCategories();
        }
    } else {
        callSubset(id);
    }
}

function smoothTopScroll() {
    (function smoothscroll(){
        var currentScroll=document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0){
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0,currentScroll - (currentScroll/5));
            }

    })()
}

// ES6. Old vers. of IE Will not support this. Everything else should. TODO: test on firefox. absolutely should work.
// lol my IDE doesn't support it either. 2015 vers too
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function remAddedCSSid(idName) {
    var element = document.getElementById(idName);
    element.style.display = '';
}

// dark mode time :D
// should be pretty easy, I think im just going to dynamically load and unload a css file.

var darkModeEnabled = 1;
function toggleDarkMode(){
    if (darkModeEnabled) {
        darkModeEnabled = 0;
        document.getElementById("darkmode").disabled=true;
    } else {
        darkModeEnabled = 1;
        document.getElementById("darkmode").disabled=false;
    }
}

// Legacy JS from my last project bc I hate recoding. If I put it here it looks fine

function add(className, displayState){
    var elements = document.getElementsByClassName(className)

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}

function remAddedCSS(className) {
    var elements = document.getElementsByClassName(className)

    for (var i=0; i < elements.length; i++) {
        elements[i].style.display = '';
    }
}

// Mac shit
// this boolean is backwards because fuck it
var macEnabled=1;
function toggleMacShortcuts() {
    if(macEnabled==0){
        macEnabled=1;
        showHideViews = {
    "Toggle Full Screen Mode":"<kbd>F11</kbd>",
    "Toggle Second Window":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>W</kbd>",
    "Toggle Session/Arrangement View":"<kbd>Tab</kbd>",
    "Toggle Device/Clip View":"<kbd>Shift</kbd>-<kbd>Tab</kbd> or <kbd>F12</kbd>",
    "Hide/Show Detail View":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>L</kbd> or <kbd>Shift</kbd>-<kbd>F12</kbd>",
    "Toggle Hot-Swap Mode":"<kbd>Q</kbd>",
    "Toggle Drum Rack/last-selected Pad":"<kbd>D</kbd>",
    "Hide/Show Info View":"<kbd>Shift</kbd>-<kbd>?</kbd>",
    "Hide/Show Video Window":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>V</kbd>",
    "Hide/Show Browser":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>B</kbd>",
    "Hide/Show Overview":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>O</kbd>",
    "Hide/Show In/Out":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>I</kbd>",
    "Hide/Show Sends":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>S</kbd>",
    "Hide/Show Mixer":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>M</kbd>",
    "Open the Preferences":"<kbd>CTRL</kbd>-<kbd>,</kbd>",
    "Close Window/Dialog":"<kbd>ESC</kbd>",
};
// 4
accessMenus = {
    "Open a menu":"<kbd>ALT</kbd>-<kbd title='e.g. ALT+F to open the file menu!'>First Letter of the Menu</kbd>",
    "Navigate Menu Items":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Open Neighboring Menu":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Select a Menu Item":"<kbd>Enter</kbd>"
};
// 6
adjValues = {
    "Decrement/Increment":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Finer resolution for dragging":"<kbd>Shift</kbd>",
    "Return to Default":"<kbd>Delete</kbd>",
    "Go to Next Field (Bar.beat.16th)":"<kbd>.</kbd>-<kbd>,</kbd>",
    "Abort Value Entry":"<kbd>ESC</kbd>",
    "Confirm Value Entry":"<kbd>Enter</kbd>"
};
// 8
browsing = {
    "Scroll Down/Up":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Close/Open Folders":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Load Selected Item from Browser":"<kbd>Enter</kbd>",
    "Preview Selected File":"<kbd>Shift</kbd>-<kbd>Enter</kbd>",
    "Search in Browser":"<kbd>CTRL</kbd>-<kbd>F</kbd>",
    "Jump to Search Results":"<kbd>&darr;</kbd>",
    "Assign Color(s) to Selected Browser Item(s)":"<kbd>1</kbd>...<kbd>7</kbd>",
    "Reset Assigned Color(s) for Selected Browser Item":"<kbd>0</kbd>",
};
// 7
transport = {
    "Play from Start Marker/Stop":"<kbd>Space</kbd>",
    "Continue Play from Stop Point":"<kbd>Shift</kbd>-<kbd>Space</kbd>",
    "Play Arrangement View Selection":"<kbd>Space</kbd>",
    "Move Insert Marker to Beginning":"<kbd>Home</kbd>",
    "Record":"<kbd>F9</kbd>",
    "Back to Arrangement":"<kbd>F10</kbd>",
    "Activate/Deactivate Track 1-8":"<kbd>F1</kbd>...<kbd>F8</kbd>"
};
// 9
editing = {
    "Cut":"<kbd>CTRL</kbd>-<kbd>X</kbd>",
    "Copy":"<kbd>CTRL</kbd>-<kbd>C</kbd>",
    "Paste":"<kbd>CTRL</kbd>-<kbd>V</kbd>",
    "Duplicate":"<kbd>CTRL</kbd>-<kbd>D</kbd>",
    "Delete":"<kbd>Delete</kbd>",
    "Undo":"<kbd>CTRL</kbd>-<kbd>Z</kbd>",
    "Redo":"<kbd>CTRL</kbd>-<kbd>Y</kbd>",
    "Rename":"<kbd>CTRL</kbd>-<kbd>R</kbd>",
    "Select All":"<kbd>CTRL</kbd>-<kbd>A</kbd>",
};
// 6
lbsem = {
    "Move Start Marker to Position":"<kbd>Shift</kbd>-<kbd title='Left Click'>&#128432</kbd>",
    "Nudge Loop Left/Right":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Move Loop by Loop Length":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Halve/Double Loop Length":"<kbd>CTRL</kbd> - <kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Shorten/Lengthen Loop":"<kbd>CTRL</kbd> - <kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Select Material in Loop":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>L</kbd>",
};
// 10
sessvw = {
    "Launch Selected Clip/Slot":"<kbd>Enter</kbd>",
    "Select Neighboring Clip/Slot":"Arrow Keys",
    "Select all Clips/Slots":"<kbd>CTRL</kbd>-<kbd>A</kbd>",
    "Copy Clips":"<kbd>CTRL</kbd>-Drag",
    "Add/Remove Stop Button":"<kbd>CTRL</kbd>-<kbd>E</kbd>",
    "Insert Midi Clip":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>M</kbd>",
    "Insert Captured Scene":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>I</kbd>",
    "Move Nonadjacent Scenes Without Collapsing":"<kbd>CTRL</kbd>-<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Drop Browser Clips as a Scene":"<kbd>CTRL</kbd>",
    "Deactivate Selected Clip":"<kbd>0</kbd>",
};
// 13
arrvw = {
    "Split Clip at Selection":"<kbd>CTRL</kbd>-<kbd>E</kbd>",
    "Consolidate Selection into Clip":"<kbd>CTRL</kbd>-<kbd>J</kbd>",
    "Create Fade/Crossfade":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>F</kbd>",
    "Toggle Loop Selection":"<kbd>CTRL</kbd>-<kbd>L</kbd>",
    "Insert Silence":"<kbd>CTRL</kbd>-<kbd>I</kbd>",
    "Pan Left/Right of Selection":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>",
    "Unfold all Tracks":"<kbd>ALT</kbd>- <a title='like the button to unfold one track i think'>unfold button</a>",
    "Scroll Display to Follow Playback":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Deactivate Selection":"<kbd>0</kbd>",
    "Nudge Selection Left/Right":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Reverse Audio Clip Selection":"<kbd>R</kbd>",
    "Zoom to Arrangement Time Selection":"<kbd>Z</kbd>",
    "Zoom back from Arrangement Time Selection/Zoom out Arrangement Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>"
};
// 13
tracks = {
    "Insert Audio Track":"<kbd>CTRL</kbd>-<kbd>T</kbd>",
    "Insert MIDI Track":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>T</kbd>",
    "Insert Return Track":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>T</kbd>",
    "Rename Selected Track":"<kbd>CTRL</kbd>-<kbd>R</kbd>",
    "While Renaming, Go to next Track":"<kbd>Tab</kbd>",
    "Group Selected Tracks":"<kbd>CTRL</kbd>-<kbd>G</kbd>",
    "Ungroup Tracks":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>G</kbd>",
    "Show Grouped Tracks":"<kbd title='if i recall correctly this is SHIFT and = if u have no numpad'>+</kbd>",
    "Hide Grouped Tracks":"<kbd>-</kbd>",
    "Move Nonadjacent Tracks Without Collapsing":"<kbd>CTRL</kbd>- Arrow Keys",
    "Arm/Solo Multiple Tracks":"<kbd>CTRL</kbd>-<kbd title='Left Click'>&#128432</kbd>",
    "Add Device from Browser":"<kbd>Enter</kbd>",
    "Deactivate Selected Track":"<kbd>0</kbd>",
};
// 3. that was nice :)
bpe = {
    "Toggle Automation Mode":"<kbd>A</kbd>",
    "Finer Resolution for Dragging":"<kbd>Shift</kbd>",
    "Create Curved Automation Segment":"<kbd>ALT</kbd>"
};
// 5
kmmmcmk = {
    "Toggle MIDI Map Mode":"<kbd>CTRL</kbd>-<kbd>M</kbd>",
    "Toggle Key Map Mode":"<kbd>CTRL</kbd>-<kbd>K</kbd>",
    "Computer MIDI Keyboard":"<kbd>M</kbd>",
    "Adjust Computer Midi Keyboard Octave Range":"<kbd>x</kbd> and <kbd>z</kbd> keys",
    "Adjust Computer MIDI&nbsp;Keyboard Incoming Note Velocity":"<kbd>c</kbd> and <kbd>v</kbd> keys",

};
// 7
zds = {
    "Zoom In":"<kbd>+</kbd>",
    "Zoom Out":"<kbd>-</kbd>",
    "Drag/Click to Append to a Selection":"<kbd>Shift</kbd>",
    "Click to Add Adjacent Clips/Tracks/Scenes to Multi-Selection":"<kbd>Shift</kbd>",
    "Click to add Nonadjacent Clips/Tracks/Scenes to Multi-Selection":"<kbd>CTRL</kbd>",
    "Follow (Auto Scroll)":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Pan Left/Right of Selection":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>"
};
// 8
cvsd = {
    "Quantize":"<kbd>CTRL</kbd>-<kbd>U</kbd>",
    "Quantize Settings...":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>U</kbd>",
    "Move Selected Warp Marker":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Select Warp Marker":"<kbd>CTRL</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Scroll Display to Follow Playback":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Move Clip Region with Start Marker":"<kbd>Shift</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Zoom to Clip Selection":"<kbd>Z</kbd>",
    "Zoom Back from Clip Selection/Zoom Out Clip Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>",
};
// 12
cvme = {
    "Quantize":"<kbd>CTRL</kbd>-<kbd>U</kbd>",
    "Quantize Settings...":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>U</kbd>",
    "Scroll Editor Vertically":"<kbd>PgUp</kbd> / <kbd>PgDn</kbd>",
    "Scroll Editor Horizontally":"<kbd>CTRL</kbd>-<kbd>PgUp</kbd> / <kbd>PgDn</kbd>",
    "Copy Notes":"<kbd>CTRL</kbd>- Drag",
    "Change Veolocity from Note Editor":"<kbd>ALT</kbd>- Drag",
    "Move Insert Marker to Beginning":"<kbd>Home</kbd>",
    "Move Insert Marker to End":"<kbd>End</kbd>",
    "Scroll Display to Follow Playback":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Move Clip Region with Start Marker":"<kbd>Shift</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Zoom to Clip Selection":"<kbd>Z</kbd>",
    "Zoom Back from Clip Selection/Zoom Out Clip Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>"
};
// 7
gsd = {
    "Toggle Draw Mode":"<kbd>B</kbd>",
    "Narrow Grid":"<kbd>CTRL</kbd>-<kbd>1</kbd>",
    "Widen Grid":"<kbd>CTRL</kbd>-<kbd>2</kbd>",
    "Triplet Grid":"<kbd>CTRL</kbd>-<kbd>3</kbd>",
    "Snap to Grid":"<kbd>CTRL</kbd>-<kbd>4</kbd>",
    "Fixed/Zoom-Adaptive Grid":"<kbd>CTRL</kbd>-<kbd>5</kbd>",
    "Bypass Snapping While Dragging":"<kbd>ALT</kbd>"
};
gq = {
    "Sixteenth-Note Quantization":"<kbd>CTRL</kbd>-<kbd>6</kbd>",
    "Eighth-Note Quantization":"<kbd>CTRL</kbd>-<kbd>7</kbd>",
    "Quarter-Note Quantization":"<kbd>CTRL</kbd>-<kbd>8</kbd>",
    "1-Bar Quantization":"<kbd>CTRL</kbd>-<kbd>9</kbd>",
    "Quantization Off":"<kbd>CTRL</kbd>-<kbd>0</kbd>",
};
// 7
wsp = {
    "New Live Set":"<kbd>CTRL</kbd>-<kbd>N</kbd>",
    "Open Live Set":"<kbd>CTRL</kbd>-<kbd>O</kbd>",
    "Save Live Set":"<kbd>CTRL</kbd>-<kbd>S</kbd>",
    "Save Live Set As...":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>S</kbd>",
    "Quit Live":"<kbd>CTRL</kbd>-<kbd>Q</kbd>",
    "Export Audio/Video":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>R</kbd>",
    "Export MIDI file":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>E</kbd>"
};
// 6
wpd = {
    "Show/Hide Plug-In Windows":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>P</kbd>",
    "Open Second/Multiple Windows with Plug-In Edit Button":"<kbd>CTRL</kbd>",
    "Group/Ungroup Devices":"<kbd>CTRL</kbd>-<kbd>G</kbd>",
    "Activate/Deactivate All Devices in Group":"<kbd>ALT</kbd> + Device Activator",
    "Click to Append Devices to a Selected Device":"<kbd>Shift</kbd>",
    "Load Selected Device From Browser":"<kbd>Enter</kbd>"
};

    document.getElementById("formac").style.display="none";
    document.getElementById("mactoggle").innerHTML = "View Mac Shortcuts";
    } else {



    // Mac stuff starts here. Other just reverts the shortcuts to windows ones.
    macEnabled=0;




        showHideViews = {
    "Toggle Full Screen Mode":"<kbd>CTRL</kbd>-<kbd>CMD</kbd>-<kbd>F</kbd>",
    "Toggle Second Window":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>W</kbd>",
    "Toggle Session/Arrangement View":"<kbd>Tab</kbd>",
    "Toggle Device/Clip View":"<kbd>Shift</kbd>-<kbd>Tab</kbd> or <kbd>CTRL</kbd>-<kbd>F12</kbd>",
    "Hide/Show Detail View":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>L</kbd> or <kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>F12</kbd>",
    "Toggle Hot-Swap Mode":"<kbd>Q</kbd>",
    "Toggle Drum Rack/last-selected Pad":"<kbd>D</kbd>",
    "Hide/Show Info View":"<kbd>Shift</kbd>-<kbd>?</kbd>",
    "Hide/Show Video Window":"<kbd>CTRL</kbd>-<kbd>ALT</kbd>-<kbd>V</kbd>",
    "Hide/Show Browser":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>B</kbd>",
    "Hide/Show Overview":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>O</kbd>",
    "Hide/Show In/Out":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>I</kbd>",
    "Hide/Show Sends":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>S</kbd>",
    "Hide/Show Mixer":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>M</kbd>",
    "Open the Preferences":"<kbd>CMD</kbd>-<kbd>,</kbd>",
    "Close Window/Dialog":"<kbd>ESC</kbd>",
};
// 4
accessMenus = {
    "Search Menu Items":"<kbd>CMD</kbd>-<kbd>?</kbd>",

};
// 6
adjValues = {
    "Decrement/Increment":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Finer resolution for dragging":"<kbd>Shift</kbd>",
    "Return to Default":"<kbd>Delete</kbd>",
    "Go to Next Field (Bar.beat.16th)":"<kbd>.</kbd>-<kbd>,</kbd>",
    "Abort Value Entry":"<kbd>ESC</kbd>",
    "Confirm Value Entry":"<kbd>Enter</kbd>"
};
// 8
browsing = {
    "Scroll Down/Up":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Close/Open Folders":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Load Selected Item from Browser":"<kbd>Enter</kbd>",
    "Preview Selected File":"<kbd>Shift</kbd>-<kbd>Enter</kbd>",
    "Search in Browser":"<kbd>CTRL</kbd>-<kbd>F</kbd>",
    "Jump to Search Results":"<kbd>&darr;</kbd>",
    "Assign Color(s) to Selected Browser Item(s)":"<kbd>1</kbd>...<kbd>7</kbd>",
    "Reset Assigned Color(s) for Selected Browser Item":"<kbd>0</kbd>",
};
// 7
transport = {
    "Play from Start Marker/Stop":"<kbd>Space</kbd>",
    "Continue Play from Stop Point":"<kbd>Shift</kbd>-<kbd>Space</kbd>",
    "Play Arrangement View Selection":"<kbd>Space</kbd>",
    "Move Insert Marker to Beginning":"<kbd>Function</kbd>-<kbd>&larr;</kbd>",
    "Record":"<kbd>F9</kbd>",
    "Back to Arrangement":"<kbd>F10</kbd>",
    "Activate/Deactivate Track 1-8":"<kbd>F1</kbd>...<kbd>F8</kbd>"
};
// 9
editing = {
    "Cut":"<kbd>CMD</kbd>-<kbd>X</kbd>",
    "Copy":"<kbd>CMD</kbd>-<kbd>C</kbd>",
    "Paste":"<kbd>CMD</kbd>-<kbd>V</kbd>",
    "Duplicate":"<kbd>CMD</kbd>-<kbd>D</kbd>",
    "Delete":"<kbd>Delete</kbd>",
    "Undo":"<kbd>CMD</kbd>-<kbd>Z</kbd>",
    "Redo":"<kbd>CMD</kbd>-<kbd>Y</kbd>",
    "Rename":"<kbd>CMD</kbd>-<kbd>R</kbd>",
    "Select All":"<kbd>CMD</kbd>-<kbd>A</kbd>",
};
// 6
lbsem = {
    "Move Start Marker to Position":"<kbd>Shift</kbd>-<kbd title='Left Click'>&#128432</kbd>",
    "Nudge Loop Left/Right":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Move Loop by Loop Length":"<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Halve/Double Loop Length":"<kbd>CMD</kbd> - <kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Shorten/Lengthen Loop":"<kbd>CMD</kbd> - <kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Select Material in Loop":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>L</kbd>",
};
// 10
sessvw = {
    "Launch Selected Clip/Slot":"<kbd>Enter</kbd>",
    "Select Neighboring Clip/Slot":"Arrow Keys",
    "Select all Clips/Slots":"<kbd>CMD</kbd>-<kbd>A</kbd>",
    "Copy Clips":"<kbd>ALT</kbd>-Drag",
    "Add/Remove Stop Button":"<kbd>CMD</kbd>-<kbd>E</kbd>",
    "Insert Midi Clip":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>M</kbd>",
    "Insert Captured Scene":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>I</kbd>",
    "Move Nonadjacent Scenes Without Collapsing":"<kbd>CMD</kbd>-<kbd>&uarr;</kbd> / <kbd>&darr;</kbd>",
    "Drop Browser Clips as a Scene":"<kbd>CMD</kbd>",
    "Deactivate Selected Clip":"<kbd>0</kbd>",
};
// 13
arrvw = {
    "Split Clip at Selection":"<kbd>CMD</kbd>-<kbd>E</kbd>",
    "Consolidate Selection into Clip":"<kbd>CMD</kbd>-<kbd>J</kbd>",
    "Create Fade/Crossfade":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>F</kbd>",
    "Toggle Loop Selection":"<kbd>CMD</kbd>-<kbd>L</kbd>",
    "Insert Silence":"<kbd>CMD</kbd>-<kbd>I</kbd>",
    "Pan Left/Right of Selection":"<kbd>CMD</kbd>-<kbd>ALT</kbd>",
    "Unfold all Tracks":"<kbd>ALT</kbd>- <a title='like the button to unfold one track i think'>unfold button</a>",
    "Scroll Display to Follow Playback":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Deactivate Selection":"<kbd>0</kbd>",
    "Nudge Selection Left/Right":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Reverse Audio Clip Selection":"<kbd>R</kbd>",
    "Zoom to Arrangement Time Selection":"<kbd>Z</kbd>",
    "Zoom back from Arrangement Time Selection/Zoom out Arrangement Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>"
};
// 13
tracks = {
    "Insert Audio Track":"<kbd>CMD</kbd>-<kbd>T</kbd>",
    "Insert MIDI Track":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>T</kbd>",
    "Insert Return Track":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>T</kbd>",
    "Rename Selected Track":"<kbd>CMD</kbd>-<kbd>R</kbd>",
    "While Renaming, Go to next Track":"<kbd>Tab</kbd>",
    "Group Selected Tracks":"<kbd>CMD</kbd>-<kbd>G</kbd>",
    "Ungroup Tracks":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>G</kbd>",
    "Show Grouped Tracks":"<kbd title='if i recall correctly this is SHIFT and = if u have no numpad'>+</kbd>",
    "Hide Grouped Tracks":"<kbd>-</kbd>",
    "Move Nonadjacent Tracks Without Collapsing":"<kbd>CMD</kbd>- Arrow Keys",
    "Arm/Solo Multiple Tracks":"<kbd>CMD</kbd>-<kbd title='Left Click'>&#128432</kbd>",
    "Add Device from Browser":"<kbd>Enter</kbd>",
    "Deactivate Selected Track":"<kbd>0</kbd>",
};
// 3. that was nice :)
bpe = {
    "Toggle Automation Mode":"<kbd>A</kbd>",
    "Finer Resolution for Dragging":"<kbd>Shift</kbd>",
    "Create Curved Automation Segment":"<kbd>ALT</kbd>"
};
// 5
kmmmcmk = {
    "Toggle MIDI Map Mode":"<kbd>CMD</kbd>-<kbd>M</kbd>",
    "Toggle Key Map Mode":"<kbd>CMD</kbd>-<kbd>K</kbd>",
    "Computer MIDI Keyboard":"<kbd>M</kbd>",
    "Adjust Computer Midi Keyboard Octave Range":"<kbd>x</kbd> and <kbd>z</kbd> keys",
    "Adjust Computer MIDI&nbsp;Keyboard Incoming Note Velocity":"<kbd>c</kbd> and <kbd>v</kbd> keys",

};
// 7
zds = {
    "Zoom In":"<kbd>+</kbd>",
    "Zoom Out":"<kbd>-</kbd>",
    "Drag/Click to Append to a Selection":"<kbd>Shift</kbd>",
    "Click to Add Adjacent Clips/Tracks/Scenes to Multi-Selection":"<kbd>Shift</kbd>",
    "Click to add Nonadjacent Clips/Tracks/Scenes to Multi-Selection":"<kbd>CMD</kbd>",
    "Follow (Auto Scroll)":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>K</kbd>",
    "Pan Left/Right of Selection":"<kbd>CMD</kbd>-<kbd>ALT</kbd>"
};
// 8
cvsd = {
    "Quantize":"<kbd>CMD</kbd>-<kbd>U</kbd>",
    "Quantize Settings...":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>U</kbd>",
    "Move Selected Warp Marker":"<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Select Warp Marker":"<kbd>CMD</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Scroll Display to Follow Playback":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Move Clip Region with Start Marker":"<kbd>Shift</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Zoom to Clip Selection":"<kbd>Z</kbd>",
    "Zoom Back from Clip Selection/Zoom Out Clip Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>",
};
// 12
cvme = {
    "Quantize":"<kbd>CMD</kbd>-<kbd>U</kbd>",
    "Quantize Settings...":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>U</kbd>",
    "Scroll Editor Vertically":"<kbd>PgUp</kbd> / <kbd>PgDn</kbd>",
    "Scroll Editor Horizontally":"<kbd>Shift</kbd>-<kbd>PgUp</kbd> / <kbd>PgDn</kbd>",
    "Copy Notes":"<kbd>ALT</kbd>- Drag",
    "Change Veolocity from Note Editor":"<kbd>CMD</kbd>- Drag",
    "Move Insert Marker to Beginning":"<kbd>Function</kbd>-<kbd>&larr</kbd>",
    "Move Insert Marker to End":"<kbd>End</kbd>",
    "Scroll Display to Follow Playback":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>F</kbd>",
    "Move Clip Region with Start Marker":"<kbd>Shift</kbd>-<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>",
    "Zoom to Clip Selection":"<kbd>Z</kbd>",
    "Zoom Back from Clip Selection/Zoom Out Clip Completely":"<kbd>Shift</kbd>-<kbd>Z</kbd>"
};
// 7
gsd = {
    "Toggle Draw Mode":"<kbd>B</kbd>",
    "Narrow Grid":"<kbd>CMD</kbd>-<kbd>1</kbd>",
    "Widen Grid":"<kbd>CMD</kbd>-<kbd>2</kbd>",
    "Triplet Grid":"<kbd>CMD</kbd>-<kbd>3</kbd>",
    "Snap to Grid":"<kbd>CMD</kbd>-<kbd>4</kbd>",
    "Fixed/Zoom-Adaptive Grid":"<kbd>CMD</kbd>-<kbd>5</kbd>",
    "Bypass Snapping While Dragging":"<kbd>CMD</kbd>"
};
gq = {
    "Sixteenth-Note Quantization":"<kbd>CMD</kbd>-<kbd>6</kbd>",
    "Eighth-Note Quantization":"<kbd>CMD</kbd>-<kbd>7</kbd>",
    "Quarter-Note Quantization":"<kbd>CMD</kbd>-<kbd>8</kbd>",
    "1-Bar Quantization":"<kbd>CMD</kbd>-<kbd>9</kbd>",
    "Quantization Off":"<kbd>CMD</kbd>-<kbd>0</kbd>",
};
// 7
wsp = {
    "New Live Set":"<kbd>CMD</kbd>-<kbd>N</kbd>",
    "Open Live Set":"<kbd>CMD</kbd>-<kbd>O</kbd>",
    "Save Live Set":"<kbd>CMD</kbd>-<kbd>S</kbd>",
    "Save Live Set As...":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>S</kbd>",
    "Quit Live":"<kbd>CMD</kbd>-<kbd>Q</kbd>",
    "Export Audio/Video":"<kbd>CTRL</kbd>-<kbd>Shift</kbd>-<kbd>R</kbd>",
    "Hide Live":"<kbd>CMD</kbd>-<kbd>H</kbd>",
    "Export MIDI file":"<kbd>CMD</kbd>-<kbd>Shift</kbd>-<kbd>E</kbd>"
};
// 6
wpd = {
    "Show/Hide Plug-In Windows":"<kbd>CMD</kbd>-<kbd>ALT</kbd>-<kbd>P</kbd>",
    "Open Second/Multiple Windows with Plug-In Edit Button":"<kbd>CMD</kbd>",
    "Open Mac Keystroke Plug-In Window with Plug-in Edit Button":"<kbd>Shift</kbd>",
    "Group/Ungroup Devices":"<kbd>CMD</kbd>-<kbd>G</kbd>",
    "Activate/Deactivate All Devices in Group":"<kbd>ALT</kbd> + Device Activator",
    "Click to Append Devices to a Selected Device":"<kbd>Shift</kbd>",
    "Load Selected Device From Browser":"<kbd>Enter</kbd>"
};
    remAddedCSSid("formac")
    document.getElementById("mactoggle").innerHTML = "View Windows Shortcuts";
    };
       itemvarsetidenum = {
        1:showHideViews,
        2:accessMenus,
        3:adjValues,
        4:browsing,
        5:transport,
        6:editing,
        7:lbsem,
        8:sessvw,
        9:arrvw,
        10:tracks,
        11:bpe,
        12:kmmmcmk,
        13:zds,
        14:cvsd,
        15:cvme,
        16:gsd,
        17:gq,
        18:wsp,
        19:wpd

}
callCategories();
}