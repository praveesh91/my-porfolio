import React, { useState } from "react";
const Contact = () => {
  const [base64, setBase64] = useState("");

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    console.log(fileString);
    setBase64(fileString);
    console.log(base64);
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(file);
      onLoad(reader.result);
      console.log(base64);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://247iak215i.execute-api.us-east-1.amazonaws.com/sendEmail", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "praveesh91@gmail.com",
        email: "praveesh91@gmail.com",
        senderEmail: "johnDoe@gmail.com",
        senderName: "John Doe",
        message: "HELLO WORLD THIS IS FROM REACT APP P.S. Lebron the GOAT.",
        // base64Data: base64,
        date: new Date().toISOString().split("T")[0],
        fileName: "TEST_FILE_NAME",
      }),
    });
  };

  return (
    <div className="App">
      <form>
        <input type="file" accept="application/pdf" onChange={onChange} />
      </form>
      <button onClick={handleSubmit}>SEND TO LAMBDA</button>
    </div>
  );
};

export default Contact;
