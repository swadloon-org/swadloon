//vars - theme data
var jsonBinData = [];

//vars - state
var onboardingSlide = 1;
var onboardingTotal = 5;
var connectedToBin = false;
var themeToDelete;

//vars - panels
const ui = document.querySelector('#uiContainer');
const loading = document.querySelector('#loadingScreen');
const navContainer = document.querySelector('.nav__container');
const panelContainer = document.querySelector('.panel-container');
const navCreate = document.querySelector('#navCreate');
const navEdit = document.querySelector('#navEdit');
const panelAdmin = document.querySelector('#panelAdmin');
const panelCreate = document.querySelector('#panelCreate');
const onboarding = document.querySelector('#panelOnboarding');
const onboardingSlides = document.querySelector('#onboardingSlides');
const pager = document.querySelector('#pager');
const emptyState = document.querySelector('#emptyState');
const deleteConfirmation = document.querySelector('#deleteConfirmation');

//vars - buttons
const applyButton = document.querySelector('#applyTheme');
const saveSettings = document.querySelector('#saveSettings');
const resetThemer = document.querySelector('#resetThemer');
const addTheme = document.querySelector('#addTheme');
const backCreate = document.querySelector('#backCreate');
const backEdit = document.querySelector('#backEdit');
const tabThemes = document.querySelector('#tabThemes');
const tabAdmin = document.querySelector('#tabAdmin');
const onboardingNext = document.querySelector('#onboardingNext');
const onboardingPrev = document.querySelector('#onboardingPrev');
const pagerButtons = document.querySelectorAll('.pager__node');
const configureThemer = document.querySelector('#configureThemer');
const skipTour = document.querySelector('#skipTour');
const createFirstTheme = document.querySelector('#createFirstTheme');
const createTheme = document.querySelector('#createTheme');
const deleteTheme = document.querySelector('#deleteTheme');
const cancelDelete = document.querySelector('#cancelDelete');

//vars - themes
var themesList;
const themesContainer = document.querySelector('#themesContainer');
var themeToDeleteName = document.querySelector('#themeToDeleteName');

//vars - inputs
const inputApiSecret = document.querySelector('#inputApiSecret');
const inputApiURL = document.querySelector('#inputApiURL');
const inputThemeName = document.querySelector('#themeName');
const inputColorStyles = document.querySelector('#colorStyles');
const inputTextStyles = document.querySelector('#textStyles');
const inputEffectStyles = document.querySelector('#effectStyles');
const inputThemeSource = document.querySelector('#themeSource');
const inputCreateMultipleThemes = document.querySelector('#createMultipleThemes');
const applyTo = document.querySelector('#applyTo');

// Communication with Plugin
window.onmessage = async (event) => {
  switch (event.data.pluginMessage.type) {
    case 'apiCredentials':
      if (event.data.pluginMessage.status == false) {
        setTimeout(function () {
          onboarding.classList.remove('onboarding--hidden');
        }, 500);
        setTimeout(function () {
          loadingScreen('off');
        }, 1000);
      } else {
        //pre populate input fields
        inputApiURL.value = event.data.pluginMessage.url;
        inputApiSecret.value = event.data.pluginMessage.secret;

        //initalize themer data
        initializeWithThemerData();
      }
      break;

    case 'addNewTheme':
      addNewTheme(event.data.pluginMessage.themeData, event.data.pluginMessage.themeCount);
      break;
  }
};

