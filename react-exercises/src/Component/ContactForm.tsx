import {useState} from "react";

function ContactForm():any{
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [touched, setTouched] = useState({});

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        if (value){
            validateField(name, value);
        }
        if (Object.keys(validateAll()).length === 0){
            setSubmitSuccess(true)
        }
        else {
            setSubmitSuccess(false);
        }
    };

    const handleBlur = (e: any) => {
        const { name, value } = e.target;
        setTouched({ ...touched, [name]: true });
        validateField(name, value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const validationErrors = validateAll();

        if (Object.keys(validationErrors).length === 0) {
            setSubmitSuccess(true)
            setMessage("\n"+
                formData.nom+
                "\n"+formData.email+
                "\n"+formData.phone+
                "\n"+formData.message+

                "\n✅ Message envoyé avec succès !"
            )
        }
        else{
            setErrors(validationErrors);
            setTouched({
                nom: true,
                email: true,
                phone: true,
                message: true
            })
            setFormData({
                nom: '',
                email: '',
                phone: '',
                message: ''
            });
            setMessage( "Envoie impossible")
        }
    };


    const validateField = (fieldName: string, value: any) => {
        let error = ''
        switch (fieldName) {
            case "nom":
                if (!value) {
                    error ="Nom requis"
                } else if (value.length < 2) {
                    error ="Nom avec minimum 2 caracteres requis"
                }
                break;
            case "email":
                if (!value) {
                    error ="Email Requis"
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error ="Email non conforme"
                }
                break;
            case "phone":
                if (!value) {
                    error ="Téléphone Requis"
                } else if (!/^0[1-9]\d{8}$/.test(value)) {
                    error ="Téléphone de 10 chiffres requis"
                }
                break;
            case "message":
                if (!value) {
                    error ='Message Requis'
                } else if (value.length < 10) {
                    error ="Message de minimum 10 caractères requis"
                }
                break;
        }
        setErrors({...errors,[fieldName]: error});
    };

    const validateAll = () => {
        const newErrors:{nom: string, email: string, phone: string,message: string} = {};

        // Nom
        if (!formData.nom) {
            newErrors.nom = 'Le nom est requis';
        } else if (formData.nom.length < 2) {
            newErrors.nom = 'Le nom doit contenir au moins 2 caractères';
        }

        // Email
        if (!formData.email) {
            newErrors.email = 'L\'email est requis';
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))) {
            newErrors.email = 'L\'email n\'est pas valide';
        }

        // Téléphone
        if (!formData.phone) {
            newErrors.phone = 'Le téléphone est requis';
        } else if (!(/^0[0-9]\d{8}$/.test(formData.phone))) {
            newErrors.phone = 'Le téléphone doit contenir 10 chiffres';
        }

        // Message
        if (!formData.message) {
            newErrors.message = 'Le message est requis';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Le message doit contenir au moins 10 caractères';
        }

        return newErrors;
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="nom"> Nom : </label>
                    <input
                        name="nom"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formData.nom}
                    />
                    {touched.nom && errors.nom && (
                        <span className="error">{errors.nom}</span>
                    )}
                </li>
                <li>
                    <label htmlFor="email"> Email : </label>
                    <input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formData.email}
                    />

                    {touched.email && errors.email && (
                        <span className="error">{errors.email}</span>
                    )}
                </li>
                <li>
                    <label htmlFor="phone"> Téléphone : </label>
                    <input
                        name="phone"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formData.phone}
                    />
                    {touched.phone && errors.phone && (
                        <span className="error">{errors.phone}</span>
                    )}
                </li>
                <li>
                    <label htmlFor="message"> Message : </label>
                    <input
                        name="message"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formData.message}
                    />
                    {touched.message && errors.message && (
                        <span className="error">{errors.message}</span>
                    )}
                </li>
            </ul>
            <button type={"submit"} disabled={!submitSuccess}>Envoyer</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default ContactForm;