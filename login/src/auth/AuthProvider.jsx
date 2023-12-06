import { useState, createContext, useContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
