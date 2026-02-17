import Counter from "./Component/Counter.tsx";
import ToDoList from "./Component/ToDoList.tsx";
import ContactForm from "./Component/ContactForm.tsx";
import './App.css'

function App() {


  return (
    <>
        <h1> EXO 1 </h1>
            <Counter></Counter>
        <h1> EXO 2 </h1>
            <ToDoList></ToDoList>
        <h1> EXO 3 </h1>
            <ContactForm></ContactForm>
    </>
  )
}

export default App
