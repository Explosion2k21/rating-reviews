import React, { useState, useReducer } from "react";
import Modal from "react-modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import axios from "axios";

// those labels to get the rating from the user
const labels = {
  1: "Poor",
  2: "Fair",
  3: "Average",
  4: "Good",
  5: "Great",
};
// usestyle to style the model required from material-ui
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  root2: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
}));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "500px",
  },
};

const AddReviews = ({ product }) => {
  var subtitle;
  //declare the userInput and the method  with the useReducer the hooks method to set those state with object assign
  const [userInput, setUserInput] = useReducer(
    (state, newState) => Object.assign(state, newState),
    {
      summary: "",
      body: "",
      email: "",
      reviewer_name: "",
    }
  );
  //handleChange of special inputs
  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
    console.log(userInput);
  };
  //declaring some value to controle them with there methods we need those value in the add review model
  const [recommend, setrecommend] = useState(true);
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = useState(false);
  //method to open the modal
  const openModal = () => {
    setIsOpen(true);
  };
  // handleSubmit method to send post request to add review
  const handleSubmit = (evt) => {
    evt.preventDefault();
    userInput.rating = value;
    // userInput.review_id = uuid();
    userInput.product_id = product * 1;
    userInput.recommend = recommend;
    axios
      .post("http://206.81.26.204:3004/reviews", userInput)
      .then(() => {
        console.log("done");
      })
      .catch((err) => console.log(err));
  };

  // adding some style to the modal
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
    subtitle.style.width = "250px";
  };
  //method to close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="add-reviews button">
        ADD A REVIEW <i className="fa fa-plus"></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Write Your Review</h2>
        <button onClick={closeModal} className="close-model-review">
          x
        </button>

        <form className="form-add-reviews">
          <div className={classes.root2}>
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </div>

          <div className={classes.root}>
            <TextField
              id="standard-full-width"
              label="summary"
              style={{ margin: 8 }}
              placeholder="Example: Best purchase ever!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="summary"
              onChange={handleChange}
            />
            <TextField
              id="standard-full-width"
              label="Your Review"
              style={{ margin: 8 }}
              placeholder="Why did you like the product or not?"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="body"
              onChange={handleChange}
            />
            <TextField
              id="standard-full-width"
              label="Your nickname"
              style={{ margin: 8 }}
              placeholder="Example: jackson11!"
              helperText="For privacy reasons, do not use your full name or email address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="reviewer_name"
              onChange={handleChange}
            />
            <TextField
              id="standard-full-width"
              label="Your email"
              style={{ margin: 8 }}
              placeholder="Example: jackson11@email.com"
              helperText="For authentication reasons, you will not be emailed"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="email"
              onChange={handleChange}
            />
            <div className="recommendyorn">
              {" "}
              I recommend this product :{" "}
              <div
                onClick={() => {
                  setrecommend(!recommend);
                }}
              >
                {!recommend ? <a>YES</a> : <a>NO</a>}
              </div>
            </div>
          </div>
          <button className="btn-submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddReviews;
