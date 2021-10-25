import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc} from 'gatsby-plugin-image';
import { Icon } from '@components/icons';


import '@styles/components/sections/projects.scss'

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      projects: allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}} 
        sort: {fields: frontmatter___date}) {
        nodes {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 1080, placeholder: BLURRED)
                original{
                  src
                }
              }
            }
            description
            tecnologies
            github
            mockup
            external
          }
        }
      }
    }
  `)
  const featuredProjects = [...data.projects.nodes]
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);


  return (
    <section id='projects'>
      <h2 className="numbered-heading" ref={revealTitle}>
        Proyectos
      </h2>

      <ul className='projectsGrid'>
        {featuredProjects &&
          featuredProjects.reverse().map((node, i) => {
            const { title, external, github, description, mockup , image, tecnologies } = node.frontmatter
            const img = getImage(image);
            const urlImg = image.childImageSharp.original.src

            return (
              <li className="project" key={i} ref={el => (revealProjects.current[i] = el)} >
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

                    <h3 className="project-title">
                      <a href={external ||  urlImg } target='_blank' rel='noreferr' >{title}</a>
                    </h3>

                    <div className="project-description" dangerouslySetInnerHTML={{ __html: description }}></div>

                    {tecnologies.length && (
                      <ul className="project-tech-list">
                        {tecnologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {github && (
                        <a href={github} rel='noreferr' target='_blank'  aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {
                        mockup && (
                          <a href={mockup} rel='noreferr' target='_blank' aria-label="Mockup Link">
                          <Icon name="Figma" />
                        </a>
                        )
                      }
                      {external && (
                        <a href={external} rel='noreferr' target='_blank' aria-label="External Link" className="external">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>

                  </div>
                </div>




                <div className="project-image">
                  <a className='notHover' target='_blank'  href={external ? external : github ? github : urlImg }>
                    <GatsbyImage image={img} alt={title} className="img" />
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};
