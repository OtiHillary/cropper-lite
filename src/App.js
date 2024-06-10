import React, { useRef, useState } from "react"
// import "./App.css";

//HELPER FUNCTIONS
function fit(w, h, c){
   if (w <= h){
      h = c.height * (h/w)
      w = c.width
   } else {
      w = c.width * (w/h) 
      h = c.height
   }
   return {w,h}
}

// async function zoom(){
//    newValue = this.value;
//    let top = canvas1.offsetTop
//    let left = canvas1.offsetLeft

//    rangeValue.innerHTML = 'Zoom: ' + Math.round(newValue/20 * 100) + '%'
//    canvas1.height = initialDimension.h * (1 + (newValue/20))
//    canvas1.width = initialDimension.w * (1 + (newValue/20))


//    await ctx1.drawImage(im, 0, 0, canvas1.width, canvas1.height);
//    canvas1.style.left = (newValue < oldValue)? left * (1 - (newValue/20)) + 'px' : left * (1 + (newValue/20)) + 'px'
//    canvas1.style.top = (newValue < oldValue)? top * (1 - (newValue/20)) + 'px'  : top * (1 + (newValue/20)) + 'px'
//    oldValue = newValue
   
// }

async function drawImage(height, width, ctx1, canvas, im){
   let dimensions = fit(width, height, canvas)
   await setImage()
   await ctx1.drawImage(im, 0, 0, dimensions.w, dimensions.h);
}


export default function App(){
   const cnvs = useRef(null)
   const cnvs1 = useRef(null)
   const cnvs2 = useRef(null)
   const [ zoomValue, setZoomValue ] = useState(0)
   const [selectedFile, setSelectedFile] = useState(null)
   console.log('started')
   // const [ image, setImageValue ] = useState(null)
   // const ctx = cnvs.getContext('2d');
   // const ctx1 = cnvs1.getContext('2d');
   // const ctx2 = cnvs2.getContext('2d');
   // const ctx3 = cnvs3.getContext('2d');

   // let newValue = 0;
   // let oldValue = 0;
   // let initialDimension = {};
   // let img;
   // let im;
   // let isDraggging = false /** @boolean */;
   // let thresholdX = 0;
   // let thresholdY = 0;
   // let posX;
   // let posY;
   // let newImage = document.createElement("img"); // temp storage for image

   // let prevX = 0;
   // let prevY = 0;

   // let holeX = cnvs.current.clientWidth / 2;
   // let holeY = cnvs.current.clientHeight / 2;
   // holeRadius = 0.4 * cnvs.current.clientHeight

   function handleZoom(event){
      setZoomValue(event.target.value);
   }

   // function finishCrop(){

   // }

   function putInCropCanvas(event){
      // cnvs1.current.style.top = 0;
      // cnvs1.current.style.left = 0;   
      const imgFile = event.target.files[0]
      console.log(imgFile.width, imgFile.height)
   
      // initialDimension = fit(imgFile.width, imgFile.height, cnvs)
      // await drawImage(imgFile.height, imgFile.width, ctx1, cnvs, imgFile)
      
   }

   return (
      <>
         <h1>Cropper Lite</h1>
         <input type="file" onChange={(event) => setSelectedFile(event.target.files[0])} />
         <input type="file" accept="image/*" placeholder="select image" onChange={putInCropCanvas} onClick={ () => console.log('clicking') }/>
         <div id="cnv"></div>  
         <img src="" alt="imaji turanin" style={{display: 'none'}}/>

         <div className="cropper">
            <div className="image-container">
               <canvas 
                  ref={cnvs}
                  width="500" 
                  height="500"
               ></canvas>

               <canvas 
                  ref = {cnvs1}
                  width={500} 
                  height={500} 
                  style={
                     {
                        position: 'absolute', 
                        zIndex: 1, 
                        top: 0, 
                        left: 0
                     }
                  }
               ></canvas> 
               
               <canvas 
                  ref={cnvs2}
                  width="500" 
                  height="500" 
                  style={
                     {
                        position: 'absolute', 
                        zIndex: 2, 
                        top: '0%'
                     }
                  }
               ></canvas>    
            </div>

            <div style={{ width: '80%', display: 'flex', margin: '0 auto 1.5rem' , flexDirection: 'column'}}>
               <input style={{width: '70%', margin: '.5rem auto'}} type="range"id="myRange" value={zoomValue} min={0} max={20} onChange={handleZoom}/>
               <p style={{margin: "auto"}}>Zoom: {zoomValue}%</p>         
            </div>


            <div style={{display: 'flex', justifyContent: 'center'}}>
               <button>done</button>
            </div>
         </div>

         <div>
            result:
            <canvas id="canvas3" width="500" height="500" ></canvas>
         </div>     

      </>
   )
}