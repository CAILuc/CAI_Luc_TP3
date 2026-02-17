import {useState} from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: any) => {
        
        validateField("name", e.target.name)
        validateField("email", e.target.email)
        validateField("phone", e.target.phone)
        validateField("message", e.target.message)
    };

    const validateField = (fieldName: string, value: any) => {
        switch (fieldName) {
            case "name":
                if (!value) {
                    setErrors(["Nom Requis"]);
                } else if (value.length < 2) {
                    setErrors(["Nom avec minimum 2 caracteres requis"]);
                } else {
                    setFormData(value)
                }
                break;
            case "email":
                if (!value) {
                    setErrors(["Email Requis"]);
                } else if (value != "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/") {
                    setErrors(["Email non conforme"]);
                }
                break;
            case "phone":
                if (!value) {
                    setErrors(["Téléphone Requis"]);
                } else if (value == "/^0[1-9]\d{8}$/") {
                    setErrors(["Téléphone de 10 caractère requis"]);
                }
                break;
            case "message":
                if (!value) {
                    setErrors(['Message Requis']);
                } else if (value.length < 10) {
                    setErrors(["Message de minimum 10 caractères requis"]);
                }
                break;
        }

        return errors
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        if (submitSuccess){
            return "✅ Message envoyé avec succès !"
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nom"> Nom : </label>
            <input
                name="nom"
                type="text"
                onChange={handleChange}
                value={formData.name}
            />

            <label htmlFor="email"> Email : </label>
            <input
                name="email"
                type="text"
                onChange={handleChange}
                value={formData.email}
            />

            <label htmlFor="phone"> Téléphone : </label>
            <input
                name="phone"
                type="tel"
                onChange={handleChange}
                value={formData.phone}
            />

            <label htmlFor="message"> Message : </label>
            <input
                name="message"
                type="text"
                onChange={handleChange}
                value={formData.message}
            />
            <button type={"submit"} disabled={true}>Envoyer</button>
        </form>

    );
}

export default ContactForm;