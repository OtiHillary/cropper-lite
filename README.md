# Cropper-lite

An image cropper for profile picture, cover photo, and so on written in Javascript...

## Community

Cropper-lite is open source software released under the forverNewbz commmunity
[discord](https://discord.gg/bVSmtqUP).
[Whatsapp](https://chat.whatsapp.com/DvAS2dXKrYAJ2y5525fMEI).

You are welcome to Check us out at:
[github](https://github.com/OtiHillary/cropper-lite).
[report bugs](https://github.com/OtiHillary/cropper-lite/issues)

## Installation

The easiest way to install cropper-lite is from [`npm`](https://www.npmjs.com/):

```sh
npm install cropper-lite
```

Alternately, you can download the source and build cropper-lite yourself:

```sh
git clone https://github.com/OtiHillary/cropper-lite.git
cd cropper-lite
npm install
```

## Usage

**Crop image** - This `<CropCanvas />` component is the main component of the **Cropperlite** library which uses canvas API to crop an image. The Customizable Attributes of the component are:

- `aspectRatio`
- `customAspectRatio`
- `style`
- `canvasStyle`

```javascript
import { Cropcanvas } from 'cropper-lite'

export default function component(){
   return(
      <>
         <CropCanvas 
            aspectRatio = 'profile' // profile | cover
            style = {{
               color: 'blue'
            }}
            canvasStyle = {{
               backgroundColor: 'teal',
               borderRadius: '5em'
            }}
         />
      </>
   )
}
```

**Retrieve the image**: The `<CropCanvas />` component temporarily stores the image data in the localSTorage of the client after cropping. Cropperlite provides a simple module `retriveImageData()` that accesses the URL of image. You can use this URL to display the cropped image in your app or permanently store it in database. 

```javascript
import { Cropcanvas, retriveImageData } from 'cropper-lite'

export default function component(){
   const [imageSrc, setImageSrc] = useState(null)

   function retrieveImage(){
      let imageDataUrl = retrieveImageData()
      setImageSrc(imageDataUrl)

      // code to permanently store in database...
   }

   return(
      <>
         <CropCanvas 
            aspectRatio = 'profile' // profile | cover
            style = {{
               color: 'blue'
            }}
            canvasStyle = {{
               backgroundColor: 'teal'
            }}
         />

         <img src = { imageSrc }  alt = '' /> //temporary image display
         <button onClick={ retrieveImage }>Display image</button>

      </>
   )
}
```