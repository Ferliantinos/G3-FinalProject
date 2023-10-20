import PageDirectory from "../fragments/PageDirectory";
import RegisterTitle from "../elements/RegisterElements/RegisterTitle";
import RegisterForm from "../fragments/RegisterForm";
const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageDirectory />
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
};
export default Register;
