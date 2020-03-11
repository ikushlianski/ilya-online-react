import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Block } from '../../ui-kit/Block';
import { Layout } from '../../components/Layout';

import { CVOptions, CVHeader, CVBody } from '../../components/CV';

import './CVPage.scss';

export const CVContext = React.createContext(null);

const CVPage = ({ jobs, education }) => {
  // TODO: extract into smaller components
  // TODO: add less important points
  const [value, setValue] = React.useState({
    extended: false,
    notes: false,
  });

  return (
    <Layout
      title="Ilya Kushlianski - CV"
      description="Printable CV of Ilya Kushlianski, full-stack Javascript developer."
    >
      <div className="CVPage">
        <Block className="CVPage__SmallScreensWarning">
          Please open this CV on a larger device
          <div className="CVPage__Shrug">¯\_(ツ)_/¯</div>
        </Block>
        <CVContext.Provider value={value}>
          <CVOptions setValue={setValue} />
          <div className="CVPage__Sheet">
            <CVHeader />
            <CVBody jobs={jobs} education={education} />
          </div>
        </CVContext.Provider>
      </div>
    </Layout>
  );
};

CVPage.getInitialProps = async _ => {
  try {
    const res = await fetch(`${process.env.API_URL}/cv`);
    const [data] = await res.json();

    return { jobs: data.jobs, education: data.education };
  } catch (error) {
    console.error(error);

    return [];
  }
};

export default CVPage;
