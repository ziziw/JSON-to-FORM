import Element from "./Element";
import formJson from "../questions.json";
import { useState, useEffect } from "react";
import { FormContext } from "../FormContext";
import { useNavigate } from "react-router-dom";

//simulate GET api call.
const getJson = () => {
    return formJson;
};

//HTTP POST request.
const postData = async (form) => {
    const res = await fetch("https://enovode7uq1r.x.pipedream.net/", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(form),
    });

    //save to local storage
    localStorage.setItem("questions", form);
};

const Form = () => {
    const [elements, setElements] = useState(null);
    useEffect(() => {
        setElements(getJson());
    }, []);

    const { questions } = elements ?? {};

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        postData(elements);
        navigate("/merci/" + elements.questions[0].fields[0].value);
    };

    const handleChange = (id, event) => {
        const newElements = { ...elements };
        newElements.questions.forEach((element) => {
            element.fields.forEach((field, i) => {
                const { type, value, name } = field;
                if (name === id) {
                    field["value"] = event.target.value;
                }
                setElements(newElements);
            });
        });
    };

    return (
        <div>
            <FormContext.Provider value={{ handleChange }}>
                <div className="App container">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {questions
                            ? questions.map((question, i) => {
                                  const { title, fields } = question;
                                  return (
                                      <div key={i}>
                                          <h1 key={i}>{title}</h1>
                                          {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
                                      </div>
                                  );
                              })
                            : null}

                        <button type="submit" className="btn btn-primary">
                            Enregistrer
                        </button>
                    </form>
                </div>
            </FormContext.Provider>
            ;
        </div>
    );
};

export default Form;
