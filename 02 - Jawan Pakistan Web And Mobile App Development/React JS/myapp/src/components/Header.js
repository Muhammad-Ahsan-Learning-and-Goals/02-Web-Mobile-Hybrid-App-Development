import React from "react";

import Logo from "../images/is.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Header</h1>
        <Logo />
      </div>
    );
  }
}

// class Logo extends Component {
//   render() {
//     return (
//       <div>
//         <h1> Logo </h1>
//         <img src={Logo} alt="car"  width="50" />
//       </div>
//     );
//   }
// }

export { Header, Logo };
