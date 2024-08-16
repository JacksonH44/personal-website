import { 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  FormErrorMessage, 
  Button,
  Text,
  useToast, 
} from "@chakra-ui/react";
import { useState } from 'react';
import { sendContactForm } from '../lib/api';

const initValues = { 
  name: "",
  number: "",
  email: "",
  subject: "",
  message: "",
 }

const initState = {values: initValues}

const ContactForm = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const {values, isLoading, error} = state;

  const onBlur = ({target}) => setTouched((prev) => ({...prev,
    [target.name]: true
  }));

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent!",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (

        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
          <div className='p-4'>
            {
              error && (
                <Text className='text-[#ff220c] font-semibold text-xl text-center'>
                  {error}
                </Text>
              )
            }
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <FormControl isRequired isInvalid={touched.name && !values.name}>
                <div className='flex flex-col'>
                  <FormLabel className='uppercase text-sm py-2'>Name</FormLabel>
                  <Input 
                    className='border-2 rounded-lg p-3 flex border-gray-300' type="text" value={values.name} 
                    name="name" id="name" 
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                  <FormErrorMessage className='text-[#ff220c]'>Required</FormErrorMessage>
                </div>
                </FormControl>
                <FormControl>
                <div className='flex flex-col'>
                  <FormLabel className='uppercase text-sm py-2'>Phone Number</FormLabel>
                  <Input 
                    className='border-2 rounded-lg p-3 flex border-gray-300' type="text" value={values.number}
                    name="number" id="number"
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                </div>
                </FormControl>
              </div>
              <FormControl isRequired isInvalid={touched.email && !values.email}>
              <div className='flex flex-col py-2'>
                <FormLabel className='uppercase text-sm py-2'>Email</FormLabel>
                <Input 
                  className='border-2 rounded-lg p-3 flex border-gray-300' type="email" value={values.email}
                  name="email" id="email"
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage className='text-[#ff220c]'>Required</FormErrorMessage>
              </div>
              </FormControl>
              <FormControl isRequired isInvalid={touched.subject && !values.subject}>
              <div className='flex flex-col py-2'>
                <FormLabel className='uppercase text-sm py-2'>Subject</FormLabel>
                <Input 
                  className='border-2 rounded-lg p-3 flex border-gray-300' type="text" value={values.subject}
                  name="subject" id="subject"
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage className='text-[#ff220c]'>Required</FormErrorMessage>
              </div>
              </FormControl>
              <FormControl isRequired isInvalid={touched.email && !values.message}>
              <div className='flex flex-col py-2'>
                <FormLabel className='uppercase text-sm py-2'>Message</FormLabel>
                <Textarea 
                  className='border-2 rounded-lg p-3 border-gray-300' rows={10}
                  name="message" id="message" 
                  value={values.message} onChange={handleChange} onBlur={onBlur}
                />
                <FormErrorMessage className='text-[#ff220c]'>Required</FormErrorMessage>
              </div>
              </FormControl>
              <Button
                className='w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5438dc] to-[#357ded]'
                variant="outline"
                colorScheme='blue'
                disabled={!values.name || !values.email || !values.subject || !values.message}
                isLoading={isLoading}
                onClick={onSubmit}
              >
                Submit
              </Button>
          </div>
        </div>
  )
}

export default ContactForm
