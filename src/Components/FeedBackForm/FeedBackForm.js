import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
const customStyles = {

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const FeedBackForm = ({ modalIsOpen, closeModal }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Button onClick={closeModal} variant="contained" color="primary">Close</Button>
        <div className="orders-container ml-5 mr-5 ">
          <h1>Thank you so much for taking the time!</h1>
          <p>Please provide the bellow details</p>
          <form onSubmit={handleSubmit(onSubmit)}>

            <label className="db">First Name</label>
            <input className="form-control " defaultValue="" {...register("example")} />

            <label className="db">Last Name</label>
            <input className="form-control " {...register("exampleRequired", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}

            <label className="db">Address</label>
            <textarea  {...register("message", { required: true })} className="form-control" name='message' rows="5" id="message" />
            {errors.message && <span className="error">Message is required</span>}


            <label className="db">Country</label>
            <input className="form-control " {...register("exampleRequired", { required: true })} />

            <label className="db">Email Id</label>
            <input className="form-control " {...register("exampleRequired", { required: true })} />

            <label className="db">Phone Number</label>
            <input className="form-control " {...register("exampleRequired", { required: true })} />

            <input className="form-control bg-success text-white mt-2"  type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default FeedBackForm;