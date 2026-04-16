// src/app/test-token/page.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TestTokenPage() {
  const { accessToken, user, login } = useAuth();
  const [testResult, setTestResult] = useState<any>(null);
  const [decodedToken, setDecodedToken] = useState<any>(null);

  const decodeToken = (token: string) => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) {
        return { error: "Invalid token format" };
      }

      const payload = JSON.parse(atob(parts[1]));
      const expDate = new Date(payload.exp * 1000);
      const now = new Date();

      return {
        ...payload,
        exp_date: expDate.toLocaleString(),
        is_expired: now >= expDate,
        expires_in_seconds: Math.floor(
          (expDate.getTime() - now.getTime()) / 1000,
        ),
        now: now.toLocaleString(),
      };
    } catch (error) {
      return { error: "Failed to decode token" };
    }
  };

  const testToken = () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      setTestResult({ error: "No token found in localStorage" });
      return;
    }

    const decoded = decodeToken(token);
    setDecodedToken(decoded);
    setTestResult({ success: true, token_length: token.length });
  };

  const clearToken = () => {
    localStorage.clear();
    setTestResult(null);
    setDecodedToken(null);
    alert("Token cleared! Please login again.");
    window.location.reload();
  };

  const testLogin = async () => {
    try {
      await login("test@example.com", "password123");
      setTestResult({
        success: true,
        message: "Login attempted, check console",
      });
    } catch (error: any) {
      setTestResult({ error: error.message });
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Token Debug Page</h1>

      <div className="space-y-4">
        {/* Token Status */}
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">Current Token Status:</h2>
          <div>Access Token: {accessToken ? "✅ Present" : "❌ Missing"}</div>
          <div>User: {user ? `✅ ${user.email}` : "❌ Not logged in"}</div>
          <div>
            Token in localStorage:{" "}
            {localStorage.getItem("access_token") ? "✅ Yes" : "❌ No"}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button onClick={testToken}>Test Token</Button>
          <Button onClick={testLogin} variant="outline">
            Test Login
          </Button>
          <Button onClick={clearToken} variant="destructive">
            Clear Token
          </Button>
        </div>

        {/* Decoded Token Info */}
        {decodedToken && (
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <h2 className="font-semibold mb-2">Decoded Token:</h2>
            <pre className="text-xs overflow-auto">
              {JSON.stringify(decodedToken, null, 2)}
            </pre>
          </div>
        )}

        {/* Test Result */}
        {testResult && (
          <div
            className={`p-4 rounded ${testResult.error ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"} border`}
          >
            <pre className="text-xs">{JSON.stringify(testResult, null, 2)}</pre>
          </div>
        )}

        {/* Manual Token Input */}
        <div className="bg-yellow-50 p-4 rounded">
          <h2 className="font-semibold mb-2">Manual Token Test:</h2>
          <p className="text-sm mb-2">Paste a token here to decode it:</p>
          <textarea
            className="w-full p-2 border rounded font-mono text-xs"
            rows={3}
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            onChange={(e) => {
              if (e.target.value) {
                const decoded = decodeToken(e.target.value);
                setDecodedToken(decoded);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
