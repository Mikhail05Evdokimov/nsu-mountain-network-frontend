import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../home-page/HomePageActions";

function UserDataChangeTab() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profilePage.user);

  const [formValue, setFormValue] = useState({
    name: user.user_name,
    email: user.user_email,
    phone: user.user_phone.toString(),
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    dispatch(
      registerUser(
        {
          ...formValue,
        } || null
      )
    );
  };

  return (
    <div className={"d-flex flex-column gap-3 p-3"}>
      <h3>Изменить данные</h3>
      <MDBValidation
        isValidated
        className={"d-flex flex-column align-items-start gap-1"}
        onSubmit={onSubmit}
      >
        <MDBValidationItem feedback>
          <MDBInput
            value={formValue.name}
            name="name"
            onChange={onChange}
            label="Имя"
          />
        </MDBValidationItem>
        <MDBValidationItem feedback>
          <MDBInput
            value={formValue.email}
            name="email"
            type="email"
            onChange={onChange}
            label="Почта"
          />
        </MDBValidationItem>
        <MDBValidationItem feedback>
          <MDBInput
            value={formValue.phone}
            name="phone"
            type="tel"
            onChange={onChange}
            label="Номер телефона"
          />
        </MDBValidationItem>
        <MDBBtn type="submit" color={"success"}>
          Сохранить
        </MDBBtn>
      </MDBValidation>
    </div>
  );
}

export default UserDataChangeTab;
