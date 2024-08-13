'use strict';
import {console_color,console_red,console_orange,console_yellow,console_green,
	console_blue,console_purple,console_magenta,console_cyan} from './logColor.js';

// --------------------------------------------------------------------------------
//*                        --- ASCII ART ENCAPSULATION ---
// --------------------------------------------------------------------------------

  // const canvas = document.querySelector('canvas');
  // const ctx = canvas.getContext('2d', { willReadFrequently: true});
  // const image = new Image();
  // image.src = 'img/1.jpg';
  
  // const inputSlider = document.getElementById('resolution');
  // const inputLabel = document.getElementById('resolutionLabel');
  //   inputSlider.addEventListener('change', handleSlider);

  // class Cell {
  //   constructor(x, y, symbol, color) {
  //     this.x = x;
  //     this.y = y;
  //     this.symbol = symbol;
  //     this.color = color;
  //   }
  //   draw(ctx) {
  //     ctx.fillStyle = this.color;
  //     // ctx.font = `${15}px Orbitron-Regular`
  //     ctx.font = `${inputSlider.value * 1.5}px Orbitron-Regular`
  //     ctx.fillText(this.symbol, this.x, this.y);
  //   }
  // }

  // class AsciiEffect {
  //   #imageCellArray = [];
  //   #pixels = [];
  //   #ctx;
  //   #width;
  //   #height;
  //   constructor(ctx, width, height) {
  //     this.#ctx = ctx;
  //     this.#width = width;
  //     this.#height = height;
  //     this.#ctx.drawImage(image, 0, 0, this.#width, this.#height)
  //     this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height).data; //*data
  //     // console.log(this.#pixels); //* log
  //   }
  //   #convertToSymbol(g) {
  //     if(g > 250) return '@';
  //     else if(g > 240) return '*';
  //     else if(g > 220) return '+';
  //     else if(g > 200) return '#';
  //     else if(g > 180) return '&';
  //     else if(g > 160) return '%';
  //     else if(g > 140) return '_';
  //     else if(g > 120) return ':';
  //     else if(g > 100) return '$';
  //     else if(g > 80) return '/';
  //     else if(g > 60) return '-';
  //     else if(g > 40) return 'X';
  //     else if(g > 20) return 'W';
  //     else return;
  //   }
  //   #scanImage(cellSize) {
  //     this.#imageCellArray = [];
  //     for (let y = 0; y < this.#height; y += cellSize) {
  //       for (let x= 0; x < this.#width; x += cellSize) {
  //         const index = (y * this.#width + x) * 4;
  //         const alpha = this.#pixels[index+3];
  //         if(alpha > 0) {
  //           const r = this.#pixels[index];
  //           const g = this.#pixels[index+1];
  //           const b = this.#pixels[index+2];
  //           const total = r + g + b;
  //           const averageValue = total/3;
  //           const color = `rgb(${r},${g},${b})`;
  //           const symbol = this.#convertToSymbol(averageValue);
  //           if(total > 200) {
  //             this.#imageCellArray.push(new Cell(x, y, symbol, color));
  //           }
  //         }
  //       }
  //     }
  //     // console.log(this.#imageCellArray);
  //   }
  //   #drawAscii() {
  //     this.#ctx.clearRect(0, 0, this.#width, this.#height);
  //     for (let i = 0; i < this.#imageCellArray.length; i++) {
  //       this.#imageCellArray[i].draw(this.#ctx);
  //     }
  //   }
  //   draw(cellSize) {
  //     this.#scanImage(cellSize);
  //     this.#drawAscii()
  //   }
  // }

  // function handleSlider() {
  //   if(inputSlider.value === '1') {
  //     inputLabel.innerHTML = 'Original image';
  //     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      
  //   } else {
  //     inputLabel.innerHTML = `resolution ${inputSlider.value}px`;
  //     effect.draw(parseInt(inputSlider.value * 1.5)); //*** */ cellSize
  //   }
  // }

  // let effect;
  // const scale = .95;
  // image.onload = function initialize() {
  //   // canvas.width = innerWidth; // *canvasSize
  //   // canvas.height = innerHeight; // *canvasSize
  //   canvas.width = image.width * scale;
  //   canvas.height = image.height * scale;
  //   effect = new AsciiEffect(ctx, canvas.width, canvas.height);
  //   handleSlider()
  // }


