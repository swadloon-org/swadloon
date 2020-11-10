import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import { Stack } from '@newrade/core-react-ui';
import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../layouts/page.layout';

export type ProjectPageProps = PageProps<{}, GatsbyPageContext>;

export const HtmlElements: React.FC<ProjectPageProps> = (props) => {
  const lorenipsum = `Lorem ipsum dolor sit amet.`;

  return (
    <Layout>
      <Stack id={'HTML Elements'} gap={'55px'} padding={'55px'}>
        <h1>HTML Elements</h1>

        <Stack id={'Content sectioning'} gap={'21px'} padding={'20px'}>
          <h2>Content sectioning</h2>

          <Stack id={'Header'} gap={'13px'} padding={'20px'}>
            <h3>Header</h3>

            <header>
              <h1>Cute Puppies Express!</h1>
            </header>
          </Stack>

          <Stack id={'Headings'} gap={'13px'} padding={'20px'}>
            <h3>Headings</h3>

            <h1>Heading H1</h1>
            <h2>Heading H2</h2>
            <h3>Heading H3</h3>
            <h4>Heading H4</h4>

            <hgroup>
              <h1>Calculus I</h1>
              <h2>Fundamentals</h2>
            </hgroup>
          </Stack>

          <Stack id={'Main'} gap={'13px'} padding={'20px'}>
            <h3>Main</h3>

            <main role="main">
              <p>
                Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except
                Australia.
              </p>

              <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
            </main>
          </Stack>

          <Stack id={'Nav'} gap={'13px'} padding={'20px'}>
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

          <Stack id={'Address'} gap={'13px'} padding={'20px'}>
            <h3>Address</h3>

            <address>
              <a href="mailto:jim@rock.com">jim@rock.com</a>
              <br />
              <a href="tel:+13115552368">(311) 555-2368</a>
            </address>
          </Stack>

          <Stack id={'Article'} gap={'13px'} padding={'20px'}>
            <h3>Article</h3>

            <article>
              <h1>Weather forecast for Seattle</h1>
              <article>
                <h2>03 March 2018</h2>
                <p>Rain.</p>
              </article>
            </article>
          </Stack>

          <Stack id={'Section'} gap={'13px'} padding={'20px'}>
            <h3>section</h3>

            <section>
              <h2>Equipment</h2>
              <p>
                The first thing you’ll need is a fishing rod or pole that you find comfortable and is strong enough for
                the kind of fish you’re expecting to land…
              </p>
            </section>
          </Stack>

          <Stack id={'Footer'} gap={'13px'} padding={'20px'}>
            <h3>Footer</h3>

            <footer>
              <p>© 2018 Gandalf</p>
            </footer>
          </Stack>
        </Stack>

        <Stack id={'Text content'} gap={'21px'} padding={'20px'}>
          <h2>Text content</h2>

          <h3>Blockquotes</h3>
          <blockquote>{lorenipsum}</blockquote>

          <h3>dl & dd & dt</h3>
          <dl>
            <dt>Beast of Bodmin</dt>
            <dd>A large feline inhabiting Bodmin Moor.</dd>

            <dt>Morgawr</dt>
            <dd>A sea serpent.</dd>

            <dt>Owlman</dt>
            <dd>A giant owl-like creature.</dd>
          </dl>

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
        </Stack>

        <Stack id={'Inline text semantics'} gap={'21px'} padding={'20px'}>
          <h2>Inline text semantics</h2>

          <a href="#">Link</a>

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
        </Stack>

        <Stack id={'Demarcating edits'}>
          <blockquote>
            There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del>{' '}
            <ins>running it</ins> makes it so.
          </blockquote>
        </Stack>

        <Stack id={'Image and multimedia'}></Stack>
        <Stack id={'Table content'}></Stack>
      </Stack>
    </Layout>
  );
};

export default HtmlElements;
