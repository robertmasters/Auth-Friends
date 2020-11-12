import React from "react";
import moment from "moment";
import NewFriend from './NewFriend'


import { axiosWithAuth } from "../Utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {friendsListArray: []};

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        // console.log(res.data)
        this.setState({friendsListArray: res.data});
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
    
  render() {
    //   console.log(this.state.data)

    const listArray=this.state.friendsListArray

    console.log(listArray)

    return (
      <div>
    
    <h2>FriendsList</h2>

      {
            listArray.map((item) => (
                <p>Name: {item.name} - Age: {item.age}</p>
            ))
        }

      </div>
    );
  }
}

export default FriendsList;
// {
//     listArray.map((item) => (
//         <p>{item.name}</p>
//     ))
// }


//import Loader from "react-loader-spinner";
// {this.props.fetchingData && (
//     <div className="key spinner">
//       <Loader type="Puff" color="#204963" height="60" width="60" />
//       <p>Loading Data</p>
//     </div>
//   )}