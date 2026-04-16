// "use client";

// import { LoginForm } from "@/features/login/components/LoginForm";
// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// const LoginPage = () => {
//   const { accessToken, isLoading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoading && accessToken) {
//       router.push("/");
//     }
//   }, [accessToken, isLoading, router]);

//   if (isLoading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   if (accessToken) {
//     return null;
//   }

//   return <LoginForm />;
// };

// export default LoginPage;

// app/auth/login/page.tsx
"use client";

import { LoginForm } from "@/features/login/components/LoginForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { accessToken, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && accessToken) {
      router.push("/");
    }
  }, [accessToken, isLoading, router]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (accessToken) {
    return null;
  }

  return <LoginForm />;
};

export default LoginPage;
