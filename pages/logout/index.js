import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

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
          toast.success('Logout Successful.');
          router.push('/');
        } else {
          toast.error('Logout Error');
          router.push('/');
        }
      })()
    } else {
      toast.error('Token is not available.');
      router.push('/');
    }
  }, [])

  return null;
}