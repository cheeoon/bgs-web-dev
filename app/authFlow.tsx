'use client';
import Drawer from '@/components/Drawer/Drawer';
import LogoutButton from '@/components/Logout/LogoutButton';
import RegisterButton from '@/components/RegisterButton/RegisterButton';
import SignupForm from '@/components/SignUpForm/signUpForm';
import { logoutAPI } from '@/lib/auth';
import useUserStore from '@/store/user';
import { useState } from 'react';

const authFlow = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useUserStore((s) => s.user); // <-- get user data

  const isUserDataExist = user !== null;

  const handleLogout = () => {
    logoutAPI();
  };

  return (
    <>
      {isUserDataExist ? (
        <LogoutButton onClick={handleLogout}></LogoutButton>
      ) : (
        <RegisterButton onClick={() => setOpen(true)} />
      )}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <SignupForm />
      </Drawer>
    </>
  );
};

export default authFlow;
