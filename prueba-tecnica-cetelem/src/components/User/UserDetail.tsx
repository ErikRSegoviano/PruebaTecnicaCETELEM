import React from "react";
import PropTypes from "prop-types";

function UserDetail(props) {
  const { user } = props;

  return (
    <>
      <div className="mb-3">
        <label className="form-label">Detalle del usuario</label>
      </div>
      <div className="mb-2">
        <label className="form-label">UserName</label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="UserName"
            value={user.user_name}
            readOnly
          />
        </div>
      </div>
      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={user.first_name}
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Apellido</label>
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          value={user.last_name}
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={user.email}
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Telefono</label>
        <input
          type="text"
          className="form-control"
          placeholder="Telefono"
          value={user.phone_number}
          readOnly
        />
      </div>
    </>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetail;
