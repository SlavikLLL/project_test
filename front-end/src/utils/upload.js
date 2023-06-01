import axios from "axios";
const upload = async  (file) =>{
    const data = new FormData();
    data.append('file',file);
    data.append('uploadPreset','fiver');

    try {
      const res = await axios.post('https//api.cloudinary.com/v1_1/drr4ilxba/image/upload',data)
      const {url} = res.data;
      return url
    } catch (error) {
      console.log(error);
    }

  }
  export default upload