//Initialize plugin with data
function initializeWithThemerData() {
  loadingScreen('on');

  if (!inputApiURL.value && inputApiSecret.value) {
    //send msg to plugin
    parent.postMessage(
      {
        pluginMessage: {
          type: 'notify',
          msg: 'Creating your bin...',
        },
      },
      '*'
    );

    //create a new bin
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.jsonbin.io/b', true);
    xhr.setRequestHeader('Access-Control-Allow-Credentials', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('secret-key', inputApiSecret.value);
    xhr.responseType = 'text';
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let response = JSON.parse(xhr.response);
        inputApiURL.value = 'https://api.jsonbin.io/b/' + response.id;
        initializeWithThemerData();
      } else {
        //send msg to plugin
        parent.postMessage(
          {
            pluginMessage: {
              type: 'notify',
              msg: 'There was an error connecting',
            },
          },
          '*'
        );

        loadingScreen('off');

        connectedToBin = false;
      }
    };
    xhr.send('[{}]');
  } else if (inputApiURL.value && inputApiSecret.value) {
    //send msg to plugin
    parent.postMessage(
      {
        pluginMessage: {
          type: 'notify',
          msg: 'Connecting to JSONbin.io',
        },
      },
      '*'
    );

    //make xml http request
    let xhr = new XMLHttpRequest();
    xhr.open('GET', inputApiURL.value, true);
    xhr.setRequestHeader('Access-Control-Allow-Credentials', true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('secret-key', inputApiSecret.value);
    xhr.setRequestHeader('versioning', false);
    xhr.responseType = 'text';
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        parent.postMessage(
          {
            pluginMessage: {
              type: 'initialThemerData',
              url: inputApiURL.value,
              secret: inputApiSecret.value,
              msg: 'Connection successful',
            },
          },
          '*'
        );

        //populate latest data from API
        jsonBinData = JSON.parse(xhr.response);

        //update admin state
        adminValidation();

        //populate list of themes
        populateThemes();

        //connected
        connectedToBin = true;
      } else {
        //send msg to plugin
        parent.postMessage(
          {
            pluginMessage: {
              type: 'notify',
              msg: 'There was an error connecting',
            },
          },
          '*'
        );

        loadingScreen('off');

        connectedToBin = false;
      }
    };
    xhr.send();
  } else {
    //send msg to plugin
    parent.postMessage(
      {
        pluginMessage: {
          type: 'notify',
          msg: 'There was an error. Please check your API credentials.',
        },
      },
      '*'
    );

    //loading
    loadingScreen('off');
  }
}

// populate list of themes
function populateThemes() {
  if (jsonBinData.length === 1 && jsonBinData[0].length === undefined) {
    //send msg to plugin
    parent.postMessage(
      {
        pluginMessage: {
          type: 'notify',
          msg: 'No themes available',
        },
      },
      '*'
    );

    //clear existing themes first
    clearThemes();

    //make sure the empty state is shown
    emptyState.classList.remove('hidden');

    //navigate to the themes page
    navigate('home');

    //turn the loading screen off
    setTimeout(function () {
      loadingScreen('off');
    }, 300);
  } else {
    // find out how many unique themes are present and populate a new array
    let themes = [...new Set(jsonBinData.map((theme) => theme.theme))];

    let numOfThemes = themes.length;
    let suffix;
    if (numOfThemes === 1) {
      suffix = 'theme';
    } else {
      suffix = 'themes';
    }

    //next hide the empty state
    emptyState.classList.add('hidden');

    //clear existing themes first
    clearThemes();

    //create theme wrapper
    createThemeWrapper();

    //create a theme entry for each theme
    themes.forEach((theme) => {
      createThemeRow(theme);
    });

    //enable click handlers for each theme
    enableThemes();

    //navigate to the themes page
    navigate('home');

    //update theme data in plugin
    parent.postMessage(
      {
        pluginMessage: {
          type: 'updateThemes',
          themeData: JSON.stringify(jsonBinData),
        },
      },
      '*'
    );

    //turn the loading screen off
    setTimeout(function () {
      loadingScreen('off');
    }, 300);
  }
}

//creates the wrapper for the theme list
function createThemeWrapper() {
  let wrapper = document.createElement('div');
  wrapper.classList.add('pt8', 'rel', 'column', 'fill', 'v-scroll');
  wrapper.setAttribute('id', 'themesList');
  wrapper.id = 'themesList';
  themesContainer.appendChild(wrapper);
  themesList = document.querySelector('#themesList');
}

//creates a row for a theme
function createThemeRow(data) {
  //set theme name
  let themeName = data;

  //create theme item
  let theme = document.createElement('div');
  theme.classList.add('themes__item');
  theme.setAttribute('theme', themeName);
  themesList.appendChild(theme);

  //create row container
  let row = document.createElement('div');
  row.classList.add('row', 'v-center');
  theme.appendChild(row);

  //create theme icon
  let icon = document.createElement('div');
  icon.classList.add('themes__icon', 'mr4');
  row.appendChild(icon);

  //create text
  let label = document.createElement('div');
  label.classList.add('type', 'type--pos-small-normal', 'type--figma-black-8', 'truncate', 'pr16');
  label.innerText = themeName;
  row.appendChild(label);

  //create adjust icon
  let trash = document.createElement('div');
  trash.classList.add('icon', 'icon--trash', 'icon--button', 'no-shrink');
  theme.appendChild(trash);

  //add event handlers
  trash.addEventListener('click', removeTheme, false);
}