// --------------------------------------------------------------------------------
//*                             --- ASCII ART ---
// --------------------------------------------------------------------------------

  const image = new Image();
  image.src = 'img/1.jpg';
  // image.width = 1500;  image.height = 950; //* 
  
  image.addEventListener('load', () => {
    const container = document.querySelector('.container');
      container.style.display = 'block'; //*
    const inputSlider = document.getElementById('resolution');
    const inputLabel = document.getElementById('resolutionLabel');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true});
    const fontFamily = 'Orbitron-Regular';
    const scale = .9;
    canvas.width = image.width * scale;
    canvas.height = image.height * scale;
    // canvas.width = innerWidth; //* fullSize
    // canvas.height = innerHeight; //* fullSize

    class Cell {
      constructor(x, y, symbol, color) {
        this.x = x;
        this.y = y;
        this.symbol = symbol;
        this.color = color;
      }
      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.font = `${inputSlider.value * 1.5}px ${fontFamily}`;
        ctx.fillText(this.symbol, this.x, this.y);
      }
    }
    
    class AsciiEffect {
      constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.ctx.drawImage(image, 0, 0, this.width, this.height);
        this.pixels = this.ctx.getImageData(0, 0, this.width, this.height).data;
      }
      convertToSymbol(av) {
        if(av > 250) return '@';
        else if(av > 240) return '*';
        else if(av > 220) return '+';
        else if(av > 200) return '#';
        else if(av > 180) return '&';
        else if(av > 160) return '%';
        else if(av > 140) return '_';
        else if(av > 120) return ':';
        else if(av > 100) return '$';
        else if(av > 80) return '/';
        else if(av > 60) return '-';
        else if(av > 40) return 'X';
        else if(av > 20) return 'W';
        else if(av > 0) return 'Z';
        else return;
      }
      scanImage(cellSize) {
        this.imageCellArray = [];
        for (let y = 0; y < this.height; y += cellSize) {
          for (let x = 0; x < this.width; x += cellSize) {
            const index = (y * this.width + x) * 4;
            const alpha = this.pixels[index+3];
            if(alpha > 0) {
              const r = this.pixels[index];
              const g = this.pixels[index+1];
              const b = this.pixels[index+2];
              const total = r + g + b;
              const averageValue = total/3;
              const color = `rgb(${r},${g},${b})`;
              const symbol = this.convertToSymbol(averageValue);
              if(total > 200) {
                this.imageCellArray.push(new Cell(x, y, symbol, color));
              }
            }
          }
        }
      }
      update(cellSize) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.scanImage(cellSize);
        this.imageCellArray.forEach(cell => {
          cell.draw(this.ctx);
        });
      }
    }

    let effect = new AsciiEffect(ctx, canvas.width, canvas.height);
    
    inputSlider.addEventListener('change', handleSlider);
    function handleSlider() {
      if(inputSlider.value === '1') {
        inputLabel.innerHTML = 'Original image';
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      } else {
        inputLabel.innerHTML = `resolution &ensp;${inputSlider.value}px`;
        effect.update(parseInt(inputSlider.value * 1.5)); //* variable cellSize *
      }
    }  handleSlider();

    // let count = 0;
    // setInterval(() => {
    //   count++;
    //   inputSlider.value = count;
    //   handleSlider();
    //   if(count > 19) {count = 0}
    // }, 100);

    //* END OF LOAD EVENT ---
  });




