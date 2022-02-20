export default function Form({update, data}) {

  const handleSubmit = e => {
    e.preventDefault();
    const addContactsForm = document.querySelector('#addContacts');
    const name = addContactsForm.name.value.trim();
    const phone = addContactsForm.phone.value.trim();
    validateForm(name, phone);
    addContactsForm.reset();
  }

  const validateForm = (name, phone) => {

    const patternName = /^[a-zA-Z ]*$/;
    const patternPhone = /^(?:0|\+)[0-9 ()]*$/;
    let duplicatePhone = true;

    if (name) {
      if (!patternName.test(name)) {
        console.log('Name shoud contain only letters and white spaces');
      }
    } else {
      console.log('You forgot to enter the name');
    }
  
    if (phone) {
      if (!patternPhone.test(phone)) {
        console.log('Incorrect phone format');
      } else {
        const checkDuplicatePhone = data.map((item) => {
          if (item.phone.indexOf(phone) !== -1) {
            console.log('Phone number already exist in DB!');
            return duplicatePhone = false;
          }
        })
      }
    } else {
      console.log('You forgot enter the phone');
    }
    
    if (name && phone && patternName.test(name) && patternPhone.test(phone) && duplicatePhone) {
      update(name, phone);
    }

  }

  return (
    <div className="container-fluid">
      <div className="container">
        <h2>Add contacts</h2>
        <form id="addContacts">
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Enter name" name="name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Enter phone number" name="phone" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-primary btn-success" onClick={e => {handleSubmit(e)}}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
  
}