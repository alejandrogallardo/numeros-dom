let uno: number[][] = [
    [1, 3, 5, 7],
    [9, 11, 13, 15],
    [17, 19, 21, 23],
    [25, 27, 29, 31]
]


let dos: number[][] = [
    [2, 3, 6, 7],
    [10, 11, 14, 15],
    [18, 19, 22, 23],
    [26, 27, 30, 31]
]

let tres: number[][] = [
    [4, 5, 6, 7],
    [12, 13, 14, 15],
    [20, 21, 22, 23],
    [28, 29, 30, 31]
]

let cuatro: number[][] = [
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [24, 25, 26, 27],
    [28, 29, 30, 31]
]

let cinco: number[][] = [
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [28, 29, 30, 31]
]

  
  uno.forEach( (ciclo, i) => {
    let elemento = document.getElementById("uno");
    let row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row')
  
    ciclo.forEach((el, j) => {
        let nItem = document.querySelector('.uno')
        let ele = nItem.children[i]
        let item = document.createElement("div");
        item.textContent = el.toString()
        ele.insertBefore(item, ele.children[el]).classList.add('item')    
      })
  });
  
  dos.forEach( (ciclo, i) => {
    let elemento = document.getElementById("dos");
    let row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row')
  
    ciclo.forEach((el, j) => {
        let nItem = document.querySelector('.dos')
        let ele = nItem.children[i]
        let item = document.createElement("div");
        item.textContent = el.toString()
        ele.insertBefore(item, ele.children[el]).classList.add('item')    
      })
  });
  
  tres.forEach( (ciclo, i) => {
    let elemento = document.getElementById("tres");
    let row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row')
  
    ciclo.forEach((el, j) => {
        let nItem = document.querySelector('.tres')
        let ele = nItem.children[i]
        let item = document.createElement("div");
        item.textContent = el.toString()
        ele.insertBefore(item, ele.children[el]).classList.add('item')    
      })
  });
  
  cuatro.forEach( (ciclo, i) => {
    let elemento = document.getElementById("cuatro");
    let row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row')
  
    ciclo.forEach((el, j) => {
        let nItem = document.querySelector('.cuatro')
        let ele = nItem.children[i]
        let item = document.createElement("div");
        item.textContent = el.toString()
        ele.insertBefore(item, ele.children[el]).classList.add('item')    
      })
  });
  
  cinco.forEach( (ciclo, i) => {
    let elemento = document.getElementById("cinco");
    let row = document.createElement("div");
    elemento.insertBefore(row, elemento.children[i]).classList.add('row')
  
    ciclo.forEach((el, j) => {
        let nItem = document.querySelector('.cinco')
        let ele = nItem.children[i]
        let item = document.createElement("div");
        item.textContent = el.toString()
        ele.insertBefore(item, ele.children[el]).classList.add('item')    
      })
  });

  //================================
  // Resultado
  //================================
  
  let xValores: number[] = []
  
  let xUno = document.getElementById('uno')

  xUno.addEventListener('click', () => {
    document.querySelector('.uno').classList.add('foco')
    xValores.push(1)
  })

  let xDos = document.getElementById('dos')

  xDos.addEventListener('click', () => {
    document.querySelector('.dos').classList.add('foco')
    xValores.push(2)
  })

  let xTres = document.getElementById('tres')

  xTres.addEventListener('click', () => {
    document.querySelector('.tres').classList.add('foco')
    xValores.push(4)
  })

  let xCuatro = document.getElementById('cuatro')

  xCuatro.addEventListener('click', () => {
    document.querySelector('.cuatro').classList.add('foco')
    xValores.push(8)
  })

  let xCinco = document.getElementById('cinco')

  xCinco.addEventListener('click', () => {
    document.querySelector('.cinco').classList.add('foco')
    xValores.push(16)
  })


  function sumar() {

    let res: number = 0
    xValores.forEach( num => {
      res+=num
    })
    getRespuesta(res)
  }

  let listo = document.getElementById('listo')
  listo.addEventListener( 'click', () => sumar() )

  function getRespuesta(respuesta){

    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let texto = document.querySelector('.textoModal');
    texto.textContent = respuesta
    setTimeout(function(){
        modal.style.display = "none";
        document.querySelector('.uno').classList.remove('foco')
        document.querySelector('.dos').classList.remove('foco')
        document.querySelector('.tres').classList.remove('foco')
        document.querySelector('.cuatro').classList.remove('foco')
        document.querySelector('.cinco').classList.remove('foco')
        xValores = []
     }, 4000);
      
  }
  
  


  