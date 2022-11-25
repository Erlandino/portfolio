export default function Contact() {
  return (
    <section className="contact">
      <form action="" className="contact__form">
        <h2>Kontakt skjema</h2>

        <label htmlFor="name" className="contact__form__label">
          Navn
        </label>
        <input type="text" id="name" name="name" className="contact__form__input" />

        <label htmlFor="email" className="contact__form__label">
          Email
        </label>
        <input type="text" id="email" name="email" className="contact__form__input" />

        <label htmlFor="message" className="contact__form__label">
          Beskjed
        </label>
        <textarea id="message" name="message" className="contact__form__textarea"></textarea>

        <button>Send mail</button>
      </form>
    </section>
  );
}
