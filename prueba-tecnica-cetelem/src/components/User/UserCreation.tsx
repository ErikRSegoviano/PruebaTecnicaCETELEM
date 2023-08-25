import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function UserCreation(props) {
  const { onCreateNewUser } = props;
  const navigation = useNavigate();
  const [disabledButton, setDisabledButton] = useState(true);

  const [user, setUser] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const saveInput = (key, e) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const onSave = () => {
    onCreateNewUser(user);
    navigation("/users");
  };

  useEffect(() => {
    if (
      !!!user.user_name &&
      user.first_name &&
      user.last_name &&
      user.phone_number &&
      user.phone_number.length === 10
    ) {
      let userName =
        user.first_name.toString().charAt(0) +
        user.last_name +
        user.phone_number.toString().substring(7, 9);
      setUser({
        ...user,
        user_name: userName,
      });
    }

    if (
      user.first_name &&
      user.last_name &&
      user.email &&
      user.phone_number &&
      user.phone_number.length === 10 &&
      user.user_name
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [user]);

  return (
    <>
      <div className="mb-3">
        <label className="form-label">Creación de nuevo usuario</label>
      </div>
      <div className="mb-2">
        <label className="form-label">User Name</label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="User Name Auto generado a partir de tus datos"
            readOnly
            value={user?.user_name}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6 p-2">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            onBlur={(e) => saveInput("first_name", e)}
          />
        </div>
        <div className="col-md-6 p-2">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            onBlur={(e) => saveInput("last_name", e)}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6 p-2">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(e) => saveInput("email", e)}
          />
        </div>
        <div className="col-md-6 p-2">
          <label className="form-label">Telefono</label>
          <input
            type="text"
            className="form-control"
            placeholder="Telefono"
            onChange={(e) => saveInput("phone_number", e)}
          />
        </div>
      </div>

      <div className="mb-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onSave()}
          disabled={disabledButton}
        >
          Guardar
        </button>
      </div>
    </>
  );
}

UserCreation.propTypes = {};

export default UserCreation;
