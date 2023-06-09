import React,{useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';

const FristScreen = () => {

    const [FirstScreenData, setFirstScreenData]=useState()
    const[photo, setPhoto]=useState("")


  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3,'must be at least 3 chars1').required('Name is required'),
    mobile: Yup.string().min(10,'must be 10 chars1').max(10,'must be 10 chars1').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      mobile:'',
      email: '',
     photo:'',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values,"values");
      localStorage.setItem('FirstScreen', JSON.stringify(values));
     alert("First Screen data is saved")
      
      // Perform signup logic here
    },
  });

  const handleLocalStorage = () => {
    // localStorage.setItem('StudentData', JSON.stringify({ ...formData }));

  };
//   useEffect(()=>{
//     let studentData = JSON.parse(localStorage.getItem("StudentData"))
//     console.log(studentData,"studentData")
//     formik.setFieldValue("name", "someNumber")
//   },[])

useEffect(()=>{
        
    let FirstScreen = JSON.parse(localStorage.getItem("FirstScreen"))
    setFirstScreenData(FirstScreen)
    console.log(FirstScreen,"FirstScreen")

    formik.setFieldValue("name",FirstScreen.name )
    formik.setFieldValue("email",FirstScreen.email )
    formik.setFieldValue("mobile",FirstScreen.mobile )
    formik.setFieldValue("photo",FirstScreen.photo )
 
  },[])

  const convertBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const handlePhoto = async (e) => {
    const imageBase64 = await convertBase64(e.target.files[0])
    console.log(imageBase64, "imageBase64");
    setPhoto(imageBase64)
    formik.setFieldValue("photo",imageBase64 )


  }

  return (
    <div style={{padding :"100px"}}>
    <form onSubmit={formik.handleSubmit}>

    <img src={formik.values.photo} alt="student icon" style={{ width: "200px" , height:"200px" }} /><br /><br />
            <div>

              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}

                style={{ background: "#3E92CC", color: "#fff", }}

              />
              {/* <UploadFileIcon /> */}
            </div>


      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
       <TextField
        id="mobile"
        name="mobile"
        label="Mobile"
        variant="outlined"
        margin="normal"
        type="number"
        fullWidth
        value={formik.values.mobile}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
        helperText={formik.touched.mobile && formik.errors.mobile}
      />


      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

       

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </div>
  );
};

export default FristScreen;