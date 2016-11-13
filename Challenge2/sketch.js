var draculaText;
var joined;
var story;
var parsedText;

var begin, end;

var font;
var fontsize = 20;

var draculaIMG, britain;

var helsinggrow = 0;
var draculagrow = 0;

function preload() {
  draculaText = loadStrings('content/dracula.txt');
  font = loadFont('content/font.ttf');
  britain = loadImage('content/britain.png');
  draculaIMG = loadImage('content/dracula.png');
}

function setup() {
  createCanvas(1000, 700);
  background(255);
  textFont(font, fontsize);
  noStroke();
}

function draw() {

  joined = join(draculaText, " ");
  begin = joined.indexOf("_3 May. Bistritz.");
  end = joined.lastIndexOf("THE END");

  story = joined.substring(begin, end);

  var dracula = story.search(/Dracula/gi);
  // console.log(dracula);

  var storystring = story.substr(1231, 11);
  // console.log(storystring);

  var letter = story.charAt(1941);
  // console.log(letter);

  var helsing = story.match(/Helsing/gi);
  // console.log(helsing.length);

  // Syntax 1
  fill(231, 32, 23, 5);
  text('Using the search() syntax, \"Dracula\" appears ' + dracula + ' times in the text.', 100, 100);
  //ellipse(300, 400, dracula / 10, dracula / 10);
  if (draculagrow < dracula) {
    ellipse(300, 400, draculagrow, draculagrow);
    draculagrow++;
  }

  /* for (i = 100; i < dracula + 100; i++) {
    noStroke();
    ellipse(i, 400, 4, 4);
  }
  text('0', 95, 425);
  text('1800 \>', 930, 425); */

  // Syntax 2
  if (mouseIsPressed) {
    image(draculaIMG, 700, 50);
    fill(0);
    text("The character at index position 1941 is " + letter + ".", 280, 150);
    text(letter, 768, 150);
    text(letter, 825, 150);
  // console.log(mouseX + ", " + mouseY)
  } else {
    fill(245, 123, 45);
    text('Click the mouse!', 100, 150);
  }
  // textSize(mouseX/4);
  // text(letter, 800, 150);

  // Syntax 3
  fill(24, 198, 13);
  text('Using the match() syntax, \"Helsing\" appears ' + helsing.length + ' times in the text.', 100, 250);
  if (helsinggrow < helsing.length) {
    ellipse(500, 500, helsinggrow, helsinggrow)
    helsinggrow++;
  }

  // Syntax 4
  fill(15, 79, 231);
  text('The string of characters starting at index position 1231 for 11 characters is \"' + storystring + '\".', 100, 300);
  for (i = 0; i < height / 2; i++) {
    text(storystring, 728, i + 338);
  }



  //console.log(mouseX + ", " + mouseY);


}