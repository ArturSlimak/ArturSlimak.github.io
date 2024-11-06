import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex align-items-center justify-content-center vh-100 notFoundBg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>404</h1>
              <h4>Oops...you did it again</h4>
              <h4>
                <Link to="/">Go to main</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
