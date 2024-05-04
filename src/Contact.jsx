import { Center, ChakraProvider, useColorMode, Button, Image, Flex, Text, Link, Box } from '@chakra-ui/react'
import { Formik, Form, Field } from "formik";
import { color } from 'framer-motion';
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
      .min(2, "You must write a message!")
      .max(500, "Too Long!")
      .required("Required"),

  });

function Contact({colorMode}) {


    const form_style = {
        margin:'20px',
        padding:'20px',
        background: "linear-gradient(#26A8DF, #7FB2C8)",
        color: "black",
        borderRadius: '30px',
        display:'flex',
        flexDirection:'column',
        minWidth: 'fit-content',
        width: 'auto'
      };

      const field_style = {
        backgroundColor: "white",
        color: "black",
        border: "solid",
        borderColor:"white",
        borderRadius:"5px",
        padding:"10px",
        margin: "10px"
      };

      const button_style = {
        backgroundColor: "white",
        color: "black",
        border: "solid",
        borderColor:"grey",
        borderRadius:"5px",
        padding:"10px",
        margin: "10px"
      };

      const error_style = {
        color: "red",
        fontSize:"10px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      };

      const req_style = {
        fontSize:"10px",
        justifyContent:'center',
        alignItems:'center',
        display:'none'
      };

      
    return(
        <ChakraProvider>
           <Flex
                w="100%"
                flexDirection="column"
                alignItems="center"
            >
                <Link href = "/home">
                    <Image
                        //src="src/icons/weather_logo_light.png"
                        src = {colorMode === "dark" ? "src/icons/weather_logo.png" : "src/icons/weather_logo_light.png"}
                        alt="sun"
                        objectFit='cover'
                        margin='40px 10px 40px 10px'
                        w = {{base:'99%', sm: '500px', md:'750px'}}
                    />
                </Link>
                <Flex
                    w="100%"
                    flexDirection={{base:'column', sm: 'column', md:'row'}}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: ""
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                resetForm({values:{"firstName":"","lastName":"", "email":"","message":""}});
                            }}
                        >
                            {({ errors, touched }) => (
                                <Box
                                    w={{base:'90%', sm:"90%", lg:'50%'}}
                                    justifyContent='center'
                                >
                                    <Form style={form_style}>
                                    
                                            <Flex
                                            flexDirection="row">
                                                <Field name="firstName" placeholder="First Name" style={field_style} />
                                                {errors.firstName && touched.firstName ? (
                                                    <div style={error_style}>{errors.firstName}</div>
                                                ) : null}
                                            </Flex>
                                            <Flex
                                            flexDirection="row">
                                                <Field name="lastName" placeholder="Last Name" style={field_style} />
                                                {errors.lastName && touched.lastName ? (
                                                    <div style={error_style}>{errors.lastName}</div>
                                                ) : null}
                                            </Flex>
                                            <Flex
                                            flexDirection="row">
                                                <Field name="email" type="email" placeholder="Email Address" style={field_style} />
                                                {errors.email && touched.email ? <div style={error_style}>{errors.email}</div> : <div style={req_style}>Required</div>}
                
                                            </Flex>
                                            <Flex
                                            flexDirection="column">
                                                <Field name="message" placeholder="" style={field_style} component="textarea" rows="4" />
                                                {errors.message && touched.message ? <div style={error_style}>{errors.message}</div> : null}
                
                                            </Flex>
                                            <Button type="submit" style={field_style}>Submit</Button>

                                    </Form>
                                </Box>
                            )}
                        </Formik>
                        <Flex
                            w={{base:'90%', sm:"90%", lg:'50%'}}
                            justifyContent='center'
                        >
                            <Image

                                src = {colorMode === "dark" ? "src/icons/feeling.png" : "src/icons/feeling_light.png"}
                                alt="sun"
                                objectFit='contain'
                                w={{base:'100%', sm:'75%', lg:'100%'}}
                            />
                        </Flex>
                    </Flex>
            </Flex>
            <style> 
                {` 
                    ::placeholder { 
                        color: grey; 
                        background-color: white;
                    }

                    input:-webkit-autofill,
                    input:-webkit-autofill:hover, 
                    input:-webkit-autofill:focus, 
                    input:-webkit-autofill:active{
                        color : black !important;
                        -webkit-text-fill-color: black !important;
                        -webkit-box-shadow: 0 0 0 1000px white inset !important;
                        -webkit-background-clip: text !important;
                        background-clip: text !important;
                    }` 
                } 
            </style> 
        </ChakraProvider>
    )
}
  
  
export default Contact