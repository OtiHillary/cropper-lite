import { CropCanvas } from "../components/Cropcanvas";

export default {
   title: 'CropCanvas',
   component: CropCanvas
}

const DefaultStory = () => {
   const spacing = 2; // Example spacing value
   return <CropCanvas style={{ marginRight: `${spacing}em` }} />;
 };
 
export const WithMargin = DefaultStory.bind({});


// export const Profile = {
//    args: {
//       label: 'Profile',
//       backgroundColor: 'teal',
//       style: { color: 'blue' }
//    }
// }

// export const Cover = {
//    args: {
//       label: 'Cover',
//       backgroundColor: 'teal',
//       style: { color: 'blue' }
//    }
// }

// export const Custom = {
//    args: {
//       label: 'custom',
//       aspectRatio: '1:1'
//    }
// }