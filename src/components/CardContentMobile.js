
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CardContentMobile = ({ project }) => {
  return (
    <div className='create-card-section flex-col'>
      <div className='flex-center'>
        <Card>
          <Card.Body>
            {project.title &&
              <div className='mobile-list'>
                <div className='mobile-title'>{project.title}</div>
                <div style={{ backgroundImage: `url(${project.coverImageUrl})` }} className='card-detail-holder-mobile' />
                <div className='project-description-mobile'>{project.shortDescription}</div>
                {(project.url !== '') && (
                  <Button variant='secondary'>
                    <a href={project.url} rel='noreferrer' target='_blank'>Link to site</a>
                  </Button>
                )}
                {(project.gitHubUrl !== '') && (
                  <Button variant='secondary'>
                    <a href={project.gitHubUrl} rel='noreferrer' target='_blank'>Link to code</a>
                  </Button>
                )}
              </div>}
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
export default CardContentMobile
