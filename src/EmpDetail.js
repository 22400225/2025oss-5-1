import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();
  const [empdata, setEmpdata] = useState({});

  useEffect(() => {
    fetch("https://68db360923ebc87faa324e52.mockapi.io/employee/" + empid)
      .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log("Error fetching details: ", err.message);
      });
  }, [empid]); 

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6"> 
          <div className="card" style={{ textAlign: "left" }}>

            <div className="card-title text-center bg-primary text-white p-3">
              <h2>Employee Details</h2>
            </div>
            
            <div className="card-body">
              {empdata && empdata.id ? (
                <div>
                  <h3 className="text-primary text-center mb-4">
                    {empdata.name} (ID: {empdata.id})
                  </h3>


                  <h4 className="border-bottom pb-2 mt-4">Contact Details</h4>
                  
                  <div className="detail-item">
                    <strong>Email:</strong> {empdata.email}
                  </div>
                  <div className="detail-item">
                    <strong>Phone:</strong> {empdata.Phone}
                  </div>

                  <h4 className="border-bottom pb-2 mt-4">Personal Details</h4>
                  
                  <div className="detail-item">
                    <strong>Gender:</strong> {empdata.Gender}
                  </div>
                  <div className="detail-item">
                    <strong>Country:</strong> {empdata.Country}
                  </div>
                  
                  <div className="text-center">
                    <Link className="btn btn-danger" to="/">
                      Back to List
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="text-center text-muted">Loading employee data...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;