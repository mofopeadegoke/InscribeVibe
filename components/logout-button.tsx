"use client";
import { useAuth } from "@/providers/AuthContext";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const { logout } = useAuth();
  return (
    <Button
      variant="outline"
      className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
      onClick={logout}
    >
      Sign Out
    </Button>
  );
}
