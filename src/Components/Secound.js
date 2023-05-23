import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// import { GeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import { useEffect } from 'react';
import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';


const SecoundScreen = () => {

    const [searchLocation, setSearchLocation] = useState("")
    const [locationList, setLocationList] = useState([])
    const [selectedLocation, setSelectedLocation] = useState("")

    console.log(selectedLocation, "selectedLocation")

    console.log(locationList, "locationList")
    const getLocation = () => {
        axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchLocation}&apiKey=77661b4de8ca408b8ec9a9b4dab4920b`)
            .then((res) => {
                console.log(res.data.features, "ressssss")
                setLocationList(res.data.features)


            })
            .catch((err) => {
                console.log(err)

            })
    }
    useEffect(() => {
        getLocation()
    }, [searchLocation])




















    const validationSchema = Yup.object().shape({
        addressLine1: Yup.string().required('Address Line 1 is required'),
        addressLine2: Yup.string().required('Address Line 2 is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        country: Yup.string().required('Country is required'),
        pincode: Yup.string().required('Pincode is required'),
    });




    const formik = useFormik({
        initialValues: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            localStorage.setItem('SecoundScreen', JSON.stringify(values));
            // Perform signup logic here
        },
    });

    // const handlePlaceSelect = (place) => {
    //     console.log(place, "handlePlaceSelect")
    //     const { properties } = place.data;

    //     const addressLine1 = properties.formatted;
    //     const addressLine2 = properties.street || '';
    //     const city = properties.city || '';
    //     const state = properties.state || '';
    //     const country = properties.country || '';
    //     const pincode = properties.postalCode || '';

    //     formik.setValues({
    //         ...formik.values,
    //         addressLine1,
    //         addressLine2,
    //         city,
    //         state,
    //         country,
    //         pincode,
    //     });
    // };

    return (


        <div style={{padding :"50px"}}>
        <form onSubmit={formik.handleSubmit}>





            <>

                <label className='label'>Institute<span style={{ color: "red", padding: "0px 10px" }}></span></label>
                <Autocomplete

                    id="nba teams"
                    freeSolo
                    disableClearable
                    options={locationList}
                    // style={{ padding: "0px 10px" }}
                    fullWidth
                    // size="small"
                    InputProps={{ disableUnderline: true }}

                    renderInput={params => (

                        <TextField
                            name="organisation" {...params}
                        
                            onChange={(e) => { setSearchLocation(e.target.value) }}
                            // className="input-fields shadow"
                            variant="outlined"
                            label="Search location"
                            

                        />

                    )}
          

                    getOptionLabel={option => option && option.properties && option.properties.formatted
                    }



                    isOptionEqualToValue={(option, value) => option && option.properties && option.properties.formatted
                    }
                    // style={{ width: 270 }}

                    onChange={(ev, newTeam) => {
                        console.log(newTeam, "ADFASDASDASD")
                     
                        setSelectedLocation(newTeam && newTeam.properties && newTeam.properties.formatted)
                        formik.setFieldValue("addressLine1", newTeam && newTeam.properties && newTeam.properties.address_line1)
                        formik.setFieldValue("addressLine2", newTeam && newTeam.properties && newTeam.properties.address_line2)
                        formik.setFieldValue("city", newTeam && newTeam.properties && newTeam.properties.city)
                        formik.setFieldValue("state", newTeam && newTeam.properties && newTeam.properties.county)
                        formik.setFieldValue("country", newTeam && newTeam.properties && newTeam.properties.country)
                        formik.setFieldValue("pincode", newTeam && newTeam.properties && newTeam.properties.postcode)
                        
                    }}
                />
            

            </>



            {/* Existing fields */}


            <TextField
                id="addressLine1"
                name="addressLine1"
                label="Address Line 1"
                variant="outlined"
                margin="normal"
                fullWidth
                value={formik.values.addressLine1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)}
                helperText={formik.touched.addressLine1 && formik.errors.addressLine1}
            />
             <TextField
                id="addressLine2"
                name="addressLine2"
                label="Address Line 2"
                variant="outlined"
                margin="normal"
                fullWidth
                value={formik.values.addressLine2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)}
                helperText={formik.touched.addressLine2 && formik.errors.addressLine2}
            />
             <TextField
                id="city"
                name="city"
                label="City"
                variant="outlined"
                margin="normal"
                fullWidth
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
            />
             <TextField
                id="state"
                name="state"
                label="State"
                variant="outlined"
                margin="normal"
                fullWidth
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
            />

<TextField
                id="country"
                name="country"
                label="Country"
                variant="outlined"
                margin="normal"
                fullWidth
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
            />

<TextField
                id="pincode"
                name="pincode"
                label="Pincode"
                variant="outlined"
                margin="normal"
                fullWidth
                value={formik.values.pincode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                helperText={formik.touched.pincode && formik.errors.pincode}
            />
 <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

        </form>
        </div>
    );
};

export default SecoundScreen;