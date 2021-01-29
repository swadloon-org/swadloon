import { BoxV2, Center, Cluster, Stack, Title, useTreatTheme } from '@newrade/core-react-ui';
import { TweenMax, TimelineMax, Back, Linear } from '@newrade/core-gsap-ui';
import React, { useRef, useEffect, useState } from 'react';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template';
import ts from 'typescript';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  const formRef = useRef<(SVGElement | null)[]>([]);

  const [animationRunning, setAnimationRunning] = useState<boolean>(false);
  const [gsapTimeline, setGsapTimeline] = useState<TimelineMax | undefined>();

  useEffect(() => {
    if (!gsapTimeline && !animationRunning) {
      setGsapTimeline(new TimelineMax({ repeat: -1 }));

      formRef.current.map((form) => {
        TweenMax.set(form, {
          visibility: 'hidden',
        });
      });
      return;
    }

    if (gsapTimeline && !animationRunning) {
      formRef.current.map((form) => {
        const duration = 0.15;
        gsapTimeline.to(form, {
          duration,
          opacity: 1,
          autoAlpha: 1,
          ease: Back.easeIn,
        });
        gsapTimeline.to(form, {
          duration,
          opacity: 1,
          autoAlpha: 0,
          ease: Linear.easeNone,
        });
      });
      setAnimationRunning(true);
      return;
    }

    if (gsapTimeline) {
      gsapTimeline.restart();
    }
  }, [gsapTimeline, animationRunning]);

  return (
    <Center>
      <BoxV2 padding={[cssTheme.sizing.sizes.desktop.x6, 0]} style={{ marginTop: '20vh' }}>
        <Cluster>
          <Stack gap={['55px']}>
            <Title>Un univers de possibilités à votre portée</Title>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192">
                <circle
                  id="form8"
                  ref={(element) => (formRef.current[8] = element)}
                  cx="96"
                  cy="96"
                  r="56"
                  fill="#d9e021"
                />
                <path
                  id="form7"
                  ref={(element) => (formRef.current[7] = element)}
                  d="M91.05 38H38l116 116v-53a63 63 0 00-62.95-63z"
                  fill="#eea058"
                />
                <rect
                  id="form6"
                  ref={(element) => (formRef.current[6] = element)}
                  x="76.5"
                  y="47"
                  width="39"
                  height="98"
                  rx="19.5"
                  transform="rotate(90 96 96)"
                  fill="#d74181"
                />
                <path
                  id="form5"
                  ref={(element) => (formRef.current[5] = element)}
                  d="M95.86 125A57.88 57.88 0 0138 67h19a38.77 38.77 0 0077.53 0H154a58.12 58.12 0 01-58.14 58z"
                  fill="#265935"
                />
                <path
                  id="form4"
                  ref={(element) => (formRef.current[4] = element)}
                  fill="#f6cfa9"
                  d="M154 38L38 154V38h116z"
                />
                <path
                  id="form3"
                  ref={(element) => (formRef.current[3] = element)}
                  d="M137.29 138l1-1.26c9.19-11.86 16.22-25.81 16.22-40.75C154.5 52.92 96 18 96 18S37.5 52.92 37.5 96c0 12.54 5 24.38 12 34.88l5.21 7.12C72 159.66 96 174 96 174s24-14.34 41.29-36zM57.14 95.93a38.86 38.86 0 0177.72 0h-19.39a20.3 20.3 0 00-40.57 0z"
                  fill="#6061ec"
                />
                <path
                  id="form2"
                  ref={(element) => (formRef.current[2] = element)}
                  d="M132.4 171H59.6a15 15 0 01-10.6-4.39 15 15 0 016.69-25.09 15.17 15.17 0 014-.52h4.34a15 15 0 100-30H59.6a15 15 0 01-10.6-4.39 15 15 0 016.69-25.09 15.17 15.17 0 014-.52h4.34a15 15 0 100-30H59.6A15 15 0 0149 46.61a15 15 0 016.69-25.09 15.17 15.17 0 014-.52h72.8A15 15 0 01143 25.39a15 15 0 01-6.69 25.09 15.17 15.17 0 01-3.95.52h-4.34a15 15 0 100 30h4.34A15 15 0 01143 85.39a15 15 0 01-6.69 25.09 15.17 15.17 0 01-3.95.52h-4.34a15 15 0 100 30h4.34a15 15 0 0110.64 4.39 15 15 0 01-6.69 25.09 15.17 15.17 0 01-3.91.52z"
                  fill="#e384b1"
                />
                <path
                  id="form1"
                  ref={(element) => (formRef.current[1] = element)}
                  d="M145.42 83.43c-9.33.88-17.43 1.79-24.44 2.71 5.51-4.28 11.75-9.3 18.81-15.18a7.39 7.39 0 00.5-10.9l-7.39-7.38a7.38 7.38 0 00-10.9.52c-6.57 7.93-12 14.8-16.62 20.8 1-7.69 2-16.75 3-27.45A7.4 7.4 0 00101 38.5H90.6a7.39 7.39 0 00-7.35 8.08c1 10.49 2 19.41 3 27C81.77 67.71 76.4 61 70 53.3a7.38 7.38 0 00-10.89-.49l-7.39 7.38a7.38 7.38 0 00.52 10.91c7 5.78 13.16 10.71 18.63 14.93-7-.88-15-1.76-24.3-2.61a7.4 7.4 0 00-8.06 7.36v10.44a7.39 7.39 0 008.08 7.35c10.73-1 19.82-2.07 27.52-3.11-6.26 4.78-13.55 10.59-22 17.64a7.39 7.39 0 00-.49 10.9l7.38 7.38a7.38 7.38 0 0010.91-.51c6.27-7.59 11.56-14.23 16-20-.89 7.06-1.78 15.21-2.64 24.61a7.38 7.38 0 007.35 8.06H101a7.38 7.38 0 007.35-8.08c-.9-9.56-1.84-17.82-2.77-24.95 4.56 5.92 10 12.73 16.51 20.54a7.39 7.39 0 0010.9.5l7.38-7.39a7.38 7.38 0 00-.51-10.91c-8.57-7.08-15.93-12.9-22.24-17.69 7.75 1 16.93 2.06 27.78 3.06a7.4 7.4 0 008.06-7.36V90.78a7.39 7.39 0 00-8.04-7.35z"
                />
              </svg>
            </div>
          </Stack>
        </Cluster>
      </BoxV2>
    </Center>
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
