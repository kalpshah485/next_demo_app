import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = Component => {
  const Auth = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    useEffect(() => {
      (async () => {
        if (localStorage.getItem('user')) {
          const res = await fetch('/api/auth', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('user')
            }
          })
          const data = await res.json()
          if (data.success) {
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem('user');
            router.replace('/login');
          }
        } else {
          router.replace('/login');
        }
      })()
    }, [])
    if (isLoggedIn) {
      return (
        <Component {...props} />
      );
    } else {
      return null;
    }
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;