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
        {/* Container for the different articles */}
        <div className="aboutMe__container__articles">
          {/* Article about koding */}
          <article className="aboutMe__container__articles__article aboutMe__container__article--Koding">
            {/* Title */}
            <h2 className="aboutMe__container__articles__article__title">Koding</h2>
            {/* Paragraph */}
            <p className="aboutMe__container__articles__article__paragraph">
              Jeg liker å kode, og et av grunnen for dette er fordi at jeg kan bruke kreativitet min
              til å skape noe jeg har sett og brukt flere steder på nettet før, for eksempel en
              image karusell.
              <br />
              <br />
              Jeg liker også å jobbe med javascript siden kode språket er ganske logisk. Dette gjør
              at man raskt finner løsninger på hvordan man kan skape noe. Hovedfokus blir jo da å
              optimalisere koden slik at den blir leselig, kort og forstålig. Og når jeg da oppnår
              en effectiv føles det ganske godt.
            </p>
          </article>
          {/* Linebreak */}
          <hr className="aboutMe__container__articles__lineBreak" />
          {/* Article about hobbies */}
          <article className="aboutMe__container__articles__article AboutMe__container__article--Hobbier">
            {/* Title */}
            <h2 className="aboutMe__container__articles__article__title">Hobbier</h2>
            {/* Paragraph */}
            <p className="aboutMe__container__articles__article__paragraph">
              Når det kommer til hobbier så driver jeg med videospill i fritien. Akkurat nå er
              favorittspillet mitt warcraft 3. Jeg liker både det sosiale og utfordrene aspektene
              med videospill Og warcraft 3 lar meg oppleve begge deler.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
