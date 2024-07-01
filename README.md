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

**Cropperlite** `<CropCanvas />` is the main component of the library. The Customizable Attributes of the `<CropCanvas />` component are:

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
            customAspectRatio = {{3, 1}}
            style = {{
               color: 'blue'
            }}
            canvasStyle = {{
               backgroundColor: 'teal'
            }}
         />
      </>
   )
}
```
