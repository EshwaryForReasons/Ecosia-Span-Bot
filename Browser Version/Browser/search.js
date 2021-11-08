import { loadavg } from "os";

var ListURLAddonForLoad = [
    "brilliance",
    "electronics",
    "routine",
    "progress",
    "officer",
    "abuse",
    "shine",
    "democratic",
    "transport",
    "team",
    "lick",
    "acquisition",
    "carve",
    "dialogue",
    "film",
    "arm",
    "pillow",
    "relationship",
    "decade",
    "consensus",
    "behead",
    "harvest",
    "sign",
    "city",
    "posture",
    "cake",
    "menu",
    "skeleton",
    "point",
    "chemistry",
    "Sunday",
    "positive",
    "receipt",
    "trial",
    "custody",
    "graduate",
    "tolerant",
    "rugby",
    "jockey",
    "ritual",
    "breeze",
    "adult",
    "vat",
    "cherry",
    "float",
    "census",
    "physics",
    "rent",
    "highlight",
    "circumstance",
    "graphic",
    "seal",
    "conference",
    "grind",
    "dip",
    "coal",
    "recruit",
    "mechanical",
    "celebration",
    "expertise",
    "pound",
    "litigation",
    "mild",
    "short",
    "circuit",
    "belly",
    "position",
    "draft",
    "crew",
    "manufacturer",
    "notebook",
    "scatter",
    "emphasis",
    "concert",
    "senior",
    "remain",
    "steel",
    "justice",
    "torture",
    "excess",
    "reputation",
    "shout",
    "tactic",
    "weed",
    "rebel",
    "gravel",
    "qualified",
    "go",
    "flood",
    "build",
    "visible",
    "hunter",
    "velvet",
    "hardship",
    "conviction",
    "recognize",
    "garage",
    "cell",
    "phone",
    "shallow",
  ]
  
  var URLBaseForLoad = "https://www.ecosia.org/search?q=hi"
  var RunNum = 0
  
  var x = Math.floor(Math.random() * 101);
  var RandomPickA = ListURLAddonForLoad[x]
   
  var URLToUse = URLBaseForLoad + RandomPickA


function LoadPage() {
  const { BrowserWindow } = require('electron')

  let win
  win.loadURL('http://github.com')
}

var i = 1;
function SpamEcosia () {
  setTimeout(function () {
      
  }, 3000)
}

  //SpamEcosia();
LoadPage();