
//-------------------------------------
// SVG interactive poster with p5js
// see https://easy-output-3cf.notion.site/CCP-DAP-1-Week-3-ede56d8917264f4e8a12657dfdef4fe4
//
// by Evan Raskob <e.raskob@gold.ac.uk>
//
// select html and svg elements: https://p5js.org/reference/#/p5/select
// get and change css style: https://p5js.org/reference/#/p5.Element/style
//-------------------------------------
function setup() {
    createCanvas(2520/4, 1194/4);
    
    let cnv = createCanvas(windowWidth/4, windowHeight/4);

  // see also https://github.com/processing/p5.js/wiki/Positioning-your-canvas

  // move to sketch-holder element
  cnv.parent('sketch-holder'); // move drawing canvas into the element we specified
  
  background(255, 0, 200);

  window.addEventListener('mousemove', function(eventData){
    this.document.getElementById('mouse-coords').innerHTML = '<p>mouse x, y = ' + eventData.pageX 
      + ', ' + eventData.pageY + '</p>' +
      '<p>mouse x%, y% = ' + nf(eventData.pageX/windowWidth * 100, '',2) 
      + ', ' + nf(eventData.pageY/windowHeight * 100, '', 2) + '</p>';
  });

    
  let xiButton = this.document.getElementById('emptyxi');
   //set svg element emptyxi to xiButton (the dark square on the buliding)
  
  xiButton.addEventListener('click', function(eventData) {

    let schoolHighlight = select('#emptyxi'); // get svg shape with id 'emptyxi'
    
    // toggle between hidden and visible
    if (schoolHighlight.style('opacity') == '0') {
      schoolHighlight.style('opacity','1');
    } else{
      schoolHighlight.style('opacity','0');
    }
  });
    //use freezeFrame.js library to make the gif run on hover
    new Freezeframe('.freezeframe1', {
     trigger: 'hover',
     overlay: false
     });
    new Freezeframe('.freezeframe2', {
     trigger: 'hover',
     overlay: false
     });

  
}

/**
 * 
 */
function draw() {
  background(10);
  let schoolHighlight = select('#school-highlight'); 
  
  let dotVertical = 10;
  let dotHeight = 40;
}
