var draculaText;
var joined;
var story;
var parsedText;

var begin, end;

var font;
var fontsize = 20;

var britain;

function preload() {
  draculaText = loadStrings('content/dracula.txt');
  font = loadFont('content/font.ttf');
  britain = loadImage('content/britain.png');
}

function setup() {
  createCanvas(1000, 500);
  background(255);
  textFont(font, fontsize);
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
  fill(231, 32, 23);
  text('Using the search() syntax, \"Dracula\" appears ' + dracula + ' times in the text.', 100, 100);
  ellipse(300, 400, dracula/10, dracula/10);
  
  /* for (i = 100; i < dracula + 100; i++) {
    noStroke();
    ellipse(i, 400, 4, 4);
  }
  text('0', 95, 425);
  text('1800 \>', 930, 425); */

  // Syntax 2
    if (mouseIsPressed) {
      fill(245, 123, 45);
      text('The character at index position 1941 is \"' + letter + '\".', 260, 150);
    } else {
      fill(245, 123, 45);
      text('Click the mouse!', 100, 150);
    }
    // textSize(mouseX/4);
    // text(letter, 800, 150);

    // Syntax 3
  fill(24, 198, 13);
  text('Using the match() syntax, \"Helsing\" appears ' + helsing.length + ' times in the text.', 100, 200);
  for (i = 0; i < helsing.length + 100; i++) {
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(random(i) + 100, 300, 4, 4);
  }
  fill(24, 198, 13);
  text('0', 95, 325);
  text('322', 500, 325);

  // Syntax 4
  fill(15, 79, 231);
  text('The string of characters starting at index position 1231 for 11 characters is \"' + storystring + '\".', 100, 250);
  image(britain, 750, 280);
}