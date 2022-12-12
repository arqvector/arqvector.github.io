
/////////////////
//// viz.js  ////
/////////////////
//// dá erro
  // var viz = new Viz();
  
  // viz.renderSVGElement('digraph { a -> b }')
  // .then(function(element) {
    // document.body.appendChild(element);
  // })
  // .catch(error => {
    //// Create a new Viz instance (@see Caveats page for more info)
    // viz = new Viz();

    //// Possibly display the error
    // console.error(error);
  // });



/////////////////
//// mermaid ////
/////////////////

//// https://mermaid-js.github.io/mermaid/#/usage

mermaid.initialize({startOnLoad:true});

//// Remove a 'tag' 'code' filha da class 'mermaid' para fazer render correcto
  let elements = document.querySelectorAll('.mermaid');

  for (let elem of elements) {
    //alert(elem.innerHTML); // "test", "passed"
    elem.innerHTML = elem.innerText;
  }


//// Adiciona a class 'mermaid' da tag 'code' para fazer o render correcto
/// Apenas para um
// document.getElementsByTagName("code")[1].classList.add('mermaid');

//// para todos
// var code = document.getElementsByTagName('code');

// for (var i = 0; i < code.length; i++) {
    // code[i].classList.contains.add('mermaid');
// }


//// Remove a class 'mermaid' da tag 'pre'
//// Apenas para um
// document.getElementsByTagName("pre")[1].classList.remove('mermaid');

//// para todos
// var pre = document.getElementsByTagName('pre');
	
// for (var i = 0; i < pre.length; i++) {
    // pre[i].classList.contains.remove('mermaid');
// }

//// remove do primeiro
// parent = document.querySelector('.mermaid');
// parent.innerHTML = parent.innerText;

//// outro exemplo
// if($('.mermaid').length >0 ){

  // $(document).ready(function(){
     // $code = $('code');
     // $code.replaceWith($code.html());
  // });
// };
