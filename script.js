'use strict'

PetiteVue.createApp({
  
  showA: false,
  showB: false,
  showC: false,
  showD: false,
  showE: false,
  showF: false,
  showG: false,
  showH: false,
  showI: false,
  showJ: false,
  showK: false,
  showL: false,
  showM: false,
  showN: false,
  showO: false,
  showP: false,
  showQ: false,
  showR: false,
  showS: false,
  showT: false,
  showU: false,
  showV: false,
  showW: false,
  showX: false,
  showY: false,
  showZ: false,
  html: true,
  css: true,
  js: true,

  alphabet: '',
  langHtml: '',
  langCss: '',
  langJs: '',

  lang () {

    if (this.langHtml == 'html') {
      this.html = true;
      this.css = false;
      this.js = false;

      this.langHtml = '';
    }

    if (this.langCss == 'css') {
      this.css = true;
      this.html = false;
      this.js = false;
      
      this.langCss = '';
    }

    if (this.langJs == 'js') {
      this.js = true;
      this.html = false;
      this.css = false;

      this.langJs = '';
    }

  },

  showCode () {

    if (this.alphabet == 'a') {
      this.showA = true;
    } else {
      this.showA = false;
    }

    if (this.alphabet == 'b') {
      this.showB = true;
    } else {
      this.showB = false;
    }

    if (this.alphabet == 'c') {
      this.showC = true;
    } else {
      this.showC = false;
    }

    if (this.alphabet == 'd') {
      this.showD = true;
    } else {
      this.showD = false;
    }

    if (this.alphabet == 'e') {
      this.showE = true;
    } else {
      this.showE = false;
    }

    if (this.alphabet == 'f') {
      this.showF = true;
    } else {
      this.showF = false;
    }

    if (this.alphabet == 'g') {
      this.showG = true;
    } else {
      this.showG = false;
    }

    if (this.alphabet == 'h') {
      this.showH = true;
    } else {
      this.showH = false;
    }

    if (this.alphabet == 'i') {
      this.showI = true;
    } else {
      this.showI = false;
    }

    if (this.alphabet == 'j') {
      this.showJ = true;
    } else {
      this.showJ = false;
    }

    if (this.alphabet == 'k') {
      this.showK = true;
    } else {
      this.showK = false;
    }

    if (this.alphabet == 'l') {
      this.showL = true;
    } else {
      this.showL = false;
    }

    if (this.alphabet == 'm') {
      this.showM = true;
    } else {
      this.showM = false;
    }

    if (this.alphabet == 'n') {
      this.showN = true;
    } else {
      this.showN = false;
    }

    if (this.alphabet == 'o') {
      this.showO = true;
    } else {
      this.showO = false;
    }

    if (this.alphabet == 'p') {
      this.showP = true;
    } else {
      this.showP = false;
    }

    if (this.alphabet == 'q') {
      this.showQ = true;
    } else {
      this.showQ = false;
    }

    if (this.alphabet == 'r') {
      this.showR = true;
    } else {
      this.showR = false;
    }

    if (this.alphabet == 's') {
      this.showS = true;
    } else {
      this.showS = false;
    }

    if (this.alphabet == 't') {
      this.showT = true;
    } else {
      this.showT = false;
    }

    if (this.alphabet == 'u') {
      this.showU = true;
    } else {
      this.showU = false;
    }

    if (this.alphabet == 'v') {
      this.showV = true;
    } else {
      this.showV = false;
    }

    if (this.alphabet == 'w') {
      this.showW = true;
    } else {
      this.showW = false;
    }

    if (this.alphabet == 'x') {
      this.showX = true;
    } else {
      this.showX = false;
    }

    if (this.alphabet == 'y') {
      this.showY = true;
    } else {
      this.showY = false;
    }

    if (this.alphabet == 'z') {
      this.showZ = true;
    } else {
      this.showZ = false;
    }


    // ↓言語タグの表示をif文とかでやりたかったけど難しくてできてない泣

    // const text = document.getElementsByClassName('text');
    // const htmlDl = document.getElementsByClassName('html');

    // for (let i = 0; i < htmlDl.length; i++) {
    //   if (htmlDl[i].tagName == 'dl') {
    //     const htmlDiv = document.createElement('div');
    //     htmlDiv.className = 'htmlTag';
    //     htmlDiv.textContent = 'HTML';
    //     text[0].insertBefore(htmlDiv, htmlDl[i].nextSibling);
    //   }
    // }

  }
}).mount();