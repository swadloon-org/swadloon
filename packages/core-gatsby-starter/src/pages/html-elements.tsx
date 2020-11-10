import { Stack, Button, ResetCSS } from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';
import { graphql, PageProps, Link } from 'gatsby';
import { PagesQuery } from '../../types/graphql-types';
import { GatsbyPageContext } from '@newrade/core-gatsby-config';

export type ProjectPageProps = PageProps<PagesQuery, GatsbyPageContext>;

export const query = graphql`
  query Pagess {
    allSitePage {
      nodes {
        id
        path
      }
    }
  }
`;

const HtmlElementsPage: React.FC<ProjectPageProps> = (props) => {
  return <Index {...props} />;
};

export const Index: React.FC<ProjectPageProps> = (props) => {
  return (
    <TreatProvider theme={light}>
      <ResetCSS>
        <div>
          <ul>
            {props.data.allSitePage.nodes
              .map((node) => node.path)
              .map((path, index) => {
                return (
                  <li key={index}>
                    <Link to={path}>{path}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <Stack gap={'55px'} padding={'55px'}>
          <h1>HTML Elements</h1>

          <Stack gap={'13px'} padding={'20px'}>
            <h2>Headings</h2>

            <h1>Heading H1</h1>
            <h2>Heading H2</h2>
            <h3>Heading H3</h3>
            <h4>Heading H4</h4>
          </Stack>

          <Stack id={'Inline text semantics'} gap={'13px'} padding={'20px'}>
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

          <Stack gap={'13px'} padding={'20px'}>
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
        </Stack>
      </ResetCSS>
    </TreatProvider>
  );
};

export default HtmlElementsPage;