// clear themes
function clearThemes() {
  if (themesList) {
    themesList.remove();
  }
}

// UI Specific Functions

// ONBOARDING

// this controls the pager buttons
pagerButtons.forEach((button) => {
  let destination = button.getAttribute('page');
  button.addEventListener(
    'click',
    function (event) {
      onboardingNav(destination);
    },
    false
  );
});

//next button for onboarding
onboardingNext.addEventListener(
  'click',
  function (event) {
    if (onboardingSlide <= 4) {
      onboardingNav(parseInt(onboardingSlide) + 1);
    }
  },
  false
);

//prev button for onboarding
onboardingPrev.addEventListener(
  'click',
  function (event) {
    if (onboardingSlide > 1) {
      onboardingNav(parseInt(onboardingSlide) - 1);
    }
  },
  false
);

//navigation function for onboarding
function onboardingNav(destination) {
  onboardingSlides.style.left = (destination - 1) * -240;
  clearPager();
  let button = pager.querySelector('[page="' + destination + '"]');
  button.classList.add('pager__node--selected');
  onboardingSlide = destination;
  onboardingNext.classList.remove('icon--disabled');
  onboardingPrev.classList.remove('icon--disabled');
  if (onboardingSlide === onboardingTotal) {
    onboardingNext.classList.add('icon--disabled');
  }
  if (onboardingSlide === 1) {
    onboardingPrev.classList.add('icon--disabled');
  }
}

// clear selected element in pager
function clearPager() {
  pagerButtons.forEach((button) => {
    button.classList.remove('pager__node--selected');
  });
}

//advance to admin section
configureThemer.addEventListener('click', function (event) {
  navigate('admin');
  setTimeout(function () {
    onboarding.classList.add('onboarding--hidden');
    inputApiSecret.focus();
  }, 300);
});
skipTour.addEventListener('click', function (event) {
  navigate('admin');
  setTimeout(function () {
    onboarding.classList.add('onboarding--hidden');
    inputApiSecret.focus();
  }, 300);
});

// THEMES PANEL
var themeClickHandler = function (event) {
  let selectedTheme = document.querySelector('.themes__item--selected');
  if (selectedTheme) {
    selectedTheme.classList.remove('themes__item--selected');
  }
  this.classList.add('themes__item--selected');
  applyButton.removeAttribute('disabled');
};

function enableThemes() {
  let themeItems = Array.from(document.getElementsByClassName('themes__item'));
  themeItems.forEach((item) => {
    item.addEventListener('click', themeClickHandler, false);
  });
}

//empty state create button
createFirstTheme.addEventListener('click', function (event) {
  navigate('addTheme');
});

// Add theme button
addTheme.addEventListener(
  'click',
  function (event) {
    if (!this.classList.contains('icon--disabled')) {
      navigate('addTheme');
    }
  },
  false
);

// back from creating theme
backCreate.addEventListener(
  'click',
  function (event) {
    navigate('home');
  },
  false
);

//loading screen

function loadingScreen(status) {
  if (status === 'on') {
    if (loading.classList.contains('hidden')) {
      fadeIn(loading);
    }
  } else {
    fadeOut(loading);
  }
}

// ADMIN

// Enable Save Settings button
inputApiSecret.addEventListener(
  'input',
  function (event) {
    adminValidation();
  },
  false
);

// validate input fields
function adminValidation() {
  let apiSecret = inputApiSecret.value;
  if (apiSecret.length >= 1) {
    saveSettings.disabled = false;
  } else {
    saveSettings.disabled = true;
  }
}

saveSettings.addEventListener(
  'click',
  function (event) {
    initializeWithThemerData();
  },
  false
);

// ADD THEME

// reset the create a theme form
function resetCreateTheme() {
  inputThemeName.value = '';
  inputColorStyles.checked = true;
  inputTextStyles.checked = false;
  inputEffectStyles.checked = false;
  if (inputCreateMultipleThemes.checked === true) {
    inputCreateMultipleThemes.click();
  }
}

