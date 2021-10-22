import React, { useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../../styles/components/sections/jobs.scss'

export default function Jobs() {
  const revealContainer = useRef(null);
  const data = useStaticQuery(graphql`
    query MyQuery {
      jobs: allMdx(filter: {fileAbsolutePath: {regex: "/job/"}}) {
        nodes {
          id
          frontmatter {
            company
            description
            range
            title
            url
            activities {
              activity
            }
          }
        }
      }
    }  
  `);
  const jobsData = data.jobs.nodes;
  const tabs = useRef([]);
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section id="jobs" className='jobs' ref={revealContainer}>
      <h2 className="numbered-heading">Dónde he trabajado</h2>

      <div className="inner">

        <div className="tabList" role="tablist" aria-label="Job tabs">
          {
            jobsData.map((node, i) => {
              const { company } = node.frontmatter;
              return (
                <button
                  key={i}
                  className={`tabButton ${activeTabId === i ? 'active' : ''} `}
                  // isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </button>
              )
            })
          }
        </div>

        <div className="tabPanels">
          {
            jobsData.map((node, i) => {
              const { title, url, company, range, activities } = node.frontmatter
              return (
                <div
                  key={i}
                  className="tabPanel"
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}>
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={url} className="inline-link">
                        {company}
                      </a>
                    </span>
                  </h3>

                  <p className="range">{range}</p>

                  <div className='activities'>
                    <ul>
                      {
                        activities.map((act, i) => {
                          return (
                            <li key={i}>{act.activity}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>

    </section >
  )
}