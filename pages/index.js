import Layout from '../components/MyLayout';
import Header from '../components/Header';
import Link from 'next/link';

export default function Blog() {
  return (
    <Layout>
      <div className="container">
        <div className="info">
          <img className="profile-pic" src='/me.png'/>
          <div>
            Jack Diamond <br/>
            Full Stack Software Engineering Intern
          </div>
          <div className="logos">
            <Link href="https://www.linkedin.com/in/jack-diamond-8144b6179/">
              <a target="_blank">
                <img src='/linkedin-logo.png'/>
              </a>
            </Link>
            <Link href="https://www.github.com/jack-diamond">
              <a target="_blank">
                <img src='/github-logo.png'/>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 90vh;
          background: white;
          display: flex;
          justify-content: center;
        }

        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .info .profile-pic {
          border-radius: 50%;
          height: 20rem;
          width: 20rem;
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .info div {
          font-family: Sans-Serif;
          font-weight: bold;
          font-size: 18px;
          line-height: 1.5rem;

          text-align: center;
          margin-top: 15px;
        }

        .logos {
          margin-top: 5px;
          display: flex;
          flex-direction: column;
        }

        .logos img {
          height: 3rem;
          width: 3rem;
        }

        h1,
        a {
          font-family: 'Arial';
        }
      `}</style>
    </Layout>
  );
}
