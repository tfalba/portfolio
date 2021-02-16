
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const MyResume = (props) => {
  return (

    <div className='resume-page App animate__animated animate__fadeIn'>
      <Col style={{ backgroundColor: 'white', paddingTop: '20px', paddingBottom: '20px' }} sm={9}><span style={{ fontSize: '30px' }}>Tracy Falba, Ph.D.</span>
        <Row className='resume-header-main'>About Me</Row>
        <Row><div className='resume-about-me'>I am a software developer embarking on a career overhaul to finally combine all of my creative and analytical passions. I am rapidly developing a full-stack skillset and ready to leverage my prior skills in new environments. I am an engaged problem solver with tons of creativity, experience in multiple team environments, and have a non-stop drive to learn new things to enhance life on the planet.</div></Row>
        <Row className='resume-header-main'>Experience</Row>
        <Row className='resume-place'><div>Duke University</div><div className='resume-years'>2006-2017</div></Row>
        <Row className='resume-department'>Economics Department</Row>
        <Row className='resume-title'>Co-Director of Communications Committee (2009 - 2017)</Row>
        <ul>
          <li className='resume-list-item'>Served as department liaison in partnership with University IT and outside vendor to overhaul the department CMS.. Our site became the 'in-demand' template across Arts and Sciences.</li>
          <li className='resume-list-item'>Developed social media channels and engaged faculty, staff, and student participation, receiving over 50K YouTube views in our first year.</li>
        </ul>
        <Row className='resume-title'>Associate Director of Undergraduate Studies (2009 - 2017)</Row>
        <ul>
          <li className='resume-list-item'>Led Undergraduate Research Symposia and Honors Thesis Poster Sessions, united the Arts and Science honors office with numerous graduate students and department faculty.</li>
          <li className='resume-list-item'>Supervised program staff and advised undergrads. Implemented online surveys within department to evaluate curriculum effectiveness significantly improving student outcomes and satisfaction.</li>
        </ul>
        <Row className='resume-title'>Visiting Assistant Professor and Research Scholar (2006 - 2017)</Row>
        <ul>
          <li className='resume-list-item'>Designed and taught courses in Health Economics, Public Economics, Economics of Social Insurance, and other Special Topics and Workshop Courses.</li>
        </ul>

        <Row className='resume-place'><div>Yale University</div><div className='resume-years'>2000-2006</div></Row>
        <Row className='resume-department'>Department of Epidemiology and Public Health</Row>
        <Row className='resume-title'>Associate Research Scientist</Row>
        <ul>
          <li className='resume-list-item'>Co-investigator on grants totaling over $10 million</li>
          <li className='resume-list-item'>Engaged in interdisciplinary research and collaborative projects resulting In twenty scholarly articles published in health policy, economics, and medical journals.</li>
        </ul>
        <Row className='resume-title'>Co-Direcor of Communications for Transdisciplinary Tobacco Use Research Center</Row>
        <ul>
          <li className='resume-list-item'>Created faculty awareness and participation in using platforms to communicate significant research findings.</li>
          <li className='resume-list-item'>Generated over 20 feature articles on the center's research picked up by national news media.</li>
        </ul>
      </Col>
      <Col style={{ backgroundColor: '#616161', color: 'white', paddingTop: '50px' }} sm={3}>
        <Row className='resume-header-side'>
          Contact
        </Row>
        <div className='sidebar-detail'>Phone: 919-597-8626</div>

        {/* <div className='sidebar-detail'>LinkedIn</div> */}
        <div className='sidebar-detail'>Email: tfalba@mac.com</div>
        <Row className='resume-header-side'>
          Education
        </Row>
        <div className='sidebar-list'>Momentum Learn</div>
        <div className='sidebar-detail'>Full-Stack Immersion Program (2020-present)</div>
        <div className='sidebar-list'>Stanford University</div>
        <div className='sidebar-detail'>Ph.D. in Economics (2000)</div>
        <div className='sidebar-highlight'>National Science Foundation Graduate Fellow</div>
        <div className='sidebar-list'>University of CA San Diego</div>
        <div className='sidebar-detail'>B.A. in Economics (1993)</div>
        <div className='sidebar-highlight'>Summa cum laude</div>

        <Row className='resume-header-side'>
          Skillset
        </Row>
        <ul className='sidebar-ul' style={{ fontSize: '19px', paddingLeft: '50px', paddingTop: '10px', textAlign: 'left' }}>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Python</li>
          <li>Django</li>
          <li>React</li>
          <li>AJAX</li>
          <li>GitHub</li>
          <li>Stata</li>
          <li>SAS</li>
        </ul>
      </Col>
    </div>
  )
}

export default MyResume
