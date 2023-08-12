import { useState } from "react";
import Swal from "sweetalert2";


const useHandleForm = (initialFormState, justme, more) => {
  
  const [formData, setFormData] = useState(initialFormState);
  const [isPending, setIsPending] = useState(true);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMessage = async (e) => {

    e.preventDefault();

    if (isPending) {
        Swal.fire({
            title: 'Loading...',
            text: 'Please wait 😊', 
            didOpen: () => {
                Swal.showLoading();
            },
    });
    } else {
        Swal.close();
    }
    
    try {
        const result = await fetch(`${process.env.REACT_APP_API_URL}/contacts/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await result.json();
        setFormData(initialFormState);
        if (data._id) {
            setIsPending(false);
            Swal.fire({
                title: 'Message Sent',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } else {
            setIsPending(false);
            Swal.fire({
                title: 'Sending Failed',
                icon: 'error',
                text: data
            });
        }
    } catch (err) {
        setIsPending(false);
        console.log(err);
    };
  };

  const adminLogin = async (e) => {

    e.preventDefault();

    if (isPending) {
        Swal.fire({
            title: 'Loading...',
            text: 'Please wait 😊', 
            didOpen: () => {
                Swal.showLoading();
            },
    });
    } else {
        Swal.close();
    }
    
    try {
        const result = await fetch(`${process.env.REACT_APP_API_URL}/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await result.json();
        setFormData(initialFormState);
        if (data.access) {
            setIsPending(false);
            localStorage.setItem('token', data.access);
            Swal.fire({
                title: 'Welcome',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } else {
            setIsPending(false);
            Swal.fire({
                title: 'Login Failed',
                icon: 'error',
                text: data
            });
        }
    } catch (err) {
        setIsPending(false);
        console.log(err);
    };
  };

  return {
    formData,
    setFormData,
    handleForm,
    sendMessage,
    adminLogin
  };
};

export default useHandleForm;
