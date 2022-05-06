import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import WithAuth from "../../components/WithAuth";

function Profile() {
  let apicall = true;
  const [data, setData] = useState();
  const router = useRouter();
  const fetchProfile = async (token) => {
    const res = await fetch('/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    const json = await res.json();
    if (json.success) {
      console.log(true)
      setData(json.data)
    } else {
      console.log(false)
      localStorage.removeItem('user');
      router.replace('/login');
    }
  }
  const logoutAll = async () => {

    const res = await fetch('/api/logoutAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('user')
      }
    });
    const json = await res.json();
    if (json.success) {
      console.log(true)
      localStorage.removeItem('user');
      alert("Logged out from All devices Successfully");
      router.push('/');
    } else {
      console.log(false);
    }
  }
  useEffect(() => {
    if (apicall) {
      apicall = false;
      return;
    }
    fetchProfile(localStorage.getItem('user'));
  }, [])

  if (data) {
    return (
      <>
        <h1>Profile Page</h1>
        <div>
          <div>{data.name}</div>
          <div>{data.email}</div>
          <div>{data.phone}</div>
          <button className="btn btn-danger" onClick={logoutAll}>
            logoutAll
          </button>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default WithAuth(Profile);