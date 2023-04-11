import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
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
      setData(json.data)
    } else {
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
      localStorage.removeItem('user');
      toast.success("Logged out from All devices Successfully");
      router.replace('/');
    } else {
      toast.error("Logout Failed.");
    }
  }
  useEffect(() => {
    if (apicall) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      apicall = false;
      return;
    }
    fetchProfile(localStorage.getItem('user'));
  }, [])

  if (data) {
    return (
      <>
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-12 col-xl-4">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body text-center">
                    <div className="mt-3 mb-4">
                      <Image src="/images/dummy-male-profile.png"
                        className="rounded-circle img-fluid" alt="profile-pic" height="250" width="250" layout="fixed" />
                    </div>
                    <h4 className="mb-2">{data.name}</h4>
                    <h6 className="mb-2">{data.email}</h6>
                    <h6 className="mb-2">{data.phone}</h6>
                    <button className="btn btn-danger" onClick={logoutAll}>
                      logoutAll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    return null;
  }
}

export default WithAuth(Profile);