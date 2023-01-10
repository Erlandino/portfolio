// imports
import React from "react";

// AboutMe component
export default function AboutMe() {
  return (
    // Section
    <section className="aboutMe" id="aboutMe">
      {/* Aboutme container */}
      <div className="aboutMe__container">
        {/* Title */}
        <h1 className="aboutMe__container__title">Om meg</h1>
        {/* Article about koding */}
        <article className="aboutMe__container__article aboutMe__container__article--Koding">
          {/* Title */}
          <h2 className="aboutMe__container__article__title">Koding</h2>
          {/* Paragraph */}
          <p className="aboutMe__container__article__paragraph">
            Jeg liker å kode, et av grunnen for dette er fordi at det gjør at jeg kan bruke
            kreativitet til å skape noe, for eksempel en image karusell.
            <br />
            <br />
            Jeg liker også å jobbe med kodespråk som javascript siden kode språket er ganske logisk.
            Dette gjør at måten man finner løsninger er ganske steg for steg som føles godt når du
            løser det
          </p>
        </article>

        {/* Linebreak */}
        <hr className="aboutMe__container__lineBreak" />

        {/* Article about hobbies */}
        <article className="aboutMe__container__article AboutMe__container__article--Hobbier">
          {/* Title */}
          <h2 className="aboutMe__container__article__title">Hobbier</h2>
          {/* Paragraph */}
          <p className="aboutMe__container__article__paragraph">
            Når det kommer til hobbier så driver jeg med videospill i fritien. Akkurat nå er
            favorittspillet mitt warcraft 3. Jeg liker både det sosiale og utfordrene aspektene med
            videospill Og warcraft 3 lar meg oppleve begge deler.
          </p>
        </article>
      </div>
    </section>
  );
}
