
import Card from 'react-bootstrap/Card'

const CardContent = ({ project }) => {
  return (
    <div className='create-card-section flex-col'>
      <div className='flex-center'>
        <Card>
          <Card.Body>
            {project.iFrame
              ? <iframe allowFullScreen className='card-detail-holder' type='text/html' src={project.url} width='90%' />
              : <div style={{ backgroundImage: `url(${project.coverImageUrl})` }} className='card-detail-holder' />}
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
export default CardContent
