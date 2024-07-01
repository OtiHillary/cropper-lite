# Cropper-lite

An image cropper for profile picture, cover photo, and so on written in Javascript...

## Community

Cropper-lite is open source software released under the forverNewbz commmunity
[discord](https://github.com/otonyeHillary/cropper-lite/blob/master/cropper-lite/LICENSE).

You are welcome to Check us out at:
[MIT license](https://github.com/otonyeHillary/cropper-lite/blob/master/cropper-lite/LICENSE).
[report bugs](https://github.com/otonyeHillary/cropper-lite/issues) or create pull
requests on [github](https://github.com/otonyeHillary/cropper-lite).

## Installation

The easiest way to install cropper-lite is from [`npm`](https://www.npmjs.com/):

```sh
npm install cropper-lite
```

Alternately, you can download the source and build cropper-lite yourself:

```sh
git clone https://github.com/otonyeHillary/cropper-lite.git
cd cropper-lite
npm install
```

## Usage

**CropCanvas**`(input, options)` is the main component of the library. The

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
               backgroundColor: 'teal'
            }}
         />
      </>
   )
}
```
