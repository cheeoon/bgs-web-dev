import useUserStore from '@/store/user';

export function signupAPI(payload) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload.email.includes("@")) {
        console.log("Timeout");
        reject("Invalid email");
      }
      resolve({
        status: "ok",
        user: payload,
      });
    }, 1000);
    console.log("signupSuccess");
  });
}

export function logoutAPI() {
  const logout = useUserStore.getState().logout; // get store logout function

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Clear user data in store
      logout();

      console.log("User logged out successfully");
      resolve({
        status: "ok",
      });
    }, 1000);
  });
}