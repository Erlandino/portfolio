export default function Contact() {
  return (
    <section className="Contact">
      <form action="" className="Contact__form">
        <h2>Kontakt skjema</h2>

        <label htmlFor="name" className="Contact__form__label">
          Navn
        </label>
        <input type="text" id="name" name="name" className="Contact__form__input" />

        <label htmlFor="email" className="Contact__form__label">
          Email
        </label>
        <input type="text" id="email" name="email" className="Contact__form__input" />

        <label htmlFor="message" className="Contact__form__label">
          Beskjed
        </label>
        <textarea id="message" name="message" className="Contact__form__textarea"></textarea>
      </form>
    </section>
  );
}
