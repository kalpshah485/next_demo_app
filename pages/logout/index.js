import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  let apicall = true;
  const router = useRouter();
  useEffect(() => {
    if (apicall) {
      apicall = false;
      return;
    }
    const token = localStorage.getItem('user');
    if (token) {
      (async () => {
        const res = await fetch('/api/logout', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        })
        const data = await res.json();
        if (data.success) {
          localStorage.removeItem('user');
          router.push('/')
        } else {
          router.push('/')
        }
      })()
    } else {
      alert("token is null");
      router.push('/')
    }
  }, [])

  return null;
}