//multiple themes checkbox listener
var multipleThemesListener = function (event) {
  if (inputCreateMultipleThemes.checked === true) {
    inputThemeName.value = '';
    inputThemeName.setAttribute('disabled', 'disabled');
    inputThemeName.setAttribute('placeholder', 'Name determined by style prefixes');
  } else {
    inputThemeName.value = '';
    inputThemeName.removeAttribute('disabled');
    inputThemeName.setAttribute('placeholder', 'Unique theme name');
  }
};
inputCreateMultipleThemes.addEventListener('change', multipleThemesListener, false);

//button actions to create a theme
createTheme.addEventListener('click', function (event) {
  if (
    inputColorStyles.checked === false &&
    inputTextStyles.checked === false &&
    inputEffectStyles.checked === false
  ) {
    //send a message with an error
    parent.postMessage(
      {
        pluginMessage: {
          type: 'notify',
          msg: 'Please specify at least one type of style to include in your theme',
        },
      },
      '*'
    );
  } else if (inputThemeName.value === '' && inputCreateMultipleThemes.checked === false) {
    //send a message with an error
    parent.postMessage(
      {
        pluginMessage: {
          type: 'notify',
          msg: 'Please specify a name for your theme',
        },
      },
      '*'
    );
  } else {
    //send msg to plugin
    parent.postMessage(
      {
        pluginMessage: {
          type: 'createTheme',
          apiData: JSON.stringify(jsonBinData),
          themeName: inputThemeName.value,
          usePrefixes: inputCreateMultipleThemes.checked,
          source: inputThemeSource.value,
          colorStyles: inputColorStyles.checked,
          textStyles: inputTextStyles.checked,
          effectStyles: inputEffectStyles.checked,
        },
      },
      '*'
    );
  }
});

//function to add a new theme
function addNewTheme(themeData, themeCount) {
  //turn on the loading screen
  loadingScreen('on');

  //send msg to plugin to
  parent.postMessage(
    {
      pluginMessage: {
        type: 'notify',
        msg: 'Connecting...',
      },
    },
    '*'
  );

  //make xml http request
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', inputApiURL.value, true);
  xhr.setRequestHeader('Access-Control-Allow-Credentials', true);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.setRequestHeader('secret-key', inputApiSecret.value);
  xhr.setRequestHeader('versioning', false);
  xhr.responseType = 'text';
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      //populate latest data from API
      jsonBinData = JSON.parse(themeData);

      let lang;
      if (themeCount === 1) {
        lang = 'theme';
      } else {
        lang = 'themes';
      }

      parent.postMessage(
        {
          pluginMessage: {
            type: 'notify',
            msg: themeCount.toString() + ' ' + lang + ' saved successfully',
          },
        },
        '*'
      );

      parent.postMessage(
        {
          pluginMessage: {
            type: 'newThemesAdded',
          },
        },
        '*'
      );

      //populate list of themes
      populateThemes();
    } else {
      //send msg to plugin
      parent.postMessage(
        {
          pluginMessage: {
            type: 'notify',
            msg: 'There was an problem connecting!',
          },
        },
        '*'
      );
    }
  };
  xhr.send(themeData);
}

// APPLY THEME

applyButton.addEventListener('click', function (event) {
  let selectedThemeItem = document.querySelector('.themes__item--selected');
  let selectedTheme = selectedThemeItem.getAttribute('theme');

  if (selectedTheme) {
    //send msg to plugin
    parent.postMessage(
      {
        pluginMessage: {
          type: 'applyTheme',
          themeName: selectedTheme,
          applyTo: applyTo.value,
        },
      },
      '*'
    );
  } else {
    //send msg to plugin
    parent.postMessage(
      {
        pluginMessage: {
          type: 'notify',
          msg: 'There was a problem applying the theme.',
        },
      },
      '*'
    );
  }
});

// DELETE THEME

var removeTheme = function (event) {
  themeToDelete = event.target.parentNode.getAttribute('theme');
  themeToDeleteName.innerText = themeToDelete;
  deleteConfirmation.classList.remove('delete-confirmation--hidden');
};

cancelDelete.addEventListener('click', function (event) {
  themeToDelete = '';
  deleteConfirmation.classList.add('delete-confirmation--hidden');
});

