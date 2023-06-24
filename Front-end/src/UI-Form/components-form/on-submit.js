import axios from 'axios';

export const OnSubmit = (data) => {
  console.log(data)
  axios.post('http://localhost:8080/send/add', data)
    .then(response => {
      console.log(response.data);
      alert('Sent successfully!');
    })
    .catch(error => {
      console.log(error);
      alert('An error occurred while sending !.');
    });
};
export const OnChange = (e) => {
    e.preventDefault();
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        tara: e.target.tara.value,
        adresa: e.target.adresa.value,
        telefon: e.target.telefon.value,
        bmilitara: e.target.bmilitara.value,
        cantitate: e.target.cantitate.value,
        AddressID: null,
        }
        console.log(formData);
        OnSubmit(formData);
        };
