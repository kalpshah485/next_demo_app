import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withoutAuth = Component => {
  const Auth = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem('user')) {
        router.replace('/');
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