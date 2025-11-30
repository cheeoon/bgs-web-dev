'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useUserStore from '@/store/user';
import styles from './signUpForm.module.scss';
import { signupAPI } from '@/lib/auth';

// Validation schema
const signupSchema = z
  .object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    mobile: z.string().min(8, 'Mobile number is too short'),
    country: z.string().min(2, 'Enter a valid country'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

// TypeScript type inferred from Zod
type FormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const setUser = useUserStore((s) => s.setUser);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  // Submit handler
  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);

    // Mock API delay
    await signupAPI(data);
    //await new Promise((r) => setTimeout(r, 800));

    // Update user store
    setUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
      country: data.country,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    console.log('Store updated:', useUserStore.getState().user);

    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      {submitted ? (
        <h2 className={styles.successMsg}>
          <div>
            {' '}
            Hi {useUserStore.getState().user?.firstName}, welcome to Blackwell,
            please verify your email immediately.
          </div>

          <div>You can close thie sidebar to logout</div>
        </h2>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h2>SIGN UP</h2>

          <div className={styles.row}>
            <input placeholder="First Name" {...register('firstName')} />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>

          <div className={styles.row}>
            <input placeholder="Last Name" {...register('lastName')} />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>

          <div className={styles.row}>
            <input placeholder="Email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className={styles.row}>
            <input placeholder="Mobile" {...register('mobile')} />
            {errors.mobile && <p>{errors.mobile.message}</p>}
          </div>

          <div className={styles.row}>
            <input placeholder="Country" {...register('country')} />
            {errors.country && <p>{errors.country.message}</p>}
          </div>

          <div className={styles.row}>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div className={styles.row}>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Create Account
          </button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
