import TextInput from "../TextInput/TextInput"
import React, {useState} from "react"
import styles from './CreateUser.module.css'
import { useCreateUserMutation } from "../../store/api/usersApi"

 const CreateUser = () => {  
    const [CreateUser] = useCreateUserMutation()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [Feedback, setFeedback] = useState('')
    const[submitted, setSubmitted] = useState(false)

    const submitHandler = () =>{
        console.log(firstName)
        console.log(lastName)
        if (firstName !== '' && lastName !== ''){
            setFirstName('')
            setLastName('')
        setFeedback(`Hej ${firstName} ${lastName}, Välkommen`)
        setSubmitted(true)
        setTimeout(() => {
            setFeedback('')
        }, 3000)
        CreateUser({user: {firstName: firstName, lastName: lastName}})
    } else{
        setSubmitted(false)
        setFeedback('Fyll i alla fält')
    }
}
    return(
        <div className={styles.container}>
       
            
        
            <TextInput value={firstName}placeholder="Förnamn" onInput= {(event) => {setFirstName(event.target.value)} } />
            <TextInput value={lastName} placeholder="Efternamn" onInput= {(event) => {setLastName(event.target.value)} } />

            <button className={styles.submitButton} onClick={submitHandler}>Klicka på mig!</button>
            <p className={styles.feedbackText} style={{color: submitted ? 'green' : 'red'}}>{Feedback}</p>
        </div>
    )
}
export default CreateUser;