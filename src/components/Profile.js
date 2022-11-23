import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Profile = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
      
  }, []);

  return (
    <div className="users-container">
      <MDBRow>
        <MDBContainer md="9" lg="7" xl="5" className="mt-5">
          {users.map((user, index) => {
            return (
              <div key={index}>
                <MDBCol md="9" lg="7" xl="5" className="mt-5">
                  <MDBCard style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            style={{ width: "180px", borderRadius: "10px" }}
                            src={user.avatar}
                            alt="Generic placeholder image"
                            fluid
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="name-div">
                            <MDBCardTitle>{user.fname}</MDBCardTitle>
                            <MDBCardTitle>{user.lname}</MDBCardTitle>
                          </div>
                          <div>
                            <MDBCardTitle>{user.username}</MDBCardTitle>
                          </div>
                          {/* <MDBCardText></MDBCardText> */}

                          {/* <div
                            className="d-flex justify-content-start rounded-3 p-2 mb-2"
                            style={{ backgroundColor: "#efefef" }}
                          >
                            <div>
                              <p className="small text-muted mb-1">Articles</p>
                              <p className="mb-0">41</p>
                            </div>
                            <div className="px-3">
                              <p className="small text-muted mb-1">Followers</p>
                              <p className="mb-0">976</p>
                            </div>
                            <div>
                              <p className="small text-muted mb-1">Rating</p>
                              <p className="mb-0">8.5</p>
                            </div>
                          </div> */}
                          {/* <div className="d-flex pt-1">
                            <MDBBtn outline className="me-1 flex-grow-1">
                              Chat
                            </MDBBtn>
                            <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                          </div> */}
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </div>
            );
          })}
        </MDBContainer>
      </MDBRow>
    </div>
  );
};
export default Profile;
