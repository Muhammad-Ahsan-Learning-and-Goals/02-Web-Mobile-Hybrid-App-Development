import React from 'react'
import './App.css'
import Dynamic from './components/dynamic and reuseable component/Dynamic';



const App = () => {
  return (
    <>
      <div>
        <Dynamic
          name="Ali Raza"
          profilePhoto="https://avatars.githubusercontent.com/u/53422199?v=4"
          postDate="12 Dec 2022"
          postImage="https://pbs.twimg.com/card_img/1675273188723286016/dK_D3tDc?format=jpg&name=small"
          postText="I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol.
          I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol."
        />
        <Dynamic
          name="Muhammad Umar"
          profilePhoto="https://avatars.githubusercontent.com/u/53422199?v=4"
          postDate="1 Dec 2021"
          postImage="https://pbs.twimg.com/card_img/1675273188723286016/dK_D3tDc?format=jpg&name=small"
          postText="I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol.
          I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol."
        />
        <Dynamic
          name="Muhammad Ahsan"
          profilePhoto="https://avatars.githubusercontent.com/u/53422199?v=4"
          postDate="18 Dec 2022"

          postImage="https://pbs.twimg.com/card_img/1675273188723286016/dK_D3tDc?format=jpg&name=small"

          postText="I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol.
          I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol."
        />
        <Dynamic
          name="Muhammad Ali"
          profilePhoto="https://avatars.githubusercontent.com/u/53422199?v=4"
          postDate="27 Dec 2020"
          postImage="https://pbs.twimg.com/card_img/1675273188723286016/dK_D3tDc?format=jpg&name=small"
          postText="I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol.
          I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol."
        />
      </div>
    </>
  );
}

export default App