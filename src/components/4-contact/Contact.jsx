import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "./../../animation/done.json";
import contactAnimation from "./../../animation/contact.json";
export const Contact = () => {
  const [state, handleSubmit] = useForm("meojblwa");

  return (
    <section className="contact-us">
      <h2 className="title">
        <span className="icon-envelope"></span>
        Contact Me
      </h2>
      <p className="subtitle">
        Feel free to reach out if you have any questions, opportunities, or
        would like to collaborate :)
      </p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div style={{ marginTop: "24px" }} className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ marginTop: "1.7rem", fontSize: "20px" }}
            >
              <Lottie
                loop={false}
                style={{ height: "37px", marginRight: "8px" }}
                animationData={doneAnimation}
              />
              Thank you! Your message has been sent.😊
            </p>
          )}
        </form>
        <div className="animation">
          {" "}
          <Lottie
            style={{ height: "330px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};
