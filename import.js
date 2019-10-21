'use strict';


var keys;
var gamename;
var platform;
var pushplatform;

function PatternKeySteam(string) {
  const virtualkeypattern = /([\dA-Z]{5}\-){2}[\dA-Z]{5}/gi;
  const physicalkeypattern = /([\dA-Z]{5}\-){4}[\dA-Z]{5}/gi;
  var physicalkey = string.match(physicalkeypattern);
  if (physicalkey == null) return string.match(virtualkeypattern);
  else return physicalkey
}

function PatternKeyOrigin(string) {
  const keypattern = /([\dA-Z]{4}\-){4}[\dA-Z]{4}/gi;
  return string.match(keypattern);
}

function PatternKeyUplay(string) {
  const keypattern1 = /([\dA-Z]{4}\-){3}[\dA-Z]{4}/gi;
  const keypattern2 = /[\dA-Z]{3}\-([\dA-Z]{4}\-){3}[\dA-Z]{4}/gi;
  var format1 = string.match(keypattern1);
  if (format1 == null) return string.match(keypattern2);
  else return format1
}

function impport(Platform) {
  const {
    dialog
  } = require('electron').remote
  var path = dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{
        name: 'Supported Files',
        extensions: ['txt', 'xlsx']
      },
      {
        name: 'Text Files',
        extensions: ['txt']
      },
      {
        name: 'Excel Files',
        extensions: ['xlsx']
      },
      {
        name: 'All Files',
        extensions: ['*']
      }
    ]
  })
  ////////
  if (path != undefined) {
    var indicSlash = path[0].lastIndexOf('\/');
    var extension = path[0].substring(indicSlash + 1).split(".");
    console.log(extension)
    extension[1] == 'txt' ? importtxt(Platform, path[0]) : extension[1] == 'xlsx' ? importxls(Platform, path[0]) : console.log("Format Not Supported")
    // baseorxhr()
  }
}

function gettab(platform) {
  switch (platform) {
    case 'Steam':
      return 2
      break;
    case 'Uplay':
      return 3
      break;
    case 'Origin':
      return 0
      break;
    case 'Other':
      return 1
      break;
  }
}

function getappid(item) {
  if ((item.platform != 'Steam' || item.platform == 'Other') && (item.platform != 'Other' || item
      .platform == 'Steam')) return item.appid;
  else return parseInt(item.appid);

}

function validateKey(key) {
  // Pour vérifier j'ai utilisé pattern email

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(key).toLowerCase());
}

function filtrer(tag, i) {
  var el = document.createElement('div');
  el.innerHTML = tag
  var l = el.getElementsByTagName('a').item(0)
  var appid = l.attributes[1].value
  addtokeys(appid, i)


}

// function baseorxhr() {
//   var i = 0;
//   while (i < tagname.length) {
//     var j = 0;
//     var test = true
//     while (j < store.state.steam.length & test) {
//       if (tagname[i] == store.state.steam[j].name) {
//         addtokeys(store.state.steam[j].appid, i)
//         test = false;
//       }
//       j++
//     }
//     if (test) {
//       sendData(i)
//     }

//     i++

//   }

//   addtodb();
// }


function addtokeys(appid, i) {
  keys.push({
    'key': key[i],
    'appid': appid
  })


}

function addtodb() {
  console.log(keys)

}

function getindex(platform, name) {
  return platform.map(el => el.name.toLowerCase().replace(/\s/gi, '')).indexOf(name.toLowerCase().replace(/\s/gi, ''))
}

function importtxt(Platform, path) {
  store.state.waitingdialog = true
  setTimeout(() => {
    store.state.import = true;
    store.state.waitingdialog = false;
    const lineByLine = require('./readlines.js');
    const liner = new lineByLine(path);
    var linestr;
    var index;
    var word;
    let line;
    let lineNumber = 1;

    while (line = liner.next()) {
      linestr = line.toString('ascii');
      filters(Platform, linestr, lineNumber);
      lineNumber++;
    }
  }, 2000);

}

function filters(Platform, linestr, lineNumber) {
  switch (Platform) {
    case 'Steam':
      keys = PatternKeySteam(linestr);
      platform = store.state.steam;
      pushplatform = store.state.steamkey;
      break;
    case 'Origin':
      keys = PatternKeyOrigin(linestr);
      platform = store.state.origin;
      pushplatform = store.state.originkey;
      break;
    case 'Uplay':
      keys = PatternKeyUplay(linestr);
      platform = store.state.uplay;
      pushplatform = store.state.uplaykey;
      break;
  }
  var obj = {
    line: lineNumber,
    name: '',
    keys: []
  }
  gamename = linestr;
  if (keys !== null) {
    for (var i = 0; i < keys.length; i++) {
      gamename = gamename.replace(keys[i], '');
      obj.keys.push({
        key: keys[i]
      })
    }
    obj.name = gamename.replace(/(\r\n|\n|\r)/gm, '').trim();
    var index = getindex(platform, obj.name)
    if (index != -1) {
      obj.name = platform[index].name;
      obj.appid = platform[index].appid;
      obj.platform = Platform;
      store.state.importedapps.push(obj);
    } else {
      obj.appid = '';
      obj.platform = Platform;
      store.state.importedapps.push(obj);
    }
  }
  lineNumber++;
}

function importxls(Platform, path) {
  const readXlsxFile = require('read-excel-file/node');

  readXlsxFile(path).then((rows) => {
    rows.forEach(el => {
      filters(Platform, el.join(' '))
    })
  })

}


// Readable Stream.



function exportxlxs(platform) {
  const {
    dialog
  } = require('electron').remote
  var path = dialog.showSaveDialog({
    properties: ['saveFile'],
    title: "Choose Export Path",
    filters: [{
      name: 'Excel File',
      extensions: ['xlsx']
    }]
  })
  if (path != undefined) {
    var json2xls = require('json2xls');
    var fs = require('fs')
    var appskey = []
    platform.forEach(app => {
      app.keys.forEach(key => {
        var obj = {
          name: app.name,
          key: key.key
        }
        appskey.push(obj)
      })
    })

    fs.writeFileSync(path, json2xls(appskey, {}), 'binary');
    return true
  } else return false
}