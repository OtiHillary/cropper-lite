import { CropCanvas } from "../components/Cropcanvas";

export default {
   title: 'CropCanvas',
   component: CropCanvas
}

export const Profile = {
   args: {
      label: 'Profile',
      backgroundColor: 'teal',
      aspectRatio: 'profile'
   }
}

export const Cover = {
   args: {
      label: 'Cover',
      backgroundColor: 'teal',
      aspectRatio: 'cover'
   }
}

export const Custom = {
   args: {
      label: 'custom',
   }
}