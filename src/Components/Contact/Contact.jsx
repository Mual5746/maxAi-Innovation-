import './Contact.css'
import React from 'react';
const Contact = () => {
  // eslint-disable-next-line no-undef
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Skickar....");
    const formData = new FormData(event.target);
    //kom ihåg att radera kye när du pushar 
    formData.append("access_key", "9bf3e983-607d-4061-adf3-4d2ca7f5048a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Meddelandet skickades");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' >
      <div className="contact-col">
        <h3>Skicka ett meddelande</h3>
        <p> ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos reiciendis cumque fugit, placeat saepe blanditiis, similique veniam in debitis architecto quis suscipit non. Optio molestiae, fuga qui possimus provident iusto.</p>
        <ul>
          <li>email@gmail.com</li>
          <li>+46000000</li>
          <li>Uppsala</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">Namn</label>
          <input type="text" name='name' placeholder='Förnamn Efternamn' required />
          <label htmlFor="">Telefon</label>
          <input type="tel" name='phone' placeholder='+46730000000' required />
          <label htmlFor="">Meddelande</label>
          <textarea name="message" rows="6" placeholder='Skriv ditt meddelande...' required></textarea>
          <button type='submit' className='btn btn-dark'>SKICKA</button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
