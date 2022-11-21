import React from "react";

export default function AboutMe() {
  return (
    <section className="AboutMe">
      <div className="AboutMe__container">
        <h1 className="AboutMe__container__title">Om meg</h1>
        <article className="AboutMe__container__article AboutMe__container__article--Koding">
          <h2 className="AboutMe__container__article__title">Koding</h2>
          <p className="AboutMe__container__article__paragraph">
            Jeg liker å kode, og et av grunnen for dette er fordi at det gjør at jeg kan bruke kreativitet til å skape noe, for eksempel image karusell.
            <br />
            <br />
            Jeg liker også å jobbe med javascript siden kode språket er ganske logisk. Dette gjør at måten man finner løsninger er ganske steg for steg som føles godt når du løser det
          </p>
        </article>

        <hr className="AboutMe__container__lineBreak" />

        <article className="AboutMe__container__article AboutMe__container__article--Hobbier">
          <h2 className="AboutMe__container__article__title">Hobbier</h2>
          <p className="AboutMe__container__article__paragraph">
            Når det kommer til hobbier så driver jeg med videospill i fritien. Akkurat nå er favorittspillet mitt warcraft 3. Jeg liker både det sosiale og utfordrene aspektene med videospill Og
            warcraft 3 lar meg oppleve begge deler.
          </p>
        </article>
      </div>
    </section>
  );
}
