import Head from '../components/Head'
export default ({ children, settings = {} }) => (
  <div>
    <Head />
    <div className="util__container">
      {children}
    </div>
  </div>
)