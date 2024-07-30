import React from 'react'
import experience from './data/experience.json'
const Experience = () => {
  return (
    <>
      <div className="container ex" id='experience'>
        <h1>Education</h1>
        {
          experience.map((data) => {
            return (
              <>
                <div key={data.id} className='ex-items text-center my-5'
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="left">
                    <img src={`/assets/${data.imageSrc}`} alt="" />
                  </div>
                  <div className="right">
                    <h1>{data.Course}{" "}{data.Branch}</h1>
                    <h2>{data.College}</h2>
                    <h4>
                      <span style={{ color: "MediumVioletRed" }}>
                        {data.startDate}{" "}{data.endDate}</span>
                    </h4>
                    <h4><span style={{ color: "DarkMagenta" }}>{data.location}</span></h4>
                    <h5><span style={{ color: "DarkMagenta" }}>{data.Percentage}</span></h5>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Experience
