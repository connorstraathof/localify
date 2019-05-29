import React from 'react'
// import axios from 'axios'
// import ScrollUp from '../Components/ScrollUp'
// import { getCompanies } from '../Helpers/Prismic'
import { Link } from 'react-router-dom'
// import Back from '../Assets/Icons/icons8-back-96.svg'

class Grocery extends React.Component {
  state = {
    companies: [],
    dataLoaded: false
  }
  componentDidMount() {
    getCompanies(companies => {
      const filteredCompanies = companies.results.filter(company => {
        console.log(company)
        return company.data.company_type[0].text === 'Grocer'
      })
      const companiesList = filteredCompanies.map(company => {
        console.log(company.data)
        return {
          name: company.data.title,
          description: company.data.description,
          location: company.data.location1[0].text,
          image: company.data.image.dimensions,
          id: company.id
        }
      })
      this.setState({
        companies: companiesList
      })
      console.log(companiesList)
    })
  }
  render() {
    const companiesList = this.state.companies.map(company => {
      return (
        <div className='generic__companybox'>
          <div className='generic__box2'>
            <div className='generic__box2__left'>
              <div className='generic__title'>
                <h2 className='generic__title__content'>{company.name}</h2>
              </div>
              <div className='generic__story'>
                <p className='generic__story__content'>{company.description}</p>
              </div>
              <div className='generic__image'>{company.image}</div>
              <div className='generic__location'>
                <h4 className='generic__location__content'>{company.location}</h4>
              </div>
            </div>
            <div className='generic__box2__right'>
              <div className='generic__button'>
                <Link to={`/Company/` + company.id} className='generic__button__content'>
                  COMPANY PAGE
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className='generic__background'>
        {/* <img
          className='generic__back__arrow'
          src={Back}
          alt='backbutton'
          onClick={() => this.props.history.goBack()}
        /> */}
        <div className='generic__box1'>
          <div className='generic__header'>
            <h1 className='generic__header__content'>GROCERY</h1>
          </div>
          <div className='generic__subheader'>
            <h3 className='generic__subheader__content'>
              Chosen for unique selection, if you need a change of pace, or some inspiration in the
              kitchen check out these spots.
            </h3>
          </div>
        </div>
        <div className='generic__break' />
        {companiesList}
        {/* <div className='scroll__position'>
          <ScrollUp />
        </div> */}
      </div>
    )
  }
}

export default Grocery
