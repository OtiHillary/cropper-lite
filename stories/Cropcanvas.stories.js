import { CropCanvas } from "./Cropcanvas";

export default {
   title: 'CropCanvas',
   component: CropCanvas
}

export const Profile = {
   args: {
      label: 'Profile',
      backgroundColor: 'teal'
   }
}

export const Cover = {
   args: {
      label: 'Cover',
      backgroundColor: 'teal'
   }
}

export const Custom = {
   args: {
      label: 'custom',
      aspectRatio: '1:1'
   }
}