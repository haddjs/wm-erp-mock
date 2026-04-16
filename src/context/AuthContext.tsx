// import {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   useEffect,
// } from "react";
// import { apiFetch } from "@/lib/api";

// import { isMock } from "@/lib/config";

// interface AuthContextType {
//   user: any;
//   accessToken: string | null;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: any) {
//   const [accessToken, setAccessToken] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState<any>(null);

//   // useEffect(() => {
//   //   const initAuth = async () => {
//   //     const token = localStorage.getItem("access_token");

//   //     if (!token) {
//   //       setIsLoading(false);
//   //       return;
//   //     }

//   //     try {
//   //       setAccessToken(token);
//   //       const res = await apiFetch("/users/profile", {}, token);
//   //       setUser(res.data);
//   //     } catch {
//   //       logout();
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   };
//   //   initAuth();
//   // }, []);

//   useEffect(() => {
//     const initAuth = async () => {
//       if (isMock) {
//         // 🚀 Fake instant login
//         const fakeUser = {
//           id: "mock-user",
//           name: "Mock Admin",
//           email: "admin@mock.com",
//           role: "admin",
//         };

//         setUser(fakeUser);
//         setAccessToken("mock-token");
//         setIsLoading(false);
//         return;
//       }

//       const token = localStorage.getItem("access_token");

//       if (!token) {
//         setIsLoading(false);
//         return;
//       }

//       try {
//         setAccessToken(token);
//         const res = await apiFetch("/users/profile", {}, token);
//         setUser(res.data);
//       } catch {
//         logout();
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     initAuth();
//   }, []);

//   // const login = async (email: string, password: string) => {
//   //   try {
//   //     const res = await apiFetch("/authentications/login", {
//   //       method: "POST",
//   //       body: JSON.stringify({ email, password }),
//   //     });

//   //     const { access_token, refresh_token } = res.data;

//   //     localStorage.setItem("access_token", access_token);
//   //     localStorage.setItem("refresh_token", refresh_token);

//   //     setAccessToken(access_token);
//   //   } catch (error: any) {
//   //     throw new Error(error.message || "Login Failed");
//   //   }
//   // };

//   const login = async (email: string, password: string) => {
//     if (isMock) {
//       // fake login success
//       const fakeUser = {
//         id: "mock-user",
//         name: "Mock Admin",
//         email,
//         role: "admin",
//       };

//       localStorage.setItem("access_token", "mock-token");

//       setAccessToken("mock-token");
//       setUser(fakeUser);

//       return;
//     }
//   };

//   // const logout = async () => {
//   //   try {
//   //     await apiFetch(
//   //       "/authentications/logout",
//   //       {
//   //         method: "POST",
//   //       },
//   //       accessToken || undefined,
//   //     );
//   //   } catch {
//   //     //Ignore Error
//   //   }

//   //   localStorage.removeItem("access_token");
//   //   localStorage.removeItem("refresh_token");
//   //   localStorage.removeItem("roles");
//   //   localStorage.removeItem("theme");

//   //   setAccessToken(null);
//   //   setUser(null);
//   // };

//   const logout = async () => {
//     if (!isMock) {
//       try {
//         await apiFetch(
//           "/authentications/logout",
//           { method: "POST" },
//           accessToken || undefined,
//         );
//       } catch {}
//     }

//     localStorage.removeItem("access_token");
//     localStorage.removeItem("refresh_token");

//     setAccessToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, accessToken, isLoading, login, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { apiFetch } from "@/lib/api";

import { isMock } from "@/lib/config";

interface AuthContextType {
  user: any;
  accessToken: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const initAuth = async () => {
      if (isMock) {
        // Check localStorage for existing mock session
        const storedToken = localStorage.getItem("access_token");

        if (storedToken === "mock-token") {
          const storedUser = localStorage.getItem("mock_user");
          if (storedUser) {
            setUser(JSON.parse(storedUser));
            setAccessToken("mock-token");
          } else {
            // Set default mock user
            const mockUser = {
              id: "mock-user-1",
              name: "John Doe",
              email: "john.doe@example.com",
              role: "admin",
              branch_id: "branch-1",
              branch_name: "Branch Jakarta",
            };
            setUser(mockUser);
            setAccessToken("mock-token");
            localStorage.setItem("mock_user", JSON.stringify(mockUser));
          }
        } else {
          // No active session
          setUser(null);
          setAccessToken(null);
        }

        setIsLoading(false);
        return;
      }

      const token = localStorage.getItem("access_token");

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        setAccessToken(token);
        const res = await apiFetch("/users/profile", {}, token);
        setUser(res.data);
      } catch {
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    if (isMock) {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Mock validation - accept any email/password for demo
      // You can add specific validation if needed
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      // Create mock user based on email
      const mockUser = {
        id: "mock-user-1",
        name: email.split("@")[0].replace(/\./g, " "),
        email: email,
        role: email.includes("admin") ? "admin" : "user",
        branch_id: "branch-1",
        branch_name: "Branch Jakarta",
      };

      localStorage.setItem("access_token", "mock-token");
      localStorage.setItem("mock_user", JSON.stringify(mockUser));

      setAccessToken("mock-token");
      setUser(mockUser);

      return;
    }

    // Real API login
    try {
      const res = await apiFetch("/authentications/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const { access_token, refresh_token } = res.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      setAccessToken(access_token);

      // Fetch user profile after login
      const profileRes = await apiFetch("/users/profile", {}, access_token);
      setUser(profileRes.data);
    } catch (error: any) {
      throw new Error(error.message || "Login Failed");
    }
  };

  const logout = async () => {
    if (!isMock) {
      try {
        await apiFetch(
          "/authentications/logout",
          { method: "POST" },
          accessToken || undefined,
        );
      } catch {
        // Ignore Error
      }
    }

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("mock_user");

    if (!isMock) {
      localStorage.removeItem("roles");
      localStorage.removeItem("theme");
    }

    setAccessToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
