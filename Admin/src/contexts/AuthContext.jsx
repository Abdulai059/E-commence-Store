// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, isUserAdmin } from '../services/apiAuth';
import supabase from '../services/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    getCurrentUser()
      .then(async (user) => {
        setUser(user);
        if (user) {
          const adminStatus = await isUserAdmin(user.id);
          setIsAdmin(adminStatus);
        }
      })
      .catch((error) => {
        console.error('Error loading user:', error);
      })
      .finally(() => {
        setLoading(false);
      });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user || null;
        setUser(currentUser);

        if (currentUser) {
          const adminStatus = await isUserAdmin(currentUser.id);
          setIsAdmin(adminStatus);
        } else {
          setIsAdmin(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    user,
    isAdmin,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}