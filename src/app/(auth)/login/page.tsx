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
        Loading...
      </div>
    );
  }

  if (accessToken) {
    return null;
  }

  return <LoginForm />;
};

export default LoginPage;
