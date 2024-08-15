import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
// import user1 from "../../assets/images/users/user1.jpg";
// import user2 from "../../assets/images/users/user2.jpg";
// import user3 from "../../assets/images/users/user3.jpg";
// import user4 from "../../assets/images/users/user4.jpg";
// import user5 from "../../assets/images/users/user5.jpg";

import user1 from "../../assets/images/ashwin.jpg";
import user2 from "../../assets/images/vedant.jpg";
import user3 from "../../assets/images/pradyumn.jpg";
import user4 from "../../assets/images/prasadmule.jpg";
import user5 from "../../assets/images/prasadpatil.jpg";
import user6 from "../../assets/images/rohit.jpg";
const tableData = [
  {
    avatar: user1,
    name: "Ashwin Patil",
    email: "someone123@gmail.com",
    room: "1",
    mobileno: "7865410945",
    parentmob: "8545956712",
    govid:"451295781480",
    month: "4",
   
  },
  {
    avatar: user2,
    name: "Vedant Kundale",
    email: "someone123@gmail.com",
    room: "2",
    mobileno: "7865410945",
    parentmob: "8545956712",
    govid:"451295781480",
    month: "4",
    
  },
  {
    avatar: user3,
    name: "Pradyumn Lande",
    email: "someone123@gmail.com",
    room: "3",
    mobileno: "7865410945",
    parentmob: "8545956712",
    govid:"451295781480",
    month: "4",
  
  },
  {
    avatar: user4,
    name: "Prasad Mule",
    email: "someone123@gmail.com",
    room: "4",
    mobileno: "7865410945",
    parentmob: "8545956712",
    govid:"451295781480",
    month: "4",
  
  },
  {
   avatar: user5,
    name: "Prasad Patil",
    email: "someone123@gmail.com",
    room: "5",
    mobileno: "7865410945",
    parentmob: "8545956712",
    govid:"451295781480",
    month: "4",
  
  },
  {
    avatar: user6,
     name: "Rohit Ardalkar",
     email: "someone123@gmail.com",
     room: "5",
     mobileno: "7865410945",
     parentmob: "8545956712",
     govid:"451295781480",
     month: "4",
   
   },
];

const roomTables = () => {
  return (
    <div style={{marginTop:'5em'}}>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Available Members</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of available members
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>Room No</th>
                <th>Mobile No</th>
                <th>Parents Mobile No</th>
                <th>Gov-Id Proof</th>
                <th>months</th>
              
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.room}</td>
                  <td>
                    {tdata.mobileno}
                  </td>
                  <td>{tdata.parentmob}</td>
                  <td>{tdata.govid}</td>
                  <td>{tdata.month}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default roomTables;
