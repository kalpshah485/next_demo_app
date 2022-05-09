import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withoutAuth = Component => {
  const Auth = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const router = useRouter();
    let apicall = true;
    useEffect(() => {
      if (apicall) {
        apicall = false;
        return;
      }
      if (localStorage.getItem('user')) {
        (async () => {
          const res = await fetch('/api/auth', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('user')
            }
          })
          const data = await res.json()
          if (data.success) {
            router.replace('/');
          } else {
            localStorage.removeItem('user');
            setIsLoggedIn(false);
          }
        })()
      } else {
        setIsLoggedIn(false);
      }
    }, [])
    if (isLoggedIn) {
      return null;
    } else {
      return (
        <Component {...props} />
      );
    }
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withoutAuth;