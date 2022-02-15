import { Fragment, lazy } from 'react'

const Jumbotron = lazy(() => import('../../components/Jumbotron'))

const Landing = () => {
  return (
    <Fragment>
      <Jumbotron></Jumbotron>
    </Fragment>
  )
}

export default Landing
