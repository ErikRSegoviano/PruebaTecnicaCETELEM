import { useState } from 'react'
import UserDetail from './components/User/UserDetail'
import UsersContainer from './containers/UsersContainer'
import Layout from './containers/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserCreation from './components/User/UserCreation'
import mockUsers from "./mockData/mockData.json";

function App() {
  const [userSelected, setUserSelected] = useState(null);
  const [users, setUsers] = useState([...mockUsers]);

  const handleClickRow = (user) => {
    setUserSelected(user);
  }

  const handleOnCreateNewUser = (user) => {
    setUsers([...users, user]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersContainer onClickRow={handleClickRow} />} users={users} />
          <Route index path="/users" element={<UsersContainer onClickRow={handleClickRow} users={users} />} />
          <Route path="/userDetail" element={<UserDetail user={userSelected} />} />
          <Route path="/newUser" element={<UserCreation onCreateNewUser={handleOnCreateNewUser} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
