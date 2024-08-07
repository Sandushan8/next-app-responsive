'use client';
import Image from 'next/image';
import { Input, Button, Checkbox } from '@nextui-org/react';
import {
  containerTypes,
  SignUpLoginContainerProps,
  submitData,
} from './signUpLoginContainer.types';
import Link from 'next/link';
import { useState } from 'react';
import { EyeSlashFilledIcon } from './EyeSlashed';
import { EyeFilledIcon } from './EyeFilled';
import { cookies } from 'next/headers';
import { storeCookies } from './signUpLoginContainer.utils';

export default function SignUpLoginContainer({
  type,
  imageUrl,
}: SignUpLoginContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const submit = (data: submitData) => {
    storeCookies({ type, data: isChecked });
    console.log(data);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden h-1/2 w-screen overflow-hidden md:relative md:block md:h-screen md:w-1/2">
        <Image
          src={imageUrl}
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="md:rounded-br-3xl"
        />
      </div>
      <div className="z-10 h-full w-screen rounded-b-2xl bg-white px-2 pb-10 pt-20 shadow-2xl md:w-1/2 md:rounded-none md:px-40 md:pt-40 md:shadow-none">
        <div>
          <h1
            className="text-center text-4xl md:text-left md:text-header"
            style={{
              color: type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            {type === containerTypes.login ? 'Login' : 'Sign up'}
          </h1>
          <div className="flex justify-center md:justify-normal">
            <p className="mt-2 w-44 text-center text-sm md:mt-5 md:w-full md:text-left md:text-normal">
              {'Please enter your login details to start having fun!'}
            </p>
          </div>
        </div>
        <div className="mb-4 mt-4 flex flex-col gap-2 md:gap-5">
          {type === containerTypes.signup && (
            <Input
              variant="bordered"
              type="text"
              label="Full Name"
              placeholder={'Baba Tunde'}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
          <Input
            variant="bordered"
            type="email"
            label="Email Address"
            placeholder={'info@example.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            variant="bordered"
            type={isVisible ? 'text' : 'password'}
            placeholder={'password'}
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Checkbox
              isSelected={isChecked}
              color={type === containerTypes.login ? 'secondary' : 'success'}
              onValueChange={setIsChecked}
            />
            {type === containerTypes.login ? (
              <p className="text-sm md:text-normal">Keep me logged in</p>
            ) : (
              <p className="text-sm md:text-normal">
                I agree to the{' '}
                <b style={{ color: '#165A0F' }}>Terms & Conditions</b>
              </p>
            )}
          </div>
          {type === containerTypes.login && (
            <div className={'text-sm font-bold text-loginMain md:text-normal'}>
              Forgot password?
            </div>
          )}
        </div>
        <div>
          <Button
            color="primary"
            className={'mb-2 mt-2 w-full md:mb-5 md:mt-5'}
            style={{
              fontSize: '25px',
              height: '60px',
              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
            onClick={() => {
              if (
                type === containerTypes.login &&
                (email === '' || password === '')
              ) {
                alert('Please fill in all fields');
                return;
              }
              if (
                (type === containerTypes.signup && fullName === '') ||
                email === '' ||
                password === ''
              ) {
                alert('Please fill in all fields');
                return;
              }
              submit({ email, password, fullName });
            }}
          >
            {type === containerTypes.login ? 'Log in' : 'Sign up'}
          </Button>
        </div>
        <div className="mb-3 flex gap-5 text-sm md:mb-8 md:text-normal">
          {type === containerTypes.login
            ? "Don't have an account?"
            : 'Already have an account?'}
          <Link
            href={type === containerTypes.login ? '/signup' : '/login'}
            style={{
              color: type === containerTypes.login ? '#3C1AB9' : '#165A0F',
              fontWeight: 'bold',
            }}
          >
            {type === containerTypes.login ? 'Sign Up' : 'Login'}
          </Link>
        </div>
        <div className="justify mb-3 flex w-full justify-center gap-3 text-sm md:mb-10 md:text-normal">
          <div
            className="flex"
            style={{
              alignItems: 'center',
            }}
          >
            <div className="h-0.5 w-smallLineWidth bg-black md:w-lineWidth" />
          </div>
          Or continue with
          <div
            className="flex"
            style={{
              alignItems: 'center',
            }}
          >
            <div className="h-0.5 w-smallLineWidth bg-black md:w-lineWidth" />
          </div>
        </div>
        <div
          className="hidden justify-between md:flex"
          style={{
            justifyContent: 'space-between',
          }}
        >
          <Button
            color="success"
            style={{
              width: '105px',
              height: '80px',
              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            <Image
              src={'/icons/twitter.png'}
              alt="twitter"
              width={56}
              height={56}
            />
          </Button>
          <Button
            color="success"
            style={{
              width: '105px',
              height: '80px',
              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            <Image
              src={'/icons/facebook.png'}
              alt="facebook"
              width={46}
              height={46}
            />
          </Button>
          <Button
            color="success"
            style={{
              width: '105px',
              height: '80px',
              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            <Image
              src={'/icons/google.png'}
              alt="google"
              width={44}
              height={44}
            />
          </Button>
          <Button
            color="success"
            style={{
              width: '105px',
              height: '80px',
              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            <Image
              src={'/icons/apple.png'}
              alt="apple"
              width={38}
              height={51}
            />
          </Button>
        </div>
        <div className="flex justify-between md:hidden">
          <button
            color="success"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              width: '60px',
              height: '50px',
              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            <Image
              src={'/icons/twitter.png'}
              alt="twitter"
              width={20}
              height={20}
            />
          </button>
          <button
            color="success"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              width: '60px',
              height: '50px',
              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            <Image
              src={'/icons/facebook.png'}
              alt="facebook"
              width={20}
              height={20}
            />
          </button>
          <button
            color="success"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              width: '60px',
              height: '50px',
              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            <Image
              src={'/icons/google.png'}
              alt="google"
              width={20}
              height={20}
            />
          </button>
          <button
            color="success"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              width: '60px',
              height: '50px',

              backgroundColor:
                type === containerTypes.login ? '#3C1AB9' : '#165A0F',
            }}
          >
            <Image
              src={'/icons/apple.png'}
              alt="apple"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div className="z-0 h-1/2 w-screen md:hidden">
        <Image
          src={imageUrl}
          alt="Logo"
          width={620}
          height={300}
          objectFit="cover"
          className="md:rounded-br-3xl"
          style={{ marginTop: -20, zIndex: -1, height: 330 }}
        />
      </div>
    </div>
  );
}
