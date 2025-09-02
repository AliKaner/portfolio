"use client";

import React, { useState } from "react";
import Button from "../../commons/Button";
import Input from "../../commons/Input";
import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:alikaner.dev@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${message}
      `)}`;

      // Open default email client
      window.open(mailtoLink, "_blank");

      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
      });
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2>Contact Me</h2>
      <p className={styles.description}>
        Feel free to get in touch with me. I'll get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />

        <div className={styles.editorContainer}>
          <label className={styles.label}>Message</label>
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Write your message here..."
            className={styles.textarea}
            rows={8}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {submitStatus === "success" && (
          <div className={styles.success}>
            <p>
              ✅ Your email client should open with the message. If it doesn't,
              please send an email to alikaner.dev@gmail.com
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className={styles.error}>
            <p>
              ❌ There was an error. Please try again or send an email directly
              to alikaner.dev@gmail.com
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
