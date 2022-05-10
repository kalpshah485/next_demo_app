import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const getData = () => {
  return localStorage.getItem('user');
}

export default function Home() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(getData() ? true : false);
  }, [])

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-brand text-light">
            <Link href="/">Next Demo</Link>
          </div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="nav-link active">
                <Link href="/">Home</Link>
              </div>
            </li>
            {
              login ?
                <>
                  <li className="nav-item active">
                    <div className="nav-link active">
                      <Link href="/profile">Profile</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <Link href="/logout">Logout</Link>
                    </div>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <div className="nav-link">
                      <Link href="/signup">Signup</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <Link href="/login">Login</Link>
                    </div>
                  </li>
                </>
            }
          </ul>
        </nav>
      </header>
      <main className="mt-auto" role="main">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image className="d-block w-100" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" height='800' width='2300%' alt="First slide" />
              <div className="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <div className="btn btn-lg btn-primary carousel-link">
                  <Link href="/signup">Signup</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image className="d-block w-100" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide" height='800' width='2300%' />
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <div className="btn btn-lg btn-primary carousel-link">
                  <Link href="#">Learn more</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image className="d-block w-100" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" height="800" width="2300%" />
              <div className="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <div className="btn btn-lg btn-primary carousel-link">
                  <Link href="#">Browse gallery</Link>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Image className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="CardImg" width="140" height="140" />
              <h2>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <Image className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="CardImg" width="140" height="140" />
              <h2>Heading</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <Image className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="CardImg" width="140" height="140" />
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
          </div>
          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">{`It'll blow your mind.`}</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
              <Image className="featurette-image img-fluid mx-auto" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" height="300" width="300" layout="fixed" />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">{`Oh yeah, it's that good.`}<span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <Image className="featurette-image img-fluid mx-auto" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" height="300" width="300" layout="fixed" />
            </div>
          </div>

          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
              <Image className="featurette-image img-fluid mx-auto" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" height="300" width="300" layout='fixed' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
