import React, { useRef, useState } from 'react';

export const retrieveImageData = () => {
   const imageData = localStorage.getItem('croppedImage')
   console.log(imageData);
   return imageData;
}

export const CropCanvas = ({ style, canvasStyle, aspectRatio, customAspectRatio }) => {
   const [range, setRange] = useState(0)
   const [imgSrc, setImgSrc] = useState(null)
   const canvas = useRef(null)
   const canvas1 = useRef(null)
   const canvas2 = useRef(null)
   const canvas3 = useRef(null)
   const [display,setDisplay]= useState('none')
   const [init, setInit] = useState({})
   const oldValue = useRef(0)
   const img = useRef(null)
   const isDragging = useRef(false)
   const [posX, setPosX] = useState(null)
   const [posY, setPosY] = useState(null)
   document.addEventListener('mousemove', drag)
   const holeX = useRef(null)
   const holeY = useRef(null)
   const holeRadius = useRef(null)
   const aspectRatioDimensions = useRef(null)


   function holdDown(event) {
      isDragging.current = true

      setPosX(event.clientX - canvas1.current.offsetLeft)
      setPosY(event.clientY - canvas1.current.offsetTop);
   }
   
   function release() {
      isDragging.current = false
   
      let condition1 = canvas1.current.offsetLeft >= 0 
      let condition2 = canvas1.current.offsetLeft <= -(canvas1.current.width - canvas.current.width) 
      let condition3 = canvas1.current.offsetTop >= 0 
      let condition4 = canvas1.current.offsetTop <= -(canvas1.current.height - canvas.current.height)
      let left = canvas1.current.offsetLeft
      let top = canvas1.current.offsetTop
      let right = canvas1.current.offsetLeft + canvas1.current.width - canvas.current.width
      let bottom = canvas1.current.offsetTop + canvas1.current.height - canvas.current.height
   
      // ANIMATE REVERT
      // left
      if (condition1) {
         for (let i = left; i > 0 ; i--) {
            canvas1.current.style.left = canvas1.current.offsetLeft - 1 + 'px' 
         }
      }
      // right
      if (condition2) {
         for (let i = 0; i < -right ; i++) {
            canvas1.current.style.left = canvas1.current.offsetLeft + 1 + 'px' 
         }
      }
      // top
      if (condition3) {
         for (let i = top; i > 0 ; i--) {
            canvas1.current.style.top = canvas1.current.offsetTop - 1  + 'px'
         }
      }
      // bottom
      if (condition4) {
         for (let i = 0; i < -bottom ; i++) {
            canvas1.current.style.top = canvas1.current.offsetTop + 1 + 'px'
         }
      }
   }
   
   function drag(event) {
      let bound;

      if (isDragging.current) {
         bound = canvas.current.getBoundingClientRect()
         let isOutOfBounds = 
            event.clientX <  Math.floor(bound.x) || 
            event.clientX > Math.floor(bound.x) + canvas.current.width || 
            event.clientY < Math.floor(bound.y) || 
            event.clientY > Math.floor(bound.y) + canvas.current.height;

         (canvas1.current.offsetLeft + range/20 * canvas1.current.width + (canvas1.current.width - canvas.current.width));
   
         const deltaX = event.clientX - posX;
         const deltaY = event.clientY - posY;
         
         canvas1.current.style.left =  deltaX + 'px'         
         canvas1.current.style.top =   deltaY + 'px'       

         if (isOutOfBounds) {
         release()
      }
      }
   }
   
   function finishCropCanvas() {   
      // Getting image data from canvas1
      const imageData =  canvas1
      .current
      .getContext('2d')
      .getImageData( 
         aspectRatioDimensions.current.x, 
         aspectRatioDimensions.current.y, 
         aspectRatioDimensions.current.w, 
         aspectRatioDimensions.current.h 
      );
   
      // Update canvas1 with modified image data
      canvas3.current.height = 2 * holeRadius.current
      canvas3.current.width = 2 * holeRadius.current
      canvas3.current.getContext('2d').putImageData(imageData, 0, 0);

      const imageDataURL = canvas3.current.toDataURL('image/png'); // Specifying image format (e.g., 'image/jpeg')
      localStorage.setItem('croppedImage', imageDataURL)
   }

   function fitImageInCanvas(width, height){
      console.log( height, width);
      let w, h
      if (width <= height){
         h = canvas.current.height * (height / width)
         w = canvas.current.width
      } else {
         w = canvas.current.width * (width / height) 
         h = canvas.current.height
      }
      return {w, h}
   }

   async function ZoomImage(event){
      setRange(event.target.value);
      const context1 = canvas1.current.getContext('2d')
      let newValue = event.target.value
      console.log(img.current);
      let top = canvas1.current.offsetTop
      let left = canvas1.current.offsetLeft
   
      canvas1.current.height = init.h * (1 + (newValue/20))
      canvas1.current.width = init.w * (1 + (newValue/20))
   
      await context1.drawImage(img.current, 0, 0, canvas1.current.width, canvas1.current.height);
      canvas1.current.style.left = (newValue < oldValue)? left * (1 - (newValue/20)) + 'px' : left * (1 + (newValue/20)) + 'px'
      canvas1.current.style.top = (newValue < oldValue)? top * (1 - (newValue/20)) + 'px'  : top * (1 + (newValue/20)) + 'px'

      oldValue.current = newValue
   }

   async function draw(imgWidth, imgHeight, img) {
      const context = canvas.current.getContext('2d')
      const context1 = canvas1.current.getContext('2d')
      const context2 = canvas2.current.getContext('2d')
      let dimensions = fitImageInCanvas(imgWidth, imgHeight)
      let coverWidth = 0.9 * canvas.current.width
      let coverHeight = coverWidth / 3
      holeRadius.current = 0.4 * canvas.current.height
      holeX.current = canvas.current.width / 2;
      holeY.current = canvas.current.height / 2;

      setInit(dimensions)

      canvas1.current.width = dimensions.w
      canvas1.current.height = dimensions.h
      
      context.fillStyle = 'rgba(0, 0, 0)'; 
      context.fillRect(0, 0, 500, 500);

      context1.drawImage(img, 0, 0, dimensions.w, dimensions.h);

      context2.fillStyle = 'rgba(0, 0, 0, 0.7)'; // Adjust opacity (0 - 2)
      context2.fillRect(0, 0, 500, 500);

      // Clearing a circular area to create the hole
      context2.beginPath();
      if (aspectRatio == 'profile') {
         context2.arc(holeX.current, holeY.current, holeRadius.current, 0, 2 * Math.PI);         
         // Outline around the hole (for better visibility)
         context2.strokeStyle = 'rgba(255, 255, 255)';
         context2.lineWidth = 8;
         context2.beginPath();
         context2.arc(holeX.current, holeY.current, holeRadius.current, 0, 2 * Math.PI);
         context2.stroke();

         // Relocating the crop circle
         holeX.current = (0.1 * canvas.current.width) - canvas1.current.offsetLeft
         holeY.current = (0.1 * canvas.current.height) - canvas1.current.offsetTop
         
         aspectRatioDimensions.current = { x: holeX.current, y: holeY.current, w: canvas.current.width, h: canvas.current.height }

      } else if (aspectRatio == 'cover'){
         context2.rect((0.05 * canvas.current.width), (canvas.current.height - coverHeight)/2, coverWidth , coverHeight);
         // Outline around the hole (for better visibility)
         context2.strokeStyle = 'rgba(255, 255, 255)';
         context2.lineWidth = 8;
         context2.beginPath();
         context2.rect((0.05 * canvas.current.width), (canvas.current.height - coverHeight)/2, coverWidth , coverHeight);
         context2.stroke();

         aspectRatioDimensions.current = { 
            x: (0.05 * canvas.current.width), 
            y: (canvas.current.height - coverHeight)/2, 
            w: coverWidth, 
            h: coverHeight 
         }

      }
      context2.clip();
      context2.clearRect(0, 0, canvas.current.width, canvas.current.height);


   }

   async function putImageInCanvas(event){
      setRange(0)
      setDisplay('flex')
      const img = new Image()
      img.src = URL.createObjectURL(event.target.files[0])
      setImgSrc(img.src)

      img.onload = async function(){
         await draw(this.width, this.height, img)
      }
   }

   function unmountCanvas(){
      console.log('blown')
      setDisplay('none') 
   }

   // Style
   let container = { display: 'flex', flexDirection: 'column' }
   let button = { margin: 'auto', borderRadius: '8px', backgroundColor: 'teal', color: 'white' , padding: '.8rem 2rem', ...style }
   let page = { display: display, position: 'absolute', height: '100vh', width: '100vw', background: '#00000082', top: 0, left: 0, justifyContent: 'center', flexDirection: 'column', ...canvasStyle }
   let cropper = { zIndex: 20000, display: display, flexDirection: 'column', margin: 'auto',  top: 0, left: 0, height: '100vh', width: '100vw' }
   let rangeStyle = { width: '80%', display: 'flex', margin: '0 auto 1.5rem' , flexDirection: 'column' }

   return (
      <div style={ container }>
         <label htmlFor="file" style={ button }>
            <input type="file" name="file" id='file' style={{ display: 'none' }} onChange={putImageInCanvas}/>
            { 'Select File'  }         
         </label>

         <img ref={img} src={imgSrc} alt="hidden image" style={{ display: 'none' }} />

         <div style={ page }>
            <div className='cropper' style={ cropper }>
               <div style={{ position: 'absolute', right: 25, top: 10, color: 'white', fontSize: '4rem' }} onClick={ unmountCanvas }>
                  &times;
               </div>
               <div className="image-container" style={{ position: 'relative', margin: 'auto', width: 500, height: 500, display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
                  <canvas ref={canvas} width={500} height={500}> 
                  </canvas>

                  <canvas  
                     ref={canvas1} 
                     width={500} 
                     height={500} 
                     style={{ position: 'absolute', zIndex: 1, top: 0, left: 0 }}
                  >
                  </canvas> 
                  
                  <canvas 
                     ref={canvas2} 
                     width={500} 
                     height={500} 
                     style={{ position: 'absolute', zIndex: 2, top: 0, left: 0 }}
                     onMouseDown={holdDown}
                     onMouseUp={release}
                     >
                  </canvas>    
               </div>

               <div style={ rangeStyle }>
                  <input style={{ width: '70%', margin: '.5rem auto' }} type="range" value={ range } min={0} max="20" onChange={ ZoomImage } />
                  <p style={{ margin: 'auto' }} id="valueDisplay">Zoom: { range }%</p>         
               </div>

               <div style={{ display: 'flex', justifyContent: 'center'}}>
                  <button id="crop" style={ button } onClick={ finishCropCanvas }>done</button>
               </div>
            </div>
         </div>
                  
         <canvas 
            ref={canvas3} 
            style={{ display: 'none'}}
            >
         </canvas> 
      </div>
   )
}