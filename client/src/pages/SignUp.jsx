import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GAuth from '../components/GAuth';
import background2 from '../assets/background/background2.jpeg';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div
      className='min-h-screen  bg-cover bg-center'
      style={{ backgroundImage: `url(${background2})` }}
    >
      <div className='flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 bg-white bg-opacity-50 rounded-lg p-5 shadow-inner shadow-blue-500'>
        {/* left */}
        <div className='flex-1 bg-white bg-opacity-50 rounded-lg p-5 shadow-inner shadow-gray-500'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-bl from-yellow-300 via-green-300 to-red-300 rounded-lg text-white'>
              <i>Cpx</i>
            </span>
          </Link>
          <p className='text-sm mt-5'>
            This is a Hype Square Media Project. You can sign Up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}

        <div className='flex-1 bg-white bg-opacity-50 rounded-lg p-5 shadow-inner shadow-gray-500'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className=''>
              <Label value='Your username' />
              <TextInput className=' bg-white bg-opacity-50 rounded-lg p-5 shadow-inner shadow-gray-500'
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div className=''>
              <Label value='Your email' />
              <TextInput
                type='email'
                className='bg-white bg-opacity-50 rounded-lg p-5 shadow-inner shadow-gray-500'
                placeholder='name@gmail.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                className='bg-white bg-opacity-50 rounded-lg p-5 shadow-inner shadow-gray-500'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              className='bg-gradient-to-bl from-yellow-300 via-green-300 to-red-300 rounded-lg text-white'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
            <GAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}



