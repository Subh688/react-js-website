import React, {useState} from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return{
        ...preVal,
        [name] : value,
      }
    })
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is : ${data.fullname}. My phone no. is : ${data.phone}. My email is : ${data.email} and I want to say "${data.msg}"`);
  };

  return (
  <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
      <hr className="w-25 mx-auto" />
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto mb-5">
          <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text" 
                class="form-control" 
                id="name" 
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter Your Name" 
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone No.</label>
              <input 
                type="text" 
                class="form-control" 
                id="phone" 
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Enter You Mobile No." 
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input 
                type="email" 
                class="form-control" 
                id="email" 
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com" 
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea 
                class="form-control" 
                id="message" 
                rows="3" 
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                placeholder="Describe Your Message Here">
              </textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Contact;
