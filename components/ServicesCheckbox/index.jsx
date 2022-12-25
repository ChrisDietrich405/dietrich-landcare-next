import React, { Component } from "react";
import styles from "./styles.module.css";

const ServicesCheckbox = ({isSubmitting, change}) => {
  
  const func = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <h3 className={styles.checkbox_title}>
        What services are you interested in?
      </h3>
      <form className={styles.checkbox_container} onSubmit={func}>
        <div>
          <div>
            <input name="lawn-care" type="checkbox" id="lawn-care" />
            <label htmlFor="lawn-care">Lawn Care</label>
          </div>
          <div>
            <input name="power-washing" type="checkbox" id="power-washing"/>
            <label htmlFor="power-washing">Power Washing</label>
          </div>
        </div>
        <div>
          <div>
            <input name="stump-removal" type="checkbox" id="stump-removal" />
            <label htmlFor="stump-removal">Stump Removal</label>
          </div>
          <div>
            <input name="snow-removal" type="checkbox" id="snow-removal"/>
            <label htmlFor="snow-removal">Snow Removal</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServicesCheckbox;

// import React, { Component } from "react";
// import axios from "axios";
// import styles from "./styles.module.css";

// class ServicesCheckbox extends Component {
//   state = {
//     value: [],
//     serviceItems: [],
//     isFormSubmitting: false,
//   };

//   async componentDidMount() {
//     const { data } = await axios.get("http://localhost:3001/api/getServices");
//     this.setState({ ...this.state, serviceItems: data.services });
//   }

//   async shouldComponentUpdate(nextProps) {
//     if (nextProps.isSubmitting && !this.state.isFormSubmitting) {
//       this.setState({ isFormSubmitting: true });
//     }

//     if (!nextProps.isSubmitting && this.state.isFormSubmitting) {
//       this.setState({ isFormSubmitting: false, value: [] });
//       this.props.change([]);

//       document
//         .querySelectorAll("input[type=checkbox]")
//         .forEach((el) => (el.checked = false));
//     }
//   }

//   onChange = (e) => {
//     const isChecked = this.state.value.find((element) => element === e.target.value)
//     let services = []
//     if (!isChecked) {
//       services = [...this.state.value, e.target.value];
//     }
//     else {
//       services = this.state.value.filter(
//         (element) => element !== e.target.value
//       );
//     }
//     this.setState({
//       value: services
//     })
//     this.props.change(services)
//   };

//   render() {
//     return (
//       <div className="checkbox-container">
//         <h3>What services are you interested in?</h3>

//         <div className="service-container">
//           {this.state.serviceItems.map((service, index) => {
//             return (
//               <div className={styles.services_container} key={index}>
//                 <label className="contact-label">
//                   <input
//                     disabled={this.props.isSubmitting}
//                     type="checkbox"
//                     value={service.permalink}
//                     className="checkbox-background-color"
//                     onChange={this.onChange}
//                   />
//                   <span className={styles.service_name}>{service.name}</span>
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default ServicesCheckbox;
