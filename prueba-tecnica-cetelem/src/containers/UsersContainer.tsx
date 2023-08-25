import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function UsersContainer(props) {
  const navigate = useNavigate();
  const { onClickRow, users } = props;

  useEffect(()=>{
    !!!users && navigate("/users");
  },[]);

  const handleOnClickRow = (user) => {
    onClickRow(user);
    navigate("/userDetail");
  };

  const getUsers = () => {
    //Usualmente esto deberia hacer un llamado a API para obtener la lista de usuarios
    //Para simplificar se usa un archivo mock en formato json
    //El componente solo recibe la lista por parametro
    return users?.map((user) => {
      return (
        <tr key={user.user_name} onClick={() => handleOnClickRow(user)}>
          <td scope="col">{user.user_name}</td>
          <td scope="col">{user.first_name}</td>
          <td scope="col">{user.last_name}</td>
          <td scope="col">{user.email}</td>
          <td scope="col">{user.phone_number}</td>
        </tr>
      );
    });
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Telefono</th>
        </tr>
      </thead>
      <tbody>{getUsers()}</tbody>
    </table>
  );
}

UsersContainer.propTypes = {
  onClickRow: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsersContainer;
