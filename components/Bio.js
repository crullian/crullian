import React from 'react'

class Bio extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return ( 
      <div style={{display: "grid", gap: "24px", maxWidth: "800px", padding: "0 24px 40px"}}> 
        <div className="contact">
          <span>21 Culford mews London, UK N1 4DX</span> 
          <span>07411255592</span>
          <a style={{display: "inline"}} href="mailto:crullian@gmail.com">crullian@gmail.com</a>
        </div>

        <div>
          Born in Charleston, WV in 1976, Chris began drawing and painting at a young age. 
          After a short time as an abstract painter at University, 
          he turned his attention to figurative sculpture. Taking a direct, intuitive approach to sculpting 
          figurative forms in traditional materials such as marble, Chris draws on experiences, and the history 
          of sculpture, in an attempt to make sense of the dissonant space between presence and absence, 
          flesh and stone.
        </div>

        <div  className="exhibitions">
          <h4>education</h4>
          <div>2003 - M.F.A., Cum Laude - New York Academy of Art, New York, NY</div>
          <div>2001 - B.F.A., Summa Cum Laude - University of North Florida, Jacksonville, FL</div>
          <div>2000 - Summer Program - Florence Academy of Art, Florence, Italy</div>
          <div>1999 - A.A. - Florida State College, Jacksonville, FL</div>                                       
          <div>1998 - Sculpture, Drawing, Aesthetics - University of Georgia in Cortona, Italy</div>
        </div>

        <div className="exhibitions">
          <h4>exhibitions</h4>
          <div>2022-2023 - "Fifty", Museum of Contemporary Art, Jacksonville, FL - Juror: Louise Freshman Brown</div>
          <div>2019 - "Concours Exhibition", Art Students League, New York, NY</div>
          <div>2012 - "Summer Salon", Greenpoint Gallery, Brooklyn, NY - Juror: Shawn James</div>
          <div>2008 - "Small Works", 440 Gallery, Brooklyn, NY - Juror: David Humphreys</div>
          <div>2008 - "Summer Exhibition", New York Academy of Art, New York, NY - Jurors: David Salle, Nicola Hicks, Will Cotton, Matthew Flowers</div>
          <div>2007 - "Homecoming", an Exhibition of Former Third Year Fellows, New York Academy of Art, New York, NY</div>
          <div>2007 - "Summer Exhibition", New York Academy of Art, New York, NY Jurors: Eric Fishl, Jenny Saville, Vincent Desiderio</div>
          <div>2006 - "Night of a Thousand Drawings", Artist's Space, New York, NY</div>
          <div>2006 - "Salon 2006", New York Academy of Art, New York, NY</div>
          <div>2005 - "Night of a Thousand Drawings", Artist's Space, New York, NY</div>
          <div>2004 - "New York Academy Alumni", Stricoff Fine Art, New York, NY</div>
          <div>2004 - "Child, Father of the Man", New York Academy of Art, New York, NY</div>
          <div>2003 - "M.F.A. Graduate Exhibition", New York Academy of Art, New York, NY</div>
          <div>2002 - "Figure Four", Kent Gallery, Jacksonville, FL</div>
          <div>2002 - "Drawing the Figure", Wilson Center for the Arts, Jacksonville, FL</div>
          <div>2001 - "B.F.A. Graduate Exhibition", University of North Florida, Jacksonville, FL</div>
          <div>2001 - "St. Augustine Art Association Annual Exhibition", St Augustine, FL</div>
          <div>2000 - "University of North Florida Annual Exhibition", Jacksonville, FL</div>
          <div>2000 - "Florida Community College Annual Exhibition", Jacksonville, FL</div>
          <div>1999 - "Art After Dark", Florida Theatre, Jacksonville, FL</div>
          <div>1998 - "University of Georgia in Cortona Annual Exhibition", Cortona, Italy</div>
        </div>


        <div className="exhibitions">
          <h4>residencies, awards, commissions</h4>
          <div>2021 - Artist in residence, Russia House, Art Academy, London, England</div>
          <div>2007-2012 - Sculptor, KB Projects Fine Art Fabricators, Brooklyn, NY</div>
          <div>2007 - Commission - The Richard B. Fisher Next Wave Award, Brooklyn Academy of Music, Brooklyn, NY</div>
          <div>2005 - Sculptor, Judy Fox Sculpture Studio, New York, NY</div>
          <div>2003-2004 - Third Year Research Fellowship, New York Academy of Art</div>
          <div>2003 - Peter T. Rippon Travel Award, Royal Academy of Arts, London, England</div>                                       
          <div>1998 - Sculpture, Drawing, Aesthetics - University of Georgia in Cortona, Italy</div>
        </div>
      </div>
    )
  }
};

export default Bio