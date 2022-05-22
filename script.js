//play music
var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/Hyson_-_01_-_Olivia.mp3');
audio.play();

//audio timeline
var master = new TimelineMax({repeat: -1, repeatDelay: 20});

//if waiting --> invisible, labels from Affinity Designer

//Foreground
master.set('.Foreground', {visibility : "hidden"})

//Layers
master.set('.Blue-Layer', {visibility : "hidden"})
master.set('.Red-Layer', {visibility : "hidden"})
master.set('.Orange-Layer', {visibility : "hidden"})

//Sun
master.set('.Sun', {visibility : "hidden"})

//Text
master.set('.Title-1', {visibility : "hidden"})
master.set('.Title-2', {visibility : "hidden"})
master.set('.Artist', {visibility : "hidden"})
master.set('.logo', {visibility : "hidden"})

//master timeline scenes
master.add(scene1(), "scene1")
master.add(scene2(), "scene2")
master.add(scene3(), "scene3")

//scene1 -> Layers
function scene1 () {
  
  var subtimeline = new TimelineMax();
  
  master.set('.Foreground', {visibility : "visible"}, "+=1")
  
   subtimeline.fromTo(".Foreground", 2, {opacity: 0}, {opacity: 1}, "+=1")
   
   //label to fire at same time
   subtimeline.add('layers');
  
   master.set('.Blue-Layer', {visibility : "visible"})
  
  subtimeline.fromTo(".Blue-Layer", 1.5, {scaleX: 0}, { ease: Sine.easeOut, scaleX: 1}, "layers")
  
  master.set('.Red-Layer', {visibility : "visible"})
  
  subtimeline.fromTo(".Red-Layer", 1.5, {scaleX: 0, transformOrigin: "right"}, {ease: Sine.easeOut, scaleX: 1, transformOrigin: "right"}, "layers")
  
  master.set('.Orange-Layer', {visibility : "visible"})
  
  subtimeline.fromTo(".Orange-Layer", 1.5, {scaleY: 0, transformOrigin: "bottom"}, { ease: Sine.easeOut, scaleY: 1, transformOrigin: "bottom"}, "layers")
  
  return subtimeline;
}

//scene2 -> Sun
function scene2 () {
  var subtimeline = new TimelineMax();
  
  master.set('.Sun', {visibility : "visible"})
  
  subtimeline.fromTo(".Sun", 1.5, {opacity: 0, transformOrigin: "center"}, {opacity: 1, transformOrigin: "center"})
  
  return subtimeline;
}

//scene3 -> Text
function scene3 () {
  var subtimeline = new TimelineMax();
  master.set('.Title-1', {visibility : "visible"}, "-=1")
  
  subtimeline.fromTo(".Title-1", 1, {y: -100}, {y: 0}, "-=1")
  
  master.set('.Title-2', {visibility : "visible"})
  
  subtimeline.fromTo(".Title-2", 1, {opacity: 0, transformOrigin: "center"}, {opacity: 1, transformOrigin: "center"})
  
  master.set('.Artist', {visibility : "visible"})
  
  subtimeline.fromTo(".Artist", 1.75, {opacity: 0, y: 50}, {opacity: 1, y: 0, transformOrigin: "center"}, "-=0.5")
  
  master.set('.logo', {visibility : "visible"})
  
  subtimeline.fromTo(".logo", 1, {opacity: 0, transformOrigin: "center"}, {opacity: 1, transformOrigin: "center"})
  
  return subtimeline;
}