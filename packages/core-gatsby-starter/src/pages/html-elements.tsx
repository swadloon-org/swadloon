import { Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { SrcPageTemplate, SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import * as styleRefs from '../styles/index.treat';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const lorenipsum = `Lorem ipsum dolor sit amet.`;
  const styles = useStyles(styleRefs);

  return (
    <Stack id={'HTML Elements'} gap={'55px'}>
      <h1>HTML Elements</h1>

      <Stack id={'Content sectioning'} gap={'21px'}>
        <h2>Content sectioning</h2>

        <Stack id={'Header'} gap={'13px'}>
          <h3>Header</h3>

          <header>
            <h1>Cute Puppies Express!</h1>
          </header>
        </Stack>

        <Stack id={'Headings'} gap={'13px'}>
          <h3>Headings</h3>

          <h1>Heading H1</h1>
          <h2>Heading H2</h2>
          <h3>Heading H3</h3>
          <h4>Heading H4</h4>
          <h5>Heading H5</h5>
          <h6>Heading H6</h6>

          <hgroup>
            <h1>Calculus I</h1>
            <h2>Fundamentals</h2>
            <h3>Fundamentals</h3>
            <h4>Fundamentals</h4>
            <h5>Fundamentals</h5>
            <h6>Fundamentals</h6>
          </hgroup>
        </Stack>

        <Stack id={'Main'} gap={'13px'}>
          <h3>Main</h3>

          <main role="main">
            <p>
              Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except
              Australia.
            </p>

            <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
          </main>
        </Stack>

        <Stack id={'Nav'} gap={'13px'}>
          <h3>Nav</h3>

          <nav className="crumbs">
            <ol>
              <li className="crumb">
                <a href="bikes">Bikes</a>
              </li>
              <li className="crumb">
                <a href="bikes/bmx">BMX</a>
              </li>
              <li className="crumb">Jump Bike 3000</li>
            </ol>
          </nav>
        </Stack>

        <Stack id={'Address'} gap={'13px'}>
          <h3>Address</h3>

          <address>
            <a href="mailto:jim@rock.com">jim@rock.com</a>
            <br />
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
        </Stack>

        <Stack id={'Article'} gap={'13px'}>
          <h3>Article</h3>

          <article>
            <h1>Weather forecast for Seattle</h1>
            <article>
              <h2>03 March 2018</h2>
              <p>Rain.</p>
            </article>
          </article>
        </Stack>

        <Stack id={'Aside'} gap={'13px'}>
          <h3>aside</h3>
          <p>
            Salamanders are a group of amphibians with a lizard-like appearance, including short legs and a tail in both
            larval and adult forms.
          </p>

          <aside>
            <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
          </aside>

          <p>
            Several species of salamander inhabit the temperate rainforest of the Pacific Northwest, including the
            Ensatina, the Northwestern Salamander and the Rough-skinned Newt. Most salamanders are nocturnal, and hunt
            for insects, worms and other small creatures.
          </p>
        </Stack>

        <Stack id={'Section'} gap={'13px'}>
          <h3>section</h3>

          <section>
            <h2>Equipment</h2>
            <p>
              The first thing you’ll need is a fishing rod or pole that you find comfortable and is strong enough for
              the kind of fish you’re expecting to land…
            </p>
          </section>
        </Stack>

        <Stack id={'Footer'} gap={'13px'}>
          <h3>Footer</h3>

          <footer>
            <p>© 2018 Gandalf</p>
          </footer>
        </Stack>
      </Stack>

      <Stack id={'Text content'} gap={'21px'}>
        <h2>Text content</h2>

        <Stack id={'Blockquotes'} gap={'21px'}>
          <h3>Blockquotes</h3>
          <blockquote>{lorenipsum}</blockquote>
        </Stack>
        <Stack id={'Dl'} gap={'21px'}>
          <h3>dl & dd & dt</h3>
          <dl>
            <dt>Beast of Bodmin</dt>
            <dd>A large feline inhabiting Bodmin Moor.</dd>

            <dt>Morgawr</dt>
            <dd>A sea serpent.</dd>

            <dt>Owlman</dt>
            <dd>A giant owl-like creature.</dd>
          </dl>
        </Stack>

        <h3>Div</h3>
        <div style={{ border: 'solid 1px red', padding: '10px' }}>
          <p>A div wrapper with a border and 10px padding</p>
        </div>

        <h3>Figure and Figure Caption</h3>
        <figure>
          <img
            width={200}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
            alt="Elephant at sunset"
          ></img>
          <figcaption>An elephant at sunset</figcaption>
        </figure>

        <h3>Horizontal Line</h3>
        <hr />

        <h3>Pre</h3>
        <pre>
          L TE A A C V R A DOU LOU REUSE QUE TU PORTES ET QUI T' ORNE O CI VILISÉ OTE- TU VEUX LA BIEN SI RESPI RER -
          Apollinaire
        </pre>
      </Stack>

      <Stack id={'Inline text semantics'} gap={'21px'}>
        <h2>Inline text semantics</h2>

        <h3>a</h3>
        <a href="#">Link</a>

        <h3>abbr</h3>
        <p>
          You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
          <abbr title="HyperText Markup Language">HTML</abbr>.
        </p>

        <h2>Datalist</h2>
        <p>Enter your favorite browser name:</p>
        <input type="text" list="browsers" />
        <datalist id="browsers">
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Internet Explorer" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>

        <h2>Keyboard Shorcuts</h2>
        <p>
          Please, input "<kbd>Yes</kbd>" or "<kbd>No</kbd>"
        </p>

        <h2>Datalist</h2>
        <img
          width="200px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/2880px-Cat_poster_1.jpg"
          useMap="#shapes"
          alt="Geometrical Shapes"
        />
        <map name="shapes">
          <area shape="circle" coords="40,40,40" href="circle.html" alt="Circle" />
          <area shape="poly" coords="148,2,104,80,193,80" href="triangle.html" alt="Triangle" />
          <area shape="rect" coords="226,2,323,80" href="rectangle.html" alt="Rectangle" />
          <area shape="poly" coords="392,2,352,32,366,80,418,80,432,32" href="pentagon.html" alt="Pentagon" />
        </map>

        <h3>b</h3>
        <p>
          The two most popular science courses offered by the school are <b className="term">chemistry</b> (the study of
          chemicals and the composition of substances) and <b className="term">physics</b> (the study of the nature and
          properties of matter and energy).
        </p>

        <h3>bdi</h3>
        <h1>World wrestling championships</h1>

        <ul>
          <li>
            <bdi className="name">Evil Steven</bdi>: 1st place
          </li>
          <li>
            <bdi className="name">François fatale</bdi>: 2nd place
          </li>
          <li>
            <span className="name">تیز سمی</span>: 3rd place
          </li>
          <li>
            <bdi className="name">الرجل القوي إيان</bdi>: 4th place
          </li>
          <li>
            <span className="name" dir="auto">
              تیز سمی
            </span>
            : 5th place
          </li>
        </ul>

        <h3>bdo</h3>
        <p>The English song "Oh I do like to be beside the seaside"</p>
        <p>
          Looks like this in Hebrew: <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
        </p>
        <p>
          In the computer's memory, this is stored as <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
        </p>

        <h3>br</h3>
        <p>
          O’er all the hilltops<br></br>
          Is quiet now,<br></br>
          In all the treetops<br></br>
          Hearest thou<br></br>
          Hardly a breath;<br></br>
          The birds are asleep in the trees:<br></br>
          Wait, soon like these<br></br>
          Thou too shalt rest.
        </p>

        <h3>cite</h3>
        <blockquote>
          <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
          <footer>
            First sentence in
            <cite>
              <a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a>
            </cite>
            by George Orwell (Part 1, Chapter 1).
          </footer>
        </blockquote>

        <h3>code</h3>

        <p>
          The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of
          the array.
        </p>

        <h3>data</h3>
        <p>New Products:</p>
        <ul>
          <li>
            <data value="398">Mini Ketchup</data>
          </li>
          <li>
            <data value="399">Jumbo Ketchup</data>
          </li>
          <li>
            <data value="400">Mega Jumbo Ketchup</data>
          </li>
        </ul>

        <h3>dfn</h3>
        <p>
          A <dfn id="def-validator">validator</dfn> is a program that checks for syntax errors in code or documents.
        </p>

        <h3>em</h3>
        <p>
          Get out of bed <em>now</em>!
        </p>

        <p>
          We <em>had</em> to do something about it.
        </p>

        <p>
          This is <em>not</em> a drill!
        </p>

        <h3>i</h3>
        <p>
          I looked at it and thought <i>This can't be real!</i>
        </p>

        <p>
          <i className="latin">Musa</i> is one of two or three genera in the family <i className="latin">Musaceae</i>;
          it includes bananas and plantains.
        </p>

        <p>
          The term <i>bandwidth</i> describes the measure of how much information can pass through a data connection in
          a given amount of time.
        </p>

        <h3>Mark</h3>
        <p>Search results for "salamander":</p>
        <p>Search results for "salamander":</p>
        <hr></hr>
        <p>
          Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.
        </p>
        <p>
          Most <mark>salamander</mark>s are nocturnal, and hunt for insects, worms, and other small creatures.
        </p>

        <h3>q</h3>
        <p>
          When Dave asks HAL to open the pod bay door, HAL answers:{' '}
          <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
            I'm sorry, Dave. I'm afraid I can't do that.
          </q>
        </p>

        <h3>s</h3>
        <p>
          <s>There will be a few tickets available at the box office tonight.</s>
        </p>

        <h3>samp</h3>
        <p>
          <samp>
            Keyboard not found <br></br>Press F1 to continue
          </samp>
        </p>

        <h3>small</h3>
        <p>
          <small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small>
        </p>

        <h3>span</h3>
        <p>
          Gradually add the <span style={{ color: 'green' }}>olive oil</span> while running the blender slowly.
        </p>

        <h3>strong</h3>
        <p>
          ... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he
          begs: <strong>never feed him after midnight</strong>.
        </p>

        <h3>sub</h3>
        <p>
          Almost every developer's favorite molecule is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also
          known as "caffeine."
        </p>

        <h3>sup</h3>
        <p>
          The <b>Pythagorean theorem</b> is often expressed as the following equation:
        </p>

        <h3>time</h3>
        <p>
          The Cure will be celebrating their 40th anniversary on <time dateTime="2018-07-07">July 7</time> in London's
          Hyde Park.
        </p>

        <h3>u</h3>
        <p>
          You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.
        </p>

        <h3>var</h3>
        <p>
          The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where <var>l</var> represents the length,
          <var>w</var> the width and <var>h</var> the height of the box.
        </p>

        <h3>wbr</h3>
        <div id="example-paragraphs">
          <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
          <p>
            Fernstraßen<wbr></wbr>bau<wbr></wbr>privat<wbr></wbr>finanzierungs<wbr></wbr>gesetz
          </p>
          <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
        </div>
      </Stack>
      <Stack id={'Demarcating edits'}>
        <blockquote>
          There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del>
          <ins>running it</ins> makes it so.
        </blockquote>
      </Stack>

      <Stack id={'Image and multimedia'} gap={'21px'}>
        <h2>Image and multimedia</h2>

        <h3>area</h3>

        <map name="primary">
          <area shape="circle" coords="75,75,75" href="left.html" alt="Click to go Left"></area>
          <area shape="circle" coords="275,75,75" href="right.html" alt="Click to go Right"></area>
        </map>
        <img useMap="#primary" src="http://placehold.it/350x150" alt="350 x 150 pic"></img>

        <h3>audio</h3>
        <figure>
          <figcaption>Listen to the T-Rex:</figcaption>
          <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>

        <h3>img</h3>
        <img
          className="fit-picture"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          alt="Grapefruit slice atop a pile of other slices"
        ></img>

        <h3>map</h3>
        <map name="infographic">
          <area
            shape="poly"
            coords="130,147,200,107,254,219,130,228"
            href="https://developer.mozilla.org/docs/Web/HTML"
            target="_blank"
            alt="HTML"
          />
          <area
            shape="poly"
            coords="130,147,130,228,6,219,59,107"
            href="https://developer.mozilla.org/docs/Web/CSS"
            target="_blank"
            alt="CSS"
          />
          <area
            shape="poly"
            coords="130,147,200,107,130,4,59,107"
            href="https://developer.mozilla.org/docs/Web/JavaScript"
            target="_blank"
            alt="JavaScript"
          />
        </map>
        <img useMap="#infographic" src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png" />

        <h3>track</h3>
        <video controls src="/media/cc0-videos/friday.mp4">
          <track
            default
            kind="captions"
            srcLang="en"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
          />
          Sorry, your browser doesn't support embedded videos.
        </video>

        <h3>Video</h3>
        <video controls width="250">
          <source src="/media/cc0-videos/flower.webm" type="video/webm"></source>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
            type="video/mp4"
          ></source>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </Stack>
      {/*
      <Stack id={'Table content'} gap={'21px'}>
        <h3>embed</h3>
        <embed
          type="video/webm"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
          width="250"
          height="200"
        ></embed>

        <h3>iframe</h3>
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="300"
          height="200"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
        ></iframe>

        <h3>object</h3>
        <object
          type="application/pdf"
          data="https://interactive-examples.mdn.mozilla.net/media/examples/In-CC0.pdf"
          width={250}
          height={200}
        ></object>

        <h3>param</h3>
        <object type="application/pdf" data="/media/examples/In-CC0.pdf" width={250} height={200}></object>

        <h3>picture</h3>
        <picture>
          <source
            srcSet="https://interactive-examples.mdn.mozilla.net/media/cc0-images/surfer-240-200.jpg"
            media="(min-width: 800px)"
          ></source>
          <img
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg"
            alt=""
          ></img>
        </picture>

        <h3>source</h3>
        <video controls width="250" height="200" muted>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/webm"
          ></source>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          ></source>
          This browser does not support the HTML5 video element.
        </video>
      </Stack> */}

      <Stack className="wrapper" id={'Table content'} gap={'21px'}>
        <h3>Table and Caption</h3>

        <caption>He-Man and Skeletor facts</caption>

        <table>
          <tbody>
            <tr>
              <td> </td>
              <th scope="col" className="heman">
                He-Man
              </th>
              <th scope="col" className="skeletor">
                Skeletor
              </th>
            </tr>
            <tr>
              <th scope="row">Role</th>
              <td>Hero</td>
              <td>Villain</td>
            </tr>
            <tr>
              <th scope="row">Weapon</th>
              <td>Power Sword</td>
              <td>Havoc Staff</td>
            </tr>
            <tr>
              <th scope="row">Dark secret</th>
              <td>Expert florist</td>
              <td>Cries at romcoms</td>
            </tr>
          </tbody>
        </table>

        <h3>col and colgroup</h3>
        <table>
          <tbody>
            <caption>Superheros and sidekicks</caption>
            <colgroup>
              <col></col>
              <col span={2} className="batman" style={{ backgroundColor: 'red' }}></col>
              <col span={2} className="flash" style={{ backgroundColor: 'yellow' }}></col>
            </colgroup>
            <tr>
              <td> </td>
              <th scope="col">Batman</th>
              <th scope="col">Robin</th>
              <th scope="col">The Flash</th>
              <th scope="col">Kid Flash</th>
            </tr>
            <tr>
              <th scope="row">Skill</th>
              <td>Smarts</td>
              <td>Dex, acrobat</td>
              <td>Super speed</td>
              <td>Super speed</td>
            </tr>
          </tbody>
        </table>

        <h3>Tbody and thead</h3>
        <table>
          <caption>Council budget (in £) 2018</caption>
          <thead>
            <tr>
              <th>Items</th>
              <th scope="col">Expenditure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Donuts</th>
              <td>3,000</td>
            </tr>
            <tr>
              <th scope="row">Stationery</th>
              <td>18,000</td>
            </tr>
          </tbody>
        </table>

        <h3>tfoot</h3>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th scope="col">Expenditure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Donuts</th>
              <td>3,000</td>
            </tr>
            <tr>
              <th scope="row">Stationery</th>
              <td>18,000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Totals</th>
              <td>21,000</td>
            </tr>
          </tfoot>
        </table>
      </Stack>

      <Stack id={'Forms'} gap={'21px'}>
        <h2>Forms</h2>

        <Stack id={'content-form'} gap={'21px'}>
          <h3>Button</h3>
          <button className="favorite styled" type="button">
            Add to favorites
          </button>

          <h3>Data List</h3>

          <label>Choose a flavor:</label>
          <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

          <datalist id="ice-cream-flavors">
            <option value="Chocolate" />
            <option value="Coconut" />
            <option value="Mint" />
            <option value="Strawberry" />
            <option value="Vanilla" />
          </datalist>

          <h3>fieldset</h3>
          <form>
            <fieldset>
              <legend>Choose your favorite monster</legend>

              <input type="radio" id="kraken" name="monster"></input>
              <label>Kraken</label>
              <br />

              <input type="radio" id="sasquatch" name="monster"></input>
              <label>Sasquatch</label>
              <br />

              <input type="radio" id="mothman" name="monster"></input>
              <label>Mothman</label>
            </fieldset>
          </form>

          <h3>Form</h3>
          <form action="" method="get" className="form-example">
            <div className="form-example">
              <label htmlFor="name">Enter your name: </label>
              <input type="text" name="name" id="name" required></input>
            </div>
            <div className="form-example">
              <label htmlFor="email">Enter your email: </label>
              <input type="email" name="email" id="email" required></input>
            </div>
            <div className="form-example">
              <input type="submit" value="Subscribe!"></input>
            </div>
          </form>

          <h3>Input</h3>
          <label htmlFor="name">Name (4 to 8 characters):</label>
          <input type="text" id="name" name="name" required></input>

          <h3>Label</h3>
          <div className="preference">
            <label htmlFor="cheese">Do you like cheese?</label>
            <input type="checkbox" name="cheese" id="cheese"></input>
          </div>

          <div className="preference">
            <label htmlFor="peas">Do you like peas?</label>
            <input type="checkbox" name="peas" id="peas"></input>
          </div>

          <h3>legend</h3>
          <fieldset>
            <legend>Choose your favorite monster</legend>

            <input type="radio" id="kraken" name="monster"></input>
            <label htmlFor="kraken">Kraken</label>
            <br />

            <input type="radio" id="sasquatch" name="monster"></input>
            <label htmlFor="sasquatch">Sasquatch</label>
            <br />

            <input type="radio" id="mothman" name="monster"></input>
            <label htmlFor="mothman">Mothman</label>

            <h3>Meter</h3>
            <label htmlFor="fuel">Fuel level:</label>

            <meter id="fuel" min="0" max="100" low={33} high={66} optimum={80} value="50">
              at 50/100
            </meter>
          </fieldset>

          <h3>meter</h3>
          <label htmlFor="fuel">Fuel level:</label>
          <meter id="fuel" min={0} max={100} low={33} high={66} optimum={80} value="50">
            at 50/100
          </meter>

          <h3>optgroup</h3>
          <label htmlFor="dino-select">Choose a dinosaur:</label>
          <select id="dino-select">
            <optgroup label="Theropods">
              <option>Tyrannosaurus</option>
              <option>Velociraptor</option>
              <option>Deinonychus</option>
            </optgroup>
            <optgroup label="Sauropods">
              <option>Diplodocus</option>
              <option>Saltasaurus</option>
              <option>Apatosaurus</option>
            </optgroup>
          </select>

          <h3>option</h3>
          <label htmlFor="pet-select">Choose a pet:</label>
          <select id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>

          <h3>output</h3>
          <form>
            <input type="range" id="b" name="b" defaultValue={'50'} /> +
            <input type="number" id="a" name="a" defaultValue={'10'} /> =
            <output name="result" htmlFor="a b">
              60
            </output>
          </form>
          <h3>progress</h3>
          <label htmlFor="file">File progress:</label>

          <progress id="file" max={100} value="70">
            70%
          </progress>

          <h3>select</h3>
          <label htmlFor="pet-select">Choose a pet:</label>

          <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>

          <h3>Textarea</h3>
          <label htmlFor="story">Tell us your story:</label>

          <textarea defaultValue="was a dark and stormy night..." id="story" name="story" rows={5} cols={33}></textarea>
        </Stack>
        <Stack id={'Forms'} gap={'21px'}>
          <h2>Interactive elements</h2>

          <h3>details</h3>
          <details>
            <summary>Details</summary>
            Something small enough to escape casual notice.
          </details>

          <h3>dialog</h3>
          <div style={{ position: 'relative', width: '300px', height: '50px' }}>
            <dialog open>
              <p>Greetings, one and all!</p>
            </dialog>
          </div>
          <h3>menu</h3>
          <div contextMenu="popup-menu">Right-click to see the adjusted context menu</div>

          <menu type="context" id="popup-menu">
            {/* <menuitem>Action</menuitem>
            <menuitem>Another action</menuitem>
            <menuitem>Separated action</menuitem>  */}
          </menu>

          <h3>Summary</h3>
          <details>
            <summary>
              I have keys but no doors. I have space but no room. You can enter but can’t leave. What am I?
            </summary>
            A keyboard.
          </details>
        </Stack>

        <Stack id={'Forms'} gap={'21px'}>
          <h2>Web Components</h2>

          <h3>slot</h3>
          <template id="element-details-template">
            <details>
              <summary>
                <code className="name">
                  &lt;<slot name="element-name">NEED NAME</slot>&gt;
                </code>
                <i className="desc">
                  <slot name="description">NEED DESCRIPTION</slot>
                </i>
              </summary>
              <div className="attributes">
                <h4>Attributes</h4>
                <slot name="attributes">
                  <p>None</p>
                </slot>
              </div>
            </details>
          </template>

          <h3>template</h3>

          <table id="producttable">
            <thead>
              <tr>
                <td>UPC_Code</td>
                <td>Product_Name</td>
              </tr>
            </thead>

            <tbody></tbody>
          </table>

          <template id="productrow"></template>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Page: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <SrcPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </SrcPageTemplate>
  );
};

export default Page;
