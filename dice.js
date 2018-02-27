
  // This is a simple Tabris.js app. by MR. M. -  Feel free to modify as you please.

const {
  Button,
  TextView,
  ui,
  Video,
  ImageView,
  AlertDialog,
  app, TextInput
} = require('tabris');

const IMAGE_PATH = 'https://talarie.github.io/imd-learning-tabris/images/';
const VIDEO_PATH = 'https://talarie.github.io/imd-learning-tabris';
const MY_GITHUB_REPO = 'https://github.com/talarie/imd-learning-tabris'

// global variables
let numWins = 0;

// Create a text input field with input finished listener

let userText = new TextInput({
  top: 20, left: '20%', right: '20%',
  message: 'Your name: '
}).on('accept', ({text}) => {
  new TextView({
    top: 'prev() 20', left: '20%',
    text: text
  }).appendTo(ui.contentView);
}).appendTo(ui.contentView);

let casinoimage = new ImageView({
  top: 'prev() 5',
  width: 350,
  height: 300,
  centerX: 0,
  image: IMAGE_PATH + 'casinoLogo.png'
}).appendTo(ui.contentView);

let button2 = new Button({
  id: 'button2',
  centerX: 0, bottom: 16,
  text: '❚❚'
}).on('select', () => video.state === 'play' ? video.pause() : video.play())
  .appendTo(ui.contentView);

let video = new Video({
  left: 0, top: 0, right: 0, bottom: '#button 16',
  url: 'https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/2157/5/135788180/401998382.mp4?token=1519773409-0x9485fdc905c4a0857f59ad8e42cac6f7a82b70c4',
  controlsVisible: false
}).on('stateChanged', event => button.text = event.value !== 'pause' ? '❚❚' : '▶')
  .appendTo(ui.contentView);


let button = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Roll Dice'
  })
  .on('select', () => {
    casinoimage.height = 1;
    var rand = 1 + Math.floor(Math.random() * 6);
    var rand2 = 1 + Math.floor(Math.random() * 6);

    image1.image = IMAGE_PATH + rand + '.png';
    image2.image = IMAGE_PATH + rand2 + '.png';

    if (rand == rand2) {
      label.text = userText.text + '- WINNER, you got a 4';
      numWins = numWins + 1 ;
      video.state = VIDEO_PATH + 'winnerVideo.mp4';
      button2.text = '';
    } else {
      label.text = userText.text  + ' - Try again- Wins so far ' + numWins;
      winnerimage.image = '';
    }

    if (numWins == 5){
      label.text = 'You WON with 5 wins!';
      image1.image = IMAGE_PATH + 'whitedice.png';
      winnerimage.image = '';
      numWins = 0;
    }

  }).appendTo(ui.contentView);

// Create a text view and add it too
let label = new TextView({
  centerX: 0,
  top: 'prev() 10',
  font: '14px',
  text: 'Welcome to Mr. M. Casino'
}).appendTo(ui.contentView);

// Display images with different scale modes

let image1 = new ImageView({
  top: 'prev() 10',
  width: 100,
  height: 100,
  centerX: 0,
  scaleMode: 'fill',
  image: IMAGE_PATH + 'whitedice.png'

}).appendTo(ui.contentView);

let image2 = new ImageView({
  top: 'prev() 10',
  width: 100,
  height: 100,
  centerX: 0,
  scaleMode: 'fill',
  image: IMAGE_PATH + 'whitedice.png'

}).appendTo(ui.contentView);

let winnerimage = new ImageView({
  top: 'prev() 10',
  width: 100,
  height: 100,
  centerX: 0,
  scaleMode: 'fill',
  }).appendTo(ui.contentView);

  let resetbutton = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Reset'
  })
  .on('select', () => {
      casinoimage.height = 109;
      label.text = 'New Game';
      winnerimage.image = '';
      numWins = 0;
      image1.image = 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png';

  }).appendTo(ui.contentView);



new Button({
  left: 16, top: 'prev() 16', right: 16,
  text: '© INFO'
}).on('select', () => {
  new AlertDialog({
    message: '© 2018 Mr. M. - Free to use',
    buttons: {ok: 'OK'}
  }).open();
}).appendTo(ui.contentView);


  new Button({
  alignment: 'center', centerX: 0,  top: 'prev() 10',
  image: IMAGE_PATH + 'github32.png',
  font: '10px',
  text: 'View source code on my Github Repository'
}).on({
  select: () => app.launch(MY_GITHUB_REPO)
    .then(() => label.text = 'Url has been launched')
    .catch((e) => label.text = e)
}).appendTo(ui.contentView);
