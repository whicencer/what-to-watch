import { create } from 'zustand';

interface State {
  isMenuOpen: boolean;
  setMenuOpen: (state: boolean) => void
}

export const useNavMenu = create<State>()((set) => ({
  isMenuOpen: false,
  setMenuOpen: (state) => {
    set({ isMenuOpen: state });
  }
}));