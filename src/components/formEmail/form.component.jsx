import { useForm } from "react-hook-form";
import './style.scss';

const Form = ({isIconVisible}) =>
{
    const { register, handleSubmit, formState: { errors } } = useForm({mode:"all", criteriaMode:"all"});
    const onSubmit = (data) => console.log(data);
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`input_wrapper ${errors.email ? "error" : undefined}`} error={errors.email?.message}>
                <label htmlFor="email-address" hidden={true}>Email Address</label>
                <input
                    name="Email"
                    id="email-address"
                    type="text"
                    placeholder="Your Email Address..."
                    {...register("email", { required: { value: true, message: "This Field Can't be empty.!" }, pattern: { value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: "Please Provide a Valid email address.!" }, })}
                    className={`input_field email `} />
                {isIconVisible && <i className="fa-solid fa-envelope"></i>}
            </div>
            <button type="submit">Notify Me</button>
        </form>
     );
}
 
export default Form;
