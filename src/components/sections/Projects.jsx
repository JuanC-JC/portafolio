import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon } from '@components/icons';
import '../../styles/components/sections/projects.scss'

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      projects: allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
        nodes {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 700, placeholder: BLURRED)
              }
            }
            description
            tecnologies
            github
            external
          }
        }
      }
    }
  `)
  const featuredProjects = data.projects.nodes
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);


  return (
    <section id='projects'>
      <h2 className="numbered-heading" ref={revealTitle}>
        Algo de lo que construido
      </h2>

      <ul className='projectsGrid'>
        {featuredProjects &&
          featuredProjects.map((node, i) => {
            const { title, external, github, description, image, tecnologies } = node.frontmatter
            const img = getImage(image);

            console.log(description)
            return (
              <li className="project" key={i} ref={el => (revealProjects.current[i] = el)} >
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div className="project-description">{description}</div>

                    {tecnologies.length && (
                      <ul className="project-tech-list">
                        {tecnologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a href={external} aria-label="External Link" className="external">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>

                  </div>
                </div>




                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
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