deleteTheme.addEventListener('click', function (event) {
  loadingScreen('on');

  //remove deleted theme from data
  let newJsonBinData = jsonBinData.filter(function (obj) {
    return obj.theme !== themeToDelete;
  });

  if (newJsonBinData.length === 0) {
    newJsonBinData = [{}];
  }

  newJsonBinData = JSON.stringify(newJsonBinData);

  //send the new data to JSON bin
  //make xml http request
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', inputApiURL.value, true);
  xhr.setRequestHeader('Access-Control-Allow-Credentials', true);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.setRequestHeader('secret-key', inputApiSecret.value);
  xhr.setRequestHeader('versioning', false);
  xhr.responseType = 'text';
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      //populate latest data from API
      jsonBinData = JSON.parse(xhr.responseText).data;

      //send msg to plugin
      parent.postMessage(
        {
          pluginMessage: {
            type: 'deleteTheme',
            msg: themeToDelete + ' theme deleted successfully',
            themeData: JSON.stringify(jsonBinData),
          },
        },
        '*'
      );

      themeToDelete = '';
      deleteConfirmation.classList.add('delete-confirmation--hidden');

      //populate list of themes
      populateThemes();

      //disable apply button
      applyButton.setAttribute('disabled', 'disabled');
    } else {
      //send msg to plugin
      parent.postMessage(
        {
          pluginMessage: {
            type: 'notify',
            msg: 'There was an error deleting theme!',
          },
        },
        '*'
      );

      themeToDelete = '';
      deleteConfirmation.classList.add('delete-confirmation--hidden');

      loadingScreen('off');
    }
  };
  xhr.send(newJsonBinData);
});

// MAIN NAV

// main navigational tabs
tabThemes.addEventListener(
  'click',
  function (event) {
    clearTabs();
    navigate('home');
    this.classList.add('tab-control__item--selected');
  },
  false
);

tabAdmin.addEventListener(
  'click',
  function (event) {
    clearTabs();
    navigate('admin');
    this.classList.add('tab-control__item--selected');
  },
  false
);

// clear selected tabs
function clearTabs() {
  let tabs = document.querySelectorAll('.tab-control__item');
  tabs.forEach((tab) => {
    tab.classList.remove('tab-control__item--selected');
  });
}

// navigation function
function navigate(destination) {
  switch (destination) {
    case 'admin':
      clearTabs();
      tabAdmin.classList.add('tab-control__item--selected');
      panelCreate.classList.add('hidden');
      panelAdmin.classList.remove('hidden');
      panelContainer.style.left = '-240px';
      break;

    case 'addTheme':
      if (connectedToBin) {
        resetCreateTheme();
        navCreate.classList.remove('hidden');
        panelCreate.classList.remove('hidden');
        panelAdmin.classList.add('hidden');
        navContainer.style.left = '-240px';
        panelContainer.style.left = '-240px';

        setTimeout(function () {
          inputThemeName.focus();
        }, 300);
      } else {
        //send msg to plugin
        parent.postMessage(
          {
            pluginMessage: {
              type: 'notify',
              msg: 'Please connect to a bin first.',
            },
          },
          '*'
        );

        navigate('admin');

        setTimeout(function () {
          inputApiSecret.focus();
        }, 300);
      }

      break;

    case 'home':
      //reset panels
      clearTabs();
      navContainer.style.left = '0px';
      panelContainer.style.left = '0px';
      tabThemes.classList.add('tab-control__item--selected');

      setTimeout(function () {
        panelCreate.classList.add('hidden');
        panelAdmin.classList.remove('hidden');
      }, 300);
      break;
  }
}

// RESET themer
// INCOMPLETE FUNCTION

resetThemer.addEventListener('click', function (event) {
  resetPlugin();
});

function resetPlugin() {
  //reset vars
  connectedToBin = false;
  jsonBinData = [{}];

  // clear themes
  clearThemes();

  // remove empty state
  emptyState.classList.remove('hidden');

  //reset inputs
  inputApiSecret.value = '';
  inputApiURL.value = '';

  //send msg to plugin to intialize reset
  parent.postMessage(
    {
      pluginMessage: {
        type: 'reset',
      },
    },
    '*'
  );

  //reset onboarding
  onboardingNav(1);

  // turn on onboarding
  onboarding.classList.remove('onboarding--hidden');
}

// HELPER FUNCTIONS

//fading functions
function fadeOut(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.classList.add('hidden');
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ')';
    op -= op * 0.1;
  }, 10);
}
function fadeIn(element) {
  var op = 0.1; // initial opacity
  element.classList.remove('hidden');
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ')';
    op += op * 0.1;
  }, 10);
}

