import React, { useRef, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import '../../styles/components/sections/jobs.scss'
import {translateDate, transformDate} from '@utils'

export default function Jobs() {
  const revealContainer = useRef(null);


  
  
  const data = useStaticQuery(graphql`
  query MyQuery {
    jobs: allMdx(filter: {fileAbsolutePath: {regex: "/job/"}}
    sort: {fields: frontmatter___dateRange___init} ) {
      nodes {
        id
        frontmatter {
          company
          description
          dateRange{
            init(formatString: "MMMM YYYY")
            finish
          }
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


  const jobsData = [...data.jobs.nodes]
  
  const [activatedJob, setActivatedJob] = useState(jobsData[0]);

  return (
    <section id="jobs" className='jobs' ref={revealContainer}>
      <h2 className="numbered-heading">Dónde he trabajado</h2>

      <div className="inner">

        <div className="tabList" role="tablist" aria-label="Job tabs">
          {jobsData &&
            jobsData.reverse().map((node) => {

              const { company } = node.frontmatter;
              return (
                <button
                  className={`tabButton ${activatedJob.id === node.id ? 'active' : ''} `}
                  onClick={() => {setActivatedJob(node)}}
                  role="tab"
                  >
                  <span>{company}</span>
                </button>
              )
            })
          }
        </div>

        <div className="tabPanels">
          {jobsData &&
            <div
              className="tabPanel"
              role="tabpanel"
              >
              <h3>
                <span>{activatedJob.frontmatter.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={activatedJob.frontmatter.url} className="inline-link" target='_blank' rel='noreferrer' >
                    {activatedJob.frontmatter.company}
                  </a>
                </span>
              </h3>

              <p className="range">{translateDate(activatedJob.frontmatter.dateRange.init)} - {activatedJob.frontmatter.dateRange.finish ? transformDate(activatedJob.frontmatter.dateRange.finish) : 'actualidad'}</p>

              <div className='activities'>
                <ul>
                  {activatedJob.frontmatter.activities &&
                    activatedJob.frontmatter.activities.map((act, i) => {
                      return (
                        <li key={i}>{act.activity}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          }
        </div>


      </div>

    </section >
  )
}