// --------------------------------------------------------------------------------
//*                           --- ASCII ART RAF ---
// --------------------------------------------------------------------------------


  // const image = new Image();
  //   image.src = 'img/2.jpg';

  // image.addEventListener('load', () => {
  //   const inputSlider = document.getElementById('resolution');
  //   const inputLabel = document.getElementById('resolutionLabel');
  //   const canvas = document.querySelector('canvas');
  //   const ctx = canvas.getContext('2d', { willReadFrequently: true});
  //   const scale = 1;
  //   // const cellSize = 15; //^ If fixed amount
  //   canvas.width = image.width * scale;
  //   canvas.height = image.height * scale;
  //   // canvas.width = innerWidth; // *canvasSize
  //   // canvas.height = innerHeight; // *canvasSize

  //   class Cell {
  //     constructor(x, y, symbol, color) {
  //       this.x = x;
  //       this.y = y;
  //       this.symbol = symbol;
  //       this.color = color;
  //     }
  //     draw(ctx) {
  //       ctx.fillStyle = this.color;
  //       // ctx.font = `${cellSize}px Orbitron-Regular`;  //^ If fixed amount
  //       ctx.font = `${inputSlider.value * 1.5}px Orbitron-Regular`; //^ If variable amount *
  //       ctx.fillText(this.symbol, this.x, this.y);
  //     }
  //   }
    
  //   class AsciiEffect {
  //     constructor(ctx, width, height) {
  //       this.ctx = ctx;
  //       this.width = width;
  //       this.height = height;
  //       this.ctx.drawImage(image, 0, 0, this.width, this.height);
  //       this.pixels = this.ctx.getImageData(0, 0, this.width, this.height).data; //*data
  //       // this.scanImage(cellSize); //^ If fixed amount
  //     }
  //     convertToSymbol(av) {
  //       if(av > 250) return '@';
  //       else if(av > 240) return '*';
  //       else if(av > 220) return '+';
  //       else if(av > 200) return '#';
  //       else if(av > 180) return '&';
  //       else if(av > 160) return '%';
  //       else if(av > 140) return '_';
  //       else if(av > 120) return ':';
  //       else if(av > 100) return '$';
  //       else if(av > 80) return '/';
  //       else if(av > 60) return '-';
  //       else if(av > 40) return 'X';
  //       else if(av > 20) return 'W';
  //       else return;
  //     }
  //     scanImage(cellSize) {
  //       this.imageCellArray = [];
  //       for (let y = 0; y < this.height; y += cellSize) {
  //         for (let x= 0; x < this.width; x += cellSize) {
  //           const index = (y * this.width + x) * 4;
  //           const alpha = this.pixels[index+3];
  //           if(alpha > 0) {
  //             const r = this.pixels[index];
  //             const g = this.pixels[index+1];
  //             const b = this.pixels[index+2];
  //             const total = r + g + b;
  //             const averageValue = total/3;
  //             const color = `rgb(${r},${g},${b})`;
  //             const symbol = this.convertToSymbol(averageValue);
  //             if(total > 200) {
  //               this.imageCellArray.push(new Cell(x, y, symbol, color));
  //             }
  //           }
  //         }
  //       }
  //     }
  //     update(cellSize) {
  //       this.scanImage(cellSize); //^ If variable amount *
  //       this.imageCellArray.forEach(cell => {
  //         cell.draw(this.ctx);
  //       });
  //       handleSlider();
  //     }
  //   }

  //   let effect = new AsciiEffect(ctx, canvas.width, canvas.height);
    
  //   inputSlider.addEventListener('change', handleSlider);
  //   function handleSlider() {
  //     if(inputSlider.value === '1') {
  //       inputLabel.innerHTML = 'Original image';
  //       ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  //     } else {
  //       inputLabel.innerHTML = `resolution ${inputSlider.value}px`;
  //     }
  //   }  

  //   function animate() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     effect.update(parseInt(inputSlider.value * 1.5)); //*** */ cellSize
  //     requestAnimationFrame(animate);
  //   } animate();

  //   //* END OF LOAD EVENT ---
  // });



// --------------------------------------------------------------------------------


















































// -------------------------------------------------------------------------------------------



























// -------------------------------------------------------------------------------------------