// Figma Plugin DS
(function () {
  'use strict';
  var e,
    t = { selector: 'disclosure' },
    n = function (t) {
      let n = this.parentNode.parentNode,
        l = n.querySelectorAll('li'),
        o = this.parentNode.classList.contains(e + '--expanded');
      l.forEach((t) => {
        t.classList.remove(e + '--expanded');
      }),
        this.parentNode.classList.add(e + '--expanded'),
        o && this.parentNode.classList.remove(e + '--expanded');
    };
  window.disclosure = {
    init: function (l) {
      let o = Object.assign({}, t, l);
      e = o.selector;
      let i = document.querySelectorAll('.' + e + '__label');
      i.forEach((e) => {
        e.addEventListener('click', n, !1);
      });
    },
    destroy: function () {
      let t = document.querySelectorAll('.' + e + '__label');
      t.forEach((e) => {
        e.removeEventListener('click', n, !1);
      });
    },
  };
})(),
  (function () {
    'use strict';
    var e,
      t = { selector: '.input-icon' },
      n = function (e) {
        let t = this.querySelector('.icon');
        t.classList.remove('icon--black-3'), t.classList.add('icon--blue');
      },
      l = function (e) {
        let t = this.querySelector('.icon');
        t.classList.add('icon--black-3'), t.classList.remove('icon--blue');
      };
    window.iconInput = {
      init: function (o) {
        let i = Object.assign({}, t, o);
        e = i.selector;
        let s = document.querySelectorAll(e);
        s.forEach((e) => {
          e.addEventListener('focusin', n, !1), e.addEventListener('focusout', l, !1);
        });
      },
      destroy: function () {
        let t = document.querySelectorAll(e);
        t.forEach((e) => {
          e.removeEventListener('focusin', n, !1), e.removeEventListener('focusout', l, !1);
        });
      },
    };
  })(),
  (function () {
    'use strict';
    function e() {
      let e = a.length;
      for (let o = 0; o < e; o++) {
        t(document.createElement('div'), o);
        let e = a[o].getElementsByTagName('optgroup');
        if (((r = a[o].selectedIndex), (d = 0), 0 != e.length)) {
          let t;
          t = !!e[0].label;
          for (let o = 0; o < e.length; o++) {
            let i = e[o].getElementsByTagName('option'),
              a = document.createElement('div');
            if (((a.className = s + '__divider'), 1 == t)) {
              let t = document.createElement('span'),
                r = document.createTextNode(e[o].label);
              (t.className = s + '__divider-label'),
                0 === o && t.classList.add(s + '__divider-label--first'),
                t.appendChild(r),
                a.appendChild(t),
                c.appendChild(a),
                l(t);
              for (let e = 0; e < i.length; e++) n(i[e]);
            } else {
              for (let e = 0; e < i.length; e++) n(i[e]);
              if (o != e.length - 1) {
                let e = document.createElement('span');
                (e.className = s + '__divider-line'), a.appendChild(e), c.appendChild(a), l(e);
              }
            }
            a.addEventListener('click', v, !1);
          }
        } else for (let e = 0; e < a[o].length; e++) n(a[o].options[e]);
      }
    }
    function t(e, t) {
      let n = a[t];
      (n.style.display = 'none'),
        (n.options[n.selectedIndex].selected = !0),
        n.parentNode.insertBefore(e, n),
        e.appendChild(n),
        (e.className = s);
      let l,
        o = document.createElement('button'),
        r = document.createElement('span'),
        d = document.createElement('span');
      if (((c = document.createElement('ul')), 0 == n.selectedIndex))
        l = document.createTextNode(n.options[0].text);
      else {
        let e = n.selectedIndex;
        l = document.createTextNode(n.options[e].text);
      }
      (o.className = s + '__button'),
        (r.className = s + '__button-label'),
        (d.className = s + '__icon'),
        (c.className = s + '__list'),
        e.appendChild(o),
        e.appendChild(c),
        o.appendChild(r),
        o.appendChild(d),
        r.appendChild(l),
        'overlap' == i.position && (c.style.top = 0),
        'alignBottom' == i.position && (c.style.bottom = '0px'),
        o.addEventListener('click', m, !1);
    }
    function n(e) {
      if ('' != e.value) {
        let t = document.createElement('li'),
          n = document.createElement('span'),
          o = document.createElement('span');
        if (
          ((t.className = s + '__list-item'),
          (n.className = s + '__list-item-icon'),
          (o.className = s + '__list-item-text'),
          t.setAttribute('data-value', e.value),
          (o.innerHTML += e.text),
          t.appendChild(n),
          t.appendChild(o),
          c.appendChild(t),
          'positionToSelection' == i.position && (t.setAttribute('position', d), l(t)),
          e.index == r &&
            (t.classList.add(s + '__list-item--active'), 'positionToSelection' == i.position))
        ) {
          let e = -Math.abs(parseInt(t.getAttribute('position')));
          c.style.top = e + 'px';
        }
        t.addEventListener('click', m, !1);
      }
    }
    function l(e) {
      let t = [
        parseInt(window.getComputedStyle(e, null).getPropertyValue('margin-top')),
        parseInt(window.getComputedStyle(e, null).getPropertyValue('margin-bottom')),
        parseInt(window.getComputedStyle(e, null).getPropertyValue('padding-top')),
        parseInt(window.getComputedStyle(e, null).getPropertyValue('padding-bottom')),
        parseInt(window.getComputedStyle(e, null).getPropertyValue('height')),
      ];
      d += o(t);
    }
    function o(e) {
      return e.reduce(function (e, t) {
        return e + t;
      }, 0);
    }
    var i,
      s,
      a,
      c,
      r,
      d,
      u = { selector: 'select-menu', position: 'under' },
      p = !1,
      m = function (e) {
        let t = this;
        if ('BUTTON' == t.tagName) {
          this.classList.toggle(s + '__button--active');
          let e = t.parentNode.querySelector('UL');
          e.classList.toggle(s + '__list--active');
        } else if ('LI' == t.tagName) {
          let e = t.parentNode.parentNode.querySelector('UL'),
            n = e.getElementsByTagName('LI');
          for (let e = 0; e < n.length; e++) n[e].classList.remove(s + '__list-item--active');
          t.classList.add(s + '__list-item--active');
          let l = e.parentNode.querySelector('SELECT'),
            o = t.getAttribute('data-value'),
            a = l.querySelectorAll('option'),
            c = a.length,
            r = new Event('change');
          a.forEach((e) => {
            e.removeAttribute('selected');
          }),
            (l.value = o),
            l.dispatchEvent(r);
          for (let e = 0; e < c; e++) {
            let t = a[e].value;
            t == o && a[e].setAttribute('selected', 'selected');
          }
          let d = t.parentNode.parentNode.querySelector('BUTTON'),
            u = d.querySelector('.' + s + '__button-label');
          if (
            ((u.textContent = t.textContent),
            d.classList.toggle(s + '__button--active'),
            e.classList.toggle(s + '__list--active'),
            'positionToSelection' == i.position)
          ) {
            let e = -Math.abs(parseInt(t.getAttribute('position')));
            t.parentNode.style.top = e + 'px';
          }
        }
      },
      v = function (e) {
        e.stopPropagation();
      },
      f = function (e) {
        let t = document.querySelectorAll('select.' + s);
        t.forEach((t) => {
          let n = t.parentNode,
            l = n.querySelector('UL'),
            o = n.querySelector('BUTTON');
          if (l.classList.contains(s + '__list--active')) {
            let t = n.contains(e.target);
            t ||
              (l.classList.remove(s + '__list--active'),
              o.classList.remove(s + '__button--active'));
          }
        });
      };
    window.selectMenu = {
      init: function (t) {
        1 == p && selectMenu.destroy(),
          (i = Object.assign({}, u, t)),
          (s = i.selector),
          (a = document.querySelectorAll('.' + s)),
          e(),
          document.addEventListener('click', f, !1),
          (p = !0);
      },
      destroy: function () {
        let e = document.querySelectorAll('select.' + s);
        e.forEach((e) => {
          let t = e.parentNode,
            n = t.querySelector('BUTTON'),
            l = t.querySelector('UL');
          n.remove(), l.remove(), (t.outerHTML = t.innerHTML);
        }),
          document.removeEventListener('click', f, !1),
          (p = !1);
      },
    };
  })();

selectMenu.init({ position: 'alignBottom' });
iconInput.init();
