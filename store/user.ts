import { create } from 'zustand';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobile: string;
  country: string;
}

interface UserStore {
  user: User | null;
  setUser: (data: User) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
